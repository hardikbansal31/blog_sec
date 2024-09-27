const express = require('express');
const { createPool } = require('mysql');
const app = express();
const port = 9001;
const cors = require('cors');
app.use(cors());

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "your_password",
    database: "hardik",
    connectionLimit: 10
});

app.get('/api/blogs', (req, res) => {
    pool.query(`INSERT INTO blogs (title, content) values (${title}, ${content})`, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`server running on localhost ${port}`);
});
