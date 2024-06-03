<template>
  <div class="bg-white ring-[1px] ring-gray-300 rounded-md">
    <div class="flex justify-between w-full items-center">
      <div class="flex flex-col py-8 px-8 gap-4">
        <!--  -->
        <div class="flex flex-col gap-4">
          <h1 class="text-xl font-semibold">{{ title }}</h1>
          <p class="text-sm">{{ description }}</p>
        </div>

        <!-- Content -->
        <div class="flex" v-if="!isImage">
          <!--  -->
          <div
            class="flex ring-[1px] ring-gray-300 focus-within:ring-gray-700 w-7/12 h-8 rounded-md px-4 text-sm"
          >
            <input
              :type="Input?.type"
              class="w-full h-full outline-none bg-transparent"
              v-model="state.content"
            />
          </div>
          <!-- Error Input -->
          <span class="" v-if="Input?.error.path == ''">
            {{ Input?.error.message }}
          </span>
        </div>
      </div>

      <div class="flex mr-4" v-if="isImage">
        <label
          for="in_logo"
          class="bg-gray-100 size-24 rounded-full flex flex-col items-center justify-center"
          v-if="!img"
        >
          <i class="ri-image-add-line text-4xl"></i>
        </label>
        <div class="w-44 h-28 relative flex items-center group" v-else>
          <label
            for="in_logo"
            class="absolute text-xs uppercase font-black bg-white/90 hidden group-hover:flex w-full p-4 flex-col justify-center items-center"
          >
            <i class="ri-image-add-line text-2xl opacity-90"></i>
            <span class="">Change le logo</span>
          </label>
          <img
            :src="ImagePreview ? ImagePreview : img"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
        <input @change="onChangeImage" id="in_logo" type="file" class="hidden" value="" />
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
          @click="handleSaveCardGeneral(fields, [state.content], isImage)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useCardGeneral } from "@/hooks/cardGeneral.hook";
import SpinnerLoading from "@/components/loadings/spinner.loading.vue";
import SaveBtn from "../btns/save.btn.vue";
const { stateCardGeneral, handleSaveCardGeneral } = useCardGeneral();
const props = defineProps([
  "title",
  "description",
  "Input",
  "hanldeSave",
  "isImage",
  "img",
  "value",
  "fields",
]);

const state = ref({
  content: "",
});

const ImagePreview = ref("");

onMounted(() => {
  state.value.content = props.value;
});

const onChangeImage = (e) => {
  state.value.content = e.target.files[0];
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    ImagePreview.value = e.target.result;
  };
  reader.readAsDataURL(file);
};
</script>
<style lang="scss" scoped></style>
