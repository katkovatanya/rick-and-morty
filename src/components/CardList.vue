<template>
  <div class="card-list">
      <card-item v-for="card in cards" :key="card.id" :card="card"/>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
export default {
  components: { CardItem },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-list {
  background-color: rgb(39, 43, 51);
  display: grid;
  grid-template-columns: repeat(2, 600px);
  gap: 20px;
  margin: auto;
  justify-content: center;
  padding: 4.5rem 0;
}
</style>
