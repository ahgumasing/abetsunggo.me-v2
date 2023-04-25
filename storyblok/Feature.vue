<template>
    <div v-editable="blok">
        <h3 class="text-left py-2 text-4xl font-semibold text-black">
            {{ blok.name }}
        </h3>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
