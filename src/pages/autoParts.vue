<script>
import Header from "../App.vue";
import {mapActions, mapGetters} from "vuex";
import HotDealLists from "../components/HotDealSection/hotDealLists.vue";
import HotDealPost from "../components/HotDealSection/hotDealPost.vue";
import Paginate from 'vuejs-paginate-next'
import Footer from "../components/Footer.vue";
import Button from "../components/UI/Button.vue";

export default {
  name: "autoParts",
  components: {Button, Footer, HotDealPost, HotDealLists, Header, paginate: Paginate},
  data() {
    return {
      settingPrice: {
        minPrice: null,
        maxPrice: null
      },
      settingsModelStatus: false
    }
  },
  methods: {
    ...mapActions(['setBodyType', 'setMarks', 'setAllCarData']),
    clickCallback(pageNum) {
      this.$router.push({name: 'autoparts_page', params: {page: pageNum, sort: this.$route.params.sort}});
      this.setAllCarData({page: pageNum})
    },
    initialPage(page) {
      return Number(page);
    },
    pageCount(count) {
      return Number(count)
    },
    changeSort(event) {
      const sortValue = event.target.value
      this.$router.push({name: 'autoparts_page', params: {sort: sortValue}});
      this.setAllCarData({page: this.$route.params.page, sort: sortValue})
    },
    changePrice(minPrice, maxPrice) {
      this.$router.push({name: 'autoparts_page', params: {min: minPrice, max: maxPrice}});
      this.setAllCarData({page: this.$route.params.page, sort: this.$route.params.sort, min: minPrice, max: maxPrice})
    }
  },
  computed: {
    ...mapGetters(['getBodyType', 'getMarks', 'getAllCarData'])
  },
  created() {
    this.setBodyType()
    this.setMarks()
    this.setAllCarData({page: this.$route.params.page, sort: this.$route.params.sort})
  }
}
</script>

<template>
  <div class="bg-image">
    <header/>
    <div class="container">
      <div style="position: absolute; top: 45%; color: white; text-transform: uppercase; font-size: 50px;">
        <h1 style="margin-bottom: 20px">FIND YOUR NEXT CAR</h1>
        <h2>PREMIUM CARS FROM DUBAI</h2>
      </div>
    </div>
  </div>
  <div class="autoparts">
    <div class="autoparts-wrapper">
      <div class="autoparts-settings">
        <div class="settings-sort">
          <div>
            <h1>Sort by</h1>
            <select class="custom-select" @change="changeSort($event)">
              <option selected disabled>choose sort</option>
              <option value="year">year</option>
              <option value="name">name</option>
              <option value="price">price</option>
            </select>
          </div>
          <div>
            <hr>
          </div>
        </div>
        <div class="setting-price">
          <div>
            <h1 style="margin-bottom: 6px; font-size: 25px">Price</h1>
            <div style="display: flex; justify-content: space-between; gap: 20px">
              <input v-model="settingPrice.minPrice" style="width: 100%; padding: 0 5px; height: 40px"
                     placeholder="min">
              <input v-model="settingPrice.maxPrice" style="width: 100%; padding: 0 5px; height: 40px"
                     placeholder="max">
            </div>
            <button style="width: 100%; height: 50px; border: none; font-weight: 700; background-color: #1f4c65; color: #fff; margin-top: 20px; cursor: pointer" @click="changePrice(settingPrice.minPrice, settingPrice.maxPrice)">SET</button>
          </div>
          <div>
            <p style="font-weight: 700">Prices based on <span style="font-weight: 300; color: blue">3000</span></p>
          </div>
          <div>
            <hr>
          </div>
        </div>
        <div class="setting-lifestyles">
          <h1>Lifestyles</h1>
          <div class="lifestyles-wrapper">
            <div class="lifestyles-item">
              <button class="lifestyles-btn">FamilyFamily</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">First Car</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Electric</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Hybrid</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Offroad 4x4</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Tradie</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Performance</button>
            </div>
            <div class="lifestyles-item">
              <button class="lifestyles-btn">Prestige</button>
            </div>
          </div>
          <hr>
        </div>
        <div class="bodyType">
          <h1>Body type</h1>
          <div class="bodyType-wrapper">
            <div class="bodyType-item" v-for="type in getBodyType.data">
              <img style="width: 100%;" :src="type.image" :alt="type.name">
              <p>{{ type.name }}</p>
            </div>
          </div>
          <hr>
        </div>
        <div class="marks">
          <h1>Marks</h1>
          <div class="marks-wrapper">
            <div class="marks-item" v-for="mark in getMarks.data">
              <img style="max-width: 100%" :src="mark.image" :alt="mark.name">
              <p>{{ mark.name }}</p>
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="autoparts-settings-burger">
        <button @click="settingsModelStatus ? settingsModelStatus = false : settingsModelStatus = true">show settings</button>
        <div v-if="settingsModelStatus">
          <div class="autoparts-settings-model" style="position: absolute; width: 100%; z-index: 1; background-color: white">
            <div class="settings-sort">
              <div>
                <h1>Sort by</h1>
                <select class="custom-select" @change="changeSort($event)">
                  <option selected disabled>choose sort</option>
                  <option value="year">year</option>
                  <option value="name">name</option>
                  <option value="price">price</option>
                </select>
              </div>
              <div>
                <hr>
              </div>
            </div>
            <div class="setting-price">
              <div>
                <h1 style="margin-bottom: 6px; font-size: 25px">Price</h1>
                <div style="display: flex; justify-content: space-between; gap: 20px">
                  <input v-model="settingPrice.minPrice" style="width: 100%; padding: 0 5px; height: 40px; border: 2px solid gray"
                         placeholder="min">
                  <input v-model="settingPrice.maxPrice" style="width: 100%; padding: 0 5px; height: 40px; border: 2px solid gray"
                         placeholder="max">
                </div>
                <button style="color: white; background-color: black; height: 50px" @click="changePrice(settingPrice.minPrice, settingPrice.maxPrice)">SET</button>
              </div>
              <div>
                <p style="font-weight: 700; color: red">Prices based on <span style="font-weight: 300; color: blue">3000</span></p>
              </div>
              <div>
                <hr>
              </div>
            </div>
            <div class="setting-lifestyles">
              <h1>Lifestyles</h1>
              <div class="lifestyles-wrapper">
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">FamilyFamily</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">First Car</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Electric</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Hybrid</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Offroad 4x4</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Tradie</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Performance</button>
                </div>
                <div class="lifestyles-item">
                  <button class="lifestyles-btn">Prestige</button>
                </div>
              </div>
              <hr>
            </div>
            <div class="bodyType">
              <h1>Body type</h1>
              <div class="bodyType-wrapper">
                <div class="bodyType-item" v-for="type in getBodyType.data">
                  <img style="width: 100%;" :src="type.image" :alt="type.name">
                  <p>{{ type.name }}</p>
                </div>
              </div>
              <hr>
            </div>
            <div class="marks">
              <h1>Marks</h1>
              <div class="marks-wrapper">
                <div class="marks-item" v-for="mark in getMarks.data">
                  <img style="max-width: 100%" :src="mark.image" :alt="mark.name">
                  <p>{{ mark.name }}</p>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
      </div>
      <div class="autoparts-cars">
        <hot-deal-lists>
          <hot-deal-post v-for="data in getAllCarData?.data?.data" :data=data />
        </hot-deal-lists>
        <paginate
            :page-count="pageCount(getAllCarData.data?.pages)"
            :click-handler="clickCallback"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :container-class="'paginate'"
            page-class="page-item"
            page-link="page-link"
            :initial-page="initialPage(this.$route.params.page)"
        >
        </paginate>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<style scoped>
