import { useContext } from 'react';
import cx from 'classnames';
import { LightMode, DarkMode } from '@mui/icons-material';
import styles from './Header.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import NavMenu from '../NavMenu';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const Header = () => {
  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;
  const handleTheme = () => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT);
  };
  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });
  return (
    <header className={classNames}>
      <NavMenu />
      <span onClick={handleTheme}>
        {isLightTheme ? <DarkMode /> : <LightMode />}
      </span>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;
