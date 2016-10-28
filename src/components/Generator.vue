<template>
    <div class="generator">
        <div class="generator__back" :style="styleString"></div>
        <quote :quote="quoteObj"></quote>
        <a role="button" class="--tweet" :href="tweetUrl" target="_blank">Tweet</a>
        <button @click="next">New Quote</button>
    </div>
</template>

<script>
import Quote from './Quote'

export default {
    name: 'generator',
    props: {
        quoteObj: Object,
        tweetUrl: String,
        nextQuote: Function,
        nextPhoto: Function,
        imageUrl: String
    },
    components: {
        Quote
    },
    methods: {
        next () {
            this.nextQuote()
            this.nextPhoto()
        }
    },
    computed: {
        styleString () {
            const $background = document.querySelector('.background')
            const imageWidth = $background && $background.clientWidth
            const imageHeight = $background && $background.clientHeight
            return `background-image: url('${this.imageUrl}'); background-size: ${imageWidth}px ${imageHeight}px;`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.generator
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    position: relative
    width: 50vw
    height: 30vh
    color: hsla(0,0,100,.7)
    overflow: hidden
    z-index: 3

.generator__back
    position: absolute
    top: 0
    left: 0
    background-position: center
    filter: blur(30px) brightness(60%)
    width: 130%
    height: 130%
    transform: translate(-15%, -15%)
    z-index: -1
</style>
