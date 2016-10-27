<template>
    <div class="background" :style="styleString"></div>
</template>

<script>
export default {
    name: 'background',
    props: {
        imageUrl: String
    },
    computed: {
        styleString () {
            return `background-image: url('${this.imageUrl}')`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.background
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-size: cover
    background-position: center
    z-index: -1
</style>
