<script setup>
import Home from '@/components/Website/Index.vue';
import LoadingDots from '@/components/LoadingDots.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <Home />
        </template>

        <template #fallback>
            <div>
                <loading-dots />
            </div>
        </template>
    </Suspense>
</template>
