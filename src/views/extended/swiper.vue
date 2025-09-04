<template>
  <Layout>
    <Breadcrumb title="Swiper" subtitle="Extended"/>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">

      <CustomSyntax title="Default Swiper">
        <template #card-body>
          <Swiper
              :slides-per-view="1"
              :modules="[Autoplay]"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-1.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-2.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-3.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Navigation & Pagination Swiper">
        <template #card-body>
          <Swiper
              :modules="[Autoplay,Navigation,Pagination]"
              :slides-per-view="1"
              :navigation="true"
              :pagination="true"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-4.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-5.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-6.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Pagination Dynamic Swiper">
        <template #card-body>
          <Swiper
              :modules="[Autoplay,Pagination]"
              :slides-per-view="1"
              :pagination="{dynamicBullets:true}"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-7.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-8.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-9.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Pagination Fraction Swiper">
        <template #card-body>
          <Swiper
              :modules="[Autoplay,Pagination,Navigation]"
              :slides-per-view="1"
              :pagination="{type: 'fraction'}"
              :navigation="true"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-10.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-11.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-12.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Pagination Custom Swiper">
        <template #card-body>
          <Swiper
              :modules="[Pagination,Autoplay]"
              :slides-per-view="1"
              :pagination="pagination"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-2.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-3.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-4.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Pagination Progress Swiper">
        <template #card-body>
          <Swiper
              :modules="[Autoplay,Pagination]"
              :slides-per-view="1"
              :pagination="{type: 'progressbar'}"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-5.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-6.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-7.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Scrollbar Swiper">
        <template #card-body>
          <Swiper
              :modules="[Autoplay,Scrollbar,Navigation]"
              :slides-per-view="1"
              :navigation="true"
              :scrollbar="{hide: true}"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-8.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-9.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-10.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Space Between Swiper">
        <template #card-body>
          <Swiper
              :modules="[Pagination,Autoplay]"
              :spaceBetween="100"
              :pagination="{clickable: true}"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-11.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-12.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-1.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Mousewheel Control Swiper">
        <template #card-body>
          <Swiper
              :modules="[Mousewheel,Pagination]"
              :slidesPerView="1"
              :mousewheel="true"
              :pagination="true"

          >
            <SwiperSlide><img src="@/assets/images/small/img-3.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-4.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-5.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Effect Fade Swiper">
        <template #card-body>
          <Swiper
              :modules="[Pagination,EffectFade,Autoplay]"
              :slidesPerView="1"
              :effect="'fade'"
              :pagination="true"
              :autoplay="{delay:3000}"
              :loop="true"
          >
            <SwiperSlide><img src="@/assets/images/small/img-6.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-7.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-8.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Effect Creative Swiper">
        <template #card-body>
          <Swiper
              :modules="[EffectCreative,Autoplay,Pagination]"
              :slidesPerView="1"
              :effect="'creative'"
              :creativeEffect="{
                          prev: {shadow: true,translate: [0, 0, -400],},
                          next: {translate: ['100%', 0, 0],},
                            }"
              :autoplay="{delay:3000}"
              :pagination="true"
              :loop="true"
          >
            <SwiperSlide><img src="@/assets/images/small/img-9.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-10.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-11.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Effect Flip Swiper">
        <template #card-body>
          <Swiper
              :modules="[Pagination,EffectFlip,Autoplay]"
              :slidesPerView="1"
              :effect="'flip'"
              :grabCursor="true"
              :pagination="true"
              :loop="true"
              :autoplay="{delay:3000}"
          >
            <SwiperSlide><img src="@/assets/images/small/img-12.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-1.jpg" alt=""></SwiperSlide>
            <SwiperSlide><img src="@/assets/images/small/img-2.jpg" alt=""></SwiperSlide>
          </Swiper>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import CustomSyntax from "@/components/custom-syntax.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Mousewheel,
  EffectFade,
  EffectCreative,
  EffectFlip
} from 'swiper/modules';


export default {
  components: {CustomSyntax, Layout, Breadcrumb, Swiper, SwiperSlide},
  data() {
    return {
      Autoplay,
      Navigation,
      Pagination,
      Scrollbar,
      Mousewheel,
      EffectFade,
      EffectCreative,
      EffectFlip,
      pagination: {

        renderBullet: function (index, className) {
          return '<span class="' + className +' !h-[22px]'+ '">' + (index + 1) + '</span>';
        },
      },
    }
  }
};
</script>
