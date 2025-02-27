import { useContext, useState, useCallback } from 'react';
import cx from 'classnames';
import { LightMode, DarkMode, Menu } from '@mui/icons-material';
import styles from './Header.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import NavMenu from '../NavMenu';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState('search');
  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;
  const handleTheme = useCallback(() => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT);
  }, [isLightTheme, setTheme]);
  const handleInput = useCallback(
    ({ target: { value } }) => {
      setText(value);
    },
    [setText]
  );

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });

  return (
    <header className={classNames}>
      <Menu
        className={styles.open}
        onClick={(event) => {
          event.stopPropagation();
          setIsMenuOpen(true);
        }}
      />
      <NavMenu stateMenu={[isMenuOpen, setIsMenuOpen]} />
      <span onClick={handleTheme}>
        {isLightTheme ? <DarkMode /> : <LightMode />}
      </span>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
      <input value={text} onChange={handleInput} />
    </header>
  );
};

export default Header;
