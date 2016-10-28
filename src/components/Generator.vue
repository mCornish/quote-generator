<template>
    <div class="generator">
        <div class="generator__back" :style="styleString"></div>
        <quote :quote="quoteObj"></quote>
        <transition name="fade">
            <div v-show="imageLoaded" class="generator__buttons">
                <button @click="next">New Quote</button>
                <a role="button" class="--tweet" :href="tweetUrl" target="_blank">Tweet</a>
            </div>
        </transition>
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
        imageUrl: String,
        imageLoaded: Boolean
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
    color: inherit
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
    transition: background-image .5s

.generator__buttons
    position: absolute
    bottom: 0
    left: 0
    display: flex
    justify-content: flex-end
    padding: 2em
    width: calc(100% - 4em)

    button:first-child,
    [role=button]:first-Child
        margin-right: auto

.fade-enter-active,
.fade-leave-active
    transition: opacity .5s

.fade-enter,
.fade-leave-active
    opacity: 0
</style>
