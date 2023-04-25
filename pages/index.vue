<script setup>
import Home from '@/components/Website/Index.vue';
import HomeSkeletonLoader from '@/components/HomeSkeletonLoader.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <Home />
        </template>

        <template #fallback>
            <HomeSkeletonLoader />
        </template>
    </Suspense>
</template>
