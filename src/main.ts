import { createApp, type Plugin } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueApexCharts from 'vue3-apexcharts';
import 'simplebar'
import 'jsvectormap'
import VueFeather from 'vue-feather';
import VuePlyr from 'vue-plyr'
import VueSweetalert2 from 'vue-sweetalert2';
import VueTheMask from "vue-the-mask";

import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import moment from 'moment'
window.moment = moment

import 'preline'
import 'simplebar-vue/dist/simplebar.min.css';
import 'dropzone/dist/min/dropzone.min.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'prismjs/themes/prism.css';
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-flip';
import 'animate.css/animate.min.css'
import 'animate.css/animate.compat.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'nouislider/dist/nouislider.min.css'
import 'flatpickr/dist/flatpickr.min.css'
import '@simonwep/pickr/dist/themes/classic.min.css';
import '@simonwep/pickr/dist/themes/monolith.min.css';
import '@simonwep/pickr/dist/themes/nano.min.css';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';
import 'gridjs/dist/theme/mermaid.min.css'
import 'shepherd.js/dist/css/shepherd.css'
import 'nice-select2/dist/css/nice-select2.css'
import 'tippy.js/dist/tippy.css'
import '@/assets/scss/app.scss'
import '@/assets/scss/icons.scss'

const app = createApp(App)


const MetaPlug: Plugin = {
    install: (app: any, options: any) => {
        const useMeta = (item: { [key: string]: any }) => {
            console.info(item);
        };
        app.mixin({
            methods: {
                useMeta(item: { [key: string]: any }) {
                    document.head.querySelector("title")!.innerHTML =
                        item["title"] + " | Konrix - Responsive Tailwind Admin Dashboard";
                },
            },
        });
    },
};


app.use(createPinia())
app.use(router)
app.use(MetaPlug);
app.use(VueApexCharts)
app.use(VuePlyr)
app.use(VueSweetalert2)
app.use(VueTheMask)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
