import { useEffect, useState } from "react";
import api from "../services/api";
import "./TaskForm.css";

function TaskForm({ fetchTasks, editTask, setEditTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
      setStatus(editTask.status);
    }
  }, [editTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editTask) {
        await api.put(`/tasks/${editTask._id}`, {
          title,
          description,
          status,
        });

        alert("Task Updated Successfully");
      } else {
        await api.post("/tasks", {
          title,
          description,
          status,
        });

        alert("Task Added Successfully");
      }

      await fetchTasks();

      setTitle("");
      setDescription("");
      setStatus("Pending");

      setEditTask(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className ="form-container"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br />
      <br />

      <textarea
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <br />
      <br />

      <button type="submit">
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;