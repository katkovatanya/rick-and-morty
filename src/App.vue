<template>
  <div>
    <card-list :cards="cards" v-if="!isCardsLoading"></card-list>
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    CardList,
  },
  data() {
    return {
      cards: [],
      isCardsLoading: false,
    };
  },
  methods: {
    async fetchCards() {
      try {
        this.isCardsLoading = true;
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character?_limit=10"
        );
        console.log(response);
        this.cards = response.data.results;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isCardsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchCards();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
