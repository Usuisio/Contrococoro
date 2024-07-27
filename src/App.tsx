import { Helmet } from "react-helmet-async";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { LanguageWrapper } from "./components/LanguageWrapper";

function App() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Routes>
        <Route path="/repaircocoro" element={<Navigate to="/repaircocoro/ja" replace />} />
        <Route path="/repaircocoro/:lang" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to="/repaircocoro/ja" replace />} />
      </Routes>
    </>
  );
}

export default App;