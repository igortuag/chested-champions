<template>
  <div class="card">
    <div class="card__name">
      <p class="card__name__text">{{ name }}</p>
    </div>
    <button v-on:click="pegou()">BAU</button>
    {{ isChest }}
    <img class="card__image" :src="imageMontada" :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    id: String,
  },
  data() {
    return {
      imagem: null,
      isChest: false,
    };
  },
  computed: {
    imageMontada() {
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${this.id}_0.jpg`;
    },
  },
  methods: {
    pegou() {
      this.isChest = !this.isChest;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0;
  max-width: 250px;
  max-height: 350px;
  position: relative;
  overflow: hidden;

  &__name {
    margin: 0;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0px;
    color: #fff;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: bold;
    background: #010101;
    height: 50px;
    width: 100%;
    transition: 0.5s;

    &__text {
      margin-left: 5px;
      transition: 0.5s;
    }
  }

  &__image {
    width: 100%;
    transition: 0.5s;
  }

  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    top: -15px;
    background-color: #fff;
    right: -15px;
    transform: rotate(-45deg);
    transition: 0.5s;
  }

  &:hover {
    &:before {
      top: -25px;
      right: -25px;
    }

    .card__name {
      background: #266780;
      height: 55px;
      width: 98%;

      .card__name__text {
        margin-left: 10px;
        font-size: 30px;
      }
    }

    .card__image {
      width: 98%;
    }
  }
}
</style>
