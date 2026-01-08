import { useI18n } from "@/contexts/I18nContext";
import { useDarkMode } from "@/contexts/DarkModeContext";
import ThemeToggle from "@/components/custom/ThemeToggle";

const MobileHeader = () => {
  const { t } = useI18n();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="lg:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 p-4 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/95 backdrop-blur-lg opacity-0 animate-fadeInDown">
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1 min-w-0">
            <h1
              className="text-3xl font-bold leading-tight whitespace-nowrap text-[var(--text-primary)] opacity-0 animate-fadeInLeft"
              style={{ animationDelay: "0.1s" }}
            >
              {t.layout.name}
            </h1>
            <p
              className="text-base text-[var(--text-secondary)] opacity-0 animate-fadeInLeft"
              style={{ animationDelay: "0.2s" }}
            >
              {t.ui.fullstack_developer}
            </p>
          </div>

          <div
            className="flex items-center opacity-0 animate-scaleIn"
            style={{ animationDelay: "0.3s" }}
          >
            <ThemeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
