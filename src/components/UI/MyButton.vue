<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgb(39, 43, 51);
  border: 1px solid rgb(39, 43, 51);
}
</style>
