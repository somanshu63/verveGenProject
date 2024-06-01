import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Header(props) {
  const history = useHistory();
  return (
    <header className="flex header items-start justify-between px-16 py-4">
      <NavLink className="decorationNone text-xl" to="/">
        CMS
      </NavLink>
      <ul className="flex items-center">
        {props?.user ? (
          <li
            onClick={() => {
              props.setUser();
              history.push("/login");
            }}
            className="text-base mr-8"
          >
            <NavLink className="decorationNone  uppercase" to="/login">
              logout
            </NavLink>
          </li>
        ) : (
          <li className="text-base mr-8">
            <NavLink className="decorationNone  uppercase" to="/login">
              login
            </NavLink>
          </li>
        )}
        {props?.user ? (
          <li className="text-base">
            <NavLink className="decorationNone  uppercase" to="/dashboard">
              dashboard
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </header>
  );
}
export default Header;
