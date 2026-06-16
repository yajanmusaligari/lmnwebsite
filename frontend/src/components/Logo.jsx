// LMN — Leading Materials Network.
// Real logo crops from the brand pack. mix-blend-lighten makes the near-black
// logo background vanish over any dark surface for a seamless lockup.
export const Logo = ({ className = '', showIcon = true }) => (
  <span data-testid="brand-logo" className={`flex items-center gap-2 ${className}`}>
    {showIcon && (
      <img
        src="/brand/lmn-icon.png"
        alt="LMN"
        className="h-9 w-auto mix-blend-lighten select-none"
        draggable="false"
      />
    )}
    <img
      src="/brand/lmn-wordmark.png"
      alt="LMN — Leading Materials Network"
      className="h-6 md:h-7 w-auto mix-blend-lighten select-none"
      draggable="false"
    />
  </span>
);

export default Logo;
