<template>
  <div class="sabores">
  
        <div class="container py-5">
           <h2 class="display-3 text-center mb-4 py-4 text-color"><b>Los Mejores sabores para tu paladar</b></h2>
        </div>

        <sabores />
        <adornos />

        <div class="container">
       <h2 class="text-center py-4">Haz tu combinación a tu gusto</h2>
  <div class="row">
    <div class="col-sm-4">
        <combinacion-sabores />
    </div>
    <div class="col-sm-8">
        <combinacion-adornos />
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import CombinacionAdornos from '../components/CombinacionAdornos.vue'
import CombinacionSabores from '../components/CombinacionSabores.vue'



export default {
  
  components: {
    Sabores,
    Adornos,
    CombinacionAdornos,
    CombinacionSabores
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
