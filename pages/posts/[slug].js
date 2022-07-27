import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar"
const Post = ({ code, frontmatter }) => {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.post}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <span className={styles.date}>Mary Gathoni / June 13, 2022</span>
          <p className={styles.category}>[{frontmatter.category}]</p>
          <Component />
      </div>
    
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;