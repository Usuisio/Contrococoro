import { Helmet } from "react-helmet-async";
import "./App.css";
import { GameView } from "./components/GameView";

function App() {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>日本語のページ</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="これは日本語のReactページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <GameView />
    </>
  );
}

export default App;
