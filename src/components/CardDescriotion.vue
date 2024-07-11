<template>
  <transition name="card" appear>
    <div class="card">
      <img class="card__image" :src="card.image" :alt="card.name" />
      <div class="card__text">
        <div>
          <h2 class="card__title">{{ card.name }}</h2>
          <div class="card__status">
            <div
              class="status__icon"
              :class="{
                status__icon__alive: card.status === 'Alive',
                status__icon__dead: card.status === 'Dead',
              }"
            ></div>
            <div class="card__subtitle">
              {{ card.status }} - {{ card.species }}
            </div>
          </div>
        </div>
        <card-info :isLocation="true" :card="card"></card-info>
        <h3 class="card__title">Episode</h3>
        <ul v-if="!isEpisodesLoading">
          <li class="card__episode" v-for="episode in episodes" :key="episode.id">{{ episode.name }}</li>
        </ul>
        <my-loader v-else />
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import CardInfo from "./CardInfo.vue";
import MyLoader from "./UI/MyLoader.vue";
export default {
  components: {
    CardInfo,
    MyLoader,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      episodes: [],
      isEpisodesLoading: false,
    };
  },
  methods: {
    async fetchEpisodes(urls) {
      // Извлекаем ID эпизодов из URL
      const ids = urls.map(url => url.split('/').pop()).join(',');
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${ids}`);
      return response.data;
    },
  },
  async mounted() {
    this.isEpisodesLoading = true;
    this.episodes = await this.fetchEpisodes(this.card.episode);
    this.isEpisodesLoading = false;
  },
};
</script>

<style scoped>
.card-enter-active,
.card-leave-active {
  transition: opacity 1s;
}
.card-enter,
.card-leave-to {
  opacity: 0;
}
.card {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.card__image {
  border-radius: 0.5rem;
}

@media (max-width: 610px) {
  .card {
    flex-direction: column;
    max-width: 250px;
    height: max-content;
    justify-self: center;
  }
}
.card__text {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  padding: 13px;
  align-items: center;
  row-gap: 20px;
}
.card__title {
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-weight: normal;
  word-wrap: break-word;
  font-size: 1.5rem;
  font-weight: 800;
}
.card__status {
  display: flex;
  align-items: center;
}
.status__icon {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(133, 133, 133);
  border-radius: 50%;
}
.status__icon__dead {
  background: rgb(214, 61, 46);
}
.status__icon__alive {
  background: rgb(46, 214, 102);
}
.card__subtitle {
  font-size: 16px;
  font-weight: 500;
}

.card__episode {
  list-style: none;
  padding: 0;
  text-align: center;
  font-size: 112.5%;
  line-height: 1.625;
}
</style>
