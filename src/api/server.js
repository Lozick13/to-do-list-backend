const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

let tasks = [{ id: 1, title: "Task", mark: "Mark", date: "01-01-1999" }];

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.status(201).json({ message: "Задача успешно создана" });
});

app.get("/tasks", (req, res) => {
  res.status(200).json({ tasks });
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Задача успешно удалена" });
  } else {
    res.status(404).json({ message: "Задача не найдена" });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
