<template>
  <div>
    <!--
      양방향 데이터 바인딩: 둘다 같은 값을 가지고 있는것
      value 값에 데이터 바인딩 을 할시 v-bind:value="변수명" *v-bind 는 생략 가능* :value="변수명"
     -->
    <label
      ><input type="radio" v-bind:value="radioValue1" v-model="picked"
    /></label>
    <label
      ><input type="radio" v-bind:value="radioValue2" v-model="picked"
    /></label>
    <label
      ><input type="radio" v-bind:value="radioValue3" v-model="picked"
    /></label>
    <br />
    <span>선택한 지역: {{ picked }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "",
      radioValue1: "서울",
      radioValue2: "부산",
      radioValue3: "제주",
    };
  },
};
</script>

<style>
</style>