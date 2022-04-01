<template>
    <div>
      <section class="container">
          <h1 class="text-center text-color">Inventario</h1>
        <hr>
        <br>
        <h3 class="text-center text-color">Harina para pasteles</h3>
        <div class="table-responsive">
        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sabores</th>
                    <th scope="col">Cajas</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Fresa</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Vainilla</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Tres leches</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Red velvet</td>
                    <td>15</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Zanahoria</td>
                    <td>6 Kg</td>
                </tr>
            </tbody>
        </table>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'InfoCantidadSabores',
  
}
</script>