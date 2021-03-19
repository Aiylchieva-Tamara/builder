import classes from "./Logo.module.css";
import logo from "../../images/akvarium.jpg";

const Logo = () => {
  return (
    <div className = {classes.Logo}>
        <img src={logo} alt="akvarium"/>
        Acvarium
    </div>
  )
}

export default Logo;