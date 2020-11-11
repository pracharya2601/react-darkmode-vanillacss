import "./App.css";

import {langTypeSelection} from './util/content';
import {useLanguage} from './hooks/useLanguage';
import {useTheme} from './hooks/useTheme';



//navbar
import Navbar from './components/navbar/Navbar';

const App = () => {
  const {currentTheme} = useTheme();
  const {language, content, changeLanguage} = useLanguage();
  if(!content) {
    return <h1>Loading...</h1>
  }
  
  return (
    <>
      <Navbar navbar={content.navbar}/>
      <h1>{currentTheme}</h1>
      <h1>{content.langType}</h1>
      <div>
        <select id="language" value={language} onChange={(event) => changeLanguage(event.target.value)}>
          {langTypeSelection.map((lg, index) => (
            <option key={index} value={lg.name}>{lg.langType}</option>
          ))}
        </select>
      </div>
      <Button />
    </>
  );
};

const Button = () => {
  const {currentTheme, themeChange} = useTheme();
  return (
    <button onClick={themeChange}>
      {currentTheme}
    </button>
  )
}

export default App;

