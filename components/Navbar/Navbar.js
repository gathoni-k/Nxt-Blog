import styles from "./navbar.module.css"
import { BsMoon, BsSun } from "react-icons/bs";
import HamburgerMenu from "./Hamburger";
import { useEffect, useState } from "react";
import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
export default function Navbar() {
    const [open, setopen] = useState(false)
    
    const handleClick = () => {
        setopen(!open);
    }
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.menuicon} onClick={handleClick}>
                <HamburgerMenu  isOpen={open} menuClicked={handleClick} width={14} height={8} strokeWidth={1.3} />
            </div>
            <ul className={styles.menuitems}>
                <ActiveLink activeClassName={styles.active} href="/" passHref>
                    <a className={styles.linkitems}>Home</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/posts" passHref>
                    <a className={styles.linkitems}>Posts</a>
                </ActiveLink>
                <ActiveLink activeClassName={styles.active} href="/snippets" passHref>
                    <a className={styles.linkitems}>Snippets</a>
                </ActiveLink>
            </ul>
            <ThemeToggler/>
        </div>
        <div className={open?styles.sidenav:styles.sidenavClosed}>
        <ul className={styles.sideitems}>
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
        
        </div>
    </>
    
  )
}
