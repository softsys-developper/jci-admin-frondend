<script setup lang="ts">
import { toast } from "vue-sonner";
import { useDeleted } from "@/hooks/delete.hook";

defineProps(["type", "ID"]);

const { DELETED, loading } = useDeleted();
</script>

<template>
  <button
    :disabled="loading"
    variant="outline"
    @click="
      () => {
        toast('Êtes-vous sûr de vouloir supprimer ?', {
          description:
            'Cette action est irréversible, vous ne pourrez plus récupérer vos données.',
          action: {
            label: 'Oui',
            onClick: () => DELETED(type, ID),
          },
        });
      }
    "
  >
    <i class="ri-delete-bin-line text-xl cursor-pointer"></i>
  </button>
</template>
