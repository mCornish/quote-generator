<template>
    <div class="generator" :style="styleString">
        <quote :quote="quoteObj"></quote>
        <a role="button" class="--tweet" :href="tweetUrl" target="_blank">Tweet</a>
        <button @click="next">New Quote</button>
    </div>
</template>

<script>
import Quote from './Quote'
import Vibrant from 'node-vibrant'

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
        swatch () {
            const img = document.createElement('img')
            img.src = this.imageUrl
            console.log(img)
            const vibrant = new Vibrant(img)
            vibrant.getPalette((err, palette) => {
                if (!err) {
                    console.log(palette)
                } else {
                    console.log(err)
                }
            })
        },
        textColor () {
            return this.swatch && this.swatch.DarkVibrant && this.swatch.DarkVibrant.getHex()
        },
        backgroundColor () {
            return this.swatch && this.swatch.LightVibrant.getHex()
        },
        styleString () {
            // const textString = `color: ${this.textColor};`
            // const backString = `background-color: ${this.backgroundColor};`
            return `background-image: url('${this.imageUrl}')`
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.generator
    background-size: auto
    background-position: center
    filter: blur(30px) brightness(50%)
    width: 50vw
    height: 30vh
    overflow: hidden
</style>
