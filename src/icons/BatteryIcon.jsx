export default function BatteryIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="7" width="18" height="10" rx="2" ry="2" />
      <line x1="23" y1="11" x2="23" y2="13" />
      <rect x="3" y="9" width="13" height="6" fill="currentColor" stroke="none" />
    </svg>
  );
}