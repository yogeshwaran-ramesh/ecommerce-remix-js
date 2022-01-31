import { useContext } from "react";
import { Link } from "remix";
import { RemixLogo } from "~/assests/icons";
import AppContext from "~/store/AppContext";
const Navbar = () => {
  const value: any = useContext(AppContext);

  return (
    <header className="remix-app__header">
      <div className="remix-app__header-content" style={{ margin: "0 20px" }}>
        <Link to="/" title="Remix" className="remix-app__header-home-link">
          <RemixLogo />
        </Link>
        <nav aria-label="Main navigation" className="remix-app__header-nav">
          <ul>
            <li>
              <div>
                <span>{value.state.cart.length}</span>
                <Link to="/cart">Cart</Link>
              </div>
            </li>
            <li>
              <div>
                <span>{value.state.liked.length}</span>
                <Link to="/wishlist">Wishlist</Link>
              </div>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
