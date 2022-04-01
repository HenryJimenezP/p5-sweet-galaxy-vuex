<template>
<div>
  <HeaderLogoSG />
  <nav class="navbar navbar-expand-lg justify-content-center navbar-light">
    <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :class="'nav-link active'" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sabores">Sabores</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pedidos">Pedidos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/acercade">Nosotros</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/administrador">Administrador</router-link>
        </li>
      </ul>
    </div>
     </div>
  </nav>

  <router-view/>

  <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLogoSG from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'



export default {
  
  components: {
    HeaderLogoSG,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar {
  background:#E91E63;
text-align: center;
font-weight: 500;
justify-content: center;
}
.nav-link{
  color: black;

}
.navbar li:hover{
  background-color: #F06292;
}
.nav-link:hover{
  -webkit-text-stroke-color: white;
  color: black;
}
nav a.router-link-exact-active {
  background-color: #F06292;
  -webkit-text-stroke-color: white;
  color: black;
}
</style>
