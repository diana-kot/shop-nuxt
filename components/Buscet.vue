<template>
  <div class="buscet" :class="{ active: this.$store.state.bOpen }">
    <div class="bascet__over"></div>
    <div class="buscet__wrap">
      <div class="buscet__wrap-header">
        <p class="buscet__title">Корзина</p>
        <div class="buscet__close" @click="close">
          <img :src="require(`~/assets/images/svg/close.svg`)" alt="close" />
        </div>
      </div>
      <div class="buscet__wrap-des">Товары в корзине</div>
      <div class="buscet__wrap-body" v-if="this.$store.state.cart.length > 0">
        <BuscetCart v-for="item in CART" :key="item.id" :item="item" />
      </div>
      <div class="buscet__wrap-body" v-else>
        <p class="buscet__wrap-txt">
          Пока что вы ничего не добавили в корзину.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BuscetCart from "../components/BuscetCart.vue";

export default {
  components: {
    BuscetCart,
  },
  data() {
    return {
      count: 0,
      cart_data: this.CART,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    close() {
      this.$store.commit("SET_OPEN");
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.buscet {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  &.active {
    display: block;
  }

  &__wrap {
    position: absolute;
    width: 460px;
    height: 100%;
    right: 0;
    top: 0;
    border-radius: 8px 0px 0px 8px;
    background-color: #fff;
    box-shadow: -4px 0px 16px 0px rgba(0, 0, 0, 0.05);
    padding: 48px;
    max-height: 100vh;
    overflow-y: scroll;

    &-txt {
      color: #000;
      font-size: 22px;
      font-weight: 400;
    }
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-body {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 16px;
    }

    &-des {
      color: #59606d;
      font-size: 18px;
      font-weight: 400;
      margin-top: 24px;
    }
  }
  &__title {
    color: #000;
    font-size: 32px;
    font-weight: 700;
  }
  &__close {
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
}

.bascet__over {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.8;
}
</style>
