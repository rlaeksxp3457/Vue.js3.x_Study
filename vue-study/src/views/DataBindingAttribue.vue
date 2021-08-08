<template>
  <div>
    <img :src="src" alt="vue.js 로고이미지" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "https://kr.vuejs.org/images/logo.png",
    };
  },
};
</script>

<style>
</style>