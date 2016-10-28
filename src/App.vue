<template>
    <div id="app" class="app">
        <generator
            :quote-obj="currentQuote"
            :tweet-url="tweetUrl"
            :next-quote="nextQuote"
            :next-photo="nextPhoto"
            :image-url="currentPhotoSmall"
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
        const QUOTES_URL = `http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${QUOTE_COUNT}`
        const UNSPLASH_ID = '514ddf55c64189cee554ae4015dce60d3c6806da6098ee7628b27d8f3108206f'
        const UNSPLASH_QUERY = 'design'
        const UNSPLASH_ORIENT = 'landscape'
        const UNSPLASH_COUNT = 20
        const UNSPLASH_URL = `https://api.unsplash.com/photos/random?query=${UNSPLASH_QUERY}&oreintation=${UNSPLASH_ORIENT}&count=${UNSPLASH_COUNT}&client_id=${UNSPLASH_ID}`
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
        tweetUrl () {
            const text = this.currentQuote && this.currentQuote.content.replace('<p>', '“').replace('</p>', '”').replace('  ', '')
            const name = this.currentQuote && this.currentQuote.title
            return this.text && this.name && this.TWEET_BASE_URL + this.encodeQuote(text, name)
        }
    }
}
</script>

<style lang="sass">
body
    margin: 0

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
    color: #2c3e50
</style>
