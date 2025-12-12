import React from "react";

import { useTheme } from "../theme-provider";
import { MoonIcon } from "./ui/icons/moon";
import { SunIcon } from "./ui/icons/sun";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className="flex justify-between items-center p-3 w-full z-20">
        <div className="flex items-center">
          <div className="text-base text-[var(--primary)]">Julius Caezar</div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleThemeChange}
            className="p-2 rounded-md bg-transparent hover:bg-[var(--accent)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <MoonIcon className="text-[var(--muted-foreground)]" />
            ) : (
              <SunIcon className="text-[var(--muted-foreground)]" />
            )}
          </button>
        </div>
      </div>

      <hr className="border-t border-dotted relative w-[100svw] left-[50%] right-[50%] -translate-x-[50%]" />
    </div>
  );
}

export default Header;
