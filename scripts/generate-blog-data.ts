import fs from 'fs';
import path from 'path';

function generateBlogData() {
  const blogDir = path.join(__dirname, '../data/blog');
  const outputFilePath = path.join(__dirname, '../data/blogData.json');

  const blogFiles = fs.readdirSync(blogDir);
  const blogData = blogFiles.map(file => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return {
      title: file.replace('.mdx', ''),
      content: fileContent
    };
  });

  fs.writeFileSync(outputFilePath, JSON.stringify(blogData, null, 2));
}

generateBlogData();
