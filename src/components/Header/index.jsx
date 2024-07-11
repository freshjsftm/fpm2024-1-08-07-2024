import { useContext, useState, useCallback, useMemo } from 'react';
import cx from 'classnames';
import { LightMode, DarkMode } from '@mui/icons-material';
import styles from './Header.module.scss';
import { UserContext, ThemeContext } from '../../contexts';
import NavMenu from '../NavMenu';
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

function calcPower(n) {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return sum ** n;
}

const Header = () => {
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
  const handleLogValue = useCallback(() => {
    console.log(text);
  }, [text]);

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });

  const showPower = useMemo(() => calcPower(text.length), [text]);

  return (
    <header className={classNames}>
      <h2>{showPower}</h2>
      <NavMenu />
      <span onClick={handleTheme}>
        {isLightTheme ? <DarkMode /> : <LightMode />}
      </span>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
      <input value={text} onChange={handleInput} />
      <button onClick={handleLogValue}>log value</button>
    </header>
  );
};

export default Header;
