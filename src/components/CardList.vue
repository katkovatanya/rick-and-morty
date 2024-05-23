<template>
  <div class="card-list">
    <h1 class="card-list__title">Rick and Morty</h1>
    <div class="card-list__items">
      <card-item v-for="card in cards" :key="card.id" :card="card"></card-item>
    </div>
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
.list {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-list__title {
  color: rgb(32, 35, 41);
  font-weight: 900;
  font-size: 5.625rem;
  min-height: 275px;
  align-self: center;
  justify-self: center;
  text-align: center;
  margin-top: 125px;
  font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
.card-list__items {
  background-color: rgb(39, 43, 51);
  display: grid;
  grid-template-columns: repeat(2, 600px);
  gap: 20px;
  margin: auto;
  justify-content: center;
  padding:  4.5rem 0;

}
</style>
