import {useState} from 'react';
import './ThemeBtn.css';

import {useTheme} from '../../hooks/useTheme';

const ThemeBtn = () => {
  const {currentTheme,themeChange} = useTheme();
  return <input type="checkbox" name="" checked={currentTheme == "light" ? true : false} onChange={themeChange} />
}

export default ThemeBtn;