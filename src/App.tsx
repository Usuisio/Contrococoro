import { Helmet } from "react-helmet-async";
import "./App.css";
import { useTranslation } from 'react-i18next';
import { GameView } from "./components/GameView";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/jpeg" href="/images/icon.jpg" />
      </Helmet>
      <GameView />
    </>
  );
}

export default App;