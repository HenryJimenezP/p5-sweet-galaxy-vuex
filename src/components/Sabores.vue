<template>
  <div class="sabor">
    
    <section class="container py-4">

        <h1 class="text-center text-color">Menú</h1>
        <hr>

        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-chocolate.jpg" class="card-img-top" alt="Pastel chocolate" />
                    <div class="card-body">
                        <h2 class="text-center">$399 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Chocolate</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-vainilla.jpg" class="card-img-top" alt="Pastel vainilla" />
                    <div class="card-body">
                        <h2 class="text-center">$399 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Vainilla</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-fresa.jpg" class="card-img-top" alt="Pastel fresa" />
                    <div class="card-body">
                        <h2 class="text-center">$399 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Fresa</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-tres-leches.jpg" class="card-img-top" alt="Pastel Tres leches" />
                    <div class="card-body">
                        <h2 class="text-center">$599 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Tres leches</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-red-velvet.jpg" class="card-img-top" alt="Pastel Red velvet" />
                    <div class="card-body">
                        <h2 class="text-center">$499 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Red velvet</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pastel-zanahoria.jpg" class="card-img-top" alt="Pastel zanahoria" />
                    <div class="card-body">
                        <h2 class="text-center">$499 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Zanahoria</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="../assets/pasteles.jpg" class="card-img-top" alt="Pasteles" />
                    <div class="card-body">
                        <h2 class="text-center">$599 <small class="moneda">MX</small></h2>
                        <hr>
                        <h5 class="card-title text-color">Sabor especiales</h5>
                        <p class="text-center"><em>Otros sabores de tu elección</em></p>
                    </div>
                </div>
            </div>
        </div>


    </section>

  </div>
</template>

<script>
export default {
  name: 'Sabores',
  
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
