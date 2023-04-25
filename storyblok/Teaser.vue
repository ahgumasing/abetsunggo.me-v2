<script setup>
defineProps({ blok: Object });
</script>

<template>
    <div v-editable="blok" class="py-24">
        <h1 class="text-black font-bold text-5xl w-[500px]">
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
