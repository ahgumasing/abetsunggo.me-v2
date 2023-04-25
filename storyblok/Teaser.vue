<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div v-editable="blok" class="lg:py-24">
        <h1 class="text-black font-bold text-3xl lg:w-[500px] md:text-5xl">
            {{ blok.headline }}
        </h1>

        <p class="py-8 text-gray-500">{{ blok.description }}</p>

        <div class="flex space-x-5">
            <template v-for="block in blok.blocks">
                <a :href="block.link.url">
                    <img :src="block.image" :alt="block.alt" />
                </a>
            </template>
        </div>
    </div>
</template>
