<script setup>
import About from '@/components/Website/About.vue';
import AboutSkeletonLoader from '@/components/AboutSkeletonLoader.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <About />
        </template>

        <template #fallback>
            <AboutSkeletonLoader />
        </template>
    </Suspense>
</template>
