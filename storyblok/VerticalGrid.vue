<template>
    <div v-editable="blok" class="py-4 space-y-6">
        <StoryblokComponent
            v-for="blok in blok.rows"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
