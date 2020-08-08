<template>
  <div class="card" v-on:click="pegou()">
    <div class="card__name">
      <p class="card__name__text">{{ name }}</p>
      <div v-if="isChest" class="card__isChested"></div>
      <div v-if="!isChest" class="card__chested"></div>
    </div>
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
    isChestedId() {
      return `isChest${this.id}`;
    },
  },
  methods: {
    pegou() {
      this.isChest = !this.isChest;
      localStorage.setItem(this.id, this.isChest);
    },
  },
  mounted() {
    if (localStorage.getItem(this.id, this.isChest)) {
      this.isChest = localStorage.getItem(this.id, this.isChest);
    }
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
    justify-content: space-between;
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

  &__isChested {
    content: '';
    width: 20px;
    height: 5px;
    background: white;
    transform: rotate(45deg);
    margin: 35px;
    position: relative;

    &:before {
      background: white;
      content: '';
      display: block;
      width: 25px;
      height: 5px;
      transform: rotate(-90deg);
      position: absolute;
      bottom: 15px;
      left: 4.6px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    top: -20px;
    right: -20px;
    background-color: #fff;
    transform: rotate(-45deg);
    transition: 0.5s;
  }

  &:hover {
    &:before {
      top: -35px;
      right: -35px;
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

    .card__chested {
      transition: 0.5s;
      content: '';
      width: 20px;
      height: 5px;
      opacity: 0.4;
      background: white;
      transform: rotate(45deg);
      margin: 35px;
      position: relative;

      &:before {
        background: white;
        content: '';
        display: block;
        width: 25px;
        height: 5px;
        transform: rotate(-90deg);
        position: absolute;
        bottom: 15px;
        left: 4.6px;
      }
    }
  }
}
</style>
