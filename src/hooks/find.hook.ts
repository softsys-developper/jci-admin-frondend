import { computed, ref } from 'vue';
import { URL_RESQUESTS } from '@/api_urls/index';
import axios from 'axios';
import { useBannerStore } from '@/stores/banner.store';
import { usePastsPresidents } from '@/stores/pasts.store';
import { useTeamsStore } from './../stores/teams.store';
import { usePartnerStore } from '@/stores/partner.store';
import { useCompagnyStore } from '@/stores/compagny.store';
import { usePortfolioStore } from '@/stores/portfolio.store';
import { useBlogStore } from '@/stores/blog.store';

/**
 * Get All Data
 * @param null
 * @returns {}
 */
export const useFindAll = () => {
   const STORE = ref();
   const state = ref({
      loading: false,
      isPass: false
   });



   const FindAll = async (type: string, callback?:any) => {
      

      // Teamplate
      const RefFind = async (
         _URL: any,
         typeFetch: string,
         store: any,
         retrn: string,
      ) => {
        try {
         if (type == typeFetch && store.data?.length == 0) {
            state.value.loading = true;
            const { data } = await axios.post(_URL, {});
            if (data) {
               state.value.loading = false;
               store.data = data[retrn];
               callback()
            } 
          
         }
        
        } catch (error) {
         state.value.loading = false;
         state.value.isPass = false
        }
      };

      // Get All Functions
      RefFind(URL_RESQUESTS.USER, 'compagny', useCompagnyStore().state, 'user');

      // Get All Functions
      RefFind(
         URL_RESQUESTS.BANNERS,
         'banner',
         useBannerStore().state,
         'banners'
      );

      RefFind(URL_RESQUESTS.TEAMS, 'Teams', useTeamsStore().state, 'teams');

      // PastsPresidents Get All Data
      RefFind(
         URL_RESQUESTS.PPS,
         'PastsPresidents',
         usePastsPresidents().state,
         'pasts_presidents'
      );

      // Partner Get All Data
      RefFind(
         URL_RESQUESTS.PARTNERS,
         'Partner',
         usePartnerStore().state,
         'partners'
      );

      // Portfolio Get All Data
      RefFind(
         URL_RESQUESTS.ACTIVITES,
         'Portfolio',
         usePortfolioStore().state,
         'activites'
      );

      // Portfolio Get All Data
      RefFind(
         URL_RESQUESTS.BLOGS,
         'Blogs',
         useBlogStore().state,
         'blogs'
      );

      return {isPass: state.value.isPass};
   };

   const COMPAGNY = computed(() => {
      return useCompagnyStore().state.data;
   });

   const BANNERS = computed(() => {
      return useBannerStore().state.data;
   });

   const PAST_PRESIDENTS = computed(() => {
      return usePastsPresidents().state.data;
   });

   const PARTNERS = computed(() => {
      return usePartnerStore().state.data;
   });

   const TEAMS = computed(() => {
      return useTeamsStore().state.data;
   });

   const PORTFOLIO =  computed(() => {
      return usePortfolioStore().state.data;
   })

   const BLOGS =  computed(() => {
      return useBlogStore().state.data;
   })

   return {
      STORE,
      state,
      FindAll,
      COMPAGNY,
      BANNERS,
      TEAMS,
      PARTNERS,
      PAST_PRESIDENTS,
      PORTFOLIO,
      BLOGS
   };
};

// <MessageLoading :laoding="state.loading" v-else />
