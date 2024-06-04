import { ref } from 'vue';
import { URL_RESQUESTS } from '@/api_urls/index';
import { useToast } from '@/components/ui/toast/use-toast';
import axios from 'axios';
import { useBannerStore } from '@/stores/banner.store';
import { usePastsPresidents } from '@/stores/pasts.store';
import { usePortfolioStore } from '@/stores/portfolio.store';
import { usePartnerStore } from '@/stores/partner.store';
import { useBlogStore } from '@/stores/blog.store';
import { useTeamsStore } from '@/stores/teams.store';

const { toast } = useToast();
const loading = ref(false);

const Finaly = (store: any, id: any) => {
   const toUpdate = store.data.filter((st: any) => st.id != id);
   store.data = toUpdate;
   loading.value = false;
   toast({
      title: `Supprimé`,
      description: `Supprimé avec sucess`,
      variant: 'destructive',
   });
};

const FinalyMedia = (store: any, id: any, idMedia: any) => {
   const GetMedia = store.data.find((st: any) => st.id == id);

   if (GetMedia) {
      const toUpdateMedia = GetMedia?.medias.filter(
         (st: any) => st.id != idMedia
      );
      const MEDIA = store.data.map((m: any) => {
         if (m?.id == id) {
            m.medias = toUpdateMedia;
         }

         return {
            ...m,
         };
      });

      store.data = MEDIA;
   }
};

const Banner = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.BANNER_DELETE, { id });
   if (data) {
      Finaly(useBannerStore().state, id);
   }
};

const PastsPresidents = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.PP_DELETE, { id });
   if (data) {
      Finaly(usePastsPresidents().state, id);
   }
};

const Portfolio = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.ACTIVITE_DELETE, { id });
   if (data) {
      Finaly(usePortfolioStore().state, id);
   }
};

const Partner = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.PARTNER_DELETE, { id });
   if (data) {
      Finaly(usePartnerStore().state, id);
   }
};

const Blogs = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.BLOG_DELETE, { id });
   if (data) {
      Finaly(useBlogStore().state, id);
   }
};

const Teams = async (id: any) => {
   const { data } = await axios.post(URL_RESQUESTS.TEAMS_DELETE, { id });
   if (data) {
      Finaly(useTeamsStore().state, id);
   }
};
/**
 * Register
 * @param null
 * @returns {}
 */
export const useDeleted = () => {
   const DATA = ref();
   const loadingMedia = ref(false);

   const DELETED = (type: string, id: any) => {
      toast({
         title: `En cours`,
         description: `Nous supprimons votre element...`,
      });

      if (type == 'banner') {
         Banner(id);
      }

      if (type == 'PastsPresidents') {
         PastsPresidents(id);
      }

      if (type == 'Portfolio') {
         Portfolio(id);
      }

      if (type == 'Partner') {
         Partner(id);
      }

      if (type == 'Blogs') {
         Blogs(id);
      }

      if(type == 'Teams'){
         Teams(id)
      }
   };

   const DELETE_MEDIA = async (id: any, mediaId: any) => {
      try {
         loadingMedia.value = true;
         toast({
            title: `En cours`,
            description: `Nous supprimons votre element...`,
         });
         const { data } = await axios.post(
            URL_RESQUESTS.ACTIVITE_MEDIA_DELETE,
            {
               id: mediaId,
            }
         );
         if (data) {
            loadingMedia.value = false;
            FinalyMedia(usePortfolioStore().state, id, mediaId);
            toast({
               title: `Supprimé`,
               description: `Supprimé avec sucess`,
            });
         }
      } catch (error) {
         loadingMedia.value = false;
         toast({
            title: `Oups, erreur`,
            description: `Une erreur c'est produite veillez reeassayer.`,
            variant: 'destructive',
         });
      }
   };

   return {
      DATA,
      DELETED,
      DELETE_MEDIA,
      loading,
      loadingMedia,
   };
};
