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
  width: 300px;
  background: none;
  color: rgb(39, 43, 51);
  border: 1px solid rgb(39, 43, 51);
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn:hover {
  background-color: rgb(39, 43, 51);
  color: rgb(255, 255, 255);
}

@media (max-width: 600px) {
  .btn{
    width: 200px;
  }
}
</style>
