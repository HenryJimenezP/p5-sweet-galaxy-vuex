<template>
  <div class="pedidos">

    <section class="my-5">
      <div class="container-fluid px-5">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="card border-0 rounded-3 shadow-lg">
              <div class="card-body p-0">

                <div class="row g-0">
                  <div class="col-sm-6 d-sm-block p-4">
                    <div class="container" name="datosCheck">
                      <!--Sabores-->
                      <div class="row">
    <div class="col">
      <h4 class="text-center">Bizcocho</h4>
              <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Fresa" id="combFresa" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">{{ $store.state.saboresb.sb1 }}</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Chocolate" id="combChocolate" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb2 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Vinilla" id="combVainilla" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb3 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Zanahoria" id="combZanahoria" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb4 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Red Velvet" id="combRedVelvet"  v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb5 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Pina" id="combPina" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckChecked">
    {{ $store.state.saboresb.sb6 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Tres Leches" id="combTresLeches" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb7 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Limon" id="combLimon" v-model="crSaboresB">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresb.sb8 }}
  </label>
</div>
    </div>

    <div class="col">

         <h4>Relleno <small>(Mermelada)</small></h4>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Durazno" id="combDuraznoR" v-model="crSaboresR">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr1 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Platano" id="combPlatanoR" v-model="crSaboresR">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr2 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Pina" id="combPinaR" v-model="crSaboresR">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr3 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Fresa" id="combFresaR" v-model="crSaboresR">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr4 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Zarzamora" id="combZarzamora" v-model="crSaboresR">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.saboresr.sr5 }}
  </label>
</div>

    </div>
  </div>
  <!--Sabores-->

  <!--Adornos-->
  <h2 class="text-center text-color pt-4">Adornos</h2>
        <div class="row">
    <div class="col">
      <h4>Decoración</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Velas" id="combVelas" v-model="crAdornoD">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad1 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Fondant" id="combFondant" v-model="crAdornoD">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad2 }}
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Caramelo" id="combCaramelo" v-model="crAdornoD">
  <label class="form-check-label" for="flexCheckDefault">
    {{ $store.state.adornod.ad3 }}
  </label>
</div>

    </div>

    <div class="col">
      <h4>Frutas</h4>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Frutos Rojos" id="combFrutosRojos" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Frutos Rojos
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Fresa" id="combFresaF" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Fresa
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Moras" id="combMoras" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Moras
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Pina" id="combPinaF" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Piña
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Durazno" id="combDuraznoF" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Durazno
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Platano" id="combPlatanoF" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Plátano
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Cereza" id="combCereza" v-model="crAdornoF">
  <label class="form-check-label" for="flexCheckDefault">
    Cereza
  </label>
</div>

    </div>

        </div>
        <div class="row pt-2">

    <div class="col">
      <h4>Betún</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Normal" id="combRedNormal" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Normal
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Rosa" id="combRosa" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckChecked">
    Rosa
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Azul" id="combAzul" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Azul
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Rojo" id="combRojo" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Rojo
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Verde" id="combVerde" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Verde
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Amarillo" id="combAmarillo" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Amarillo
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Morado" id="combMorado" v-model="crAdornoB">
  <label class="form-check-label" for="flexCheckDefault">
    Morado
  </label>
</div>

    </div>

<div class="col">
<h4>Nueces / Chispas</h4>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="Nuez" id="combNuez" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Nuez
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Almendra" id="combAlmendra" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Almendras
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Uva Pasa" id="combUvaPasa" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Uva Pasa
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value=" Chispas Colores" id="combChispasColores" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Chispas de colores
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Ralladura Coco" id="combRalladuraCoco" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Ralladura de coco
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="Ralladura Chocolate" id="combRalladuraChocolate" v-model="crAdornoNC">
  <label class="form-check-label" for="flexCheckDefault">
    Ralladura de Chocolate
  </label>
</div>

