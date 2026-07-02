import React from "react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className = "", size = 24 }) => {
  const getPath = () => {
    switch (name) {
      case "health":
        // Heart + Clinical Stethoscope / cross aesthetic
        return (
          <>
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            <path d="M12 5v4m-2-2h4" />
          </>
        );
      case "food":
        // Utensils: Spoon and Fork elegant minimalism
        return (
          <>
            <path d="M6 3v13M10 3v13M8 3v13M8 16v5" />
            <path d="M18 8c0 3-1.5 5-4 5v8" />
            <path d="M14 3v5c0 1.5.5 3 2 3s2-1.5 2-3V3" />
          </>
        );
      case "building":
        // Building / House facade
        return (
          <>
            <path d="M3 21h18M5 21V7l7-4 7 4v14" />
            <path d="M9 9h2v2H9V9Zm4 0h2v2h-2V9Zm-4 4h2v2H9v-2Zm4 0h2v2h-2v-2Z" />
            <path d="M11 21v-4h2v4" />
          </>
        );
      case "fitness":
        // Dumbbell
        return (
          <>
            <path d="M6.5 6.5h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z" />
            <path d="M10 6.5v11M14 6.5v11" />
            <path d="M2 12h20" />
          </>
        );
      case "menu":
        // Clean Hamburger menu
        return <path d="M4 6h16M4 12h16M4 18h16" />;
      case "close":
        // Clean Close X
        return <path d="M18 6 6 18M6 6l12 12" />;
      case "arrow-right":
        // Arrow pointing right
        return <path d="M5 12h14M12 5l7 7-7 7" />;
      case "whatsapp":
        // WhatsApp talk bubble minimal
        return (
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
        );
      case "email":
        // Minimal letter envelope
        return (
          <>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </>
        );
      case "instagram":
        // Camera icon
        return (
          <>
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37ZM17.5 6.5h.01" />
          </>
        );
      case "calendar":
        // Calendar Grid
        return (
          <>
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </>
        );
      case "check":
        // Checkmark
        return <path d="M20 6 9 17l-5-5" />;
      case "star":
        // 5-point star
        return <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />;
      case "play":
        // Play triangle
        return <path d="m5 3 14 9-14 9V3z" />;
      case "pause":
        // Two parallel bars
        return <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />;
      default:
        // Fallback: simple dot
        return <circle cx="12" cy="12" r="10" />;
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
    >
      {getPath()}
    </svg>
  );
};
