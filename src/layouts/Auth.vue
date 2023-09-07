<template>
    <NavigationBrand />
  <slot />
</template>

<script>
import NavigationBrand from "@/Components/NavigationBrand.vue";
export default {
    components: {
        NavigationBrand,
    }
}
</script>

<style scoped>

</style>
