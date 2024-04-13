<template>
  <div class="add-task">
    <add-task-form v-if="toDoFormVisible.isFormVisible" @addTask="addTask" />

    <clear-button class="add-task__button" @click="toggleFormVisibility">
      <img src="@/assets/plus.png" alt="Добавление" />
    </clear-button>
  </div>
</template>

<script setup>
import AddTaskForm from "@/components/AddTask/AddTaskForm";
import ClearButton from "@/components/UI/ClearButton.vue";
import { ref, defineEmits } from "vue";

const emits = defineEmits(["addTask"]);

const toDoFormVisible = ref({
  isFormVisible: false,
});

const addTask = task => {
  toDoFormVisible.value.isFormVisible = false;
  emits("addTask", task);
};
const toggleFormVisibility = () => {
  toDoFormVisible.value.isFormVisible = !toDoFormVisible.value.isFormVisible;
};
</script>

<style scoped>
.add-task {
  position: fixed;
  bottom: 50px;
  right: 50px;
  display: flex;
  gap: 20px;
}
img {
  width: 100px;
}
button.add-task__button {
  opacity: 1;
}
button.add-task__button:hover {
  opacity: 0.7;
}
@media (max-width: 500px) {
  .add-task {
    bottom: 15px;
    right: 15px;
    flex-direction: column;
    align-items: flex-end;
  }
  img {
    width: 50px;
  }
}
</style>
