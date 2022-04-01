<template>
    <div>
      <div class="container">
<h2 class="text-center text-color">Adornos</h2>
        <div class="row">
    <div class="col-sm-3">
      <h4>Decoración</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combVelas" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad1 }}
  </label>
  - <em>${{ $store.state.preciod.precioad1 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combFondant" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad2 }}
  </label>
  - <em>${{ $store.state.preciod.precioad2 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combCaramelo" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad3 }}
  </label>
  - <em>${{ $store.state.preciod.precioad3 }} MXN</em>
</div>

    </div>

    <div class="col-sm-3">
      <h4>Frutas</h4>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combFrutosRojos" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Frutos Rojos
  </label>
  - <em>${{ $store.state.preciof.precioaf1 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combFresaF" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Fresa
  </label>
  - <em>${{ $store.state.preciof.precioaf2 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combMoras" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Moras
  </label>
  - <em>${{ $store.state.preciof.precioaf3 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combPinaF" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Piña
  </label>
  - <em>${{ $store.state.preciof.precioaf4 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combDuraznoF" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Durazno
  </label>
  - <em>${{ $store.state.preciof.precioaf5 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combZanahoria" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Plátano
  </label>
  - <em>${{ $store.state.preciof.precioaf6 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combCereza" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Cereza
  </label>
  - <em>${{ $store.state.preciof.precioaf1 }} MXN</em>
</div>

    </div>

    <div class="col-sm-3">
      <h4>Betún</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combRedNormal" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Normal
  </label>
  - <em>${{ $store.state.preciobet.precioab }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combRosa" disabled>
  <label class="form-check-label" for="flexCheckChecked">
    Rosa
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combAzul" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Azul
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>
<div class="form-check"> 
  <input class="form-check-input" type="checkbox" value="" id="combRojo" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Rojo
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combVerde" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Verde
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combAmarillo" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Amarillo
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combMorado" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Morado
  </label>
  - <em>${{ $store.state.preciobet.precioabcolor }} MXN</em>
</div>

    </div>

<div class="col-sm-3">
<h4>Nueces / Chispas</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combNuez" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Nuez
  </label>
  - <em>${{ $store.state.precionc.precioanc1 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combAlmendra" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Almendras
  </label>
  - <em>${{ $store.state.precionc.precioanc2 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combUvaPasas" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Uva Pasas
  </label>
  - <em>${{ $store.state.precionc.precioanc3 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combChispasColores" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Chispas de colores
  </label>
  - <em>${{ $store.state.precionc.precioanc4 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combRalladuraCoco" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Ralladura de coco
  </label>
  - <em>${{ $store.state.precionc.precioanc5 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combRalladuraChocolate" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    Ralladura de Chocolate
  </label>
- <em>${{ $store.state.precionc.precioanc6 }} MXN</em>
</div>

</div>

  </div>




      </div>
    </div>
</template>

<script>
export default {
  name: 'CombinaAdornos',
  
}
</script>

<style scoped>
.text-color{
    color:deeppink;
}
.form-check-label{
  font-weight: 600;
}
</style>