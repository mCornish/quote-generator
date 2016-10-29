<template>
    <div id="app" class="app">
        <generator
            :quote-obj="currentQuote"
            :tweet-url="tweetUrl"
            :next-quote="nextQuote"
            :next-photo="nextPhoto"
            :image-url="currentPhotoSmall"
            :image-loaded="imageLoaded"
            :image-dimensions="currentPhotoDimensions"
        ></generator>
        <background 
            :image-url="currentPhoto"
            :small-image-url="currentPhotoSmall"
            :image-loaded="imageLoaded"
        ></background>
        <icon-footer repoUrl="https://github.com/mCornish/quote-generator"></icon-footer>
    </div>
</template>

<script>
import $ from 'jquery'
import Generator from './components/Generator'
import Background from './components/Background'
import Quote from './components/Quote'
import IconFooter from './components/Footer'

export default {
    name: 'app',
    created () {
        const QUOTE_COUNT = 20
        const QUOTES_URL = `https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${QUOTE_COUNT}`
        const UNSPLASH_ID = '514ddf55c64189cee554ae4015dce60d3c6806da6098ee7628b27d8f3108206f'
        const UNSPLASH_QUERY = 'design'
        const UNSPLASH_COUNT = 20
        const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=${UNSPLASH_QUERY}&count=${UNSPLASH_COUNT}&client_id=${UNSPLASH_ID}`
        this.TWEET_BASE_URL = 'https://twitter.com/intent/tweet?text='

        // Get background images
        $.getJSON(QUOTES_URL, data => {
            this.quotes = data
        })
        $.getJSON(UNSPLASH_URL, data => {
            this.photos = data
        })
    },
    components: {
        Generator,
        Quote,
        Background,
        IconFooter
    },
    data () {
        return {
            quotes: [],
            quoteIndex: 0,
            photos: [],
            photoIndex: 0,
            imageLoaded: false
        }
    },
    methods: {
        nextQuote () {
            this.quoteIndex < this.quotes.length - 1 ? this.quoteIndex += 1 : this.quoteIndex = 0
        },
        nextPhoto () {
            this.imageLoaded = false
            const nextIndex = this.photoIndex < this.photos.length - 1 ? this.photoIndex + 1 : 0
            setTimeout(() => {
                this.photoIndex = nextIndex
            }, 1000)
        },
        encodeQuote (text, name) {
            // Truncate text if it's too long for the tweet
            const truncText = text.length > 100 ? text.substr(0, 50) + '...”' : text
            const encText = encodeURIComponent(truncText).replace(/%26%238217%3B/g, '%27').replace(/%26%238220%3B/g, '%E2%80%98').replace(/%26%238221%3B/g, '%E2%80%99')
            const encName = encodeURIComponent(name)
            return encText + ' —' + encName
        },
        preload (imageUrl) {
            const image = document.createElement('img')
            image.src = imageUrl
        },
        detectLoad (imageUrl) {
            const img = document.createElement('img')
            img.src = imageUrl
            img.onload = () => {
                this.imageLoaded = true
            }
        }
    },
    computed: {
        currentQuote () {
            return this.quotes[this.quoteIndex] && this.quotes[this.quoteIndex]
        },
        currentPhoto () {
            this.imageLoaded = false
            const imageUrl = this.photos[this.photoIndex] && this.photos[this.photoIndex].urls.full
            this.detectLoad(imageUrl)
            return imageUrl
        },
        currentPhotoSmall () {
            return this.photos[this.photoIndex] && this.photos[this.photoIndex].urls.small
        },
        currentPhotoDimensions () {
            return {
                width: this.photos[this.photoIndex] && this.photos[this.photoIndex].width,
                height: this.photos[this.photoIndex] && this.photos[this.photoIndex].height
            }
        },
        tweetUrl () {
            const text = this.currentQuote && this.currentQuote.content.replace('<p>', '“').replace('</p>', '”').replace('  ', '')
            const name = this.currentQuote && this.currentQuote.title
            return text && name && this.TWEET_BASE_URL + this.encodeQuote(text, name)
        }
    }
}
</script>

<style lang="sass">
$color-text: hsla(0,0,100,.7)

body
    margin: 0
    color: $color-text

.app
    display: flex
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: inherit

button,
a[role=button]
    background-color: transparent
    border: none
    color: $color-text
    cursor: pointer
    font-size: 1.2em
    text-decoration: none
    font-weight: bold
    text-transform: uppercase
    padding: 1em
    transition: background-color .2s

button:hover,
button:focus,
a[role=button]:hover,
a[role=button]:focus
    background-color: hsla(0,0,0,.5)
    outline: none
</style>
