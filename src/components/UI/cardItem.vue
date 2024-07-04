<script>
export default {
  name: "cardItem",

  props: {
    title: String,
    subtitle: String,
  }
}
</script>

<template>

  <div class="card">
    <div class="bg"></div>
    <div class="card-info">
      <h1 style="font-size: 25px; font-weight: 300">{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
    <div class="blob"></div>
  </div>

</template>

<style scoped>
.card {
  position: relative;
  min-height: 325px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-info {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
}

.bg {
  position: absolute;
  width: 100%;
  min-height: 325px;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  transform: translate(-50%, -50%);
  animation: blob-bounce 3s infinite alternate;
}

@keyframes blob-bounce {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(4);
  }
}

@media (max-width: 1150px) {
  .card {
    border-radius: 20px;
    overflow: hidden;
    min-height: initial;
    justify-content: space-around;
    width: 85%;
  }

}
</style>