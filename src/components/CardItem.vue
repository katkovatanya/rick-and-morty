<template>
  <div class="card">
    <img :src="card.image" :alt="card.name" />
    <div class="card__text">
      <div>
        <h2 class="card__title">{{ card.name }}</h2>
        <div class="card__status">
          <div
            class="status__icon"
            :class="{
              status__icon__alive: card.status === 'Alive',
            }"
          ></div>
          <div class="card__subtitle">
            {{ card.status }} - {{ card.species }}
          </div>
        </div>
      </div>
      <card-info :isLocation="true" :card="card"></card-info>
      <card-info :isLocation="false" :card="card"></card-info>
    </div>
  </div>
</template>

<script>
import CardInfo from "./CardInfo.vue";

export default {
  components: {
    CardInfo,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #666666;
  width: 600px;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  color: rgb(255, 255, 255);
  height: 220px;
}
.card__text {
  display: flex;
  flex-direction: column;
  font-family: -apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Helvetica", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  padding: 13px;
  justify-content: space-between;
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
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
.status__icon__alive {
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(46, 214, 102);
  border-radius: 50%;
}
.card__subtitle {
  font-size: 16px;
  font-weight: 500;
}
</style>
