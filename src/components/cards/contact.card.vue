<template>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col ring-[1px] ring-blue-50 bg-white rounded-md p-4 gap-4">
      <div class=" ">
        <h1 class="font-black">Ajouter des contacts</h1>
      </div>

      <div class="pt-4 flex gap-2 hidden">
        <div v-for="CTS in dataCard">
          <button
            class="bg-black text-white rounded-md px-4 py-1 flex gap-1 items-center"
            :class="CTS.color"
          >
            <i :class="[CTS.icon]" class="ri-fw text-2xl"></i>
            <span class="text-sm font-bold"> {{ CTS.name }} </span>
          </button>
        </div>
      </div>

      <!--  -->
      <div class="flex flex-col gap-4" v-if="Company?.name">
        <div v-for="cards in dataCard">
          <ContactDisplayCard
            :fields="cards.fields"
            :dataContent="cards"
            :value="Company[cards.fields[0]]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useFindAll } from "@/hooks/find.hook";
import ContactDisplayCard from "./contactDisplay.card.vue";
import { onMounted } from "vue";

defineProps(["dataCard", "dataContent"]);

const { COMPAGNY: Company, FindAll } = useFindAll();

onMounted(() => {
  if (Company?.name) FindAll("compagny");
});
</script>
<style lang="scss" scoped></style>
