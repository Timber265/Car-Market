<script>
import Button from "../components/UI/Button.vue";
import GroupSelect from "../components/GroupSelect.vue";
import CreateBody from "../components/ChooserSection/CreateBody.vue";
import CreateBrand from "../components/ChooserSection/CreateBrand.vue";
import ChooseSection from "../components/ChooserSection/ChooseSection.vue";
import MainSection from "../components/MainSection.vue";
import SectionOutput from "../components/HotDealSection/SectionOutput.vue";
import BuySection from "../components/BuySection.vue";
import CardItem from "../components/UI/cardItem.vue";
import InfoSection from "../components/InfoSection.vue";
import Footer from "../components/Footer.vue";
import {mapActions, mapGetters} from "vuex";


export default {
  components: {
    Footer,
    InfoSection,
    CardItem,
    BuySection, SectionOutput, MainSection, ChooseSection, CreateBrand, CreateBody, GroupSelect, Button
  },
  methods: {
    ...mapActions(['setCarData'])
  },
  computed: {
    ...mapGetters(['getCarData'])
  },
  created() {
    this.setCarData()
  }
}
</script>

<template>
  <main-section/>
  <group-select/>
  <choose-section/>
  <section-output :car-data="getCarData"/>
  <div class="centerSection">
    <div class="container">
      <img draggable="false" style="filter: hue-rotate(93deg); width: 100%; border-radius: 30px"
           src="/centerSection/car.jpg" alt="">
    </div>
  </div>
  <buy-section />
  <info-section />
  <Footer />
</template>

<style scoped>



</style>