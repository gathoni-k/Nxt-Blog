import ArticleCard from "../components/ArticleCard/ArticleCard";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils/mdx";

const Home= ({ posts }) => {
  return (
    <div className={styles.container}>

        {posts.map((post, index) => (
          <ArticleCard title={post.frontmatter.title} link={`posts/${post.slug}`} description={post.frontmatter.description}/>
        ))}
     
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Home;