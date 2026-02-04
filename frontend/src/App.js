import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import HomePage from "./pages/HomePage";
import MaterialsPage from "./pages/MaterialsPage";
import ConstructionPage from "./pages/ConstructionPage";
import PropertiesPage from "./pages/PropertiesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: '#001F3F',
              color: '#fff',
              border: '1px solid #FFD700',
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
