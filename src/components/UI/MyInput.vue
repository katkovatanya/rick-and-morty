<template>
  <input v-bind:value="modelValue" @input="updateInput" class="input" type="text" />
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
  width: 300px;
  border: 1px solid rgb(39, 43, 51);
  padding: 10px 15px;
}
</style>
