import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";

export const ROOT = process.cwd();

export const getPath = (folder) => {
    return path.join(process.cwd(), `content/${folder}`);
}

export const getFileContent = (filename, folder) => {
    const POSTS_PATH = getPath(folder)
    return fs.readFileSync(path.join(POSTS_PATH, filename), "utf8");
};

// Compiles mdx source to html
const getCompiledMDX = async (content) => {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }
  // Add your remark and rehype plugins here
  const remarkPlugins = [];
  const rehypePlugins = [];

  try {
    return await bundleMDX({source: content, xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];
      return options;
    }});
  } catch (error) {
    throw new Error(error);
  }
};

export const getSinglePost = async (slug, folder) => {
  const source = getFileContent(`${slug}.mdx`, folder);
  const { code, frontmatter } = await getCompiledMDX(source);
  return {
    frontmatter,
    code,
  };
};

export const getAllPosts = (folder) => {
    const POSTS_PATH = getPath(folder)
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getFileContent(fileName, folder);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);
      return {
        frontmatter: data,
        slug: slug,
      };
    });
};
