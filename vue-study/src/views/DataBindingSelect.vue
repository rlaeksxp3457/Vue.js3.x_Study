<template>
  <div>
    <select v-model="as">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      as: "02",
    };
  },
};
</script>

<style>
</style>