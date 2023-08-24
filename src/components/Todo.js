import React, { useState } from "react";
import {
  AppBar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  List,
  ListItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: "20px" }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleTaskChange}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={addTask}
        >
          Add
        </Button>
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <Typography
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  flex: 1,
                }}
              >
                {task.text}
              </Typography>
              <Button color="secondary" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}

export default TodoApp;
