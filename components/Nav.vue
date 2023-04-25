<script setup>
import { Bars4Icon, XMarkIcon } from '@heroicons/vue/24/solid';
import SideMenu from '@/components/SideMenu.vue';
let show = ref(false);
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
    <nav class="py-10 flex items-center justify-between z-50 px-2">
        <NuxtLink href="/">
            <img
                class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                src="@/assets/images/me.jpeg"
            />
        </NuxtLink>

        <div class="space-x-10 hidden lg:block">
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

        <Bars4Icon
            @click="show = !show"
            class="w-8 h-8 text-black block lg:hidden"
            :class="{ hidden: show }"
        />

        <XMarkIcon
            @click="show = !show"
            class="w-6 h-6 text-black z-50 mr-10 fixed right-0"
            :class="{ hidden: !show }"
        />

        <SideMenu v-if="show" />
    </nav>
</template>
