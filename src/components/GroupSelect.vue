<script>
export default {
  name: "GroupSelect",

}
</script>

<template>
  <div class="groupSelect">
    <div class="container">
      <div class="group-wrapper" v-if="this.$route.path === '/sale' || this.$route.params.id">
        <div class="group2" style="flex-direction: row">
          <div class="group-item">
            <img class="group-img" src="/groupSelect/autoparts.png" alt="">
            <h1 class="group-title">AUTOPARTS</h1>
            <div class="group-btn">
              <router-link class="group-item__link" :to="{name:'autoparts_page', params:{page: 1, sort:'id'}}">MORE</router-link>
            </div>
          </div>
          <div class="group-item">
            <img class="group-img" src="/groupSelect/servicing.png" alt="">
            <h1 class="group-title">SERVICING</h1>
            <div class="group-btn">
              <router-link class="group-item__link" :to="{name: 'servicing_page'}">MORE</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="group-wrapper" v-else>
        <div class="group1">
          <div class="group-item">
            <img class="group-img" src="/groupSelect/carsforsale.png" alt="">
            <h1 class="group-title">Cars for sale</h1>
            <div class="group-btn">
              <router-link class="group-item__link" to="sale">MORE</router-link>
            </div>
          </div>
        </div>

        <div class="group2">
          <div class="group-item">
            <img class="group-img" src="/groupSelect/autoparts.png" alt="">
            <h1 class="group-title">AUTOPARTS</h1>
            <div class="group-btn">
              <router-link class="group-item__link" to="/autoparts/page_1/sort_id">MORE</router-link>
            </div>
          </div>
          <div class="group-item">
            <img class="group-img" src="/groupSelect/servicing.png" alt="">
            <h1 class="group-title">SERVICING</h1>
            <div class="group-btn">
              <router-link class="group-item__link" to="/servicing">MORE</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.groupSelect {
  margin-bottom: 120px;
}
.group-wrapper {
  display: flex;
  gap: 20px;
  align-items: center;
}

.group2 {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.group-item {
  position: relative;
  color: white;
  width: 100%;
  max-width: 658px;
  overflow: hidden;
  border-radius: 20px;
}

.group-img {
  display: block;
  width: 100%;
  transform: scale(1);
  transition: transform .4s, filter .4s;
}

.group-img:hover {
  transform: scale(1.1);
  transition: transform .4s, filter .4s;
}

.group-title {
  cursor: default;
  font-family: ModernWarfare, sans-serif;
  font-style: italic;
  position: absolute;
  left: 30px;
  top: 30px;
  font-size: 30px;
  text-transform: uppercase;
  color: white;
}

.group-btn {
  position: absolute;
  right: 35px;
  bottom: 30px;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  transition: .4s;
}

.group-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px 2px #ffffff;
  border-radius: 10px;
  backdrop-filter: blur(0);
  text-shadow: 2px 2px 5px red;
}

.group-item__link {
  display: inline-block;
  border: 2px solid #665d5d;
  border-radius: 10px;
  padding: 23px 44px;
  color: white;
  font-size: 20px;
  font-weight: 700
}

@media (max-width: 890px) {
  .group-wrapper {
    flex-direction: column;
  }
  .group1 {
    width: 100%;
  }
  .group2 {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .group-img {
    height: 100%;
    object-fit: cover;
  }
  .group-item {
    max-width: 100%;
    height: 300px;
  }
}
</style>