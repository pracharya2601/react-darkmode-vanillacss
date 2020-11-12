import {useState, useEffect, useContext} from 'react';
import {languageContext} from './language_context';

import {languageList,languageOptions} from '../../util/language';

export const LanguageState = ({children}) => {
  const [userLanguage, setUserLanguage] = useState('en');

  useEffect(() => {
    let localLang = window.localStorage.getItem('user-lang');
    if(!localLang) {
      //local computer language
      localLang = window.navigator.language.substring(0, 2)
    } 
    setUserLanguage(localLang);
  }, [userLanguage])

  const provider = {
    userLanguage,
    dictionary: languageList[userLanguage],
    languageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
      window.localStorage.setItem('user-lang', newLanguage);
    }
  };

  return (
    <languageContext.Provider
      value={provider}
    >
      {children}
    </languageContext.Provider>
  )
}

export const Txt = ({txt}) => {
  const langContext = useContext(languageContext);

  return langContext.dictionary[txt] || txt;
}