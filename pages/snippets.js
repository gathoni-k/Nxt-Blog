import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import Navbar from "../components/Navbar/Navbar";
import Table from "../components/Table/Table";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../utils/mdx";

const Snippets= ({ posts}) => {
  const headings = ['title', 'description', 'category', 'date']
  return (
    <div className={styles.container}>
      <Navbar/>
      <Table theadData={headings} tbodyData={posts.data} />
    </div>
  );
};

export const getStaticProps = async () => {
  const data = getAllPosts("snippets");
  const snippetdata = []
  data.map(post => {
    snippetdata.push({slug: post.slug, item: [post.frontmatter.title, post.frontmatter.description, post.frontmatter.category, post.frontmatter.publishedOn]})
  })
  const posts = {
    data:snippetdata
  }
  return {
    props: { posts },
  };
};

export default Snippets;