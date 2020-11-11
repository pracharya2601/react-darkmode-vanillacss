import {useState, useEffect} from 'react';
import {lightTheme, darkTheme} from '../util/theme';

const applyTheme = (nextTheme, cb) => {
  const theme = nextTheme === "light" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
  cb();
};


export const useTheme = () => {
  const [currentTheme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if(!localTheme) {
      const darkOs = window.matchMedia("prefers-color-schema").matches ? "light" : "dark";
      setTheme(darkOs);
      window.localStorage.setItem('theme', darkOs);
    } else {
      applyTheme(localTheme, () => setTheme(localTheme));
    }
  }, []);

  const themeChange = () => {
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme, () => setTheme(nextTheme));
    window.localStorage.setItem('theme', nextTheme);
  };
  return {
    currentTheme,
    themeChange
  };
}