import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex header items-start justify-between px-16 py-4">
      <a className="decorationNone text-xl" href="/">
        CMS
      </a>
      <ul className="flex items-center">
        <li className="text-base mr-8">
          <NavLink className="decorationNone  uppercase" to="/login">
            login
          </NavLink>
        </li>
        <li className="text-base">
          <NavLink className="decorationNone  uppercase" to="/dashboard">
            dashboard
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
