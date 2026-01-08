import { useDarkMode } from "@/contexts/DarkModeContext";
import { useI18n } from "@/contexts/I18nContext";
import SocialLinks from "@/components/custom/SocialLinks";
import ThemeToggle from "@/components/custom/ThemeToggle";
import LanguageSelector from "@/components/custom/LanguageSelector";
import NavigationMenu from "@/components/navigation/NavigationMenu";

interface Section {
  id: string;
  label: string;
  number: string;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  scrollProgress: Record<string, number>;
  onSectionClick: (sectionId: string) => void;
}

const Sidebar = ({
  sections,
  activeSection,
  scrollProgress,
  onSectionClick,
}: SidebarProps) => {
  const { t } = useI18n();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside className="hidden lg:flex w-1/2 fixed left-0 top-0 h-screen flex-col justify-between p-12 bg-[var(--bg-secondary)]">
      <div className="w-full max-w-md mx-auto flex flex-col justify-between h-full py-24">
        <div className="mb-16">
          <h1 className="text-5xl font-bold leading-tight whitespace-nowrap text-[var(--text-primary)] mb-3 opacity-0 animate-fadeInDown">
            {t.layout.name}
          </h1>

          <p className="text-lg text-[var(--text-secondary)] mb-4 opacity-0 animate-fadeInUp animate-stagger-1">
            {t.ui.fullstack_developer}
          </p>

          <div className="flex items-center opacity-0 animate-scaleIn animate-stagger-2">
            <ThemeToggle
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              size="lg"
            />
          </div>
        </div>

        <NavigationMenu
          sections={sections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
          onSectionClick={onSectionClick}
        />

        <div className="space-y-4">
          <div
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            <SocialLinks variant="desktop" />
          </div>

          <div
            className="max-w-40 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.7s" }}
          >
            <LanguageSelector size="lg" variant="select" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
