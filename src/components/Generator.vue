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
import ww from 'window-watcher'

export default {
    name: 'generator',
    created () {
        this.transformString = (width, height) => {
            return `transform: translate(calc(-1 * ((100vw / 2) - ${width / 2}px)), calc(-1 * ((100vh / 2) - ${height / 2}px)));`
        }

        ww.on('resize', () => {
            this.elWidth = this.$el.clientWidth
            this.elHeight = this.$el.clientHeight
        })
    },
    props: {
        quoteObj: Object,
        tweetUrl: String,
        nextQuote: Function,
        nextPhoto: Function,
        imageUrl: String,
        imageLoaded: Boolean,
        imageDimensions: Object
    },
    components: {
        Quote
    },
    data () {
        return {
            elWidth: this.$el && this.$el.clientWidth,
            elHeight: this.$el && this.$el.clientHeight
        }
    },
    methods: {
        next () {
            this.nextQuote()
            this.nextPhoto()
        }
    },
    computed: {
        styleString () {
            const imageString = `background-image: url('${this.imageUrl}');`

            return this.transformString && imageString + this.transformString(this.elWidth, this.elHeight)
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
    background-size: cover
    background-position: center
    filter: blur(30px) brightness(60%)
    width: 100vw
    height: 100vh
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
