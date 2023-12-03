<template>
  <nav class="header">
    <div class="container center flex header__container">
      <nuxt-link to="/" class="header__logo">
        <p class="header__text">Nuxt shop</p>
      </nuxt-link>
      <div class="header__image" @click="open">
        <img :src="require(`~/assets/images/svg/cart.svg`)" alt="корзина" />
        <div class="header__count">
          {{ ITEMS_COUNT ? ITEMS_COUNT.toString() : 0 }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    open() {
      this.$store.commit("SET_OPEN");
    },
  },
  computed: {
    ...mapGetters(["ITEMS_COUNT"]),
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.header {
  background-color: $color-white;
  min-height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__container {
    display: flex;
    justify-content: space-between;
    max-width: $container-max-width;
    padding: 0 23px;
  }

  &__logo {
    display: flex;
    align-items: center;
  }
  &__image {
    position: relative;
  }

  &__count {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    top: -4px;
    right: -6px;
    background-color: $black-blue;
    color: $color-white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  &__text {
    color: $color-black;
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
