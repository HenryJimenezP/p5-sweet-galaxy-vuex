<template>
<div>
    <header class="py-1 header text-center">
    <div class="container py-1 text-white">
      <router-link to="/">
        <img class="img-fluid img-header" src="../assets/sweet-galaxy-logo.png"  alt="Sweet Galaxy Logo">
      </router-link>
    </div>
  </header>
</div>
</template>

<script>
export default {
  name: 'HeaderLogoSG'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-header{
    width: 10%;
}
.img{
    -webkit-filter: drop-shadow(5px 5px 10px #222);
  filter: drop-shadow(5px 5px 10px #222);

}
.header{
    background: #F48FB1;
}
</style>