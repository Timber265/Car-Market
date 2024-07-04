<script>
import GroupSelect from "../components/GroupSelect.vue";
import HotDealLists from "../components/HotDealSection/hotDealLists.vue";
import BuySection from "../components/BuySection.vue";
import SectionOutput from "../components/HotDealSection/SectionOutput.vue";
import Footer from "../components/Footer.vue";
import InfoCorrectCar from "../components/InfoCurrentCar.vue";
import InfoCurrentCar from "../components/InfoCurrentCar.vue";
import {mapGetters} from "vuex";

export default {
  name: "Forsale",
  components: {InfoCurrentCar, InfoCorrectCar, Footer, SectionOutput, BuySection, HotDealLists, GroupSelect},

  computed: {
    ...mapGetters(['getCarData'])
  }
}
</script>

<template>
  <info-current-car />
  <section-output :car-data="getCarData" />
  <group-select />
  <Footer/>
</template>

<style scoped>

</style>