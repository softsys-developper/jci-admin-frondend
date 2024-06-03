<template>
  <div class="bg-white ring-[1px] ring-gray-300 rounded-md">
    <div class="flex flex-col py-8 px-8 gap-4">
      <div class="flex flex-col">
        <!--  -->
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-semibold">{{ title }}</h1>
          <p class="text-sm">{{ description }}</p>
        </div>

        <div class="flex gap-4 mt-4">
          <div v-for="(color, index) in COLORS">
            <label
              :for="'ColorSiteWeb_' + color.id"
              class="size-16 border-[1px] rounded-md border-dashed text-center flex justify-center items-center"
            >
              <i v-if="!color" class="ri-palette-line text-xl"></i>
              <div
                v-if="color && color.name"
                class="inline-flex size-14 rounded-md"
                :style="'background-color: ' + color.name + ';'"
              ></div>
            </label>
            <input
              type="color"
              class="w-[0.1px] opacity-0"
              :id="'ColorSiteWeb_' + color.id"
              :value="color.name"
              @change="changeColor($event, color.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Handle -->
    <div class="bg-gray-100 flex justify-between p-4 border-t-[1px] rounded-b-md">
      <!-- Info  -->
      <div class="text-sm">
        {{ Input?.info }}
      </div>

      <div class="">
        <SaveBtn
          :loading="stateCardGeneral.loading"
          @click="handleSaveCardGeneral(fields, __COLORS__, false)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { useCardGeneral } from "@/hooks/cardGeneral.hook";
import SaveBtn from "../btns/save.btn.vue";
const { stateCardGeneral, handleSaveCardGeneral } = useCardGeneral();

const props = defineProps([
  "title",
  "description",
  "Input",
  "hanldeSave",
  "COLORS",
  "fields",
]);

const COLORS = reactive([
  {
    id: 0,
    name: "#fffccc",
  },
  {
    id: 1,
    name: "#dffccc",
  },
]);

const __COLORS__ = ref([]);

onMounted(() => {
  console.log(props.COLORS);

  COLORS[0].name = props.COLORS[0];
  COLORS[1].name = props.COLORS[1];

  __COLORS__.value.push(COLORS[0].name, COLORS[1].name);
});
const changeColor = (e, index) => {
  COLORS.map((el) => {
    if (el.id == index) {
      el.name = e.target.value;
    }

    return {
      ...el,
    };
  });
  __COLORS__.value = [];
  __COLORS__.value.push(COLORS[0].name, COLORS[1].name);
};
</script>
<style lang="scss" scoped></style>
