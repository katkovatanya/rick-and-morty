<template>
  <div class="spinner"></div>
</template>

<script>
export default {
  name: "my-loader",
};
</script>

<style scoped>
.spinner {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid rgb(46, 214, 102);
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
