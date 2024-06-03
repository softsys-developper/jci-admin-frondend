

export const MODE_APP = 'dev';
export const MODE_APP_VERSION = 'Beta 1 : V.0.0.0';

// General Route Of Web site
// 'https://api.jci-ci.org/api'
const BASE_URL = 'https://api.jci-ci.org/api' //'http://localhost:8000/api';

// URL distribution
export const URL_RESQUESTS = {
   AUTH_REGISTER: `${BASE_URL}/auth/signup`,
   AUTH_LOGIN: `${BASE_URL}/auth/signin`,

   INDEX: `${BASE_URL}/users`,
   INDEX_UPDATE: `${BASE_URL}/user/updated`,

   USER: `${BASE_URL}/users`,
   USER_SHOW: `${BASE_URL}/user/show`,

   BANNERS: `${BASE_URL}/banners`,
   BANNER_CREATED: `${BASE_URL}/banner/created`,
   BANNER_UPDATED: `${BASE_URL}/banner/updated`,
   BANNER_DELETE: `${BASE_URL}/banner/delete`,

   PPS: `${BASE_URL}/pps`,
   PP_CREATED: `${BASE_URL}/pp/created`,
   PP_UPDATED: `${BASE_URL}/pp/updated`,
   PP_DELETE: `${BASE_URL}/pp/delete`,

   TEAMS: `${BASE_URL}/teams`,
   TEAMS_CREATED: `${BASE_URL}/teams/created`,
   TEAMS_UPDATED: `${BASE_URL}/teams/updated`,
   TEAMS_DELETE: `${BASE_URL}/teams/delete`,

   CONTACTS: `${BASE_URL}/contacts`,
   CONTACTS_CREATED: `${BASE_URL}/contact/created`,
   CONTACTS_UPDATED: `${BASE_URL}/contact/updated`,
   CONTACTS_DELETE: `${BASE_URL}/contact/delete`,

   PARTNERS: `${BASE_URL}/partners`,
   PARTNER_CREATED: `${BASE_URL}/partner/created`,
   PARTNER_UPDATED: `${BASE_URL}/partner/updated`,
   PARTNER_DELETE: `${BASE_URL}/partner/delete`,

   BLOGS: `${BASE_URL}/blogs`,
   BLOG_CREATED: `${BASE_URL}/blog/created`,
   BLOG_UPDATED: `${BASE_URL}/blog/updated`,
   BLOG_DELETE: `${BASE_URL}/blog/delete`,

   BLOG_MEDIA_CREATED: `${BASE_URL}/blog/media/created`,

   ACTIVITES: `${BASE_URL}/activites`,
   ACTIVITE_CREATED: `${BASE_URL}/activite/created`,
   ACTIVITE_UPDATED: `${BASE_URL}/activite/updated`,
   ACTIVITE_DELETE: `${BASE_URL}/activite/delete`,
   ACTIVITE_MEDIA_DELETE: `${BASE_URL}/activite/media/delete`,
};
