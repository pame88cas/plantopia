import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useCart } from "../../context/CartContext";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to={"/"} end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            Carrito
            {totalItems > 0 && <span className="incart">{totalItems}</span>}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
