import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  size?: "sm" | "lg";
}

const ThemeToggle = ({
  isDarkMode,
  toggleDarkMode,
  size = "lg",
}: ThemeToggleProps) => {
  const { t } = useI18n();

  const config = {
    lg: {
      button: "w-16 h-8",
      indicator: "w-7 h-7",
      translate: "translate-x-8",
      icon: 14,
    },
    sm: {
      button: "w-14 h-7",
      indicator: "w-6 h-6",
      translate: "translate-x-7",
      icon: 12,
    },
  }[size];

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative ${config.button} rounded-full transition-all duration-500 border border-[var(--border-color)] flex-shrink-0 overflow-hidden group hover:shadow-lg hover:scale-105 ${
        isDarkMode
          ? "bg-gradient-to-r from-indigo-900 to-slate-800 hover:shadow-indigo-500/30"
          : "bg-gradient-to-r from-sky-100 to-amber-100 hover:shadow-amber-500/30"
      }`}
      aria-label={t.accessibility.toggle_theme}
      aria-pressed={isDarkMode}
      role="switch"
      aria-checked={isDarkMode}
    >
      <div
        className={`absolute top-0.5 left-0.5 ${config.indicator} rounded-full transition-all duration-500 ease-out flex items-center justify-center shadow-lg ${
          isDarkMode
            ? `${config.translate} bg-slate-700 text-amber-200`
            : "translate-x-0 bg-white text-amber-500"
        }`}
      >
        <div
          className={`transition-all duration-500 ${
            isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-100"
          }`}
        >
          {isDarkMode ? (
            <Moon size={config.icon} className="animate-scaleIn" />
          ) : (
            <Sun size={config.icon} className="animate-scaleIn" />
          )}
        </div>
      </div>

      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isDarkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute top-1 right-2 w-1 h-1 bg-white/60 rounded-full animate-pulse-soft" />
        <div
          className="absolute top-3 right-4 w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse-soft"
          style={{ animationDelay: "0.3s" }}
        />
        <div
          className="absolute bottom-2 right-3 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse-soft"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
