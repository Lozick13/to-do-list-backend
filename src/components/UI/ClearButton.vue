<template>
  <button class="clear-button">
    <slot></slot>
  </button>
</template>

<script></script>

<style scoped>
.clear-button {
  opacity: 0.7;
  border: none;
  background: none;
}
.clear-button:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
