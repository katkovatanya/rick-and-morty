<template>
  <h1 class="title">Rick and Morty</h1>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color: rgb(32, 35, 41);
  font-weight: 900;
  font-size: 5.625rem;
  min-height: 275px;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin-top: 125px;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
}
@media (max-width: 310px) {
  .title {
    font-size: 30px;
    margin: 100px auto;
    min-height: 0;
  }
}
</style>
