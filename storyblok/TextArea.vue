<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <p
        class="leading-loose"
        :class="{ 'text-gray-500': blok.color === 'gray' }"
    >
        {{ blok.text }}
    </p>
</template>
