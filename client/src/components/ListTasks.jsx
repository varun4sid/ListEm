import React, { useEffect, useState } from "react";
import EditTask from "./EditTask";

const ListTasks = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const response = await fetch("http://localhost:3000/todos");
            const jsonData = await response.json();

            setTasks(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleteTask = async (id) => {
        try {
            const deleteTask = await fetch(
                `http://localhost:3000/todos/${id}`,
                {
                    method: "DELETE",
                }
            );

            setTasks(tasks.filter((task) => task.tid != id));
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <>
            <table className="table w-50 m-auto mt-5 text-center">
                <thead>
                    <tr key={tasks.tid}>
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.tid}>
                            <td>{task.task}</td>
                            <td>
                                <EditTask todo={task} />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTask(task.tid)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ListTasks;
