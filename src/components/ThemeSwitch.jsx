"use client";
import { Moon, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeSwitch({className}) {
  const { theme, setTheme } = useTheme();

  return (
    <Switch className={`${className}`}>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`w-12 h-7 cursor-pointer ${isSelected ? "bg-[var(--accent)]" : "bg-[var(--border-color)]"}`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Switch.Thumb
              className={`w-5 h-5 ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
            >
              <Switch.Icon>{isSelected ? <Moon /> : <Sun />}</Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
}
