import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const useLanguage = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  // 言語を切り替える関数
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  // 使用可能な言語のリストを取得（アプリでサポートする言語に応じてカスタマイズ）
  const availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'ja', label: 'Japanese' },
  ];

  // 言語選択をlocalStorageに保存
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  return {
    t, // 翻訳関数
    currentLanguage, // 現在の言語コード
    switchLanguage, // 言語を切り替える関数
    availableLanguages, // 使用可能な言語のリスト
  };
};

export default useLanguage;
