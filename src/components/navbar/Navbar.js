import './Navbar.css';

import {useWindowDimension}  from '../../hooks/useWindowDimension';
import {Icons} from './icons/icons';

import ThemeBtn from '../colotThemeBtn/ThemeBtn';

const Navbar = ({navbar, currentTheme}) => {
  const {height, width} = useWindowDimension();
  if(!navbar) {
    return <h1>Loading...</h1>
  }
  return (
    <header className="navbar">
      <h3>{width > "550" ? navbar.home: "PA"}</h3>
      <nav>
        <li>{height} and {width}</li>
        <li>
          <Icons title={navbar.contact} type="contact"/>
        </li>
        <li>
          <Icons title={navbar.portfolio} type="portfolio"/>
        </li>
        <li>
          <Icons title={navbar.contact} type="about"/>
        </li>
        <li>
        <ThemeBtn/>
        </li>
          
      </nav>
    </header>
  )
}

export default Navbar;