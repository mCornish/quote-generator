<template>
    <div class="quote">
        <div class="quote__text">{{quoteText}}</div>
        <div class="quote__name">{{quoteTitle}}</div>
    </div>
</template>

<script>
export default {
    name: 'quote',
    props: {
        quote: Object
    },
    computed: {
        quoteText () {
            return this.quote && this.quote.content.replace('<p>', '“').replace('</p>', '”')
        },
        quoteTitle () {
            return this.quote && this.quote.title
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote {

}
</style>
