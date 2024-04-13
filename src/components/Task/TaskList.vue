<template>
  <section class="tasks">
    <task-item
      @taskDelete="$emit('taskDelete', task)"
      v-for="task in props.tasks"
      :key="task.id"
      :task="task"
    />
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import TaskItem from "@/components/Task/TaskItem";
interface Task {
  id: number;
}

const props = defineProps({
  tasks: {
    type: Array as () => Task[],
    required: true,
  },
});
</script>

<style scoped>
.tasks {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
