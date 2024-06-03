<template>
  <div class="flex gap-2 flex-col" v-if="STORE">
    <div v-for="PP in STORE">
      <div class="bg-white rounded-md flex w-full gap-4">
        <div class="bg-gray-100 h-[100px] w-2/12 rounded-l-md">
          <img
            :src="PP.original_url"
            class="h-full w-full object-contain rounded-l-md"
            alt=""
          />
        </div>
        <div class="flex w-10/12 p-2 items-center justify-center">
          <div class="flex flex-col w-full">
            <span class="text-base font-bold"> {{ PP.name }} </span>
            <span class="text-sm font-medium"> {{ PP.date }} </span>
          </div>

          <div class="flex items-center gap-4 pr-4">
            <DeleteBtn :ID="PP.id" :type="type" />
            <BannerModal
              :type="type"
              :ID="PP?.id"
              title="Modifier"
              :isUpdated="true"
              :dataUpdated="PP"
            >
              <template v-slot:isIcon>
                <i class="ri-edit-2-line text-xl cursor-pointer"></i>
              </template>
            </BannerModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DeleteBtn from "@/components/btns/delete.btn.vue";
import BannerModal from "@/components/modals/banner.modal.vue";
defineProps(["STORE", "type"]);
</script>
<style lang="scss" scoped></style>
