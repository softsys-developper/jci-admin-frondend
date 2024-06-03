import { createWebHistory, createRouter } from 'vue-router';
import HOME from '@/pages/index.vue';
import ContactsPage from '@/pages/contacts.page.vue';
import HeaderPage from '@/pages/header.page.vue';
import BannerPage from '@/pages/banner.page.vue';
import TeamsPage from '@/pages/teams.page.vue';
import PastsPresidentPage from '@/pages/pastsPresident.page.vue';
import BlogPage from '@/pages/blog.page.vue';
import PortfolioPage from "@/pages/portfolio.page.vue"
import SigninAuth from '@/pages/auth/signin.auth.vue';
import SignupAuth from '@/pages/auth/signup.auth.vue';
import AboutPage from '@/pages/about.page.vue';
import PartnerPage from '@/pages/partner.page.vue';

const routes: any = [
   { path: '/', component: HOME, name: 'HOME' },
   { path: '/signin', component: SigninAuth, name: 'SignIn' },
   { path: '/signup', component: SignupAuth, name: 'SignUp' },
   { path: '/contacts', component: ContactsPage, name: 'CONTACTS' },
   { path: '/headers', component: HeaderPage, name: 'HEADERS' },
   { path: '/about', component: AboutPage, name: 'ABOUTS' },
   { path: '/banners', component: BannerPage, name: 'BANNERS' },
   { path: '/teams', component: TeamsPage, name: 'TEAMS' },
   { path: '/pasts-presidents', component: PastsPresidentPage, name: 'PASTS_PRESIDENTS' },
   { path: '/portfolio', component: PortfolioPage, name: 'PORTFOLIO' },
   { path: '/blogs', component: BlogPage, name: 'BLOGS' },
   { path: '/partners', component: PartnerPage, name: 'PARTNER' },
];


const router = createRouter({ history: createWebHistory(), routes });

router.beforeEach(async (to) => {
 
   // Storage
   const nToken =  localStorage.getItem('nToken');

   if (
   
      nToken &&
      to.path.includes('/sign')
   ) {
      return {
         name: 'HOME',
      };
   }

   if (!nToken && !to.path.includes('/sign')) {
      return {
         name: 'SignIn',
      };
   }
});

export {
   router
};
