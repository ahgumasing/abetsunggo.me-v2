<script>
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div
        class="fixed w-full h-full inset-0 z-10 bg-zinc-800/40 backdrop-blur-sm p-2"
    >
        <div
            class="bg-white rounded-xl py-8 opacity-100 flex flex-col space-y-4 px-8"
        >
            <NuxtLink class="border-b pb-3 mt-3" href="/">Home</NuxtLink>
            <NuxtLink class="border-b pb-3" href="/about">About</NuxtLink>
            <NuxtLink class="border-b pb-3" href="/projects">Projects</NuxtLink>
            <NuxtLink href="/works">Works</NuxtLink>
            <NuxtLink
                class="text-center py-2 bg-slate-500 rounded-md w-full text-white"
                href="mailto:ahgumasing@gmail.com"
                >Hire Me</NuxtLink
            >
        </div>
    </div>
</template>
