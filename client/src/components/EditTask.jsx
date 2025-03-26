import React, { useState } from "react";

const EditTask = ({ todo }) => {
    const [task, setTask] = useState(todo.task);
    const updateTodo = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            const response = await fetch(
                `http://localhost:3000/todos/${todo.tid}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }
            );

            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }
    };

    const resetTodo = () => {
        setTask(todo.task);
    };

    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#modal${todo.tid}`}
                onClick={resetTodo}
            >
                Edit
            </button>

            <div className="modal" id={`modal${todo.tid}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Task</h4>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                onClick={resetTodo}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-dismiss="modal"
                                onClick={(e) => updateTodo(e)}
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={resetTodo}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditTask;
