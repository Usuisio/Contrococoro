import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to React and i18next",
          title: "Repair the cocoro",
          sample1: "Amazing! It's the first time a human technician is doing maintenance for me!",
          sample2: "Currently in maintenance mode. If you want to interrupt, please use the console.",
          sample3: "Opening the abdominal hatch.",
          sample4: "Um... My stomach is still open...",

          consoleDeleteError: "Error: The DELETE command involves destructive changes! Inappropriate use is restricted.",
        }
      },
      ja: {
        translation: {
          welcome: "Reactとi18nextへようこそ",
          title: "リペア・ザ・ココロ",
          sample1: "すっごーい！\nニンゲンの技師さんにメンテナンスしてもらうの初めて！",
          sample2: "ただいま、メンテナンスモードです。\n中断する場合、コンソールから操作してください。",
          sample3: "腹部ハッチを開放します。",
          sample4: "あの……\nお腹、開けっぱなしなんだけど……？",

          consoleDeleteError: "Error: DELETEコマンドは破壊的変更を伴います！不適切な場面での使用は制限されています。",
        }
      }
    },
    lng: "ja", // 初期言語
    fallbackLng: "ja", // デフォルトの言語
    interpolation: {
      escapeValue: false // Reactはデフォルトでエスケープを行うため、ここではfalseに設定
    }
  });

export default i18n;