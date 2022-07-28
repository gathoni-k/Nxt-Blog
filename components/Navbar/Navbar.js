import styles from "./navbar.module.css"
import { BsMoon, BsSun } from "react-icons/bs";
import HamburgerMenu from "./Hamburger";
import { useState } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";
export default function Navbar() {
    const [open, setopen] = useState(false)
    const [theme, settheme] = useState("light")
    const handleClick = () => {
        setopen(!open);
    }
    const switchTheme = () => {
        
        settheme((theme == "dark")?"light":"dark")
    }
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.menuicon} onClick={handleClick}>
                <HamburgerMenu  isOpen={open} menuClicked={handleClick} width={14} height={8} strokeWidth={1.3} />
            </div>
            <ul className={styles.menuitems}>
            <ActiveLink activeClassName={styles.active} href="/" passHref>
                <a className={styles.sidelinks}>Home</a>
            </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts" passHref>
                <a className={styles.sidelinks}>Posts</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/snippets" passHref>
                <a className={styles.sidelinks}>Snippets</a>
                </ActiveLink>
            </ul>
            <ul className={styles.theme} onClick={switchTheme}>
                {theme== "light"?<BsSun className={styles.themeicon}/>:<BsMoon className={styles.themeicon}/>}
            </ul>
        </div>
        <div className={open?styles.sidenav:styles.sidenavClosed}>
        <ul className={styles.sideitems}>
                <Link href="/" passHref>
                    <a className={styles.sidelinks}>Home</a>
                </Link>
                <Link href="/" passHref>
                    <a className={styles.sidelinks}>Posts</a>
                </Link>
                <Link href="/" passHref>
                    <a className={styles.sidelinks}>Snippets</a>
                </Link>
            </ul>
        
        </div>
    </>
    
  )
}
