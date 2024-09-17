const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 35724;

// Create a MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Serve static files (like HTML)
app.use(express.static('public'));

// Route to fetch a blog post by its ID
app.get('/blog/:id', (req, res) => {
    const blogId = req.params.id;

    // SQL query to retrieve the blog by ID
    const sql = 'SELECT * FROM blogs WHERE id = ?';

    db.query(sql, [blogId], (err, result) => {
        if (err) {
            return res.status(500).send('Error retrieving blog from database');
        }

        if (result.length === 0) {
            return res.status(404).send('Blog not found');
        }

        const blog = result[0];

        // Send the blog data as JSON
        res.json(blog);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
