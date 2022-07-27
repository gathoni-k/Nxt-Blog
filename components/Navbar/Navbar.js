import styles from "./navbar.module.css"
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsSun } from "react-icons/bs";
import HamburgerMenu from "./Hamburger";
import { useState } from "react";
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
                <li>Home</li>
                <li>Posts</li>
                <li>Snippets</li>
            </ul>
            <ul className={styles.theme}>
                <BsSun className={styles.themeicon}/>
            </ul>
        </div>
        <div className={open?styles.sidenav:styles.sidenavClosed}>
        <ul className={styles.sideitems}>
                <li>Home</li>
                <li>Posts</li>
                <li>Snippets</li>
            </ul>
        
        </div>
    </>
    
  )
}
