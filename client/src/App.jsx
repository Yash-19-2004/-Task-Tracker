import { useEffect, useState } from "react";
import api from "./services/api";

import Navbar from "./components/Navbar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />

      <TaskForm
        fetchTasks={fetchTasks}
        editTask={editTask}
        setEditTask={setEditTask}
      />

      <TaskList
        tasks={tasks}
        fetchTasks={fetchTasks}
        setEditTask={setEditTask}
      />
    </>
  );
}

export default App;