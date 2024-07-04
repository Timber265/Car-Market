<script>
import Header from "./components/Header.vue";
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {mapActions, mapGetters} from "vuex";

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)
export default {
  components: {Header},
  data() {
    return {}
  },
  methods: {...mapActions(['setCarData', 'setMyOrders'])},
  computed: {...mapGetters(['getMyOrders'])},
  created() {
    this.setCarData()
    this.setMyOrders()
    this.getMyOrders
  }
}
</script>

<template>
  <Header/>
  <router-view/>
</template>

<style scoped>

</style>
