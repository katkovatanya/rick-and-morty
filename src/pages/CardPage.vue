<template>
  <div class="page">
    <!-- Отображаем компонент только после загрузки данных -->
    <card-description
      v-if="!isCardLoading && card"
      :key="card.id"
      :card="card"
    />
    <!-- Отображаем индикатор загрузки во время загрузки данных -->
    <my-loader v-else-if="isCardLoading" />
    <!-- Отображаем сообщение об ошибке, если есть -->
    <div v-else-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from "axios";
import CardDescription from "@/components/CardDescriotion.vue";
import MyLoader from "@/components/UI/MyLoader.vue";
export default {
  components: { CardDescription, MyLoader },
  data() {
    return {
      card: null,
      isCardLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    async fetchCard(id) {
      try {
        this.isCardLoading = true;
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        this.card = response.data;
        this.errorMessage = "";
      } catch (e) {
        if (e.response && e.response.data && e.response.data.error) {
          this.errorMessage = e.response.data.error;
        } else {
          this.errorMessage = "Произошла неизвестная ошибка";
        }
      } finally {
        this.isCardLoading = false;
      }
    },
  },
  async mounted() {
    const id = this.$route.params.id;
    this.fetchCard(id);
    document.body.style.backgroundColor = "rgb(39, 43, 51)";
  },
  beforeUnmount() {
    document.body.style.backgroundColor = null;
  },
};
</script>

<style scoped>
.page {
  background-color: rgb(39, 43, 51);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}
</style>
