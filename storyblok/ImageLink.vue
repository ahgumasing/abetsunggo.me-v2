<script setup>
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div>
        <a :href="blok.link.url">
            <img class="object-cover h-full rounded-md" :src="blok.image" />
        </a>
    </div>
</template>
