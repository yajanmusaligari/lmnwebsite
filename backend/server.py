from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="LMN Infra API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    material_name: Optional[str] = None
    quantity: Optional[str] = None
    service_type: str  # materials, construction, properties, bulk, other
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class QuoteRequestCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    material_name: Optional[str] = None
    quantity: Optional[str] = None
    service_type: str
    message: Optional[str] = None


class ContactInquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    service: str
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ContactInquiryCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    service: str
    message: Optional[str] = None


class CostEstimate(BaseModel):
    sqft: int
    package: str  # basic, classic, premium
    rate_per_sqft: int
    total_cost: int


# API Routes
@api_router.get("/")
async def root():
    return {
        "message": "Welcome to LMN Infra API",
        "company": "LMN Infra Projects Pvt Ltd",
        "tagline": "Build Smarter. Build Faster. Build with LMN."
    }


@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "LMN Infra API"}


# Quote Requests
@api_router.post("/quotes", response_model=QuoteRequest)
async def create_quote_request(input: QuoteRequestCreate):
    """Submit a quote request for materials or services"""
    quote_obj = QuoteRequest(**input.model_dump())
    
    doc = quote_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.quote_requests.insert_one(doc)
    return quote_obj


@api_router.get("/quotes", response_model=List[QuoteRequest])
async def get_quote_requests():
    """Get all quote requests"""
    quotes = await db.quote_requests.find({}, {"_id": 0}).to_list(1000)
    
    for quote in quotes:
        if isinstance(quote.get('created_at'), str):
            quote['created_at'] = datetime.fromisoformat(quote['created_at'])
    
    return quotes


# Contact Inquiries
@api_router.post("/contact", response_model=ContactInquiry)
async def create_contact_inquiry(input: ContactInquiryCreate):
    """Submit a contact inquiry"""
    contact_obj = ContactInquiry(**input.model_dump())
    
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contact_inquiries.insert_one(doc)
    return contact_obj


@api_router.get("/contact", response_model=List[ContactInquiry])
async def get_contact_inquiries():
    """Get all contact inquiries"""
    inquiries = await db.contact_inquiries.find({}, {"_id": 0}).to_list(1000)
    
    for inquiry in inquiries:
        if isinstance(inquiry.get('created_at'), str):
            inquiry['created_at'] = datetime.fromisoformat(inquiry['created_at'])
    
    return inquiries


# Cost Estimator
@api_router.post("/estimate", response_model=CostEstimate)
async def calculate_cost_estimate(sqft: int, package: str):
    """Calculate construction cost estimate"""
    rates = {
        "basic": 1850,
        "classic": 1950,
        "premium": 2150
    }
    
    if package not in rates:
        raise HTTPException(status_code=400, detail="Invalid package. Choose basic, classic, or premium")
    
    if sqft < 100 or sqft > 50000:
        raise HTTPException(status_code=400, detail="Square footage must be between 100 and 50,000")
    
    rate = rates[package]
    total = sqft * rate
    
    return CostEstimate(
        sqft=sqft,
        package=package,
        rate_per_sqft=rate,
        total_cost=total
    )


# Materials Catalog (Static data)
@api_router.get("/materials")
async def get_materials():
    """Get all available materials"""
    materials = [
        {"id": 1, "name": "UltraTech Cement (OPC 53)", "category": "civil", "unit": "Bag (50kg)", "brand": "UltraTech"},
        {"id": 2, "name": "ACC Cement (PPC)", "category": "civil", "unit": "Bag (50kg)", "brand": "ACC"},
        {"id": 3, "name": "TMT Steel Bars (Fe 500D)", "category": "civil", "unit": "Ton", "brand": "TATA Tiscon"},
        {"id": 4, "name": "JSW TMT Bars (Fe 550)", "category": "civil", "unit": "Ton", "brand": "JSW"},
        {"id": 5, "name": "Red Bricks (Standard)", "category": "civil", "unit": "1000 pcs", "brand": "Local"},
        {"id": 6, "name": "Fly Ash Bricks", "category": "civil", "unit": "1000 pcs", "brand": "Local"},
        {"id": 7, "name": "Havells Wires (1.5 sq mm)", "category": "electrical", "unit": "Coil (90m)", "brand": "Havells"},
        {"id": 8, "name": "Polycab Cables (4 sq mm)", "category": "electrical", "unit": "Coil (90m)", "brand": "Polycab"},
        {"id": 9, "name": "Astral CPVC Pipes (1 inch)", "category": "plumbing", "unit": "Pipe (3m)", "brand": "Astral"},
        {"id": 10, "name": "Supreme PVC Pipes (4 inch)", "category": "plumbing", "unit": "Pipe (6m)", "brand": "Supreme"},
        {"id": 11, "name": "Asian Paints Royale (20L)", "category": "finishing", "unit": "Bucket", "brand": "Asian Paints"},
        {"id": 12, "name": "Johnson Floor Tiles (2x2)", "category": "finishing", "unit": "Box (4 pcs)", "brand": "Johnson"},
    ]
    return {"materials": materials, "total": len(materials)}


