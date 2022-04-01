<template>
    <div>
        <h1 class="text-center text-color ">Acerca de</h1>
    <hr>
    <!-- Jumbotron -->
    <section class="p-3 text-center fondo-jumbotron">
        <div class="row">

            <div class="col-md-7">
                <img class="img-fluid img-ad" src="../assets/pastel2.jpg" alt="pastel">
            </div>

            <div class="col-md-5">
                <h1 class="text-color">Somos</h1>
                <img src="../assets/sweet-galaxy-logo.png" alt="logo" class="d-inline-block align-text-top img-logo">
                <p>Te ofrecemos los mejores sabores, contamos con mas de 15 sucursales en todo el Estado de Baja
                    California Norte y Sur,
                    abiertos los 365 dia del año, excelencia por calidad, acompañando cada momento de felicidad.
                </p>
                <p>Ofrecemos un sin fin de opciones para tus pasteles con su amplia variedad de combinaciones que puedes
                    realizar,
                    para todas las ocaciones especiales (Cumpleaños, Aniversarios, XV años, bodas).
                </p>
                <br>
                <h1 class="text-color">Contáctanos</h1>
                <p><i class="bi bi-geo-alt me-3"></i>San Quintín, Baja California</p>
                <p><i class="bi bi-envelope me-3"></i>contacto@sweetgalaxy.com</p>
                <p><i class="bi bi-telephone me-3"></i>123 456 78 90</p>
                <p><i class="bi bi-clock me-3"></i>Horario de atección</p>
                <p class="me-3">8 am a 10pm </p>
            </div>
        </div>
    </section>
    <!-- Jumbotron -->
    </div>
</template>

<script>
export default {
  name: 'AcercaDe',
  
}
</script>

<style scoped>
.fondo-jumbotron{
  background-color: #FEEAE8;
}
.text-color{
    color:deeppink;
    font-weight: 600;
}
.img-logo{
  width: 30%;
}
.img-ad{
  width: 80%;
}
</style>