<script>
import {mapActions, mapGetters} from "vuex";
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "InfoCurrentCar",
  data() {
    return {
      orderModel: false,

      modelDataOrder: {
        carModel: '',
        price: null,
        nameSurname: '',
        email: '',
        phoneNumber: '',
        address: '',
        town: '',
        mailIndex: '',
        cardNumber: null,
        nameOwnerCard: '',
        cardExpiryDate: null,
        insurancePeriod: null,
        nameInsuranceCompany: '',
        confirmation: {
          confirmCondition: false,
          agreeProcessingPersonData: false,
        }
      }
    }
  },
  setup() {
    const notify = () => {
      toast.success("Your order was submitted", {
        autoClose: 1000,
      })
    }
      const notifyError = () => {
        toast.error("Fill in all the fields", {
          autoClose: 5000,
        })
      }
    return {notify, notifyError}
  },
  computed: {
    ...mapGetters(['getCurrentCar'])
  },
  methods: {
    ...mapActions(['setCurrentCar', 'setInBaseDataMyOrders']),

    createOrder() {
      const { nameSurname, email, phoneNumber, address, town, mailIndex, cardNumber, nameOwnerCard, cardExpiryDate, insurancePeriod, nameInsuranceCompany, confirmation } = this.modelDataOrder;
      const isValid = nameSurname && email && phoneNumber && address && town && mailIndex && cardNumber && nameOwnerCard && cardExpiryDate && insurancePeriod && nameInsuranceCompany && confirmation.confirmCondition && confirmation.agreeProcessingPersonData;
      if (isValid) {
        this.orderModel = false
        this.notify()
        this.modelDataOrder.carModel = this.getCurrentCar?.data?.model
        this.modelDataOrder.price = this.getCurrentCar?.data?.price
        this.setInBaseDataMyOrders(this.modelDataOrder)
        this.modelDataOrder.nameSurname = '';
        this.modelDataOrder.email = '';
        this.modelDataOrder.phoneNumber = '';
        this.modelDataOrder.address = '';
        this.modelDataOrder.town = '';
        this.modelDataOrder.mailIndex = '';
        this.modelDataOrder.cardNumber = '';
        this.modelDataOrder.nameOwnerCard = '';
        this.modelDataOrder.cardExpiryDate = '';
        this.modelDataOrder.insurancePeriod = '';
        this.modelDataOrder.nameInsuranceCompany = '';
        this.modelDataOrder.confirmation.confirmCondition = false;
        this.modelDataOrder.confirmation.agreeProcessingPersonData = false;
      }else {
        this.notifyError()
      }
    }
  },
  created() {
    this.$route.params.id ? this.setCurrentCar(this.$route.params.id) : null
  }
}
</script>

