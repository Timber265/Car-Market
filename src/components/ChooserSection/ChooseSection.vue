<script>
import Button from "../UI/Button.vue";
import CreateBrand from "./CreateBrand.vue";
import CreateBody from "./CreateBody.vue";
import {gsap} from "gsap";

export default {
  name: "ChooseSection",
  components: {CreateBody, CreateBrand, Button},

  data() {
    return {
      statusSwitchBodyBrand: true,

    }
  },
  methods: {
    slideCarsBody(el) {
      gsap.to(el, {
        x: 0
      })
    },
    beforeSlideCarsBody(el) {
      gsap.to(el, {
        x: -10000
      })
    }
  }
}
</script>

<template>
  <div class="choose">
    <div class="container">
      <div class="choose-wrapper">
        <h2 class="choose-title">CHOOSE your vehicle</h2>
        <div class="choose-switcher"
             @click="statusSwitchBodyBrand ? statusSwitchBodyBrand = false : statusSwitchBodyBrand = true">
          <div class="switch-type" :style="{backgroundColor: statusSwitchBodyBrand ? '#4071cb' : 'white'}">
            <button :style="{color: statusSwitchBodyBrand ? 'white' : 'black'}" class="switch-btn">Body type</button>
          </div>
          <div class="switch-brand" :style="{backgroundColor: statusSwitchBodyBrand ? 'white' : '#4071cb'}">
            <button :style="{color: statusSwitchBodyBrand ? 'black' : 'white'}" class="switch-btn">Brand</button>
          </div>
        </div>

        <div v-if="statusSwitchBodyBrand" class="car-body">
          <transition appear @before-enter="beforeSlideCarsBody" @enter="slideCarsBody">
            <div class="body-wrapper">
              <create-body name="SUV" image="/chooseVH/body/suv.png"/>
              <create-body name="Sedan" image="/chooseVH/body/Sedan.png"/>
              <create-body name="Wagon" image="/chooseVH/body/Wagon.png"/>
              <create-body name="Hatch" image="/chooseVH/body/Hatch.png"/>
              <create-body name="Lite" image="/chooseVH/body/Lite.png"/>
              <create-body name="Convertible" image="/chooseVH/body/Convertible.png"/>
            </div>
          </transition>
        </div>

        <div v-else class="model">
          <transition appear @before-enter="beforeSlideCarsBody" @enter="slideCarsBody">
            <div class="model-wrapper">
              <create-brand name="Mercedes-Benz" image="/chooseVH/brand/Mercedes-Benz.png"/>
              <create-brand name="Lexus" image="/chooseVH/brand/Lexus.png"/>
              <create-brand name="Toyota" image="/chooseVH/brand/Toyota.png"/>
              <create-brand name="Ford" image="/chooseVH/brand/Ford.png"/>
              <create-brand name="Mitsubishi" image="/chooseVH/brand/Mitsubishi.png"/>
              <create-brand name="Subaru" image="/chooseVH/brand/Subaru.png"/>
              <create-brand name="Audi" image="/chooseVH/brand/Audi.png"/>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.model {
  height: 100px;
}
.car-body {
  height: 100px;
}
.model-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
}
.body-wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 0 20px;
}
.choose {
  margin-bottom: 100px;
}
.choose-title {
  text-align: center;
  font-family: ModernWarfare, sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.choose-switcher {
  display: flex;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-bottom: 62px;
}
.switch-type .switch-btn {
  width: 100%;
  color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.switch-brand .switch-btn {
  color: black;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.switch-type {
  position: relative;
  height: 65px;
  width: 50%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #4071cb; /*задаём цвет линии*/
}
.switch-btn {
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ModernWarfare, sans-serif;
  text-transform: uppercase;
  font-size: 20px;
  background-color: inherit;
  border: none;
}
.switch-brand {
  height: 65px;
  width: 50%;
  cursor: pointer;
  background-color: white;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media (max-width: 950px) {
  .choose-title {
    font-size: 20px;
  }
  .body-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
  .switch-type, .switch-brand{
    height: 50px;
  }
  .switch-btn {
    font-size: 15px;
  }
  .model-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 50px;
  }
  .model {
    height: initial;
  }

}
</style>