</div>

  </div>
  <!--Adornos-->

                    </div>
                  </div>
                  <div class="col-sm-6 p-4">
                    <div class="text-center">
                      <div class="h3 fw-light text-colorp">Haz tu pedido</div>
                      <p class="mb-4 text-muted">
                        Favor de llenar todos los campos<span class="asterisco"
                          >*</span
                        >
                      </p>
                    </div>

                    <form
                      id="contactForm"
                      @submit="onSubmit"
                      data-sb-form-api-token="API_TOKEN"
                      class="was-validated"
                      name="datosForm"
                      ref="datosPedido" 
                      novalidate
                    >
                      <!-- Nombre-->
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="txtNombre"
                          type="text"
                          placeholder="Nombre"
                          name="txtNombre"
                          v-model="txtNombre"
                          required
                        />
                        <label for="Nombre" class="form-label"
                          >Nombre completo<span class="asterisco"
                            >*</span
                          ></label
                        >
                        <div class="valid-feedback"></div>
                        <div
                          class="invalid-feedback"
                          data-sb-feedback="Nombre:required"
                        >
                        </div>
                      </div>

                      <!-- Email -->
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="txtCorreo"
                          type="email"
                          placeholder="Correo"
                          data-sb-validations="email"
                          v-model="txtCorreo"
                          name="txtCorreo"
                          required
                        />
                        <label for="emailAddress"
                          >Correo electrónico<span class="asterisco"
                            >*</span
                          ></label
                        >
                        <div class="valid-feedback"></div>
                        <div
                          class="invalid-feedback"
                          data-sb-feedback="emailAddress:required"
                          
                        >
                          
                        </div>
                      </div>

                      <!--Telefono-->
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="Telefono"
                          type="tel"
                          placeholder="Phone"
                          v-model="txtTelefono"
                          name="txtTelefono"
                          required
                        />
                        <label for="phone"
                          >Teléfono<span class="asterisco">*</span></label
                        >
                        <div
                          class="invalid-feedback"
                          data-sb-feedback="phone:required"
                        >
                          
                        </div>
                      </div>

                      <!-- Dirección-->
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="txtDireccion"
                          type="text"
                          placeholder="Direccion"
                          v-model="txtDireccion"
                          name="txtDireccion"
                          required
                        />
                        <label for="direccion"
                          >Dirección<span class="asterisco">*</span></label
                        >
                        <div
                          class="invalid-feedback"
                          data-sb-feedback="Direccion:required"
                        >
                          
                        </div>
                      </div>

                      <!--Fecha-->
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="txtFecha"
                          type="date"
                          placeholder="Date"
                          v-model="txtFecha"
                          name="txtFecha"
                          required
                        />
                        <label for="date"
                          >Fecha<span class="asterisco">*</span></label
                        >
                      </div>

                      <div>
                        <label for="txtLista" class="form-label"
                          >Seleccione la dedicatoria</label
                        >
                        <select
                          class="form-control"
                          list="datalistOptions"
                          id="txtLista"
                          placeholder="Seleccionar..."
                          v-model="txtLista"
                          name="txtLista"
                        >
                          <option>Elija su dedicatoria...</option>
                          <option value="Feliz Cumpleaños">Feliz Cumpleaños</option>
                          <option value="Mis XV años">Mis XV años</option>
                          <option value="Nuestra boda">Nuestra boda</option>
                          <option value="Dedicatoria personal">Dedicatoria personal</option>
                          <option value="Sin Dedicatoria">Sin Dedicatoria</option>
                          <!--<datalist id="datalistOptions">
                                                <option value="Feliz Cumpleaños">
                                                <option value="Mis XV años">
                                                <option value="Nuestra boda">
                                                <option value="Descripción personal">
                                            </datalist>-->
                        </select>
                      </div>

                      <br />
                      <!-- Message Input -->
                      <p>
                        Favor de describir más a detalle su pedido (Opcional)
                      </p>
                      <div class="form-floating mb-3">
                        <textarea
                          class="form-control"
                          id="txtMensaje"
                          type="text"
                          placeholder="Message"
                          v-model="txtMensaje"
                          name="txtMensaje"
                          style="height: 10rem"
                        ></textarea>
                        <label for="message">Comentarios</label>
                      </div>

                      <!-- Submit button -->
                      <div class="d-grid">
                        <button
                          class="btn btn-primary"
                          aria-label="Close"
                          
                           v-on:click="realizarPedido()"
                        >
                          Enviar
                        </button>
                      </div>
                    </form>
                    <!-- End of contact form -->
                  </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pedidos",

  data(){
    return{
      txtNombre : "",
      txtCorreo : "",
      txtTelefono : "",
      txtDireccion : "",
      txtFecha : "",
      txtLista : "",
      txtMensaje : "",
      crSaboresB : [],
      crSaboresR : [],
      crAdornoD : [],
      crAdornoF : [],
      crAdornoB : [],
      crAdornoNC : []
    }
  },
  methods:{
    altaPedido() {
      this.$store.commit('altaPedido', {nombre:this.txtNombre, correo:this.txtCorreo, telefono:this.txtTelefono, direccion:this.txtDireccion, fecha:this.txtFecha, lista:this.txtLista, mensaje:this.txtMensaje, saboresb:this.crSaboresB, saboresr:this.crSaboresR, adornod:this.crAdornoD, adornof:this.crAdornoF, adornob:this.crAdornoB, adornonc:this.crAdornoNC})
    },
     realizarPedido(){
            this.$store.commit('nuevoPedido');
            
        },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-image {
  background-image: url('../assets/pastel-pedido.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.pedidos {
  background-color: #feeae8;
}
.text-colorp {
  color: deeppink;
  font-weight: 600;
}
.moneda {
  font-size: 15px;
}
.asterisco {
  color: red;
}
</style>
