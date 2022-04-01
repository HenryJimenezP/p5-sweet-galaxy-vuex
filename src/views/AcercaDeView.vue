<template>
<div>
<!-- Background image -->
    <section class="container-fluid py-3 mb-3">
        <div class="container py-5">
            <h2 class="display-2 text-center mb-4 py-4 text-color"><b>Dale un pedacito de felicidad a tu vida</b></h2>
        </div>
    </section>
    <!-- Background image -->
    
    <acerca-de />
</div>
</template>

<script>
// @ is an alias to /src
import AcercaDe from '@/components/AcercaDe.vue'



export default {
  name: 'AcercaDeView',
  components: {
    AcercaDe
  }
}
</script>

<style scoped>
.background-nosotros {
  background: url(../assets/bg-pastel.jpg) top right no-repeat;
  background-size: cover;
  background-position: top;
    background-repeat: no-repeat;
  height: 70vh;
  min-height: 450px;
}

.text-color{
    color:deeppink;
    font-weight: 500;
}
</style>