# Properties Catalog (Static data)
@api_router.get("/properties")
async def get_properties():
    """Get all available properties"""
    properties = [
        {
            "id": 1,
            "name": "Shivantha Gardenia",
            "type": "2 BHK Mega Community",
            "location": "Near Isnapur, Pashamylaram Road, Hyderabad",
            "price": "₹4,999/sq.ft",
            "possession": "March 2026",
            "rera": "P01100003054",
            "highlights": ["18 Acres", "25+ Towers", "1,100 Flats", "100% Vastu Compliant"]
        },
        {
            "id": 2,
            "name": "Evon — Premium Residences",
            "type": "Premium Luxury Apartments",
            "location": "Hyderabad Prime Location",
            "price": "Starting ₹1.59 Cr",
            "possession": "Ready to Move",
            "highlights": ["Premium Tower", "Luxury Apartments", "Modern Amenities"]
        },
        {
            "id": 3,
            "name": "Krishna's Arena",
            "type": "Premium 4 BHK Green Edition",
            "location": "Masjid Banda, Kondapur, Hyderabad",
            "price": "Price on Request",
            "possession": "Under Construction",
            "highlights": ["4,000 Sq. Yards", "64 Corner Units", "Green Building"]
        }
    ]
    return {"properties": properties, "total": len(properties)}


# Delivery Zones
@api_router.get("/delivery-zones")
async def get_delivery_zones():
    """Get delivery zones and estimated times"""
    zones = [
        {"zone": "Zone 1", "areas": "Kondapur, Madhapur", "estimated_time": "~3 hours"},
        {"zone": "Zone 2", "areas": "Gachibowli, Financial District", "estimated_time": "~4 hours"},
        {"zone": "Zone 3", "areas": "LB Nagar, Uppal", "estimated_time": "~5 hours"},
        {"zone": "Zone 4", "areas": "Bachupally, Sangareddy", "estimated_time": "~6 hours"},
    ]
    return {"zones": zones, "delivery_promise": "4-6 hours"}


# Construction Packages
@api_router.get("/packages")
async def get_construction_packages():
    """Get construction packages and pricing"""
    packages = [
        {
            "id": "basic",
            "name": "Basic",
            "price_per_sqft": 1850,
            "focus": "Best for Rental / Budget",
            "warranty": "5 years",
            "quality_checks": 100,
            "highlights": [
                "Premium cement & steel",
                "Standard elevation design",
                "Basic interior finishing",
                "Vastu compliant layout"
            ]
        },
        {
            "id": "classic",
            "name": "Classic",
            "price_per_sqft": 1950,
            "focus": "Value for Money",
            "warranty": "7 years",
            "quality_checks": 200,
            "highlights": [
                "Custom elevation design",
                "Top-tier TMT bars (Fe 500D)",
                "Semi-furnished interiors",
                "Daily site photo updates",
                "Digital quality certificates"
            ]
        },
        {
            "id": "premium",
            "name": "Premium",
            "price_per_sqft": 2150,
            "focus": "Luxury & Durability",
            "warranty": "10 years",
            "quality_checks": 300,
            "highlights": [
                "Architect-designed elevation",
                "Imported premium materials",
                "Full interior design included",
                "300+ quality checks (LMN-QAS)",
                "Dedicated project manager",
                "Post-construction support"
            ]
        }
    ]
    return {"packages": packages}


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
