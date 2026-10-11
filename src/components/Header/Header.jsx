import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/leaf-logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} alt="logo Brotes" />
          <span>Plantopía</span>
        </Link>
      </div>
      <Nav />
    </header>
  );
};
