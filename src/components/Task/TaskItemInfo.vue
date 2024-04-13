<template>
  <h2
    class="title"
    :style="{ 'text-decoration': props.isTitleDone ? 'line-through 5px' : 'none' }"
  >
    {{ props.task.title }}
  </h2>
  <div class="subinfo">
    <span class="mark"> {{ props.task.mark }}</span>
    <date-block :date="props.task?.date" />
  </div>
</template>

<script setup lang="ts">
import DateBlock from "@/components/UI/DateBlock.vue";
import { defineProps } from "vue";
interface Task {
  title: string;
  mark: string;
  date: string;
}

const props = defineProps({
  task: {
    type: Object as () => Task,
    required: true,
  },
  isTitleDone: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.title {
  font-size: 25px;
}
.subinfo {
  display: flex;
  gap: 30px;
  align-items: center;
}
.mark {
  font-size: 16px;
  padding: 5px 10px;
  color: white;
  border-radius: 5px;
  background: #000;
}
@media (max-width: 500px) {
  .subinfo {
    gap: 10px;
  }
}
</style>
