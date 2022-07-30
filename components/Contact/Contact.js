import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import Link from "next/dist/client/link";
import styles from "./contact.module.css"

export default function Contact() {
  return (
    <>
    <div className={styles.contact}>
        <Link href="/">
            <a className={styles.contacticon}><FaTwitter/></a>
        </Link>
        <Link href="/">
            <a className={styles.contacticon}><FaInstagram/></a>
        </Link>
        <Link href="/">
            <a className={styles.contacticon}><SiHashnode/></a>
        </Link>
        <Link href="/">
            <a className={styles.contacticon}><FaGithub/></a>
        </Link>
        <Link href="/">
            <a className={styles.contacttext}>Email me</a>
        </Link>
    </div>
    <hr className={styles.line}/>
    </>
    

  )
}
