const fs = require('fs');
const assert = require('assert');
const execSync = require('child_process').execSync;

describe('blog-posts:gen script', () => {
  beforeEach(() => {
    execSync('yarn blog-posts:gen');
  });

  it('should generate a JSON file', () => {
    assert(fs.existsSync('./data/blog-posts.json'));
  });

  it('should generate correct metadata for each blog post', () => {
    const generatedData = JSON.parse(fs.readFileSync('./data/blog-posts.json', 'utf-8'));
    const expectedData = [
      {
        title: 'Cryptography with Python using Fernet',
        date: '2022-01-01',
        tags: ['Python', 'Cryptography', 'Fernet'],
      },
      {
        title: 'The Random Library in Python',
        date: '2022-01-02',
        tags: ['Python', 'Random'],
      },
    ];

    assert.deepStrictEqual(generatedData, expectedData);
  });
});
