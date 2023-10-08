<template>
  <!-- <main class="w-[100dvw] h-[100dvh] flex items-center flex-col justify-center">
    <div
      class="w-max-[200px] border flex justif-center items-center flex-col p-5"
    >
      <ClientOnly>
        <date-picker v-model="date"></date-picker>
      </ClientOnly>
    </div>
  </main> -->
  <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->

  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg">
      <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
        🇮🇷 Persian Datepicker
      </h1>

      <form
        action=""
        class="mb-0 mt-6 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <ClientOnly>
          <date-picker
            placeholder="Please select a date"
            v-model="date"
          ></date-picker>
        </ClientOnly>
        <p class="my-5">Date : {{ date }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
const date = ref();
</script>

<style></style>
