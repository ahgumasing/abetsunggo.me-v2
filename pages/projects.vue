<script setup>
import Projects from '~/components/Website/Projects.vue';
import AboutSkeletonLoader from '@/components/AboutSkeletonLoader.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <Projects />
        </template>

        <template #fallback>
            <AboutSkeletonLoader />
        </template>
    </Suspense>
</template>
