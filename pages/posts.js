import ArticleCard from "../components/ArticleCard/ArticleCard";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { getAllPublished } from "../utils/mdx";

const Posts= ({ posts }) => {
  const published = posts.filter((post) => {
    return post.frontmatter.isPublished === true
  })
  return (
    <div className={styles.container}>
      <Navbar/>
        {published.map((post, index) => (
          <ArticleCard key={index} title={post.frontmatter.title} link={`posts/${post.slug}`} description={post.frontmatter.description}/>
        ))}
     
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPublished("posts");
  return {
    props: { posts },
  };
};

export default Posts;