:deep(.paginate) {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  list-style: none;
}

:deep(.page-item) {
  margin: 0 5px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid #ddd;
  color: #007bff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

:deep(.page-link) {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.page-item:hover) {
  background-color: #007bff;
  color: #fff;
}

:deep(.page-item.active) {
  background-color: #007bff;
  color: #fff;
  cursor: default;
  pointer-events: none;
}

.bg-image {
  position: absolute;
  width: 100%;
  background-size: cover;
  top: -70px;
  background-image: url("/header/mainFrame.jpg");
  height: 60vh;
  object-fit: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}

.autoparts {
  padding-top: 50vh;
  background-color: #F1F0EB
}

.autoparts-wrapper {
  position: relative;
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
}

.autoparts-settings {
  max-width: 415px;
  background-color: white;
  padding: 20px 15px;
  margin-bottom: 100px;
}

.settings-sort {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 23px;
}

.settings-sort h1 {
  font-size: 25px;
  margin-bottom: 10px;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  color: #333;
  outline: none;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.custom-select:focus {
  border-color: #666;
}

.custom-select option {
  padding: 10px;
  background-color: #fff;
  color: #333;
}

.setting-price {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin-bottom: 25px;
}

.setting-lifestyles {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
}

.setting-lifestyles h1 {
  font-size: 25px;
}

.lifestyles-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.lifestyles-item {
  height: 100%;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
}

.lifestyles-btn {
  font-weight: 700;
  border: none;
  cursor: pointer;
  padding: 20px 0;
  width: 100%;
  background-color: white;
}

.bodyType {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.bodyType h1 {
  font-size: 25px;
}

.bodyType-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.bodyType-item {
  cursor: pointer;
  text-align: center;
  border: 2px solid #989898;
  border-radius: 5px;
}

.bodyType-item p {
  font-weight: 300;
  color: #4F4F4F;
}

.marks {

}

.marks h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

.marks-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.marks-item {
  cursor: pointer;
  text-align: center;
  border: 2px solid #7B7B7B;
  border-radius: 5px;
  padding: 6px 0;
}

.autoparts-cars {
  max-width: 70%;
  width: 100%;
  margin-top: 100px;
}
.autoparts-settings-burger {
  display: none;
}
.autoparts-settings-model {
  position: absolute;
}
@media (max-width: 933px) {
  .autoparts-settings {
    display: none;
  }
  .autoparts-settings-burger {
    display: block;
    position: absolute;
    top: -56px;
    height: 50px;
    background-color: #0b00a1;
    color: #fff;
    width: 100%;
  }
  .autoparts-settings-burger button {
    background-color: red;
    height: 100%;
    width: 100%;
    border: none;
    font-weight: 700;
    text-transform: uppercase;
  }
  .lifestyles-item {
    height: 50px;
  }
  .lifestyles-btn {
    height: 100%;
    background-color: black !important;
    padding: 0;
  }
}
</style>