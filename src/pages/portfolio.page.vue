<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Portfolio"
        content="La bannière constitue le premier élément visuel de votre site web. Veillez à la sublimer en y intégrant de très belles images."
        :isCreated="true"
        Mtitle="Ajouter une activité"
        type="Portfolio"
        :multiple="true"
      />

      <section class="flex flex-col gap-4" v-if="STORE.length != 0">
        <div v-for="POTF in STORE">
          <div class="divi divide-y-[1px] flex flex-col gap-2 bg-white p-4 rounded-md">
            <div class="flex justify-between items-center">
              <div class="w-8/12 flex flex-col gap-1">
                <span class="font-bold"> {{ POTF?.title }} </span>
                <span class="text-sm"> {{ POTF?.content }} </span>
              </div>

              <div class="flex gap-4 items-center">
                <DeleteBtn :ID="POTF.id" type="Portfolio" />
                <BannerModal
                  type="Portfolio"
                  :ID="POTF.id"
                  :title="`Modifier le Portfolio`"
                  isUpdated="true"
                  :dataUpdated="POTF"
                  :multiple="true"
                >
                  <template v-slot:isIcon>
                    <i class="ri-edit-2-line text-xl cursor-pointer"></i>
                  </template>
                </BannerModal>
                <button
                  class="hidden items-center gap-1 bg-black font-bold text-sm text-white px-2 py-2 rounded-md"
                >
                  <i class="ri-add-line text-base relative -top-[1px]"></i>
                  Ajouter des Images
                </button>
              </div>
            </div>

            <div class="grid max-md:grid-cols-2 grid-cols-4 gap-1 pt-2 pb-2">
              <div v-for="ATV in POTF?.medias">
                <div class="bg-gray-200 h-40 w-full rounded-md relative">
                  <button
                    @click="DELETE_MEDIA(POTF?.id, ATV?.id)"
                    class="absolute top-0 right-0 bg-red-500 text-white size-6 flex justify-center items-center rounded-bl-md"
                  >
                    <i class="ri-delete-bin-5-line"></i>
                  </button>
                  <img
                    :src="ATV?.original_url"
                    alt=""
                    class="rounded-md h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MessageLoading v-else :loading="state.loading" />
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import DeleteBtn from "@/components/btns/delete.btn.vue";
import Heading from "@/components/heading.vue";
import BaseLayout from "@/layouts/base.layout.vue";
import BannerModal from "@/components/modals/banner.modal.vue";
import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
import { useDeleted } from "@/hooks/delete.hook";
import MessageLoading from "@/components/loadings/message.loading.vue";

const { PORTFOLIO: STORE, FindAll, state } = useFindAll();
const { DELETE_MEDIA } = useDeleted();

onMounted(() => {
  FindAll("Portfolio");
});
</script>
<style lang="scss" scoped></style>