<template>
  <div v-if="getCurrentCar.data" class="current">
    <div class="container">
      <h1 style="font-size: 32px; font-weight: 300">{{ getCurrentCar.data?.model }}</h1>
      <div class="current-wrapper">
        <div class="current-left">
          <div class="current-image"><img :src=getCurrentCar.data?.image alt=""></div>
          <div class="current-information">
            <div class="current-text">
              <h1>Description</h1>
              <p>Alloy wheels, tinting, sunroof, spoiler, railings, xenon, bixenon, crystal optics, lensed optics,
                daytime
                running lights, fog lights, headlight washer, headlight corrector, leather, combined, curtains, audio
                system, built-in phone, bluetooth, CD, CD-changer, MP3, USB, DVD, DVD-changer, subwoofer, GUR, ABS, SRS,
                winter mode, sport mode, keyless access, full electric package, central locking, air conditioner,
                climate
                control, cruise control, trip computer, navigation system, multicooker, seat heating, heated rear seats,
                seat ventilation, seat memory, steering wheel memory, parktronic, rearview camera, light sensor, rain
                sensor, tire pressure sensor, air suspension, variable ground clearance, fresh imported, freshly
                delivered</p>
            </div>
            <div class="characteristics">
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/Horsepower.svg" alt="">
                </div>
                <div>
                  <h2>Horsepower</h2>
                  <p>{{ getCurrentCar.data.characteristics.horsepower }} hp</p>
                </div>
              </div>
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/WheelDrive.svg" alt="">
                </div>
                <div>
                  <h2>Wheel drive</h2>
                  <p>{{ getCurrentCar.data.characteristics.wheel_drive }}</p>
                </div>
              </div>
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/numberSeats.svg" alt="">
                </div>
                <div>
                  <h2>Number of seats</h2>
                  <p>{{ getCurrentCar.data.characteristics.seating_capacity }}</p>
                </div>
              </div>
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/Acceleration.svg" alt="">
                </div>
                <div>
                  <h2>Acceleration to 100 km/h</h2>
                  <p>{{ getCurrentCar.data.characteristics.acceleration_0_100 }}</p>
                </div>
              </div>
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/Average.svg" alt="">
                </div>
                <div>
                  <h2>Average range per charge</h2>
                  <p>{{ getCurrentCar.data.characteristics.average_range_per_charge }}</p>
                </div>
              </div>
              <div class="characteristics-item">
                <div>
                  <img src="/for-Sale-Icon/Transmission.svg" alt="">
                </div>
                <div>
                  <h2>Transmission</h2>
                  <p>{{ getCurrentCar.data.characteristics.transmission }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="current-right">
          <div class="current-right-s"
               style="display: flex; flex-direction: column; justify-content: space-between; height: 100%">
            <h1 class="right-car-name">{{ getCurrentCar.data?.name }}</h1>
            <div class="right-wrapper">
              <div class="right-item">
                <h2 class="right-title">Drive</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.drive }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Engine displacement</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.engine_displacement }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Engine type</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.engine_type }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Fuel consumption per 100 km</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.fuel_consumption_100km }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Acceleration to 100 km/h</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.acceleration_0_100 }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Engine power</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.engine_power }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Number of gears</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.fuel_consumption_100km }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Trunk capacity max</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.trunk_capacity_max }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Type of gearbox</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.gearbox_type }}</p>
              </div>
              <div class="right-item">
                <h2 class="right-title">Body type</h2>
                <p class="right-inf">{{ getCurrentCar.data?.characteristics?.body_type }}</p>
              </div>
            </div>
            <div class="right-button">
              <button @click="orderModel ? orderModel = false : orderModel = true">ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="order-model" v-if="orderModel">
    <div class="order-wrapper">
      <form class="order-form" @submit.prevent="createOrder">
        <div class="close-model" @click="orderModel ? orderModel = false : null">X</div>
        <h2>Информация о покупателе</h2>
        <div><label>Имя и Фамилия: <input type="text" name="name" required
                                          v-model="modelDataOrder.nameSurname"/></label></div>
        <div><label>Электронная почта: <input type="email" name="email" required
                                              v-model="modelDataOrder.email"/></label></div>
        <div><label>Номер телефона: <input type="tel" name="phone" required
                                           v-model="modelDataOrder.phoneNumber"/></label></div>
        <div><label>Адрес проживания: <input type="text" name="address" required
                                             v-model="modelDataOrder.address"/></label></div>
        <div><label>Город: <input type="text" name="city" required v-model="modelDataOrder.town"/></label></div>
        <div><label>Почтовый индекс: <input type="number" name="zipcode" required
                                            v-model="modelDataOrder.mailIndex"/></label></div>

        <h2>Информация о транспортном средстве</h2>
        <div><label>Марка автомобиля: <input type="text" name="carBrand" :value="getCurrentCar.data?.name"
                                             disabled/></label></div>
        <div><label>Модель автомобиля: <input type="text" name="carModel" :value="getCurrentCar.data?.model" disabled/></label>
        </div>
        <div><label>Год выпуска: <input type="number" name="year" :value="getCurrentCar.data?.year" disabled/></label>
        </div>
        <div><label>Тип двигателя: <input name="engineType" :value="getCurrentCar.data?.characteristics?.engine_type"
                                          disabled/></label></div>

        <h2>Способы оплаты</h2>
        <div><label>Номер карты: <input type="number" name="cardNumber" required
                                        v-model="modelDataOrder.cardNumber"/></label></div>
        <div><label>Имя владельца карты: <input type="text" name="cardHolderName" required
                                                v-model="modelDataOrder.nameOwnerCard"/></label></div>
        <div><label>Срок действия карты: <input type="text" name="cardExpiry" required
                                                v-model="modelDataOrder.cardExpiryDate"/></label></div>

        <h2>Информация о страховке</h2>
        <div><label>Выбор типа страховки: <select name="insuranceType" required>
          <option value="osago">ОСАГО</option>
          <option value="kasko">КАСКО</option>
        </select></label></div>
        <div><label>Период действия страховки: <input type="text" name="insurancePeriod" required
                                                      v-model="modelDataOrder.insurancePeriod"/></label></div>
        <div><label>Имя страховой компании: <input type="text" name="insuranceCompany" required
                                                   v-model="modelDataOrder.nameInsuranceCompany"/></label></div>

        <h2>Согласие и подтверждение</h2>
        <div><label><input type="checkbox" name="terms" required v-model="modelDataOrder.confirmation.confirmCondition"/>
          Согласен с условиями покупки</label></div>
        <div><label><input type="checkbox" name="dataProcessing" required
                           v-model="modelDataOrder.confirmation.agreeProcessingPersonData"/> Подтверждаю согласие на обработку
          персональных данных</label></div>

        <div>
          <button type="submit">Оформить покупку</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.close-model {
  position: absolute;
  right: 20px;
  top: 20px;
  border-radius: 10px;
  color: #fff;
  background-color: #1f4c65;
  padding: 10px 20px;
  cursor: pointer;

  transition: .4s;
}

