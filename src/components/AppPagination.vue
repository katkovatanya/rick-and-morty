<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in visiblePages"
      :class="{
        page: typeof pageNumber === 'number',
        'current-page': page === pageNumber,
      }"
      :key="pageNumber"
      @click="typeof pageNumber === 'number' ? changePage(pageNumber) : null"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["page", "totalPages"],
  methods: {
    changePage(pageNumber) {
      this.$emit("change-page", pageNumber);
    },
  },
  computed: {
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
        else if (i >= this.page - currentSize && i <= this.page + currentSize) {
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
};
</script>

<style scoped>
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
  cursor: pointer;
}

.current-page {
  background-color: rgb(39, 43, 51);
  color: rgb(255, 255, 255);
}

@media (max-width: 600px) {
  .page {
    font-size: 14px;
    padding: 5px;
  }
  .page__wrapper {
    column-gap: 5px;
    flex-wrap: wrap;
  }
}
</style>
