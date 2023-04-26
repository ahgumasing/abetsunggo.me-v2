<script setup>
const story = await useAsyncStoryblok('works', {
    version: 'draft',
});
</script>

<template>
    <StoryblokComponent v-if="story" :blok="story.content" />
</template>
