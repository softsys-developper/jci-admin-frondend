<script setup lang="ts">
import BaseLayout from "@/layouts/base.layout.vue";
import CardGeneral from "@/components/generales/card.generale.vue";
import { useCardGeneral } from "@/hooks/cardGeneral.hook";
import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
import CardcolorGeneral from "@/components/generales/cardcolor.general.vue";
import MessageLoading from "@/components/loadings/message.loading.vue";

const { stateCardGeneral } = useCardGeneral();
const { FindAll, COMPAGNY, state }: any = useFindAll();

onMounted(async () => {
  FindAll("compagny");
});
</script>
<template>
  <BaseLayout>
    <template v-slot:content>
      <div class="flex flex-col gap-4" v-if="COMPAGNY?.name">
        <CardGeneral
          :title="'Logo du site web'"
          :description="'Ajoute ou modifier le logo de votre site web ici.'"
          :isImage="true"
          :img="COMPAGNY.logo"
          :fields="['logo']"
        />

        <CardGeneral
          :title="stateCardGeneral.cards[0]?.title"
          :description="stateCardGeneral.cards[0]?.description"
          :Input="stateCardGeneral.cards[0]?.Input"
          :value="COMPAGNY.name"
          :fields="['name']"
        />

        <CardGeneral
          :title="stateCardGeneral.cards[1]?.title"
          :description="stateCardGeneral.cards[1]?.description"
          :Input="stateCardGeneral.cards[1]?.Input"
          :value="COMPAGNY?.zone"
          :fields="['zone']"
        />

        <CardcolorGeneral
          :title="stateCardGeneral.cards[2]?.title"
          :description="stateCardGeneral.cards[2]?.description"
          :Input="stateCardGeneral.cards[2]?.Input"
          :COLORS="[COMPAGNY?.color_1, COMPAGNY?.color_2]"
          :fields="['color_1', 'color_2']"
        />
      </div>

      <MessageLoading :loading="state.loading" v-else />
    </template>
  </BaseLayout>
</template>
