<template>
    <div class="generator">
        <quote :quote="quoteObj"></quote>
    </div>
</template>

<script>
import Quote from './Quote'

export default {
    name: 'generator',
    props: {
        quoteObj: Object
    },
    components: {
        Quote
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote {

}
</style>