.order-model {
  position: absolute;
  z-index: 999;
  margin-top: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.order-wrapper {
  width: 100%;
  height: 100%;
  background-color: gray;
  padding: 20px;
  box-sizing: border-box;
}

.order-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-form h2 {
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #02ffbc;
}

.order-form div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.order-form label {
  font-weight: bold;
  color: white;
}

.order-form input, .order-form select {
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  color: black;
}

.order-form input:focus, .order-form select:focus {
  border-color: #007BFF;
  outline: none;
}

.order-form button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.order-form button:hover {
  background-color: #0056b3;
}

.order-form input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}

.order-form div.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.current {
  margin-top: 50px;
  margin-bottom: 50px;
}

.current-wrapper {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.current-left {
  max-width: 55%;
}

.current-image img {
  width: 100%;
}

.current-information {
  background-color: white;
  border-radius: 30px;
  padding: 30px;
  overflow: hidden;
}

.current-text h1 {
  text-transform: uppercase;
  border-bottom: 2px solid #880606;
}

.current-text h1 {
  font-size: 24px;
  margin-bottom: 14px;
}

.current-text p {
  font-size: 16px;
  margin-bottom: 14px;
}

.current-right {
  background-color: white;
  border-radius: 30px;
  padding: 30px;
  flex-grow: 1;
  height: 695px;
}

.characteristics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

}

.characteristics-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 174px;
}

.characteristics-item h2 {
  font-weight: 400;
}

.characteristics-item p {
  font-size: 18px;
  font-weight: 700;
  color: #4F4F4F;
}

.right-car-name {
  font-size: 30px;
  margin-bottom: 30px;
}

.right-wrapper {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.right-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.right-inf {
  font-weight: 700;
}

.right-button button {
  cursor: pointer;
  width: 100%;
  padding: 20px 0;
  background-color: transparent;
  border: 1px solid #4f4f4f;
  color: #4f4f4f;
  border-radius: 8px;
  font-weight: 700;
  transition: .4s;
}

.right-button button:hover {
  background-color: gray;
  color: #fff;
  box-shadow: 0 0 15px 5px darkgray;
}

@media (max-width: 990px) {
  .current-wrapper {
    flex-direction: column;
  }

  .current-left {
    max-width: 100%;
  }

  .current-right {
    width: 100%;
    padding: 0;
  }

  .current-right-s {
    padding: 30px;
    gap: 40px;
    justify-content: initial !important;
    background-color: white;
    height: auto !important;
  }
}

@media (max-width: 610px) {
  .characteristics {
    grid-template-columns: repeat(2, 1fr);
    font-size: 10px;
  }

  .current-right-s {
    font-size: 15px;
  }

  @media (max-width: 442px) {
    .current-right-s {
      font-size: 10px;
    }
  }
}
</style>