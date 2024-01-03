import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogPostsDirectory = path.join(process.cwd(), 'data/blog');

function getBlogPosts() {
  const fileNames = fs.readdirSync(blogPostsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(blogPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...data
    };
  });

  return allPostsData;
}

export { getBlogPosts };
