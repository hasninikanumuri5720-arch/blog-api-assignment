Blog API Assignment

📌 Description

This is a simple Blog API project built using Node.js and Express.js.
It allows users to perform basic CRUD operations like creating, reading, updating, and deleting blog posts.
This project is created as part of an assignment to understand backend development concepts and REST API design.


Technologies Used

Node.js
Express.js
JSON data (if not using DB)
Postman (for API testing)
Git & GitHub


Project Structure

blog-api/
│
├── package.json
├── server.js
│
├── middleware/
│   └── logger.js
│
└── routes/
    └── posts.js



📮 API Endpoints
Method	Route	            Description
GET	    /blogs	          Get all blogs
GET	    /blogs/:id	      Get single blog
POST  	/blogs	          Create blog
PUT	    /blogs/:id	      Update blog
DELETE	/blogs/:id        Delete blog   
