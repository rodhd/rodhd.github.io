// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/index.scss';
import { FontAwesomeIcon, FontAwesomeLayers } from "@fortawesome/vue-fontawesome";
import './styles/fontAwesomeIcons';

export default function (Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('FontAwesomeIcon', FontAwesomeIcon);
  Vue.component('FontAwesomeLayers', FontAwesomeLayers);

  //appOptions.i18n.setLocaleMessage('de-de', require('./locales/de-de.json'))
  //appOptions.i18n.setLocaleMessage('en-gb', require('./locales/en-gb.json'))

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'
  });

  head.meta.push([
    {
      name: 'charset',
      content: 'UTF-8'
    },
    {
      name: "og:title",
      content: "Rodrigo Herrera Diaz"
    },
    {
      name: "og:description",
      content: "Personal website and CV"
    },
    {
      name: "og:image",
      content: "https://rodrigo-herrera.info/assets/static/Profile_Pic.06d96a8.91428917792753c9ab0bd8fa25d073a0.jpg"
    },
  ]);
}
