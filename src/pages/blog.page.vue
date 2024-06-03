<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Blogs"
        content="Ecrivez des articles de blogs sur votre organisation."
        :isCreated="true"
        Mtitle="Ajouter un article"
        type="Blogs"
        :labels="[`Cliquez Ici, Ajoutez l'image de couverture`, `Titre de l'article`]"
      />

      <section>
        <div
          v-if="STORE.length != 0"
          class="bg-white border-[1px] rounded-md divide-y-[1px]"
        >
          <div v-for="HDS in STORE">
            <div class="px-4 py-4 flex justify-between items-center">
              <div class="flex gap-4 w-full">
                <!-- Image -->
                <div class="bg-gray-500 size-24">
                  <img :src="HDS.original_url" class="object-contain h-full" alt="" />
                </div>

                <!-- Content -->
                <div class="flex flex-col w-8/12">
                  <span class="text-base font-bold">
                    {{ HDS.title }}
                  </span>

                  <article
                    v-html="HDS.content.slice(0, 250)"
                    class="text-xs font-normal"
                  ></article>

                  <span class="text-xs font-bold mt-2 first-letter:uppercase">
                    créer il y a,
                    {{
                      formatDistance(new Date(HDS.created_at), new Date(Date()), {
                        locale: fr,
                      })
                    }}
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-4 pr-4">
                <DeleteBtn :ID="HDS.id" type="Blogs" />
                <BannerModal
                  type="Blogs"
                  :ID="HDS?.id"
                  title="Modifier l'article"
                  :isUpdated="true"
                  :labels="['Image du pp', 'Nom complet']"
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
import DeleteBtn from "@/components/btns/delete.btn.vue";
import BannerModal from "@/components/modals/banner.modal.vue";

import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
import MessageLoading from "@/components/loadings/message.loading.vue";
import { formatDistance } from "date-fns";
import { fr } from "date-fns/locale";

const { FindAll, BLOGS: STORE, state } = useFindAll();

onMounted(() => {
  FindAll("Blogs");
});
</script>
<style lang="scss" scoped></style>
