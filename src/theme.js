import { createContext, useState, useCallback, useMemo } from "react";

// 1. Standardized Theme Tokens (Added '#' for CSS compatibility)
const THEME_PALETTE = {
  dark: {
    main: "#0f172a",
    secondary: "#5fb3c9",
    btnClr: "#f5ee9e",
    borderClr: "#fbbf24",
    errorClr: "#ef4444",
    textPrim: "#f8fafc",
  },
  light: {
    main: "#2d728f",
    secondary: "#3b8ea5",
    btnClr: "#f5ee9e",
    borderClr: "#f49e4c",
    errorClr: "#ab3428",
    textPrim: "#000000",
  },
};

// 2. Context with a clear interface
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  theme: THEME_PALETTE.light,
});

export const useThemeManager = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Use useCallback for functions passed through context
  // to prevent unnecessary re-renders of consuming components.
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  // Derived state: Calculating the theme object based on isDarkMode.
  // We only memoize this because it might be passed to many children.
  const theme = useMemo(
    () => (isDarkMode ? THEME_PALETTE.dark : THEME_PALETTE.light),
    [isDarkMode],
  );

  return { theme, isDarkMode, toggleTheme };
};
