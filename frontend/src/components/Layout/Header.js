import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,Route,Routes} from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";


import Search from "./Search";
import "../../App.css";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const alert = useAlert();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully");
  };

  return (
    <>
      <nav className="navbar row sticky-top">
        {/* logo */}
        <div className="col-12 col-md-3">
          <Link to="/">
            <img src="/images/logo.webp" alt="logo" className="logo" />
          </Link>
        </div>

        {/* search bar and search icon */}

        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <Routes>
            <Route path ="/" element ={<Search />} />
            <Route path = "/eats/stores/search/:keyword" element ={<Search />} />
          </Routes>
        </div>

        {/* Login */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          {/* ml-> margin left (3unit from left) */}
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <span className="ml-3" id="cart">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
          {user ? (
            <div className="ml-4 dropdown d-inline">
              <Link
                to="/"
                className="btn dropdown-toggle text-white mr-4"
                type="button"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  ></img>
                </figure>

                <span>{user && user.name}</span>
              </Link>

              <div
                className="dropdown-menu"
                aria-labelledby="dropDownMenuButton"
              >
                <Link className="dropdown-item" to="/eats/orders/me/myOrders">
                  Orders
                </Link>

                <Link className="dropdown-item" to="/users/me">
                  Profile
                </Link>

                <Link
                  className="dropdown-item text-danger"
                  to="/"
                  onClick={logoutHandler}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link to="/users/login" className="btn ml-4" id="login_btn">
                Login
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;