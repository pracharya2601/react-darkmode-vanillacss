import{ useContext, useEffect } from 'react';
import { languageOptions } from '../../util/language';

import {languageContext} from '../../context/language_context/language_context';
import {Txt} from "../../context/language_context/LanguageState";

const LanguageChangeBtn = () => {
  
  const { userLanguage, languageChange, dictionary } = useContext(languageContext);
  const handleLanguageChange = e => languageChange(e.target.value);
    useEffect(() => {
      let defaultLanguage = window.localStorage.getItem('user-lang');
      if (!defaultLanguage) {
        defaultLanguage = window.navigator.language.substring(0, 2);
      }
      languageChange(defaultLanguage);
    }, [languageChange]);

  return (
    <>
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name])=> (
        <option key={id} value={id}>{name}</option>
      ))}
    </select>
    <p><Txt txt="name" /></p>
      <p>{dictionary.navbar.about}</p>
    </>
  )

}

export default LanguageChangeBtn;