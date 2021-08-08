<template >
  <div>
    <input type="text" v-model="valuemodel" />
    <input type="number" v-model.number="numberModel" />
    <input type="textarea" v-model="textareamodel" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      valuemodel: "South korea",
      numberModel: 3,
      textareamodel:
        "안녕하세요 주니어 개발자 이범수 입니다. vue.js 공부중입니다",
    };
  },
};
</script>
<style>
</style>