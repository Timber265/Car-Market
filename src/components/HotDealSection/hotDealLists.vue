<script>
export default {
  name: "hotDealLists"
}
</script>

<template>
  <div class="hotdeal-wrapper">
    <slot/>
  </div>
</template>

<style scoped>
.hotdeal-wrapper {
  justify-content: center;
  display: grid; gap: 13px; grid-template-columns: repeat(auto-fit, 420px);
}

</style>