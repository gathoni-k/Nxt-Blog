import Contact from "../components/Contact/Contact";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

const Home= () => {
  return (
    <div className={styles.container}>
      <Navbar/>
      <header>
        <h1 className={styles.header}>I build things with code.</h1>
      </header>
      <main className={styles.main}>
        <article className={styles.introduction}>
          <p>
            Hey, I&apos;m Gathoni, a software developer and technical writer focused on solving business problems with code.
          </p>
          <p>Some of the technologies I have worked with are:</p>
          <div className={styles.uvplist}>
          <ul>
            <li>JavaScript(ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
          </div>
          <p>
            I am currently creating this blog and documenting the process here.
          </p>
        </article>
        <article>
          <Contact/>
          <FeaturedProjects/>
        </article>
      </main>
     
    </div>
  );
};

export default Home;