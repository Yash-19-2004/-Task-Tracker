import TaskCard from "./TaskCard";
import "./TaskList.css";

function TaskList({ tasks, fetchTasks, setEditTask }) {
  return (
    <div  className="task-list">
      <h2>All Tasks</h2>

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditTask={setEditTask}
        />
      ))}
    </div>
  );
}

export default TaskList;