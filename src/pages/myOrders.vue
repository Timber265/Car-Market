<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "myOrders",
  computed: {
    ...mapActions(['setMyOrders']),
    ...mapGetters(['getMyOrders'])
  },
  created() {
    this.setMyOrders
  }
}
</script>

<template>
  <div class="orders">
    <div class="container">
      <div class="orders-wrapper">
        <div class="order-item" v-for="order in getMyOrders.data">
          <img src="/myOrders/bill.png" alt="">
          <h1 style="text-align: center; font-size: 25px; margin-bottom: 10px">Номер заказа: {{ order.id }}</h1>
          <div style="font-family: spaceMono, sans-serif; display: flex; flex-direction: column; gap: 15px">
            <p><span>Имя Заказчика:</span> {{ order.nameSurname }}</p>
            <p><span>Заказ: {{order.carModel}}</span></p>
            <p><span>Цена: {{order.price}} $</span></p>
            <p><span>Номер:</span> {{ order.phoneNumber }}</p>
            <p><span>Город:</span> {{ order.town }}</p>
            <p><span>Адресс:</span> {{ order.address }}</p>
            <p><span>Почта:</span> {{ order.email }}</p>
            <p><span>Страховое Агенство:</span> {{ order.nameInsuranceCompany }}</p>
            <p><span>Срок Страховки:</span> {{ order.insurancePeriod }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.orders {
  margin-top: 50px;
}

.orders-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 20px;
}

.order-item {
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: 10px;
  background-color: rgb(241, 240, 235);
  color: black;
  overflow: hidden;
}
.order-item img {
  position: absolute;
  z-index: -1;
  width: 170%;
  height: 100%;
  left: -37%;
  top: 0;
}
.order-item span {
  font-weight: 700;
}
</style>