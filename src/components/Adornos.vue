<template>
<div class="adorno">
    <section class="container py-4">
    <br>
        <h1 class="text-center text-color">Adornos</h1>
        <hr>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-frutas.jpg" class="card-img-top" alt="Pastel chocolate" />
                    <div class="card-body">
                        <h2 class="text-center">$99 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Frutas</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-fondant.jpg" class="card-img-top" alt="Pastel vainilla" />
                    <div class="card-body">
                        <h2 class="text-center">$159 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Fondant</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-betun.jpg" class="card-img-top" alt="Pastel fresa" />
                    <div class="card-body">
                        <h2 class="text-center">$79 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Betún</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-chispas.jpg" class="card-img-top" alt="Pastel Tres leches" />
                    <div class="card-body">
                        <h2 class="text-center">$69 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Chispas / semillas</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  name: 'Adornos',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-color{
    color:deeppink;
    font-weight: 600;
}
.moneda{
    font-size: 15px;
}
</style>