const express = require('express');
const { createPool } = require('mysql');
const app = express();
const port = 9000;
const cors = require('cors');
app.use(cors());

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "hardik",
    connectionLimit: 10
})

app.get('/api/blogs/get', (req, res) => {
    pool.query(`SELECT * FROM blogs WHERE id = 3`, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`server running on localhost ${port}`);
});


app.get('/api/blogs/search', (req, res) => {
    const { title, auth } = req.query;
    if (!title) {
        return res.status(400).json({ error: "title not found" });
    }
    const q = `SELECT * FROM blogs WHERE (title) = (?)`;

    pool.query(q, [title], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'blog retrieved on search pg', blogID: result.insertId });
    });
});


app.get('/api/blogs/post', (req, res) => {
    const { title, content } = req.query;
    if (!title || !content) {
        return res.status(400).json({ error: "no title or query" });
    }
    const q = `INSERT INTO blogs (title, content) values (?, ?)`;

    pool.query(q, [title, content], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Blog added successfully!', blogID: result.insertId });
    });
});

app.listen(port, () => {
    console.log(`server running on localhost ${port}`);
});