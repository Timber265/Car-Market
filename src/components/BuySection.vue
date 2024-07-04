<script>
import Button from "./UI/Button.vue";
import {gsap} from "gsap";

export default {
  name: "BuySection",
  components: {Button},

  methods: {
    showItem1(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: '.one',
          start: 'top center',
          end: 'top bottom',
        },
        opacity: 1,
      })
    },
    showItem2(el) {
      gsap.to(el, {
        duration: 2.5,
        scrollTrigger: {
          trigger: '.two',
          start: 'top center',
          end: 'top bottom',
        },
        opacity: 1,
      })
    },
    showItem3(el) {
      gsap.to(el, {
        duration: 3.5,
        scrollTrigger: {
          trigger: '.two',
          start: 'top center',
          end: 'top bottom',
        },
        opacity: 1,
      })
    },
    showItem4(el) {
      gsap.to(el, {
        duration: 4.5,
        scrollTrigger: {
          trigger: '.two',
          start: 'top center',
          end: 'top bottom',
        },
        opacity: 1,
      })
    },
    showItem5(el) {
      gsap.to(el, {
        duration: 5.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: '.two',
          start: 'top center',
          end: 'top bottom',
        },
        opacity: 1,
      })
    },
  }
}

</script>

<template>
  <div class="buy">
    <div class="container">
      <h1 class="buy-title">Как купить автомобиль с доставкой в страны СНГ</h1>
      <div class="buy-wrapper">

        <div class="item-wrapper">
          <transition appear @enter="showItem1">
            <div class="buy-item one">
              <h2 class="item-num">1</h2>
              <div class="item-wrapper-sec">
                <h1 class="item-title">Заявка</h1>
                <p>Вы звоните нам или оставляете заявку на сайте и с Вами связывается наш менеджер.</p>
              </div>
            </div>
          </transition>

          <transition appear @enter="showItem2">
            <div class="buy-item two">
              <h2 class="item-num">2</h2>
              <div class="item-wrapper-sec">
                <h1 class="item-title">ДОГОВОР</h1>
                <p>Согласовываем автомобиль, условия работы и подписываем договор. Вносите предоплату.</p>
              </div>
            </div>
          </transition>

          <transition appear @enter="showItem3">
            <div class="buy-item three">
              <h2 class="item-num">3</h2>
              <div class="item-wrapper-sec">
                <h1 class="item-title">ОПЛАТА</h1>
                <p>Вы звоните нам или оставляете заявку на сайте и с Вами связывается наш менеджер.</p>
              </div>
            </div>
          </transition>
        </div>

        <div class="item-wrapper">
          <transition appear @enter="showItem4">
            <div class="buy-item four">
              <h2 class="item-num">4</h2>
              <div class="item-wrapper-sec">
                <h1 class="item-title">ДОСТАВКА</h1>
                <p>Ожидаете от 30 до 60 дней (зависит от страны и пункта назначения).</p>
              </div>
            </div>
          </transition>

          <transition appear @enter="showItem5">
            <div class="buy-item five">
              <h2 class="item-num">5</h2>
              <div class="item-wrapper-sec">
                <h1 class="item-title">ОТПРАВИТЬ ЗАПРОС</h1>
                <div class="button-wrapper">
                  <p>Оставьте контактные данные и мы обязательно свяжемся с вами</p>
                  <button>Оставить заявку</button>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.buy {
  margin: 165px 0 110px 0;
}

.buy-title {
  margin: 0 auto;
  max-width: 673px;
  font-weight: 400;
  font-size: 30px;
  line-height: 145%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: #000;
  margin-bottom: 24px;
}

.item-wrapper {
  display: flex;
  gap: 18px;
  min-height: 250px;
  margin-bottom: 18px;
}

.buy-item {
  padding: 20px;
  border: 1px solid #4f4f4f;
  border-radius: 10px;
}

.item-wrapper-sec {
  margin-top: 40px;
}

.item-num {
  font-weight: 700;
  font-size: 32px;
}

.item-title {
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
}

.item-wrapper-sec p {
  line-height: 130%;
  font-weight: 400;
}

.button-wrapper p {
  max-width: 327px;
}

.button-wrapper button {
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px;
  height: 45px;
  font-weight: 600;
  max-width: 280px;
  color: #010101;
  border: 1px solid #4f4f4f;
  transition: .4s;
}

.button-wrapper button:hover {
  color: #6b2e2e;
  box-shadow: 0 0 10px 2px black;
}

.one {
  opacity: 0;
  width: 25%;
}

.two {
  opacity: 0;
  width: 45%;
}

.three {
  opacity: 0;
  width: 30%;
}

.four {
  opacity: 0;
  width: 40%;
}

.five {
  opacity: 0;
  width: 60%;
}


@media (max-width: 1040px) {
  .item-wrapper {
    width: 90%;
    flex-direction: column;
  }

  .buy-item {
    width: 100%;
  }

  .button-wrapper {
    flex-direction: column;
  }

  .button-wrapper button {
    margin-top: 20px;
  }
}
</style>