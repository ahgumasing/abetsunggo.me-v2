<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <a
        class="flex items-center space-x-4 hover:text-gray-300"
        :href="blok.link.url"
    >
        <img :src="blok.image" />
        <p class="font-medium text-sm">{{ blok.text }}</p>
    </a>
</template>
