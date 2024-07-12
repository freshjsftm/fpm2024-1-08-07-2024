import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return <nav>
    <ul>
      <li><NavLink to='/'>home</NavLink></li>
      <li><NavLink to='/coords'>coords</NavLink></li>
      <li><NavLink to='/books'>books</NavLink></li>
      <li><NavLink to='/events'>events</NavLink></li>
    </ul>
  </nav>;
};

export default NavMenu;
