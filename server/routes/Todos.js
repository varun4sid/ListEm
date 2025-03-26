const Router = require("express");
const pool = require("../db");

const todosRouter = Router();

todosRouter.post("/", async (req, res) => {
    try {
        const { task } = req.body;
        const newTask = await pool.query(
            "INSERT INTO todo (task) VALUES($1) RETURNING *;",
            [task]
        );
        res.json(newTask);
    } catch (error) {
        console.log(error);
    }
});

todosRouter.get("/", async (req, res) => {
    try {
        const tasks = await pool.query("SELECT * FROM todo;");
        res.json(tasks.rows);
    } catch (error) {
        console.log(error);
    }
});

todosRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM todo WHERE tid = $1;", [
            id,
        ]);
        console.log(task.rows[0]);
        res.json(task.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

todosRouter.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        const updateTask = await pool.query(
            "UPDATE todo SET task = $1 WHERE tid = $2 RETURNING *;",
            [task, id]
        );
        res.json(updateTask.rows[0]);
    } catch (error) {
        console.log(error);
    }
});

todosRouter.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTask = await pool.query(
            "DELETE FROM todo WHERE tid = $1;",
            [id]
        );
        res.json("Todo was deleted!");
    } catch (error) {
        console.log(error);
    }
});

module.exports = todosRouter;
