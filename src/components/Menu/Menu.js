import React, { useState, useRef, useEffect } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { data } from "../data";
import { Link } from "react-router-dom";
import { useGlobleContext } from "../../hooks/useGlobal";
import * as Scroll from "react-scroll";
import { ToastContainer, toast } from "react-toastify";

export default function Menu() {
  const {
    showMenu,
    setShowMenu,
    amount,
    signInWithGoogle,
    displayName,
    photoURL,
    signOutWithGoogle,
  } = useGlobleContext();
  const [menu] = useState(data.dataMenu);
  const [menuScroll, setMenuScroll] = useState(false);
  const mobileMenu = useRef(null);
  const [showInfo, setShowInfo] = useState(false);

  const loginToast = () => {
    if (!displayName) {
      toast.warn("🦄 You have to login firt!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const changeBackground = () => {
    if (window.scrollY > 200) {
      setMenuScroll(false);
    } else setMenuScroll(true);
  };
  window.addEventListener("scroll", changeBackground);

  useEffect(() => {
    let handler = (e) => {
      if (!mobileMenu.current.contains(e.target)) setShowMenu(false);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setShowMenu]);

  return (
    <header
      className={`l-header ${menuScroll === false && `scroll-header`}`}
      id="header"
    >
      <nav className="nav bd-grid">
        <div className="nav__toggle" id="nav-toggle">
          <BiMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>

        <Link to="/" className="nav__logo">
          BinhDZ
        </Link>

        <div
          className={`nav__menu ${showMenu && `show`}`}
          ref={mobileMenu}
          id="nav-menu"
        >
          {/* nếu showMenu === true thì thêm show không thì xóa show */}
          <ul className="nav__list">
            {menu.map((item, index) => {
              return (
                <li key={index} className="nav__item">
                  <Scroll.Link
                    className="nav__link"
                    to={item}
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                    // onClick={() => setclickValue(index)}
                  >
                    <Link
                      to={`${index < 4 ? `/` : `/products`}`}
                      onClick={() => setShowMenu(false)}
                    >
                      {item}
                    </Link>
                  </Scroll.Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav__shop">
          <Link to="/cart">
            <BiShoppingBag onClick={loginToast} />
          </Link>
          <div className="nav__shop-amount">
            <h3 className="nav__shop__amount-number">{amount}</h3>
          </div>
        </div>
        {displayName === "" ? (
          <button className="button__login" onClick={signInWithGoogle}>
            Login
          </button>
        ) : (
          <div className="nav__info">
            <img
              src={photoURL}
              alt={displayName}
              className="avatar"
              onClick={() => setShowInfo(!showInfo)}
            />
            {showInfo && (
              <div className="info__details" onClick={signOutWithGoogle}>
                <h4>Sign out</h4>
              </div>
            )}
          </div>
        )}
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </header>
  );
}
