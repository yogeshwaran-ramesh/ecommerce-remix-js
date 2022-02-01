import { useContext } from "react";
import { Link } from "remix";
import { CartIcon, HeartIcon, RemixLogo } from "~/assests/icons";
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
              <div style={{ position: "relative" }}>
                <div className="badge">
                  <span
                    className="flex flex-center"
                    style={{ fontSize: 11, color: "white", zIndex: 1 }}
                  >
                    {value.state.cartProducts.length}
                  </span>
                </div>
                <Link to="/cart">
                  <div className="icon">
                    <CartIcon />
                  </div>
                </Link>
              </div>
            </li>
            <li>
              <div style={{ position: "relative" }}>
                <div className="badge">
                  <span
                    className="flex flex-center"
                    style={{ fontSize: 11, color: "white", zIndex: 1 }}
                  >
                    {value.state.likedProducts.length}
                  </span>
                </div>

                <Link to="/wishlist">
                  <div className="icon">
                    <HeartIcon />
                  </div>
                </Link>
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
