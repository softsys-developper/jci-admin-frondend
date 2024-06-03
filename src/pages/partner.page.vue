<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Les partenaires"
        content="La bannière constitue le premier élément visuel de votre site web. Veillez à la sublimer en y intégrant de très belles images."
        :isCreated="true"
        Mtitle="Ajouter un partenaire"
        type="Partner"
        :labels="['Logo du partenaire', 'Entreprise']"
      />

      <ProfileCard type="Partner" :STORE="STORE" v-if="STORE.length != 0" />
      <MessageLoading :loading="state.loading" v-else />
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import Heading from "@/components/heading.vue";

import { useFindAll } from "@/hooks/find.hook";
import BaseLayout from "@/layouts/base.layout.vue";
import { onMounted } from "vue";
import ProfileCard from "@/components/cards/profile.card.vue";
import MessageLoading from "@/components/loadings/message.loading.vue";

const { FindAll, PARTNERS: STORE, state } = useFindAll();

onMounted(() => {
  FindAll("Partner");
});
</script>
<style lang="scss" scoped></style>
