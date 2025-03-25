const express = require("express");
const path = require("path");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
        const { task } = req.body;
        const newTask = await pool.query(
            "INSERT INTO todo (task) VALUES($1);",
            [task]
        );
        res.json(newTask);
    } catch (error) {
        console.log(error);
    }
});

// launch server
PORT = 3000;
app.listen(PORT, () => {
    console.log(`Click here http://localhost:${PORT}`);
});
