<template>
    <div class="quote">
        <div class="quote__text" v-html="quoteText"></div>
        <div class="quote__name" v-html="quoteTitle"></div>
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
            return this.quote && '— ' + this.quote.title
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.quote
    width: 50%
    max-height: 70%
    line-height: 1.7
    text-align: left
    overflow: scroll

.quote span
    font-size: 2em

.quote__name
    text-align: right
    font-size: 2em
    font-weight: bold
    font-style: italic
</style>
