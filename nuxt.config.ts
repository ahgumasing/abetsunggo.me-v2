// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    modules: [
        ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
        '@nuxtjs/tailwindcss',
    ],
});
