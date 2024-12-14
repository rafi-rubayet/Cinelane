import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // 翻訳ファイルをpublic/localesフォルダから読み込む
  .use(LanguageDetector) // ユーザーの言語を検出
  .use(initReactI18next) // react-i18nextにi18nインスタンスを渡す
  .init({
    fallbackLng: 'en', // 言語が検出されない場合のデフォルト言語
    debug: false,
    lng: localStorage.getItem('language') || 'en', // localStorageの言語を優先。ない場合は英語を使用。
    supportedLngs: ['en', 'ja'], // アプリでサポートされている言語
    nonExplicitSupportedLngs: true, // ロケール特有のコードをシンプルなものにマッピング（例: 'en-US'を'en'に）

    interpolation: {
      escapeValue: false, // Reactはすでにエスケープ処理を行っているため、falseに設定
    },

    backend: {
      // 翻訳ファイルが格納されているパス
      loadPath: '/locales/{{lng}}/translation.json',
    },

    detection: {
      // 言語検出の順序を定義
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'], // 検出/選択された言語をlocalStorageに保存
    },
  });

export default i18n;
