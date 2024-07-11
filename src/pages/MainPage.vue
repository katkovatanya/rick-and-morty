<template>
  <div>
    <app-banner />
    <div class="search">
      <my-input
        v-model="searchQuery"
        placeholder="Поиск по имени..."
        @keyup.enter="fetchCards"
      />
      <my-button @click="fetchCards">Применить</my-button>
      <my-select
        v-model="statusQuery"
        :options="statusOptions"
        @change="fetchCards"
      />
    </div>
    <div class="error-message" v-if="errorMessage">
      <p class="error-text">{{ errorMessage }}</p>
    </div>
    <card-list :cards="cards" v-else-if="!isCardsLoading"></card-list>
    <my-loader v-else />
    <app-pagination
      v-if="!errorMessage && !isCardsLoading"
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
      searchQuery: "",
      statusQuery: "",
      page: 1,
      totalPages: 0,
      errorMessage: "",
      statusOptions: [
        { value: "", name: "Все" },
        { value: "alive", name: "Живой" },
        { value: "dead", name: "Мертвый" },
        { value: "unknown", name: "Неизвестно" },
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
        this.errorMessage = "";
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.errorMessage = e.response.data.error;
        } else {
          this.errorMessage = "Произошла неизвестная ошибка";
        }
      } finally {
        this.isCardsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchCards();
  },
  watch: {
    page() {
      this.fetchCards();
    },
  },
};
</script>

<style scoped>
.search {
  display: flex;
  column-gap: 20px;
  justify-content: center;
  margin-bottom: 15px;
}
.error-message {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  text-align: center;
}
.error-text {
  font-size: 70px;
}
@media (max-width: 630px) {
  .search {
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
  }
}
</style>
