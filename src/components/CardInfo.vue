<template>
  <div class="info" v-if="isLocation">
    <div class="info-title">Last known location:</div>
    <div class="info-body">{{ card.location.name }}</div>
  </div>
  <div v-else class="info">
    <div class="info-title">First seen in:</div>
    <div class="info-body">{{ episodeName }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    isLocation: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      episodeName: "",
    };
  },
  created() {
    this.fetchEpisodeName();
  },
  methods: {
    fetchEpisodeName() {
      axios
        .get(this.card.episode[0])
        .then((response) => {
          this.episodeName = response.data.name;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.info-title {
  color: rgb(158, 158, 158);
  font-size: 16px;
  font-weight: 500;
}
.info-body {
  font-size: 112.5%;
    line-height: 1.625;
}
</style>
