<script>
import Button from "./UI/Button.vue";
import {Slide} from 'vue3-burger-menu'
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Header",
  components: {Button, Slide},
  data() {
    return {
      headerTextColor: '',
      headerLogo: '',
      headerBorder: ''
    }
  },
  watch: {
    '$route'(to) {
      this.updateHeader(to.path);
    },
  },
  mounted() {
    this.updateHeader(this.$route.path);
  },
  methods: {
    ...mapActions(['setMyOrders']),
    updateHeader(path) {
      switch (path) {
        case '/':
          this.headerTextColor = 'white';
          this.headerBorder = 'white'
          this.headerLogo = '/header/logo.png';
          break;
        case '/sale':
          this.headerTextColor = 'black';
          this.headerBorder = 'black'
          this.headerLogo = '/header/logoBlack.png';
          break;
        case `/sale/${this.$route.params.id}`:
          this.headerTextColor = 'black';
          this.headerBorder = 'black'
          this.headerLogo = '/header/logoBlack.png';
          break;
        case '/autoparts':
          this.headerTextColor = 'white';
          this.headerBorder = 'white'
          this.headerLogo = '/header/logo.png';
          break;
        case '/servicing':
          this.headerTextColor = 'black';
          this.headerBorder = 'black'
          this.headerLogo = '/header/logoBlack.png';
          break;
        case '/myOrders':
          this.headerTextColor = 'black';
          this.headerBorder = 'black'
          this.headerLogo = '/header/logoBlack.png';
          break;
        default:
          this.headerTextColor = 'white';
          this.headerLogo = '/header/logo.png';
      }
    },
  },
  computed: {
    ...mapGetters(['getMyOrders']),
    isSaleRoute() {
      return this.$route.name === 'forsale_page';
    }, isServicing() {
      return this.$route.name === 'servicing_page';
    },
    isMyOrders() {
      return this.$route.name === 'myOrders_page';
    },
    isAutoparts() {
      return this.$route.name === "autoparts_page";
    }
  },
}
</script>
<template>
  <header
      :style="{color: headerTextColor, borderTop: '2px solid ' + headerBorder, borderBottom: '2px solid ' + headerBorder}">
    <div class="container">
      <div class="header-wrapper">
        <div class="header-logo">
          <router-link to="/">
            <img :src="headerLogo" alt="">
          </router-link>
        </div>

        <nav class="header-nav" v-if="$route.path === '/' || $route.name === 'autoparts_page'">
          <ul class="header-lists">
            <li class="header-list">
              <Button link="/sale" name-btn="For sale"/>
            </li>
            <li class="header-list">
              <Button :class="{'btn-active': isAutoparts}" link="/autoparts/page_1/sort_id" name-btn="Autoparts"/>
            </li>
            <li class="header-list">
              <Button link="/servicing" name-btn="Servicing"/>
            </li>
            <li class="header-list" v-if="getMyOrders.data?.length > 0">
              <Button link="/myOrders" name-btn="My Orders"/>
            </li>
          </ul>
        </nav>
        <nav class="header-nav" v-else>
          <ul class="header-lists">
            <li class="header-list different">
              <router-link class="btn2"
                           :class="{ 'hover-active': isSaleRoute }"
                           :to="{name:'forsale_page'}"><span class="spn2">For sale</span></router-link>
            </li>
            <li class="header-list different">
              <router-link class="btn2" :to="{name:'autoparts_page', params: {page: 1, sort: 'id'}}"><span class="spn2">Autoparts</span>
              </router-link>
            </li>
            <li class="header-list different">
              <router-link class="btn2"
                           :class="{'hover-active': isServicing}"
                           :to="{name:'servicing_page'}"><span class="spn2">Servicing</span></router-link>
            </li>
            <li class="header-list different" v-if="getMyOrders.data?.length > 0">
              <router-link class="btn2"
                           :class="{'hover-active': isMyOrders}"
                           :to="{name:'myOrders_page'}"><span class="spn2">My Orders</span></router-link>
            </li>
          </ul>
        </nav>

        <nav class="header-burger">
          <Slide>
            <router-link to="/" id="home">
              <span>Home</span>
            </router-link>
            <router-link :to="{name: 'forsale_page'}" id="sale">
              <span>For Sale</span>
            </router-link>
            <router-link :to="{name:'autoparts_page', params: {page: 1, sort:'id'}}" id="autoparts">
              <span>Autoparts</span>
            </router-link>
            <router-link :to="{name:'servicing_page'}" id="servicing">
              <span>Servicing</span>
            </router-link>
            <router-link :to="{name: 'myOrders_page'}" id="servicing" v-if="getMyOrders.data?.length > 0">
              <span>My Orders</span>
            </router-link>
          </Slide>
        </nav>
      </div>
    </div>
  </header>
</template>

<style>
* {
  box-sizing: inherit;
  transition-property: all;
  transition-duration: .6s;
  transition-timing-function: ease;
}

header {
  padding: 5px 0;
  color: white;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  min-height: 60px;
  position: relative;
  z-index: 3;
}

.header-wrapper {
  display: flex
}

.header-nav {
  display: flex;
  flex-grow: 1;
  justify-content: center;
}

.header-lists {
  height: 100%;
  font-size: 25px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 50px;
}

.btn2 {
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid orangered;
  text-transform: uppercase;
  color: #fefefe;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: 0.3s;
}

.btn2::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - -2px);
  background-color: #212121;

  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  width: calc(100% + 4px);
  height: calc(100% - 50px);
  background-color: #212121;
  transition: 0.3s ease-out;
  transform: scaleY(1);
}

.btn2:hover::before {
  transform: translateY(-25px);
  height: 0;
}

.btn2:hover::after {
  transform: scaleX(0);
  transition-delay: 0.15s;
}

.hover-active {
  color: black;
}

.btn2.hover-active::before {
  transform: translateY(-25px);
  height: 0;
}

.btn2.hover-active::after {
  transform: scaleX(0);
  transition-delay: 0.15s;
}

.btn2:hover {
  border: 2px solid orangered;
  color: black;
}

.btn2 span {
  position: relative;
  z-index: 3;
}

.btn-active {
  background: rgb(2,29,78);
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: rgb(4, 4, 38);
}

.bm-burger-button {
  display: none;
}

@media (max-width: 1200px) {
  .header-nav {
    display: none;
  }

  .header-burger {
    width: 100%;
    display: flex;
    justify-content: right;
  }

  .bm-burger-button {
    top: 20px !important;
    left: initial !important;
    right: 50px !important;
    display: block;
    background-color: white;
  }
}
</style>