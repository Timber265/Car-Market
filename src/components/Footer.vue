<script>
import Button from "./UI/Button.vue";

export default {
  name: "Footer",
  components: {Button}
}
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-wrapper">
        <div class="first-section">
          <div>
            <div style="display: flex; flex-direction: column; gap: 18px; margin-bottom: 47px">
              <img style="width: 130px" src="/footer/uat.svg" alt="">
              <p style="max-width: 236px">Buy, autoparts or service premium cars from Dubai</p>
            </div>
            <nav class="router">
              <ul style="display: flex; gap: 16px;">
                <li>
                  <router-link to="">FOR SALE</router-link>
                </li>
                <li>
                  <router-link to="">AUTOPARTS</router-link>
                </li>
                <li>
                  <router-link to="">SERVICING</router-link>
                </li>
                <li>
                  <router-link to="">ABOUT US</router-link>
                </li>
              </ul>
            </nav>
          </div>
          <div class="info-section" style="display: flex; flex-direction: column; justify-content: space-between">
            <div style="display: flex; gap: 40px; align-items: flex-end">
              <div>
                <p style="font-size: 12px;">Call the office at:</p> <br>
                <span style="font-size: 24px;">+ 971 608 68 08</span>
              </div>
              <div class="messanger" style="display: flex; gap: 20px">
                <img style="width: 25px" src="/footer/whatsapp.png" alt="">
                <img style="width: 25px" src="/footer/telegram.png" alt="">
              </div>
              <div class="info-btn"
                   style="flex-grow: 1; height: 55px; background-color: #000; border-radius: 10px; overflow: hidden ">
                <button
                    style="cursor: pointer;  width: 100%; height: 100%; background-color: transparent; font-weight: 500;font-size: 14px ;color: #fff;">
                  Request a callback
                </button>
              </div>
            </div>

            <div>
              <p style="">Our adress</p>
              <p>Showroom 1, Al Roumi building, Al Ittihad Rd, Port Saeed, Dubai, UAE</p>
            </div>
          </div>
        </div>

        <div class="second-section">
          <div class="second-colum-f-wrapper">
            <div class="second-colum-info">
              <div class="column-f-image">
                <img src="/footer/invoice.svg" alt="">
                <img src="/footer/info.svg" alt="">
              </div>
              <h3 class="column-f-text">INVOICE</h3>
            </div>

            <div class="second-colum-info">
              <div class="column-f-image">
                <img src="/footer/usdt.svg" alt="">
                <img src="/footer/info.svg" alt="">
              </div>
              <h3 class="column-f-text">USDT</h3>
            </div>

            <div class="second-colum-info">
              <div class="column-f-image">
                <img src="/footer/cash.svg" alt="">
                <img src="/footer/info.svg" alt="">
              </div>
              <h3 class="column-f-text">CASH</h3>
            </div>
          </div>

          <div>
            <div class="second-wrapper">
              <div class="second-colum-info span">
                <div class="column-f-image">
                  <img src="/footer/facebook.svg" alt="">
                  <img src="/footer/info.svg" alt="">
                </div>
                <h3 class="column-f-text">FACEBOOK</h3>
              </div>
              <div class="second-colum-info span">
                <div class="column-f-image">
                  <img src="/footer/inst.svg" alt="">
                  <img src="/footer/info.svg" alt="">
                </div>
                <h3 class="column-f-text">INSTAGRAM</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.second-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.second-colum-f-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 8px;
}

.second-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 200px);
  gap: 8px
}

.second-colum-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  border-radius: 7px;
  height: 100px;
  padding: 14px;
}

.column-f-image {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.column-f-text {
  text-align: right;
}

footer {
  position: relative;
  margin-bottom: 50px;
}

.first-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100px;
}

.first-section::before {
  content: "";
  position: absolute;
  height: 1px;
  top: -50px;
  left: 0;
  width: 100%;
  background-color: #d9d9d9;
}

.first-section::after {
  content: "";
  position: absolute;
  height: 1px;
  bottom: 140px;
  left: 0;
  width: 100%;
  background-color: #d9d9d9;
}

@media (max-width: 1080px) {
  .first-section::after {
    display: none;
  }

  .second-section {
    grid-template-columns: repeat(1, 1fr);
  }

  .second-colum-f-wrapper {
    justify-content: center;
  }

  .second-wrapper {
    margin: 20px 0;
    justify-content: center;
  }

  .second-colum-info {
    height: 90px;
  }

  .second-colum-info.span {
    color: #4F4F4F;
    font-weight: 700;
    font-size: 20px;
    height: 50px;
    flex-direction: row;
    align-items: center;
  }

  .column-f-image img:nth-child(2) {
    display: none;
  }
}

@media (max-width: 1150px) {
  .first-section {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  .info-section {
    flex-direction: column;
  }

  .info-section div {
    display: flex;
    flex-direction: column;
    align-items: start !important;
  }

  .router {
    display: none
  }

  .info-btn {
    width: 100%;
    margin-bottom: 50px;
  }
  .messanger {
    display: none !important;
  }
}

@media (max-width: 650px) {
  .second-section {
    grid-template-columns: repeat(1, 100%);

  }

  .second-colum-f-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }

  .second-wrapper {
    grid-template-columns: repeat(2, 50%);
  }
}

@media (max-width: 380px) {
  .second-wrapper {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>