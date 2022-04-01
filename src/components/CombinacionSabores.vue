<template>
    <div>
      <div class="container">
<h2 class="text-center text-color">Sabores</h2>

<div class="row">
    <div class="col-sm-6">
      <h4>Bizcocho</h4>
              <div class="form-check">
  <input class="form-check-input" type="radio" value="" id="combFresa" v-model="crSabores" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb1 }}
  </label> - <em>${{ $store.state.preciob.preciosb1 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combChocolate" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb2 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb2 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combVainilla" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb3 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb3 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combZanahoria" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb4 }}
  </label>
   - <em>{{ $store.state.preciob.preciosb4 }}</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combRedVelvet" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb5 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb5 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combPina" disabled>
  <label class="form-check-label" for="flexCheckChecked">
    {{ $store.state.saboresb.sb6 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb6 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combDurazno" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb7 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb7 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combLimon" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb8 }}
  </label>
   - <em>${{ $store.state.preciob.preciosb8 }} MXN</em>
</div>
    </div>

    <div class="col-sm-6">

         <h4>Relleno <small>(Mermelada)</small></h4>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combDuraznoR" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr1 }}
  </label>
  - <em> ${{ $store.state.precior.preciosr1 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combPlatanoR" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr2 }}
  </label>
  - <em>${{ $store.state.precior.preciosr2 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combPinaR" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr3 }}
  </label>
  - <em>${{ $store.state.precior.preciosr3 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combFresaR" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr4 }}
  </label>
  - <em>${{ $store.state.precior.preciosr4 }} MXN</em>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="combZarzamora" disabled>
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr5 }}
  </label>
  - <em>${{ $store.state.precior.preciosr5 }} MXN</em>
</div>

    </div>
  </div>


      </div>
    </div>
</template>

<script>
export default {
  name: 'CombinaSabores',
  
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