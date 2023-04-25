<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <p class="leading-loose">{{ blok.text }}</p>
</template>
