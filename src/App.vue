<template>
  <div>
    <app-banner />
    <my-select v-model="selectedSort" :options="sortOptions" />
    <card-list :cards="sortedCards" v-if="!isCardsLoading"></card-list>
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import AppBanner from "@/components/AppBanner.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    CardList,
    AppBanner,
  },
  data() {
    return {
      cards: [],
      isCardsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "name", name: "По имени" },
        { value: "status", name: "По статусу" },
      ],
    };
  },
  methods: {
    async fetchCards() {
      try {
        this.isCardsLoading = true;
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character?_limit=10"
        );
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
  computed: {
    sortedCards() {
      return [...this.cards].sort((card1, card2) => {
        return card1[this.selectedSort]?.localeCompare(
          card2[this.selectedSort]
        );
      });
    },
  },
  watch: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
