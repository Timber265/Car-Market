<script>
export default {
  name: "Servicing"
}
</script>

<template>
  <div class="wrapper">
    <div>
      <section id="services" style="background-color: yellowgreen">
        <div class="container">
          <h2 style="font-size: 35px; margin-bottom: 20px">Наши услуги</h2>
          <div class="service-list">
            <div class="service">
              <h3>Диагностика</h3>
              <p>Профессиональная диагностика автомобиля с использованием современного оборудования.</p>
            </div>
            <div class="service">
              <h3>Ремонт двигателя</h3>
              <p>Качественный ремонт двигателя любой сложности.</p>
            </div>
            <div class="service">
              <h3>Замена масла</h3>
              <p>Быстрая и качественная замена масла в вашем автомобиле.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style="background-color: orange; height: 200px">
        <div class="container">
          <h2 style="font-size: 25px">О нас</h2>
          <p style="">Мы - команда профессионалов с многолетним опытом работы в сфере автомобильного сервиса. Мы
            гарантируем
            высокое
            качество обслуживания и индивидуальный подход к каждому клиенту.</p>
        </div>
      </section>

      <section id="contact" style="background-color: #1f4c65; color: #fff; height: 200px">
        <div class="container">
          <h2>Контакты</h2>
          <p>Адрес: ул. Примерная, д. 1, Москва, Россия</p>
          <p>Телефон: +7 123 456 7890</p>
          <p>Email: info@autoservice.ru</p>
        </div>
      </section>
    </div>
    <div>
      <footer>
        <div class="container">
          <p>&copy; 2024 Автосервис. Все права защищены.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 72px)
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
}

header h1 {
  margin: 0;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline;
  margin: 0 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

section {
  padding: 20px 0;
}

h2 {
  text-align: center;
  margin-top: 0;
}

.service-list {
  display: flex;
  justify-content: space-around;
}

.service {
  border: 1px solid #ccc;
  padding: 20px;
  width: 30%;
  box-sizing: border-box;
  text-align: center;
}

.service h3 {
  font-size: 25px;
  color: #212121;
  margin-bottom: 20px;
}

.service p {
  font-weight: 700;
  font-size: 17px;
  color: black;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .service-list {
    flex-direction: column;
    align-items: center;
  }

  .service {
    width: 80%;
    margin-bottom: 20px;
  }
}
</style>