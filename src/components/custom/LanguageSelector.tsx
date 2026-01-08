import { useState } from "react";
import { type Language, useI18n } from "@/contexts/I18nContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface LanguageSelectorProps {
  size?: "sm" | "lg";
  variant?: "toggle" | "dropdown" | "select";
}

const LanguageSelector = ({
  size = "lg",
  variant = "toggle",
}: LanguageSelectorProps) => {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const languages: {
    code: Language;
    label: string;
    flag: string;
    shortLabel: string;
  }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷", shortLabel: "FR" },
    { code: "en", label: "English", flag: "🇺🇸", shortLabel: "EN" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) ?? languages[0];
  const otherLanguage =
    languages.find((lang) => lang.code !== language) ?? languages[1];

  const sizeConfig = {
    lg: {
      toggle: "h-8 text-sm",
      dropdown: "text-sm px-3 py-2",
      icon: "text-base",
    },
    sm: {
      toggle: "h-7 text-xs",
      dropdown: "text-xs px-2 py-1.5",
      icon: "text-sm",
    },
  };

  const config = sizeConfig[size];

  if (variant === "toggle") {
    return (
      <button
        onClick={() => setLanguage(otherLanguage.code)}
        className={`${config.toggle} px-4 relative rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30`}
        aria-label={`Switch to ${otherLanguage.label}`}
      >
        <span className={config.icon}>{currentLanguage.flag}</span>
        <span className="font-medium text-[var(--text-primary)]">
          {currentLanguage.shortLabel}
        </span>
      </button>
    );
  }

  if (variant === "select") {
    return (
      <div className="relative w-full">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="w-full appearance-none bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl px-4 py-3 text-[var(--text-primary)] text-sm font-medium transition-all duration-300 cursor-pointer hover:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30"
          aria-label="Select language"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)]" />
        </div>
      </div>
    );
  }

  // Dropdown variant using shadcn
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`${config.dropdown} rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-primary)] transition-all duration-300 cursor-pointer hover:border-[var(--color-accent)] hover:shadow-md flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-opacity-30`}
          aria-label="Select language"
        >
          <span className={config.icon}>{currentLanguage.flag}</span>
          <span className="font-medium">{currentLanguage.shortLabel}</span>
          <ChevronDown
            className={`w-3 h-3 text-[var(--text-tertiary)] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[var(--bg-elevated)] border border-[var(--border-color)] rounded-xl shadow-xl overflow-hidden min-w-[120px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-4 py-3 cursor-pointer flex items-center gap-3 ${
              lang.code === language
                ? "bg-[var(--color-accent)] bg-opacity-10 text-[var(--color-accent)]"
                : "text-[var(--text-primary)]"
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="font-medium">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
