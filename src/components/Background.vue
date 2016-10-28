<template>
    <div class="background" :class="{'is-loading': !imageLoaded}" :style="styleString"></div>
</template>

<script>
export default {
    name: 'background',
    created () {
        const img = document.createElement('img')
        img.src = this.imageUrl
        img.onload = () => {
            console.error('loaded')
            this.$emit('image-load')
        }
    },
    props: {
        imageUrl: String,
        smallImageUrl: String,
        imageLoaded: Boolean
    },
    computed: {
        styleString () {
            return this.imageLoaded ? `background-image: url('${this.imageUrl}')` : `background-image: url('${this.smallImageUrl}')`
        },
        smallStyleString () {
            return `background-image: url('${this.smallImageUrl}')`
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
    background-color: black
    opacity: 1
    filter: none
    transform: none
    z-index: -1
    transition: filter 1s

.background.is-loading
    filter: brightness(0%)
</style>
