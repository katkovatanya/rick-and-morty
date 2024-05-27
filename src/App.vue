<template>
  <div>
    <app-banner />
    <div class="search">
      <my-input
        v-model="searchQuery"
        placeholder="Поиск по имени..."
        @keyup.enter="fetchCards"
      />
      <my-input
        v-model="statusQuery"
        placeholder="Поиск по статусу..."
        @keyup.enter="fetchCards"
      />
      <my-button @click="fetchCards">Применить</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <card-list :cards="sortedCards" v-if="!isCardsLoading"></card-list>
    <my-loader v-else />
    <app-pagination
      :page="page"
      :totalPages="totalPages"
      @change-page="changePage"
    />
  </div>
</template>

<script>
import CardList from "@/components/CardList.vue";
import AppBanner from "@/components/AppBanner.vue";
import AppPagination from "@/components/AppPagination.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    CardList,
    AppBanner,
    AppPagination,
  },
  data() {
    return {
      cards: [],
      isCardsLoading: false,
      selectedSort: "",
      searchQuery: "",
      statusQuery: "",
      page: 1,
      totalPages: 0,
      sortOptions: [
        { value: "name", name: "По имени" },
        { value: "status", name: "По статусу" },
      ],
    };
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchCards() {
      try {
        this.isCardsLoading = true;
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
          {
            params: {
              page: this.page,
              name: this.searchQuery,
              status: this.statusQuery,
            },
          }
        );
        this.totalPages = response.data.info.pages;
        this.cards = response.data.results;
      } catch (e) {
        alert("Ошибка или карточки по запросу не найдены");
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
  watch: {
    page() {
      this.fetchCards();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.search {
  display: flex;
  column-gap: 20px;
  justify-content: center;
  margin-bottom: 15px;
}
@media (max-width: 630px) {
  .search {
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }
}
</style>
