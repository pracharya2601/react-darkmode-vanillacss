import "./App.css";

import {langTypeSelection} from './util/content';
import {useLanguage} from './hooks/useLanguage';
import {useTheme} from './hooks/useTheme';



//navbar
import Navbar from './components/navbar/Navbar';


import {LanguageState} from './context/language_context/LanguageState';

//conponent
import LanguageChangeBtn from './components/languagebtn/LanguageChangeBtn';
const App = () => {
  const {currentTheme} = useTheme();
  const {language, content, changeLanguage} = useLanguage();
  if(!content) {
    return <h1>Loading...</h1>
  }
  return (
    <LanguageState>
      <LanguageChangeBtn />
    </LanguageState>
  );
};

const Button = () => {
  const {currentTheme, themeChange} = useTheme();
  return (
    <div>
    <button onClick={themeChange}>
      {currentTheme}
    </button>
    </div>

  )
}

export default App;

