<script setup>
import About from '@/components/Website/About.vue';
import LoadingDots from '@/components/LoadingDots.vue';
</script>

<template>
    <Suspense>
        <template #default>
            <About />
        </template>

        <template #fallback>
            <div>
                <loading-dots />
            </div>
        </template>
    </Suspense>
</template>
