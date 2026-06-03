const express = require("express");
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the first blog post content with more than twenty characters.",
    author: "Prasad",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// GET ALL POSTS WITH PAGINATION
router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  if (page < 1 || limit < 1) {
    return res.status(400).json({
      error: "Page and limit must be greater than 0"
    });
  }

  const startIndex = (page - 1) * limit;
  const paginatedPosts = posts.slice(startIndex, startIndex + limit);

  res.json({
    totalPosts: posts.length,
    totalPages: Math.ceil(posts.length / limit),
    currentPage: page,
    posts: paginatedPosts
  });
});

// GET SINGLE POST
router.get("/:id", (req, res) => {
  const post = posts.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!post) {
    return res.status(404).json({
      error: "Post not found"
    });
  }

  res.json(post);
});

// CREATE POST
router.post("/", (req, res) => {
  const { title, content, author } = req.body;

  if (!title || title.length < 5) {
    return res.status(400).json({
      error: "Title must be at least 5 characters"
    });
  }

  if (!content || content.length < 20) {
    return res.status(400).json({
      error: "Content must be at least 20 characters"
    });
  }

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    author,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

// UPDATE POST
router.put("/:id", (req, res) => {
  const post = posts.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!post) {
    return res.status(404).json({
      error: "Post not found"
    });
  }

  const { title, content, author } = req.body;

  if (title) post.title = title;
  if (content) post.content = content;
  if (author) post.author = author;

  post.updatedAt = new Date();

  res.json(post);
});

// DELETE POST
router.delete("/:id", (req, res) => {
  const index = posts.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      error: "Post not found"
    });
  }

  const deletedPost = posts.splice(index, 1);

  res.json({
    message: "Post deleted successfully",
    deletedPost
  });
});

module.exports = router;