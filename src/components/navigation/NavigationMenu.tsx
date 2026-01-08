import { useI18n } from "@/contexts/I18nContext";

interface Section {
  id: string;
  label: string;
  number: string;
}

interface NavigationMenuProps {
  sections: Section[];
  activeSection: string;
  scrollProgress: Record<string, number>;
  onSectionClick: (sectionId: string) => void;
}

const NavigationMenu = ({
  sections,
  activeSection,
  scrollProgress,
  onSectionClick,
}: NavigationMenuProps) => {
  const { t } = useI18n();

  return (
    <nav
      className="space-y-6 flex-1 flex flex-col justify-center"
      aria-label={t.accessibility.main_navigation}
    >
      <ul className="space-y-6" role="list">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const progress = scrollProgress[section.id] ?? 0;

          return (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className={`text-left transition-all duration-300 w-full group opacity-0 animate-fadeInLeft ${
                  isActive
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                aria-current={isActive ? "true" : undefined}
                aria-label={t.accessibility.navigate_to.replace(
                  "{{section}}",
                  section.label
                )}
              >
                <div className="text-2xl font-normal lowercase tracking-normal mb-3 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--color-accent)]">
                  {section.label.toLowerCase()}
                </div>
                <div
                  className="relative w-full h-1 rounded-full bg-[var(--border-color)] overflow-hidden"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${t.accessibility.section_progress.replace(
                    "{{section}}",
                    section.label
                  )}: ${Math.round(progress)}%`}
                >
                  <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)]"
                    style={{ width: `${progress}%` }}
                  />
                  <div className="absolute top-0 left-0 h-full w-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
