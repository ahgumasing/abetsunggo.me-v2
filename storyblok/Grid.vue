<template>
    <div
        v-editable="blok"
        class="grid md:grid-cols-2"
        :class="{
            'gap-12 my-12': blok.size_gap === 'small',
            'lg:grid-cols-2': blok.number_of_columns == 2,
            'lg:grid-cols-3': blok.number_of_columns == 3,
            'lg:grid-cols-4': blok.number_of_columns == 4,
            'lg:grid-2 flex-wrap': blok.number_of_columns == '2-1',
        }"
    >
        <StoryblokComponent
            v-for="blok in blok.columns"
            :key="blok._uid"
            :blok="blok"
        />
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
