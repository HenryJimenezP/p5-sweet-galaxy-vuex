<template>
    <div>
        <footer class="text-center text-lg-start text-muted color-footer">
        <!-- Copyright -->
        <div class="text-center p-4 color-copy">
            © 2022
            <router-link class="text-reset " to="/">Pastelería sweet Galaxy</router-link>
            Todos los derechos reservados.
        </div>
        <!-- Copyright -->
    </footer>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.color-footer{
    background: #E91E63;
}
.color-copy{
    color: black;
}
</style>