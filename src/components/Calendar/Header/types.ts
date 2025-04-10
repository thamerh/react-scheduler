export type HeaderProps = {
  zoom: number;
  topBarWidth: number;
  showThemeToggle?: boolean;
  toggleTheme?: () => void;
  dir: "ltr" | "rtl";
};
