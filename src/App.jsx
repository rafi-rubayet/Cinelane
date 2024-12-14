import { useState, useReducer } from "react";
import Page from "./Page";
import { MovieContext, ThemeContext, LanguageContext } from "./context";
import { initialState, cartReducer } from "./reducers/CartReducer";
import useLanguage from "./hooks/useLanguage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'primeicons/primeicons.css';
import "./i18n";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { t, currentLanguage, switchLanguage } = useLanguage();

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <LanguageContext.Provider value={{ t, currentLanguage, switchLanguage }}>
            <Page />
            <ToastContainer />
          </LanguageContext.Provider>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
