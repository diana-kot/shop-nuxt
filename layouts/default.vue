<template>
  <div class="wrapper wrapper-color">
    <div class="content">
      <div class="content__top">
        <Header />

        <main>
          <nuxt />
          <Buscet />
        </main>
      </div>
      <!-- <footer class="page-footer"></footer> -->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Buscet from "../components/Buscet.vue";

export default {
  components: {
    Header,
    Buscet,
  },
  data() {
    return {
      basketOpen: false,
      basketCount: 0
    };
  },
};
</script>
