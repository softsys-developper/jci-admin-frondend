<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Pasts Presidents"
        content="Ajouter les anciens president qui ont servis votre orgranisation."
        :isCreated="true"
        Mtitle="Ajouter un PP"
        type="PastsPresidents"
        :labels="['Image du pp', 'Nom complet']"
      />

      <ProfileCard type="PastsPresidents" :STORE="STORE" v-if="STORE.length != 0" />
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

const { FindAll, PAST_PRESIDENTS: STORE, state } = useFindAll();

onMounted(() => {
  FindAll("PastsPresidents");
});
</script>
<style lang="scss" scoped></style>
