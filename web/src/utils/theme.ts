import defaultDarkThemeContent from "../themes/default-dark.css?raw";
import paperThemeContent from "../themes/paper.css?raw";
import whitewallThemeContent from "../themes/whitewall.css?raw";

const VALID_THEMES = ["whitewall"] as const;
type ValidTheme = (typeof VALID_THEMES)[number];

const THEME_CONTENT: Record<ValidTheme, string | null> = {
  whitewall: whitewallThemeContent,
};

export interface ThemeOption {
  value: string;
  label: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  { value: "whitewall", label: "Whitewall" },
];

const validateTheme = (theme: string): ValidTheme => {
    return "whitewall"
};

/**
 * Detects system theme preference
 */
export const getSystemTheme = (): "whitewall" => {
    return "whitewall";
};

/**
 * Gets the theme that should be applied on initial load
 * Priority: stored user preference -> system preference -> default
 */
export const getInitialTheme = (): ValidTheme => {
  return getSystemTheme();
};

/**
 * Applies the theme early to prevent flash of wrong theme
 */
export const applyThemeEarly = (): void => {
  const theme = getInitialTheme();
  loadTheme(theme);
};

export const loadTheme = (themeName: string): void => {
  const validTheme = validateTheme(themeName);

  // Remove existing theme
  document.getElementById("workspace-theme")?.remove();

  // Apply theme (skip for default)

  const css = THEME_CONTENT[validTheme];
  if (css) {
    const style = document.createElement("style");
    style.id = "workspace-theme";
    style.textContent = css;
    document.head.appendChild(style);
  }
  

  // Set data attribute
  document.documentElement.setAttribute("data-theme", validTheme);

  // Store theme preference for future loads
  try {
    localStorage.setItem("memos-theme", validTheme);
  } catch {
    // localStorage might not be available
  }
};
