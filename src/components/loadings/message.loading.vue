<template>
  <div
    class="w-full flex justify-center items-center flex-col h-[50vh] border-[1px] rounded-md"
  >
    <!-- Spinner Loading -->

    <div class="" v-if="loading">
      <SpinnerLoading size="h-16  fill-black" />
    </div>

    <!-- Empty Data -->
    <div class="text-xl font-light" v-else>
      {{ message ? "" : "Pas de donnée disponible." }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import SpinnerLoading from "../loadings/spinner.loading.vue";
defineProps(["loading", "message"]);
</script>
<style lang="scss" scoped></style>
