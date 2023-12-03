<template>
  <div class="city-card" to="/">
    <div class="city-card__content">
      <div class="city-card__add" @click="addToCart">
        <img
          :src="require(`~/assets/images/svg/cartsml.svg`)"
          alt="корзина"
          class="city-card__add-img"
        />
      </div>
      <div class="city-card__img">
        <img :src="this.$props.item.imageUrl" alt="Товар" />
      </div>
      <div class="city-card__title">{{ this.$props.item.name }}</div>
      <div class="city-card__price">{{ this.$props.item.price }} ₽</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  props: ["item"],

  methods: {
    ...mapActions(["ADD_TO_CART"]),

    addToCart() {
      this.ADD_TO_CART(this.$props.item);
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables.scss";

.city-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: $color-white;
  border-radius: 6px;
  transition: all 0.5s;
  cursor: pointer;

  &__add {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    cursor: pointer;
    &-img {
      width: 30px;
      height: 30px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 11px;
    justify-items: center;
    padding: 21px;
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.05);
  }

  &__name {
    color: $color-white;
    font-size: 14px;
    font-weight: 400;
    line-height: 110.7%;
  }

  &__temp {
    color: $color-white;
    font-size: 40px;
    font-weight: 500;
    line-height: 110.7%;
  }

  &__img {
    position: relative;
    width: 100px;
    height: 100px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
