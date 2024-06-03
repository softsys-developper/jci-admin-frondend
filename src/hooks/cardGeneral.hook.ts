import { URL_RESQUESTS } from '@/api_urls';
import { useCompagnyStore } from '@/stores/compagny.store';
import axios from 'axios';
import { reactive } from 'vue';
import { useToast } from '@/components/ui/toast/use-toast';
const { toast } = useToast();

export const useCardGeneral = () => {
   const stateCardGeneral = reactive({
      loading: false,
      cards: [
         {
            id: '1',
            title: 'Nom du site web',
            description:
               'Please enter your full name, or a display name you are comfortable with.',

            Input: {
               type: 'text',
               info: 'Please use 32 characters at maximum.',
               value: '',

               error: {
                  path: '',
                  message: '',
               },
            },
         },
         {
            id: '2',
            title: 'Localisation entreprise',
            description:
               'Please enter your full name, or a display name you are comfortable with.',
            Input: {
               type: 'text',
               info: 'Please use 32 characters at maximum.',
               value: "Abidjan, Côte d'ivoire",
               error: {
                  path: '',
                  message: '',
               },
            },
         },

         {
            id: '3',
            title: 'Les couleurs du site web',
            description:
               'Ajouter les couleurs de votre site web',
            Input: {
               type: 'text',
               info: 'Deux couleur pour enbelire votre site web.',
               value: "Abidjan, Côte d'ivoire",
               error: {
                  path: '',
                  message: '',
               },
            },
         },
      ],
   });

   // Validate Input on the Card
   const handleSaveCardGeneral = async (
      fields: Array<string>,
      value: Array<string>,
      isMedia: boolean
   ) => {
      stateCardGeneral.loading = true
      let dataUpdated;
      let Body: any = {};

      fields.forEach((fb: any, index: any) => {
         console.log(fb);
         Body[fb] = value[index];
      });

      //
      if (isMedia) {
         dataUpdated = new FormData();
         for (let i = 0; i < fields.length; i++) {
            const media = fields[i];
            dataUpdated.append(media, value[i]);
         }
         
      } else {
         dataUpdated = Body;
      }

      const { data } = await axios.post(
         URL_RESQUESTS.INDEX_UPDATE,
         dataUpdated
      );
      if (data) {
         stateCardGeneral.loading = false
         useCompagnyStore().state.data = data.user;
         toast({
            title: `Modification enregistré`,
            description: 'Modifié avec succès',
         });
      }
   };

   return {
      stateCardGeneral,
      handleSaveCardGeneral,
   };
};
