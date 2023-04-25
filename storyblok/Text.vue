<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <p class="text-4xl font-semibold">{{ blok.text }}</p>
</template>
