<template>
    <div id="app" class="app">
        <generator
            :quote-obj="currentQuote"
            :next-quote="nextQuote"
            :next-photo="nextPhoto"
        ></generator>
        <background :image-url="currentPhoto"></background>
    </div>
</template>

<script>
import $ from 'jquery'
import Generator from './components/Generator'
import Background from './components/Background'
import Quote from './components/Quote'

export default {
    name: 'app',
    created () {
        const QUOTES_URL = 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30'
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
        Background,
        Quote
    },
    data () {
        return {
            quotes: [],
            quoteIndex: 0,
            photos: [],
            photoIndex: 0
        }
    },
    methods: {
        nextQuote () {
            this.quoteIndex += 1
        },
        nextPhoto () {
            this.photoIndex += 1
        },
        encodeQuote (quote) {

        }
    },
    computed: {
        currentQuote () {
            return this.quotes[this.quoteIndex] && this.quotes[this.quoteIndex]
        },
        currentPhoto () {
            return this.photos[this.photoIndex] && this.photos[this.photoIndex].urls.full
        },
        tweetUrl () {

        }
    }
}
</script>

<style>
.app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
