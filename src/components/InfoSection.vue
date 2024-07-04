<script>
import CardItem from "./UI/cardItem.vue";
import {gsap} from "gsap";

export default {
  name: "InfoSection",
  components: {CardItem},

  methods: {
    showCard(el) {
      gsap.to('.card-wrapper', {
        scrollTrigger: {
          trigger: '.card-wrapper',
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        x: 0,
        opacity: 1,
      })
    }
  }
}
</script>

<template>
  <div class="info" style="margin-bottom: 160px">
    <div class="container">
      <div style="overflow: hidden; position: relative; border-radius: 30px;">
        <img style="width: 100%; object-fit: cover" src="/infoSection/infoImageCar.png" alt="">
        <transition appear @enter="showCard">
          <div class="card-wrapper">
            <card-item title="ПОКУПКА АВТОМОБИЛЯ"
                       subtitle="В нашем автосалоне можно приобрести новые машины. Также можно воспользоваться услугой подбора автомобиля с пробегом и заказа авто с аукционов США."/>
            <card-item title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"
                       subtitle="В спектр наших услуг дополнительно входит продажа и индивидуальный подбор мототехники, квадроциклов, коммерческого транспорта специальной техники."/>
            <card-item title="ОПЫТ И НАДЕЖНОСТЬ"
                       subtitle="Более 9 лет безупречной успешной работы, за это время мы обслужили огромное количество корпоративных и частных клиентов."/>
            <card-item title="СОТРУДНИЧЕСТВО С НАМИ"
                       subtitle="Гарантия надежного партнерства, доступных цен и индивидуального подхода к каждому клиенту."/>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  transform: translate(-500px);
  opacity: 0;
  position: absolute;
  bottom: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 25px
}

@media (max-width: 1150px) {
  .card-wrapper {
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  .card-wrapper {
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(1, 500px);
    grid-row: 200;
    height: 95%;
  }

  img {
    height: 780px;
  }
}

@media (max-width: 500px) {
  .info {
    display: none;
  }
}


</style>