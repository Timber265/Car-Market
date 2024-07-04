<script>
export default {
  name: "CreateBody",
  data() {
    return {}
  },
  methods: {},
  mounted() {
  },
  props: {
    name: '',
    image: '',
  }
}
</script>

<template>
  <router-link class="body-link" to="/">
    <div class="body-item">
      <img :src=image :alt=name>
      <p>{{ name }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.body-link {
  transition: .4s;
}

.body-link:hover {
  transform: scale(1.1) rotate(1deg);
}

.body-item p {
  display: inline;
  transition: .4s;
}

.body-link:hover .body-item p {
  color: #0b00a1;
  font-weight: 700;
  transform: scale(1.1) rotate(1deg);
}

.body-item {
  max-width: 153px;
  text-align: center;
  transform: scale(1.1);
  transition: .5s ease;
}

.body-item img {
  width: 100%;
  margin-bottom: 10px;
}

.body-item p {
  color: #4071CB;
}

@media (max-width: 950px) {
  .body-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .body-item img {
    width: 70%;
  }
}
</style>