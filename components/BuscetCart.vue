<template>
  <div class="buscet__cart">
    <img
      class="buscet__cart-img"

      :src="item.imageUrl"
      alt=""
    />
    <div class="buscet__cart-text">
      <p class="buscet__cart-title">{{ item.name }}</p>
      <p class="buscet__cart-price">{{ item.price }} ₽</p>
    </div>

    <div class="buscet__cart-del" @click="deleteFromCart(item.id)">
      <img :src="require(`~/assets/images/svg/trash.svg`)" alt="" />
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

export default {
  props: ["item"],
  data() {
    return {

    };
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART',

      ]),

    deleteFromCart(id) {
      this.DELETE_FROM_CART(id)
      }
  }
};
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.buscet {
  &__cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 15px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.05);

    &-text {
      display: flex;
      flex-direction: column;
      column-gap: 6px;
    }

    &-img {
      width: 90px;
      height: 90px;
    }

    &-title {
      color: #59606d;
      font-size: 14px;
    }

    &-price {
      color: #1f1f1f;
      font-size: 14px;
      font-weight: 700;
    }

    &-del {
    }
  }
}
</style>
