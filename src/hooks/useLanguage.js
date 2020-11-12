import {useState, useEffect} from 'react';
import {lang, langType} from '../util/content';

export const useLanguage = () => {
  const [language, setLanguage] = useState('');
  const [content, setContent] = useState({});
  
  useEffect(() => {
    const localLanguage = window.localStorage.getItem('language');
    if(!localLanguage) {
      setLanguage("english");
      setContent((lang.filter(l => l.name === "english"))[0])
      window.localStorage.setItem('language', "english");
    } else {
      setLanguage(localLanguage);
      setContent((lang.filter(l => l.name === localLanguage))[0])
      window.localStorage.setItem('language', localLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
      setLanguage(lng);
      setContent((lang.filter(l => l.name === lng))[0])
      window.localStorage.setItem('language', lng);
  }

  return {
    language, content, changeLanguage
  };
}