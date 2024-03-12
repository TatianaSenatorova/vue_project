<template>
  <div id="App">
    <HeaderComp></HeaderComp>
    <DetailedCardComp></DetailedCardComp>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import DetailedCardComp from './components/DetailedCardComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';


export default {
  name: 'App',
  components: {
    DetailedCardComp, 
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="scss">
#app {
  @import 'assets/vars';
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100..900;1,100..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

img {
    max-width: 100%;
    display: block;
}

body {
    font-family: "Jost", Arial, sans-serif;
    font-size: 22px;
    line-height: 33px;
    font-weight: 400;
    letter-spacing: 0.22px;
    color: #4d5053;
    background-color: #FFF;
}

.center {
   width: 1200px;
   margin: 0 auto;
}
}
</style>
