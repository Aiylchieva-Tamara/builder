import classes from "./Logo.module.css";
import logo from "../../images/akvarium.jpg";

const Logo = () => {
  return (
    <div className = {classes.Logo}>
        <img src={logo} alt="Logo of the Pizza project"/>
        Acvarium
    </div>
  )
}

export default Logo;