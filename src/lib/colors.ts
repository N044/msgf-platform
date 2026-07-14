export const lightColors = {
  background: "#F8FAFC",
  surface: "#FFFFFF",
  surfaceMuted: "#F3F4F6",
  border: "#E5E7EB",
  text: "#111827",
  textMuted: "#6B7280",
  primary: "#0F3D3E",
  primaryHover: "#145A5B",
  secondary: "#1F6F6B",
  accent: "#F2C94C",
  success: "#2F855A",
  warning: "#C05621",
  danger: "#C53030",
} as const;

export const darkColors = {
  background: "#0F172A",
  surface: "#111827",
  surfaceMuted: "#1F2937",
  border: "#334155",
  text: "#F8FAFC",
  textMuted: "#CBD5E1",
  primary: "#8FD3C7",
  primaryHover: "#A7E5D8",
  secondary: "#5DAE9D",
  accent: "#F6D365",
  success: "#4ADE80",
  warning: "#FBBF24",
  danger: "#F87171",
} as const;

export const colors = {
  light: lightColors,
  dark: darkColors,
} as const;
