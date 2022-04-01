<template>
  <div class="hello">
    
    <section class="container py-5 text-center">
                <h1 class="text-color">Bienvenidos a Sweet Galaxy</h1>
                <p>Te ofrecemos los mejores sabores con una excelente calidad, acompañando cada momento de felicidad a tu vida.
                </p>
    </section>

    <section class="container py-4">

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card h-100">
                    <router-link to="/sabores" class="hover-img">
                        <img src="../assets/sabores.jpg" class="card-img-top" alt="sabores" />
                    </router-link>
                    <div class="card-body">
                        <hr>
                        <h5 class="card-title text-color">Sabores / Adornos</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <router-link to="/pedidos" class="hover-img">
                        <img src="../assets/pedidos.jpg" class="card-img-top" alt="Pedidos" />
                    </router-link>
                    <div class="card-body">
                        <hr>
                        <h5 class="card-title text-color">Pedido</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #FEEAE8;
}
.logo-img{
  width: 30%;
}
.img-adorno{
  width: 80%;
}
.card {
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
}
.hover-img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}
.hover-img:hover {
  background-color: white;
  opacity: 0.5;
  transition: 0.4;
}
.text-color{
    color:deeppink;
    font-weight: 600;
}
</style>
