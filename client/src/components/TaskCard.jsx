import api from "../services/api";
import "./TaskCard.css";

function TaskCard({ task, fetchTasks, setEditTask }) {
  const handleDelete = async () => {
    try {
      await api.delete(`/tasks/${task._id}`);

      alert("Task Deleted Successfully");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="task-card">
    <h3>{task.title}</h3>

    <p>{task.description}</p>

    <p>{task.status}</p>

    <div className="btn-group">
      <button
        className="edit-btn"
        onClick={() => setEditTask(task)}
      >
        Edit
      </button>

      <button
        className="delete-btn"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  </div>
);

}

export default TaskCard;