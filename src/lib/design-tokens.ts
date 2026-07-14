export const colors = {
  brand: {
    primary: "#0F3D3E",
    secondary: "#1F6F6B",
    accent: "#F2C94C",
  },
  neutral: {
    50: "#F8FAFC",
    100: "#F3F4F6",
    500: "#6B7280",
    900: "#111827",
  },
  background: "#F8FAFC",
  surface: "#FFFFFF",
  text: "#111827",
  textMuted: "#6B7280",
  border: "#E5E7EB",
} as const;

export const typography = {
  fontFamily: {
    sans: "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },
} as const;

export const borderRadius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
} as const;

export const radius = borderRadius;

export const shadows = {
  sm: "0 1px 2px rgba(15, 61, 62, 0.08)",
  md: "0 4px 12px rgba(15, 61, 62, 0.12)",
  lg: "0 12px 30px rgba(15, 61, 62, 0.16)",
} as const;

export const containerWidth = {
  sm: "36rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
} as const;

export const spacingScale = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  6: "1.5rem",
  8: "2rem",
  12: "3rem",
  16: "4rem",
  24: "6rem",
} as const;

export const spacing = spacingScale;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  overlay: 1100,
  modal: 1200,
} as const;

export const animation = {
  duration: "200ms",
  easing: "ease-out",
} as const;

export const designTokens = {
  colors,
  typography,
  borderRadius,
  shadows,
  containerWidth,
  spacingScale,
  breakpoints,
} as const;
