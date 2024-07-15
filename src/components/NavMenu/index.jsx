import { useEffect, useId } from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import styles from './NavMenu.module.scss';

const NavMenu = (props) => {
  const {
    stateMenu: [isMenuOpen, setIsMenuOpen],
  } = props;
  const classNames = cx(styles.nav, {
    [styles.openMenu]: isMenuOpen,
  });
  const idNav = useId();
  useEffect(() => {
    const handleClickWindow = ({ target }) => {
      if (target !== document.getElementById(idNav).current) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickWindow);
    return () => {
      window.removeEventListener('click', handleClickWindow);
    };
  }, [isMenuOpen, idNav, setIsMenuOpen]);
  return (
    <nav className={classNames} id={idNav}>
      <CloseIcon
        className={styles.close}
        onClick={() => setIsMenuOpen(false)}
      />
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/coords">coords</NavLink>
        </li>
        <li>
          <NavLink to="/books">books</NavLink>
        </li>
        <li>
          <NavLink to="/events">events</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
