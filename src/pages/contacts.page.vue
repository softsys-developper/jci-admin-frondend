<script setup lang="ts">
import BaseLayout from "@/layouts/base.layout.vue";
import ContactCard from "@/components/cards/contact.card.vue";
import { useCardContact } from "@/hooks/cardContact.hook";
import Heading from "@/components/heading.vue";

const { stateCardContacts } = useCardContact();
</script>
<template>
  <BaseLayout>
    <template v-slot:content>
      <div class="flex flex-col gap-4">
        <Heading
          title="Contacts"
          content=" Ajouter les contacts et les media sociaux de votre entreprise sur votre
         site web"
        />

        <div class="">
          <ContactCard :dataCard="stateCardContacts.contacts" :dataContent="3" />
        </div>
      </div>
    </template>
  </BaseLayout>
</template>
