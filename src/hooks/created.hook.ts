import { ref } from 'vue';
import { URL_RESQUESTS } from '@/api_urls/index';

import {
   validateBanner,
   validateBannerUpdate,
} from '@/validations/banner.validate';
import axios from 'axios';
import { useBannerStore } from '@/stores/banner.store';
import { usePastsPresidents } from '@/stores/pasts.store';
import { useToast } from '@/components/ui/toast/use-toast';
import { useTeamsStore } from '@/stores/teams.store';
import {
   validateContact,
   validateCreatePartner,
   validateUpdatePartner,
} from '@/validations/contact.validate';
import { usePortfolioStore } from '@/stores/portfolio.store';
import { usePartnerStore } from '@/stores/partner.store';
import { useBlogStore } from '@/stores/blog.store'
const { toast } = useToast();

interface State {
   title: string;
   original_url: any;
   content: string;
}

const ValidateCreated = (error: any) => {
   if (error) {
      toast({
         title: `${error[0].path[0]}`,
         description: `${error[0].message}`,
         variant: 'destructive',
      });
      return;
   }
};

const Finaly = (store: any, state: State, data: any, iscreated: boolean) => {
   if (iscreated) {
      store.data.unshift(data);
   } else {
      const toUpdate = store.data.map((st: any) => {
         if (st.id == data.id) {
            st = data;
         }

         return {
            ...st,
         };
      });

      store.data = toUpdate;
   }
   toast({
      title: iscreated ? `Ajouter` : 'Modifier',
      description: iscreated ? `Ajouté avec succès` : 'Modifié avec succès',
   });

   const created_media: any = document.querySelector('#created_media');
   created_media.value = '';
   state.title = '';
   state.original_url = '';
   state.content = '';
};

const DataToSender = async (state: any, type:string) => {
   const Data = new FormData();
   Data.append('id', state.id);
   Data.append('title', state.title);
   Data.append('content', state.content);

   if (state.original_url) {
      for (let i = 0; i < state.original_url?.length; i++) {
         const media = state.original_url[i];

         state.original_url?.length > 1 || type == 'Portfolio' || type == 'Blogs'
            ? Data.append('original_url[]', media)
            : Data.append('original_url', media);
      }
   }

   return {
      __DATA__: Data,
   };
};

/**
 * Created
 * @param null
 * @returns {}
 */
export const useCreated = () => {
   const state = ref({
      id: '',
      title: '',
      content: '',
      original_url: '',
   });

   const ImagePreview = ref([]);
   const loading = ref(false);

   const CREATED = async (type: string, iscreated: boolean, ID?: any) => {
      state.value.id = ID;
      const { __DATA__ } = await DataToSender(state.value, type);

      const RefCreated = async (
         typeRef: string,
         iscreated: boolean,
         _url: string,
         store: any,
         vCd: any,
         VUp: any,
         rec:string
      ) => {
        try {
         if (type == typeRef) {

            loading.value =  true

            const { error } = iscreated ? vCd(state.value) : VUp(state.value);

            if (error) {
               loading.value = false
               ValidateCreated(error.details);
               return { error };
            }

            const { data } = await axios.post(
               URL_RESQUESTS[iscreated ? _url + '_CREATED' : _url + '_UPDATED'],
               __DATA__
            );

            if (data) {
               Finaly(store, state.value, data[rec], iscreated);
               ImagePreview.value = []
               loading.value =  false
            }
         }
        } catch (error) {
         loading.value =  false
               toast({
                  title:  `Oups, une erreur`,
                  variant: 'destructive',
                  description: "Une erreur c'est produite veuillez réessayer",
               });
        }
      };

      // Created To state
      RefCreated(
         'banner',
         iscreated,
         'BANNER',
         useBannerStore().state,
         validateBanner,
         validateBannerUpdate,
         'banner'
      );
      // Update and Created Past Presidents
      RefCreated(
         'PastsPresidents',
         iscreated,
         'PP',
         usePastsPresidents().state,
         validateBanner,
         validateBannerUpdate,
         'pasts_president'
      );
      // Update and Created Teams
      RefCreated(
         'Teams',
         iscreated,
         'TEAMS',
         useTeamsStore().state,
         validateBanner,
         validateBannerUpdate,
         'teams'
      );
      // Update and Created Teams
      RefCreated(
         'Portfolio',
         iscreated,
         'ACTIVITE',
         usePortfolioStore().state,
         validateContact,
         validateContact,
         'activite'
      );
      // Update and Created Teams
      RefCreated(
         'Partner',
         iscreated,
         'PARTNER',
         usePartnerStore().state,
         validateCreatePartner,
         validateUpdatePartner,
         'partner'
      );

       // Update and Created Blogs
       RefCreated(
         'Blogs',
         iscreated,
         'BLOG',
         useBlogStore().state,
         validateContact,
         validateContact,
         'blog'
      );
   };

   return {
      state,
      CREATED,
      loading,
      ImagePreview,
   };
};
