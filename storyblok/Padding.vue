<template>
    <div
        v-editable="blok"
        :class="{
            'py-4': blok.size === 'small',
            'py-12': blok.size === 'medium',
            'py-16': blok.size === 'large',
            'py-20': blok.size === 'xl',
        }"
    />
</template>

<script setup>
defineProps({ blok: Object });
</script>
