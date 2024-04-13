<template>
  <form @submit.prevent>
    <base-input v-model="toDoFormData.title" placeholder="Название задания" />
    <base-input v-model="toDoFormData.mark" class="mark" placeholder="Метка" />
    <base-input v-model="toDoFormData.date" class="date" type="date" />

    <clear-button @click="addTask" class="add">
      <img src="@/assets/enter.png" alt="Добавить" />
    </clear-button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, ref } from "vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import ClearButton from "@/components/UI/ClearButton.vue";

const emits = defineEmits(["addTask"]);

const toDoFormData = ref({
  title: "",
  mark: "",
  date: "",
  id: 0,
});

const addTask = () => {
  if (!toDoFormData.value.title && !toDoFormData.value.mark && !toDoFormData.value.date) {
    return;
  }
  toDoFormData.value.id = Date.now();

  emits("addTask", toDoFormData.value);
};
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 10px;
  background-color: #e5ffe6;
  height: 100px;
  border-radius: 16px;
  border: 2px solid #000;
}
img {
  width: 40px;
}
.mark {
  width: 120px;
}
.add {
  opacity: 1;
}
.add:hover {
  opacity: 0.7;
}
@media (max-width: 500px) {
  form {
    padding: 20px;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }
  .mark {
    width: auto;
  }
  .date {
    width: 100%;
    background: white;
  }
}
</style>
