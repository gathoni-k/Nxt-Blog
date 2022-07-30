import ArticleCard from "../components/ArticleCard/ArticleCard";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils/mdx";

const Posts= ({ posts }) => {
  return (
    <div className={styles.container}>
      <Navbar/>
        {posts.map((post, index) => (
          <ArticleCard key={index} title={post.frontmatter.title} link={`posts/${post.slug}`} description={post.frontmatter.description}/>
        ))}
     
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts("posts");

  return {
    props: { posts },
  };
};

export default Posts;