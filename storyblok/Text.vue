<script setup>
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid';
defineProps({
    blok: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <p
        class="w-full"
        :class="{
            'text-lg': blok.size === 'text-lg',
            'text-2xl': blok.size === 'text-2xl',
            'text-3xl': blok.size === 'text-3xl',
            'text-4xl': blok.size === 'text-4xl',
            'text-5xl': blok.size === 'text-5xl',
            'font-medium': blok.font_size === 'font-medium',
            'font-semibold': blok.font_size === 'font-semibold',
            'font-bold': blok.font_size === 'font-bold',
        }"
    >
        <span v-if="blok.is_arrow" class="flex items-center">
            <ArrowLongRightIcon class="w-4 h-4 ml-4 mr-2" />
            {{ blok.text }}
        </span>
        <span v-else> {{ blok.text }}</span>
    </p>
</template>
