<script>
import HotDealLists from "./hotDealLists.vue";
import HotDealPost from "./hotDealPost.vue";
import {mapGetters} from "vuex";

export default {
  name: "sectionOutput",
  components: {HotDealPost, HotDealLists},
  props: {
    carData: Object,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['getCarData'])
  },
}
</script>

<template>
  <div class="hotdeals" style="margin-bottom: 60px">
    <div class="container">
      <h1 style="font-size: 30px; text-transform: uppercase; font-family: ModernWarfare, sans-serif; text-align: center; margin-bottom: 50px">Hot Deals</h1>
      <hot-deal-lists>
        <hot-deal-post v-for="data in carData?.data" :data=data />
      </hot-deal-lists>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 605px) {
  .hotdeals {
    display: none;
  }
}
</style>