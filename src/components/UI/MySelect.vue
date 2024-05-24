<template>
  <select class="select" :v-model="modelValue" @change="cangeOption">
    <option disabled value="">Сортировка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    cangeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style>
.select {
  width: 300px;
  border: 1px solid rgb(39, 43, 51);
  padding: 10px 15px;
  border-radius: 0.5rem;
}
@media (max-width: 600px) {
  .select {
    width: 200px;
  }
}
</style>
