<template>
  <div class="bg-white rounded-md flex flex-col border-[1px]" v-if="dataContent?.icon">
    <div class="flex w-full gap-4 items-center p-4">
      <div
        class="size-12 rounded-md flex justify-center items-center"
        :class="dataContent?.color"
      >
        <i class="text-2xl text-white" :class="dataContent?.icon"></i>
      </div>
      <div class="flex flex-col gap-1 w-full">
        <span class="text-xs font-black uppercase">{{ dataContent?.name }}</span>

        <Input
          type="text"
          v-model="CONTACTS.content"
          placeholder="Entrez l'info correspondante"
          class="w-4/12 max-md:w-full"
        />
      </div>
    </div>

    <!--  -->
    <div
      class="flex bg-gray-200 w-full h-14 rounded-b-md justify-between px-4 items-center"
    >
      <span class=""></span>

      <SaveBtn
        :loading="stateCardGeneral.loading"
        @click="handleSaveCardGeneral(fields, [CONTACTS.content], false)"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, ref } from "vue";
import Input from "../ui/input/Input.vue";
import { useCreated } from "@/hooks/created.hook";
import { useCardGeneral } from "@/hooks/cardGeneral.hook";
import { useFindAll } from "@/hooks/find.hook";
import SaveBtn from "../btns/save.btn.vue";

const props = defineProps(["dataContent", "fields", "value"]);
const { handleSaveCardGeneral, stateCardGeneral } = useCardGeneral();

const CONTACTS = ref({
  content: "",
});

onMounted(() => {
  console.log(props?.value);
  CONTACTS.value.content = props?.value;
});
</script>
<style lang="scss" scoped></style>
