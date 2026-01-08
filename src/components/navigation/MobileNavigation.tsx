interface Section {
  id: string;
  label: string;
  number: string;
}

interface MobileNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const MobileNavigation = ({
  sections,
  activeSection,
  onSectionClick,
}: MobileNavigationProps) => {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-2 opacity-0 animate-slideUp"
      style={{ animationDelay: "0.3s" }}
    >
      <nav className="flex justify-between items-center max-w-md mx-auto p-1.5 rounded-2xl border border-[var(--border-color)] backdrop-blur-xl bg-[var(--bg-primary)]/90 shadow-2xl">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 min-w-0 flex-1 mx-0.5 overflow-hidden ${
              activeSection === section.id
                ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/30 scale-105"
                : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] active:scale-95"
            }`}
            style={{ animationDelay: `${0.4 + index * 0.05}s` }}
          >
            <span className="relative z-10 truncate text-center lowercase">
              {section.label}
            </span>
            {activeSection === section.id && (
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-hover)] animate-pulse-soft" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileNavigation;
