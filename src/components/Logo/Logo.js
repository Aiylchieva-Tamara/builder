import classes from "./Logo.module.css";
import logo from "../../images/aquariumfish.jpg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Aquarim project" />
      <div>Aquarium fish</div>
    </div>
  );
}

export default Logo;