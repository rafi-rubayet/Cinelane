import { useState, useContext } from "react";
import Flag from "react-world-flags";
import Moon from "./assets/icons/moon.svg";
import Sun from "./assets/icons/sun.svg";
import Ring from "./assets/ring.svg";
import ShoppingCart from "./assets/shopping-cart.svg";

import CartDetails from "./cine/CartDetails";

import { MovieContext, ThemeContext, LanguageContext } from "./context";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const { state, dispatch } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { currentLanguage, switchLanguage } = useContext(LanguageContext);

  const languageMap = {
    en: { label: "EN", flag: "us" },
    ja: { label: "JA", flag: "jp" },
  };

  function handleCartShow() {
    if (state.cartData.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }

  const handleToggle = () => {
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    switchLanguage(newLanguage);
  };

  const { label, flag } = languageMap[currentLanguage];

  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="/">
          <div className="flex space-x-3 items-center">
            <i className="pi pi-video text-primary" style={{ fontSize: "1.3rem" }}></i>
            <p className="text-xl text-primary font-bold tracking-wide">
              CineLane
            </p>
          </div>
        </a>

        <ul className="flex items-center space-x-5">
          {/* Ring Icon */}
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <i className="pi pi-bell text-primary" style={{ fontSize: "1.1rem" }}></i>
            </a>
          </li>

          {/* Language Selector */}
          <li>
            <div
              className="cursor-pointer flex items-center justify-center space-x-2 bg-primary/20 dark:bg-primary/[7%] p-2 rounded-lg"
              onClick={handleToggle}
            >
              <Flag code={flag} className="w-5 h-5" />
              <span className="text-sm text-primary font-semibold">
                {label}
              </span>
            </div>
          </li>

          {/* Theme Toggle */}
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode((darkMode) => !darkMode)}
            >
              { darkMode ? <i className="pi pi-sun text-primary" style={{ fontSize: "1.1rem" }}></i> : <i className="pi pi-moon text-primary" style={{ fontSize: "1rem" }}></i> }
            </a>
          </li>

          {/* Shopping Cart */}
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
              onClick={handleCartShow}
            >
              <i className="pi pi-shopping-cart text-primary" style={{ fontSize: "1.1rem" }}></i>
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-10px] right-[-10px] bg-[#12CF6F] text-white text-center text-sm leading-[15px] w-[18px] h-[18px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
