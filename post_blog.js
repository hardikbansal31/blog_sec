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
});


