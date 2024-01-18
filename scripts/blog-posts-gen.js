// File: scripts/blog-posts-gen.js

// Import any necessary modules or functions
const fs = require('fs');
const path = require('path');

// Define a function that generates the blog data
function generateBlogData() {
  // Retrieve the necessary data from the existing files in the `data/blog` directory
  const blogDirectory = path.join(__dirname, '..', 'data', 'blog');
  const blogFiles = fs.readdirSync(blogDirectory);

  // Process the data as required
  const blogData = blogFiles.map((file) => {
    const filePath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // Process the file content as needed

    return {
      filename: file,
      content: fileContent,
    };
  });

  // Generate the desired output format for the blog data
  const generatedData = {
    blogs: blogData,
  };

  return generatedData;
}

// Call the function to generate the blog data
const generatedBlogData = generateBlogData();

// Export the generated blog data
module.exports = generatedBlogData;
