const express = require("express");
const postRoutes = require("./routes/posts");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Blog API Running Successfully"
  });
});

app.use("/api/posts", postRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});