<template>
    <div>
      <section class="container">
        <h1 class="text-center text-color">Pedidos</h1>
        <hr>
<div class="table-responsive">
        <table class="table table-striped table-hover table-bordered"  v-if="$store.state.pedidosP.length > 0">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre completo</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Sabor pastel</th>
                    <th scope="col">Adornos</th>
                    <th scope="col">Dedicación</th>
                    <th scope="col">Comentarios</th>
                    <th scope="col">Bizcocho</th>
                    <th scope="col">Relleno</th>
                    <th scope="col">Decoracón</th>
                    <th scope="col">Frutas</th>
                    <th scope="col">Betún</th>
                    <th scope="col">Nueces</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Henry Jimenez</td>
                    <td>henryjimene@hotmail.com</td>
                    <td>123456789</td>
                    <td>Ensenada #048</td>
                    <td>19/Mayo/2022</td>
                    <td>Red velvet</td>
                    <td>Frutas: Cerezas</td>
                    <td>Sí: Feliz Cumpleaños</td>
                    <td>Comentarios</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Anna Lopez</td>
                    <td>annalopez@hotmal.com</td>
                    <td>1230789456</td>
                    <td>La paz #567</td>
                    <td>13/Marzo/2022</td>
                    <td>Vainilla</td>
                    <td>Fondant</td>
                    <td>No</td>
                    <td>Comentarios</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Arturo Martinez</td>
                    <td>arturomartinez@hoymail.com</td>
                    <td>2468013579</td>
                    <td>Mar de cortez #246</td>
                    <td>4/Abril/2022</td>
                    <td>Chocolate</td>
                    <td>Chispas / semillas: chispas de chocolate con nuez</td>
                    <td>Sí: Feliz Anniversario</td>
                    <td>Comentarios</td>
                </tr>
                <tr v-for="(value, key) in $store.state.pedidosP" :key="key">
<th>{{ key + 1 }}</th>
<td>{{ value.nombre }}</td>
<td>{{ value.correo }}</td>
<td>{{ value.telefono }}</td>
<td>{{ value.direccion }}</td>
<td>{{ value.fecha }}</td>
<td></td>
<td></td>
<td>{{ value.lista }}</td>
<td>{{ value.mensaje }}</td>
<td v-for="(value, key) in value.crSaboresB" :key="key"><span>{{value}}</span></td>
<td v-for="(value, key) in value.crSaboresR" :key="key"><span>{{value}}</span></td>
<td v-for="(value, key) in value.crAdornoD" :key="key"><span>{{value}}</span></td>
<td v-for="(value, key) in value.crAdornoF" :key="key"><span>{{value}}</span></td>
<td v-for="(value, key) in value.crAdornoB" :key="key"><span>{{value}}</span></td>
<td v-for="(value, key) in value.crAdornoNC" :key="key"><span>{{value}}</span></td>
                </tr>
            </tbody>
        </table>
</div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'InfoPedidos',
  
}
</script>