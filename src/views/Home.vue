<template>
  <div class="home">
    <h1>Campeões que já peguei baú</h1>
    <div class="list">
      <div v-for="champion in champions" :key="champion.id">
        <div class="list__card">
          <Card :name="champion.name" :id="champion.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue';

export default {
  name: 'Home',
  components: { Card },
  data() {
    return {
      champions: [],
    };
  },
  mounted() {
    axios
      .get('http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json')
      .then((response) => {
        this.champions = response.data.data;
        localStorage.champions = this.champions;
      });
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 5px;

  &__card {
    display: flex;
    margin: 5px;
  }
}
</style>
