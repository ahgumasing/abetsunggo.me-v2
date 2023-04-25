<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div v-editable="blok" class="py-2">
        <img
            :src="blok.filename"
            class="object-cover rounded-2xl bg-zinc-100"
        />
    </div>
</template>
