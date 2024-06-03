<script setup lang="ts">
import ToasterS from "@/components/ui/toast/Toaster.vue";
import { Toaster } from "@/components/ui/sonner";

import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
const { FindAll }: any = useFindAll();

onMounted(async () => {
  FindAll("compagny");
});
</script>

<template>
  <router-view> </router-view>

  <Toaster />
  <ToasterS />
</template>

<style>
@import url("https://use.typekit.net/vjy4axf.css");
</style>
