<script setup>
let links = ref([
    {
        title: 'about',
        name: 'About',
    },
    {
        title: 'projects',
        name: 'Projects',
    },
    {
        title: 'works',
        name: 'Works',
    },
]);
</script>

<template>
    <nav class="py-10 flex items-center justify-between">
        <NuxtLink href="/">
            <img
                class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                src="@/assets/images/me.jpeg"
            />
        </NuxtLink>

        <div class="space-x-10">
            <template v-for="link in links">
                <NuxtLink :href="link.title" class="text-sm">
                    {{ link.name }}
                </NuxtLink>
            </template>

            <NuxtLink href="mailto:ahgumasing@gmail.com">
                <span
                    class="py-2 bg-slate-100 rounded-full px-4 text-sm font-medium"
                >
                    Hire Me
                </span>
            </NuxtLink>
        </div>
    </nav>
</template>
