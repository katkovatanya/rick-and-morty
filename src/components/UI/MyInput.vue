<template>
  <input
    v-bind:value="modelValue"
    @input="updateInput"
    class="input"
    type="text"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 270px;
  border: 1px solid rgb(39, 43, 51);
  padding: 10px 15px;
  border-radius: 0.5rem;
}
@media (max-width: 600px) {
  .input {
    width: 170px;
  }
}
</style>
