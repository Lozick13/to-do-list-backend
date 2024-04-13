<template>
  <div class="to-do-list">
    <HeaderToDoList></HeaderToDoList>
    <main class="main">
      <TaskList :tasks="toDoData" @taskDelete="deleteTask"></TaskList>
    </main>
    <AddTaskBlock @addTask="createTask"></AddTaskBlock>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import HeaderToDoList from "@/components/HeaderToDoList.vue";
import TaskList from "@/components/Task/TaskList.vue";
import AddTaskBlock from "@/components/AddTask/AddTaskBlock.vue";

axios.defaults.baseURL = "http://localhost:8080";

interface Task {
  id: number;
  title: string;
  mark: string;
  date: string;
}

const toDoData = ref<Task[]>([]);

axios
  .get("/tasks")
  .then(response => {
    toDoData.value = response.data.tasks;
  })
  .catch(error => {
    console.error("Ошибка при получении списка задач:", error.message);
  });

const deleteTask = (task: Task) => {
  axios
    .delete(`/tasks/${task.id}`)
    .then(response => {
      toDoData.value = toDoData.value.filter(el => el !== task);
    })
    .catch(error => {
      console.error("Ошибка при удалении задачи:", error);
    });
};

const createTask = (task: Task) => {
  axios
    .post("/tasks", { task })
    .then(response => {
      toDoData.value.push(task);
    })
    .catch(error => {
      console.error("Ошибка при создании задачи:", error);
    });
};
</script>

<style>
* {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.to-do-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main {
  padding: 50px 0;
}
</style>
