import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from "react-icons/bs";
import styles from "../Navbar/navbar.module.css"

export default function ThemeToggler() {
      const [theme, settheme] = useState("dark")
      const handleToggle = () => {
        const newTheme = theme ==="light"?"dark":"light"
        settheme(newTheme)
        storeUserSetPreference(newTheme)
        document.body.dataset.theme = theme
      }
      const storeUserSetPreference = (pref) => {
        localStorage.setItem("theme", pref);
      };
      const getUserSetPreference = () => {
        return localStorage.getItem("theme");
      };
      const getMediaQueryPreference = () => {
        const mediaQuery = "(prefers-color-scheme: dark)";
        const mql = window.matchMedia(mediaQuery);
        const hasPreference = typeof mql.matches === "boolean";
        if (hasPreference) {
          return mql.matches ? "dark" : "light";
        }
      };
    useEffect(() => {
        const userSetPreference = getUserSetPreference();
        const mediaQueryPreference = getMediaQueryPreference();
        if(userSetPreference) {
            settheme(userSetPreference)
        } else {
            settheme(mediaQueryPreference)
        }
        document.body.dataset.theme = theme

    }, [theme])
  return (
    <>
        <ul className={styles.theme} onClick={handleToggle}>
            {theme=== "light"?<BsSun className={styles.themeicon}/>:<BsMoon className={styles.themeicon}/>}
        </ul>
    </>
  )
}
