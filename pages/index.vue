<template>
  <div class="cities-page">
    <div class="container center">
      <ul class="cities__list grid-four">
        <Cart v-for="item in items" :key="item.id" :item="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import Cart from "../components/Cart.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    Cart,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {},
  mounted() {
    this.$axios
      .get(`https://654b934c5b38a59f28ef58ae.mockapi.io/api/films/items`)
      .then((r) => {
        this.items = r.data;
      });
  },
});
</script>

<style lang="scss">
.cities__list {
  margin-bottom: 50px;
  margin-top: 60px;
}
</style>
