<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="En tête de pages"
        content=""
        :isCreated="true"
        :handle="HeaderCreated"
      />

      <section>
        <div class="bg-white border-[1px] rounded-md divide-y-[1px]">
          <div v-for="HDS in HEADERS">
            <div class="px-4 py-4 flex justify-between items-center">
              <div class="flex flex-col">
                <span class="text-base font-bold"> {{ HDS.name }} </span>

                <span
                  class="text-xs underline bg-gray-200 px-2 rounded-full h-5 flex items-center"
                >
                  https://jci-seguela.ci{{ HDS.url }}</span
                >
                <div class="flex gap-1 items-center mt-2">
                  <span class="inline-flex size-2 rounded-full bg-green-500"> </span>
                  <span class="text-green-500 text-xs font-extrabold">Actived</span>
                </div>
              </div>

              <div class="flex gap-4">
                <button
                  class="font-bold rounded-md border-[1px] px-4 text-sm items-center flex"
                >
                  voir
                </button>

                <i class="ri-edit-2-line text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import Heading from "@/components/heading.vue";
import BaseLayout from "@/layouts/base.layout.vue";
import { reactive } from "vue";

const HeaderCreated = () => {};

const HEADERS = reactive([
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Pasts Presidents",
    url: "/pasts-presidents",
  },
  {
    name: "A Propos",
    url: "/a-propos",
  },
  {
    name: "Blogs",
    url: "/blogs",
  },
]);
</script>
<style lang="scss" scoped></style>
