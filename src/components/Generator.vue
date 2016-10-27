<template>
    <div class="generator">
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
        nextPhoto: Function
    },
    components: {
        Quote
    },
    methods: {
        next () {
            this.nextQuote()
            this.nextPhoto()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote {

}
</style>
