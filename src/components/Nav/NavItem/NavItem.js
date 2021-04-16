import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = ({ url, children, exact }) => {
  return (
    <li className={classes.NavItem}>
           <NavLink to={url} activeClassName={classes.active} exact>{children}</NavLink>
    </li>
  );
}

export default NavItem;