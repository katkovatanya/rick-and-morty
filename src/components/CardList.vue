<template>
  <transition-group tag="div" class="card-list" name="list" appear>
      <card-item v-for="card in cards" :key="card.id" :card="card"/>
    </transition-group>
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
  grid-template-columns: repeat(auto-fit, 600px);
  gap: 20px;
  margin: auto;
  justify-content: center;
  padding: 4.5rem 0;
}
@media (max-width: 600px) {
  .card-list {
    grid-template-columns: 1fr;
  }
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>
