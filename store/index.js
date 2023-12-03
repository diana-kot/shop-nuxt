export const state = () => ({
  bascetCount: 0,
  bOpen: false,
  bItem: {},
  cart: [],
});

const types = {
  SET_BASCET_COUNT: "SET_BASCET_COUNT",
  SET_OPEN: "SET_OPEN",
  SET_CART: "SET_CART",
};

export const mutations = {
  [types.SET_BASCET_COUNT](state, count) {
    state.bascetCount = count;
  },
  [types.SET_OPEN](state, bOpen) {
    state.bOpen = !state.bOpen;
  },
  [types.SET_CART](state, bOpen) {
    state.bOpen = !state.bOpen;
  },
  deleteItem(state, item) {
    state.items = state.cart.filter((i) => i.id !== item.id);
  },
  SET_CART: (state, product) => {
    let isProductExists = false;
    if (state.cart.length) {
      state.cart.map(function (item) {
        if (item.id === product.id) {
          isProductExists = true;
          item.quantity++;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, id) => {
    state.cart = state.cart.filter((i) => i.id !== id);
  },
};

export const getters = {
  CART(state) {
    return state.cart;
  },
  ITEMS_COUNT: (state) => {
    return state.cart.length;
  },
};

export const actions = {
  setBascetCount({ commit }, city) {
    commit(types.SET_BASCET_COUNT, city);
  },
  setOpen({ commit }, bOpen) {
    commit(types.SET_OPEN, bOpen);
  },
  ADD_TO_CART({ commit }, product) {
    commit(types.SET_CART, product);
  },
  DELETE_FROM_CART({ commit }, id) {
    commit("REMOVE_FROM_CART", id);
  },
};
