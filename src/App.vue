<template>
  <div>
    <app-banner />
    <div class="search">
      <my-input v-model="searchQuery" placeholder="Поиск..." />
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <card-list
      :cards="sortedAndSearchingCards"
      v-if="!isCardsLoading"
    ></card-list>
    <div v-else>Идёт загрузка...</div>
    <div class="page__wrapper">
      <div
        v-for="pageNumber in visiblePages"
        :class="{
          'page': typeof pageNumber === 'number',
          'current-page': page === pageNumber,
        }"
        :key="pageNumber"
        @click="typeof pageNumber === 'number' ? changePage(pageNumber) : null"
      >
        {{ pageNumber }}
      </div>
    </div>
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
      searchQuery: "",
      page: 1,
      limit: 10,
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
              limit: this.limit,
            },
          }
        );
        console.log(response);
        this.totalPages = response.data.info.pages;
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
    sortedAndSearchingCards() {
      return this.sortedCards.filter((card) =>
        card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    visiblePages() {
    const edgeSize = 3; // количество первых и последних страниц для отображения
    const middleSize = 3; // количество средних страниц для отображения
    const currentSize = 2; // количество страниц вокруг текущей страницы
    const separator = "..."; // разделитель

    let pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      // добавляем первые и последние страницы
      if (i <= edgeSize || i > this.totalPages - edgeSize) {
        pages.push(i);
      }
      // добавляем средние страницы
      else if (
        i >= Math.floor(this.totalPages / 2) &&
        i < Math.floor(this.totalPages / 2) + middleSize
      ) {
        pages.push(i);
      }
      // добавляем текущую страницу и страницы вокруг нее
      else if (
        i >= this.page - currentSize &&
        i <= this.page + currentSize
      ) {
        pages.push(i);
      }
      // добавляем разделители
      else if (
        i === edgeSize + 1 ||
        i === Math.floor(this.totalPages / 2) + middleSize ||
        i === this.page - currentSize - 1 ||
        i === this.page + currentSize + 1
      ) {
        pages.push(separator);
      }
    }

    // удаляем лишние разделители
    pages = pages.filter(
      (page, index, self) =>
        typeof page === "number" ||
        (typeof page === "string" && typeof self[index + 1] === "number")
    );

    return pages;
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

.page__wrapper {
  display: flex;
  margin-top: 15px;
  column-gap: 10px;
  justify-content: center;
}

.page {
  border: 1px solid rgb(39, 43, 51);
  padding: 10px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.current-page {
  background-color: rgb(39, 43, 51);
  color: rgb(255, 255, 255);
}
</style>
