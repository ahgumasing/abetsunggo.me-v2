<script setup>
import { ref, computed } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
defineProps({ blok: Object });

const isShowing = ref(true);

const showing = () => {
    (isShowing.value = true),
        setTimeout(() => {
            isShowing.value = true;
        }, 500);
};

function resetIsShowing() {
    isShowing.value = true;

    setTimeout(() => {
        isShowing.value = true;
    }, 500);
}
</script>

<template>
    <div v-editable="blok">
        <TransitionRoot
            appear
            :show="isShowing"
            as="template"
            enter="transform transition duration-[400ms]"
            enter-from="opacity-0 rotate-[-120deg] scale-50"
            enter-to="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leave-from="opacity-100 rotate-0 scale-100 "
            leave-to="opacity-0 scale-95 "
        >
            <div class="rounded-md bg-white shadow-lg">
                <img
                    class="object-cover aspect-square rounded-md -rotate-3"
                    :src="blok.filename"
                />
            </div>
        </TransitionRoot>
    </div>
</template>
