import { I18nProvider } from "@/contexts/I18nContext";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import MainLayout from "@/components/layouts/MainLayout";

export default function App() {
  return (
    <I18nProvider defaultLanguage="fr">
      <DarkModeProvider>
        <MainLayout />
      </DarkModeProvider>
    </I18nProvider>
  );
}
