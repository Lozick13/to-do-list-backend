<template>
  <article class="task">
    <div class="info">
      <task-item-info :isTitleDone="taskItemData.isTitleDone" :task="props.task" />
    </div>
    <task-item-buttons
      :task="props.task"
      @taskDelete="$emit('taskDelete', props.task)"
      @taskDone="taskDone"
      class="buttons"
    />
  </article>
</template>

<script setup>
import TaskItemInfo from "@/components/Task/TaskItemInfo";
import TaskItemButtons from "@/components/Task/TaskItemButtons";
import { ref, defineProps } from "vue";

const taskItemData = ref({ isTitleDone: false });

const taskDone = () => {
  taskItemData.value.isTitleDone = !taskItemData.value.isTitleDone;
};

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.task {
  width: 650px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 16px;
  background-color: #fff6e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons {
  display: flex;
  gap: 10px;
}
.task:nth-of-type(3n-1) {
  background-color: #f3e4f6;
}
.task:nth-of-type(3n) {
  background-color: #fad7d3;
}
.info {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
@media (max-width: 500px) {
  .task {
    width: 330px;
  }
  .info {
    gap: 10px;
  }
}
</style>
