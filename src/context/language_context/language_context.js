import {createContext} from 'react';
import {languageList} from '../../util/language';

export const languageContext = createContext({
  userLanguage: 'en',
  dictionary: languageList.en,
});