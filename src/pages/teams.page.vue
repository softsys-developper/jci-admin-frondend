<template>
  <BaseLayout>
    <template v-slot:content>
      <Heading
        title="Teams"
        content="Ajoutez l'ensemble de votre équipe avec laquelle vous travaillez."
        :isCreated="true"
        Mtitle="Ajouter un colaborateur"
        type="Teams"
        :labels="['L\'image d\'un coloborateur', 'Nom complet']"
      />
      <ProfileCard type="Teams" :STORE="STORE" v-if="STORE.length != 0" />
      <MessageLoading :loading="state.loading" v-else />
    </template>
  </BaseLayout>
</template>
<script setup lang="ts">
import Heading from "@/components/heading.vue";
import BaseLayout from "@/layouts/base.layout.vue";
import { onMounted } from "vue";
import { useFindAll } from "@/hooks/find.hook";
import ProfileCard from "@/components/cards/profile.card.vue";
import MessageLoading from "@/components/loadings/message.loading.vue";

const { FindAll, TEAMS: STORE, state } = useFindAll();

onMounted(() => {
  FindAll("Teams");
});
</script>
<style lang="scss" scoped></style>
