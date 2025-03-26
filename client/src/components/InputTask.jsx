import React, { useState } from "react";

const InputTask = () => {
    const [task, setTask] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h1 className="text-center mt-5">Todo List</h1>
            <form
                className="d-flex w-50 m-auto"
                onSubmit={onSubmitForm}
            >
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className="btn btn-success" type="submit">
                    Add
                </button>
            </form>
        </div>
    );
};

export default InputTask;
