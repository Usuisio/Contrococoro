
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { GameView } from "./GameView";

export function LanguageWrapper() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang).then(() => {
        console.log("Language changed successfully. New language:", i18n.language);
      }).catch((error) => {
        console.error("Error changing language:", error);
      });
    }
  }, [lang, i18n]);

  const changeLanguage = (lng: string) => {
    const newPath = `/repaircocoro/${lng}`;
    navigate(newPath);
  };

  return (
    <>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
      <GameView />
    </>
  );
}