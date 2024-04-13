<template>
  <div class="task__date">
    <img src="@/assets/calendar.svg" alt="Дата" />
    <span>{{ props.date }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  date: {
    type: String,
    required: true,
  } as { type: StringConstructor; required: true },
});
</script>

<style scoped>
.task__date {
  display: flex;
  align-items: center;
  gap: 5px;
}
.task__date img {
  width: 25px;
}
.task__date span {
  font-size: 15px;
  position: relative;
  top: 1px;
}
</style>
