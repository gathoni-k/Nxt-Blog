import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../utils/mdx";
import styles from "../../styles/Home.module.css";
import Navbar from "../../components/Navbar/Navbar"
import CodeSnippet from "../../components/StaticCodeSnippet/CodeSnippet";
import { useMemo } from "react";
const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.post}>
          <h1 className={styles.title}>{frontmatter.title}</h1>
          <p className={styles.description}>{frontmatter.description}</p>
          <span className={styles.date}>Published{" "} {frontmatter.publishedOn} by {frontmatter.author}</span>
          <p className={styles.category}>[{frontmatter.category}]</p>
          <Component components={{
    pre: CodeSnippet,
  }} />
      </div>
    
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug, "posts");
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts("posts").map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;