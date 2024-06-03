<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Bannières"
        content="La bannière constitue le premier élément visuel de votre site web. Veillez à la sublimer en y intégrant de très belles images."
        :isCreated="true"
        Mtitle="Ajouter une baniére"
        type="banner"
      />

      <section>
        <div
          class="bg-white border-[1px] rounded-md divide-y-[1px]"
          v-if="STORE.length != 0"
        >
          <div v-for="HDS in STORE">
            <div class="px-4 py-4 flex justify-between items-center">
              <div class="flex gap-4 w-full">
                <!-- Image -->
                <div class="bg-gray-500 size-20">
                  <img
                    :src="HDS.original_url"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div>

                <!-- Content -->
                <div class="flex flex-col w-8/12">
                  <span class="text-base font-bold">
                    {{ HDS.title }}
                  </span>

                  <span class="text-xs font-normal">
                    {{ HDS.content.slice(0, 250) }}...
                  </span>
                </div>
              </div>

              <div class="flex gap-4">
                <DeleteBtn :ID="HDS.id" type="banner" />
                <BannerModal
                  type="banner"
                  :ID="HDS.id"
                  title="Modifier la bannière"
                  isUpdated="true"
                  :dataUpdated="HDS"
                >
                  <template v-slot:isIcon>
                    <i class="ri-edit-2-line text-xl cursor-pointer"></i>
                  </template>
                </BannerModal>
              </div>
            </div>
          </div>
        </div>

        <MessageLoading :loading="state.loading" v-else />
      </section>
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import Heading from "@/components/heading.vue";
import BaseLayout from "@/layouts/base.layout.vue";
import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
import BannerModal from "@/components/modals/banner.modal.vue";
import DeleteBtn from "@/components/btns/delete.btn.vue";
import MessageLoading from "@/components/loadings/message.loading.vue";

const { FindAll, BANNERS: STORE, state } = useFindAll();

onMounted(() => {
  FindAll("banner");
});
</script>
<style lang="scss" scoped></style>
