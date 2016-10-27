<template>
    <div class="background">
        <img class="back-image" :src="imageUrl" />
    </div>
</template>

<script>
export default {
    name: 'background',
    props: {
        imageUrl: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.back-image {

}
</style>
