<template>
  <div class="info" v-if="isLocation">
    <div class="info-title">Last known location:</div>
    <div class="info-body">{{ card.location.name }}</div>
  </div>
  <div v-else class="info">
    <div class="info-title">First seen in:</div>
    <div class="info-body">{{ card.episode[0] }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    isLocation: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped></style>
