<template>
  <div>
    <clear-button @click="$emit('taskDone', props.task)">
      <img src="@/assets/checked.png" alt="Готово" />
    </clear-button>
    <clear-button @click="$emit('taskDelete', props.task)">
      <img src="@/assets/bin.png" alt="Удалить" />
    </clear-button>
  </div>
</template>

<script setup>
import ClearButton from "@/components/UI/ClearButton.vue";
import { defineProps } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
img {
  width: 40px;
}
</style>
