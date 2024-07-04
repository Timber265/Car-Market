<script>
export default {
  name: "CreateBrand",

  props: {
    name: '',
    image: '',
  }
}
</script>

<template>
  <router-link class="brand-link" to="">
    <div class="brand-item">
      <img :src=image :alt=name>
      <p>{{ name }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.brand-item {
  text-align: center;
}
.brand-link {
  transition: .4s;
}
.brand-link:hover {
  transform: scale(1.2);
}.brand-link:hover p {
  color: #0b00a1;
  font-weight: 700;
}

.brand-link:hover .brand-item img {
  box-shadow: 0 0 15px 4px rgb(64, 113, 203);
}

.brand-item img {
  border-radius: 50%;
  margin-bottom: 10px;
  transition: .4s;
}

.brand-item p {
  color: #0020F1;
}
</style>