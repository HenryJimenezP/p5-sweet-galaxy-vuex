<template>
    <div>
        <div class="container py-5">
           <h2 class="display-3 text-center mb-4 py-4 text-color"><b>Los Mejores sabores para tu paladar</b></h2>
        </div>

<info-pedidos/>
<info-cantidad-sabores/>
    <info-cantidad-adornos />


    </div>
</template>

<script>
// @ is an alias to /src

import InfoCantidadAdornos from '../components/InfoCantidadAdornos.vue'
import InfoCantidadSabores from '../components/InfoCantidadSabores.vue'
import InfoPedidos from '../components/InfoPedidos.vue'


export default {
  
  components: {
    InfoCantidadAdornos,
    InfoCantidadSabores,
    InfoPedidos
    
  }
}
</script>

<style scoped>
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