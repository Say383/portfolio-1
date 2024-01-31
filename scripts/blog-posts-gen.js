// scripts/blog-posts-gen.js
const fs = require('fs');
const path = require('path');

function generateBlogPosts() {
  const blogDirectory = path.join(__dirname, '..', 'data', 'blog');
  const files = fs.readdirSync(blogDirectory);

  // Process each file and generate the necessary output
  const output = files.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Process the content as needed

    return {
      file,
      content,
      // Add any other necessary properties to the output
    };
  });

  return output;
}

module.exports = generateBlogPosts;
