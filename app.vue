<script setup>
import MainLayout from '@/layouts/MainLayout.vue';

useHead({
    title: 'Abette Gumasing - Front end developer, Vue Developer',
    meta: [
        {
            name: 'description',
            content:
                'I am constantly looking for fresh opportunities to refine my abilities across all aspects of software engineering, with the aim of developing innovative, user-friendly, and accessible products that can make a positive impact on peoples lives.',
        },
    ],

    link: [
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '180x180',
        },
    ],
});

useSeoMeta({
    title: 'Abette Gumasing - Front end developer, Vue Developer',
    ogTitle: 'Abette Gumasing - Front end developer, Vue Developer',
    description:
        'I am constantly looking for fresh opportunities to refine my abilities across all aspects of software engineering, with the aim of developing innovative, user-friendly, and accessible products that can make a positive impact on peoples lives.',
    ogDescription:
        'I am constantly looking for fresh opportunities to refine my abilities across all aspects of software engineering, with the aim of developing innovative, user-friendly, and accessible products that can make a positive impact on peoples lives.',
    ogImage: './assets/images/og-image.png',
    twitterCard: 'summary_large_image',
});
</script>

<template>
    <MainLayout>
        <Nav />
        <NuxtPage />
    </MainLayout>
</template>

<style>
body {
    @apply bg-slate-100;
}
</style>
