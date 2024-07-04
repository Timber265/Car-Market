<script>
import {mapActions} from "vuex";

export default {
  name: "hotDealPost",
  methods: {
    ...mapActions(['setCurrentCar']),
    scrollToHead() {
      window.scrollTo({
        top: 200,
        behavior: 'smooth'
      });
    }
  },
  props: {
    data: Object,
  },
}
</script>

<template>
  <router-link :to="{name: 'forsale_page', params: {id: data.id}}" @click="setCurrentCar(data.id), scrollToHead()"  class="car">
    <div class="car-name">
      <h2>{{ data.model }}</h2>
      <p>{{ data.year }}</p>
    </div>
    <div class="car-image">
      <img :src=data.image alt="">
      <h1>{{ data.name }}</h1>
    </div>
    <div class="wrapperForFB">
      <div class="car-feature">
        <div class="car-feature-item">
          <img src="/hotDeals/motor.png" alt="">
          <p>{{ data.characteristics.engine_displacement }}</p>
        </div>
        <div class="car-feature-item">
          <img src="/hotDeals/motor.png" alt="">
          <p>{{ data.characteristics.drive }}</p>
        </div>
        <div class="car-feature-item">
          <img src="/hotDeals/motor.png" alt="">
          <p>{{ data.characteristics.body_type }}</p>
        </div>
      </div>
      <div class="car-button">
        <div>
          <button>{{data.price}} USD</button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.car {
  cursor: default;
  z-index: 0;
  overflow: hidden;
  position: relative;
  max-width: 325px;
  padding: 20px;
  border: 1px solid #D9D9D9;
  border-radius: 10px;
  background-color: #f1f0eb;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  transition: .5s;
}

.car:hover {
  background-color: #fff;
}

.car:hover .car-image h1 {
  color: black;
}

.car-name {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.car-name h1 {
  font-size: 16px;
  font-weight: 400;
}

.car-name p {
  font-size: 10px;
  font-weight: 400;
  color: #000;
}

.car-feature {
  gap: 20px;
}

.car-feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 700;
  gap: 5px;
}

.car-image img {
  position: relative;
  z-index: 3;
  width: 100%;
}

.car-image h1 {
  transition: 1s;
  position: absolute;
  color: #fff;
  text-transform: uppercase;
  z-index: 1;
  font-size: 50px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
}

.car-feature {
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-bottom: 10px;
}

.car-button button {
  cursor: pointer;
  width: 90%;
  font-size: 20px;
  height: 50px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 700;
  background-color: transparent;
}

@media (max-width: 931px) {
  .car-feature {
    justify-content: space-between;
  }
  .car-button {
    width: 95%;
  }
}
</style>