import { Helmet } from "react-helmet-async";
import "./App.css";
import { GameView } from "./components/GameView";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();


  const changeLanguage = (lng:string) => {
    navigate(`/${lng}`);

    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
      <Helmet>
        <html lang={lang} />
        <title>{t("title")}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="これは日本語のReactページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
    <Routes>
      <Route path="/:lang" element={<GameView />} />
      <Route path="*" element={<Navigate to="/ja" replace />} />
    </Routes>
    </>
  );
}

export default App;

