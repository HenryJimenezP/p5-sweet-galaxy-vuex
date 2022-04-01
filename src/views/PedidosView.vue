<template>
  <div class="pedidos">
    <div class="">    
     <!-- Background image -->
    <section class="container py-5">
                    <h1 class="display-1 text-center text-color"><b>Realiza tus pedidos fácilmente</b></h1>
    </section>
    <!-- Background image -->
     
        <pedidos />
</div>
  </div>
  </template>

<script>
// @ is an alias to /src

import Pedidos from '@/components/Pedidos.vue'



export default {
  name: 'PedidosView',
  components: {
    Pedidos,
    
  }
}
</script>

<style scoped>
  .pedidos {
  background: #feeae8;
}
.text-color{
    color:deeppink;
        -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
text-shadow: 2px 2px 2px white;
}
.text-desc{
    color: white;
    -webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;

}
</style>
