<template>
  <input v-model="modelValue" class="base-input" />
</template>

<script setup lang="ts">
import { defineModel } from "vue";

const modelValue = defineModel<string | number>({
  type: [String, Number],
  required: true,
});
</script>

<style scoped>
.base-input {
  height: 48px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 10px;
}
</style>
