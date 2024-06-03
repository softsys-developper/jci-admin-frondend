<template>
  <div class="flex flex-col mb-4 gap-2">
    <div class="flex justify-between">
      <h1 class="text-2xl font-extrabold">{{ title }}</h1>
      <BannerModal
        :labels="labels"
        v-if="Mtitle"
        :title="Mtitle"
        :type="type"
        :multiple="multiple"
      />
    </div>
    <p class="text-sm">
      {{ content }}
    </p>
  </div>
</template>
<script setup>
import BannerModal from "./modals/banner.modal.vue";

defineProps(["title", "content", "Mtitle", "type", "labels", "multiple"]);
</script>
<style lang="scss" scoped></style>
