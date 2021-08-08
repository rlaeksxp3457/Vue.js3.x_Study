<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindinghtml">Data Binding Html</router-link> |
    <router-link to="/databindinginputtext"
      >Data Binding Input Text</router-link
    >
    | <router-link to="/databindingselect"> databindingselect </router-link> |
    <router-link to="/databindingcheckbox"> databindingcheckbox </router-link> |
    <router-link to="/databindingcheckbox2"> databindingcheckbox2 </router-link>
    | <router-link to="/databindingradio"> databindingradio </router-link> |
    <router-link to="/databindingattribue"> databindingattribue</router-link> |
    <router-link to="/databindingbutton">databindingbutton</router-link> |
    <router-link to="/databindingclass">databindingclass</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: [
        {
          name: "button1",
        },
      ],
    };
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
