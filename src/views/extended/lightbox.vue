<template>
  <Layout>
    <Breadcrumb title="Lightbox" subtitle="Extended"/>
    <div class="grid grid-cols-1 gap-6">

      <CustomSyntax title="Single Image Lightbox">
        <template #card-body>
          <div class="grid lg:grid-cols-4 gap-5">
            <div>
              <a href="/src/assets/images/small/img-1.jpg" class="image-popup">
                <img src="@/assets/images/small/img-1.jpg" alt="work-thumbnail" class="rounded-lg">
              </a>
            </div>
            <div>
              <a href="/src/assets/images/small/img-2.jpg" class="image-popup">
                <img src="@/assets/images/small/img-2.jpg" alt="work-thumbnail" class="rounded-lg">
              </a>
            </div>
            <div>
              <a href="/src/assets/images/small/img-4.jpg" class="image-popup">
                <img src="@/assets/images/small/img-4.jpg" alt="work-thumbnail" class="rounded-lg">
              </a>
            </div>
            <div>
              <a href="/src/assets/images/small/img-5.jpg" class="image-popup">
                <img src="@/assets/images/small/img-5.jpg" alt="work-thumbnail" class="rounded-lg">
              </a>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Images with Description">
        <template #card-body>
          <div class="grid lg:grid-cols-3 gap-5">
            <div>
              <a href="/src/assets/images/small/img-4.jpg" class="image-popup-desc" data-glightbox='title:Description Bottom; description: You can set the position of the description &lt;a href="http://google.com"&gt;with a link to Google&lt;/a&gt;'>
                <img src="@/assets/images/small/img-4.jpg" alt="work-thumbnail">
              </a>
            </div>

            <div>
              <a href="/src/assets/images/small/img-5.jpg" class="image-popup-desc" data-glightbox="title: Description Right; description: .custom-desc1; descPosition: right;">
                <img src="@/assets/images/small/img-5.jpg" alt="work-thumbnail">
              </a>

              <div class="glightbox-desc custom-desc1">
                <p>
                  You can set the position of the description in different ways for example
                  <strong style="text-decoration: underline">top, bottom, left or right</strong>
                </p>
                <p>
                  <a href="http://google.com" target="_blank" style="text-decoration: underline; font-weight: bold">Example Google link</a>
                  ipsum vehicula eros ultrices lacinia Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Duis quis ipsum vehicula eros ultrices lacinia.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                </p>
                <p>
                  Primis pharetra facilisis lorem quis penatibus ad nulla inceptos, dui per tempor taciti aliquet consequat sodales, curae tristique gravida auctor interdum malesuada sagittis.
                  Felis pretium eros ligula natoque ad ante rutrum himenaeos, adipiscing urna mauris porta quam efficitur odio, sagittis morbi tellus nisi molestie mus faucibus.
                </p>
                <p>
                  Primis pharetra facilisis lorem quis penatibus ad nulla inceptos, dui per tempor taciti aliquet consequat sodales, curae tristique gravida auctor interdum malesuada sagittis.
                  Felis pretium eros ligula natoque ad ante rutrum himenaeos, adipiscing urna mauris porta quam efficitur odio, sagittis morbi tellus nisi molestie mus faucibus.
                </p>
              </div>
            </div>

            <div>
              <a href="/src/assets/images/small/img-1.jpg" class="image-popup-desc" data-glightbox="title: Description Left; description: .custom-desc2; descPosition: left;">
                <img src="@/assets/images/small/img-1.jpg" alt="work-thumbnail">
              </a>
              <div class="glightbox-desc custom-desc2">
                <p>You can set the position of the description in different ways for example top, bottom, left or right</p>
                <p>Duis quis ipsum vehicula eros ultrices lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Popup with Video or Map">
        <template #card-body>
          <div class="flex flex-wrap gap-4">
            <!-- Youtube Video -->
            <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" class="image-popup-video-button rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold leading-5 text-white hover:bg-indigo-500" data-title="YouTube Video" data-description="YouTube Video Popup">
              Open YouTube Video
            </a>

            <!-- Vimeo Video -->
            <a href="https://vimeo.com/45830194" class="image-popup-video-button rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold leading-5 text-white hover:bg-indigo-500" data-title="Vimeo Video" data-description="Vimeo Video Popup">
              Open Vimeo Video
            </a>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Videos Gallery">
        <template #card-body>
          <p class="text-gray-400 mb-4">
            You can add videos with optional autoplay for
            <strong>Vimeo</strong>
            ,
            <strong>Youtube</strong>
            and
            <strong>self hosted videos</strong>
            . You can specify a default width for the videos or set different widths to each video in your gallery. The videos are 100% responsive and will play correctly on mobile devices.
          </p>

          <div class="grid lg: grid-cols-3 gap-4">
            <div>
              <div>
                <a href="https://vimeo.com/115041822" class="image-popup-video">
                  <img src="@/assets/images/small/img-1.jpg" alt="image" >
                </a>
              </div>
            </div>
            <div>
              <div>
                <a href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk" class="image-popup-video">
                  <img src="@/assets/images/small/img-2.jpg" alt="image" >
                </a>
              </div>
            </div>
            <div>
              <div>
                <a href="/src/assets/images/lightbox-video.mp4" class="image-popup-video">
                  <img src="@/assets/images/small/img-12.jpg" alt="image" >
                </a>
              </div>
            </div>
          </div>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Iframes and Inline Elements">
        <template #card-body>
          <p class="text-gray-400 mb-4">You can easily add iframes by simply entering the url, it could be a web page, a video, google maps, etc. also you can display any div of your page by entering the ID in the href attribute.</p>

          <div class="grid lg: grid-cols-3 gap-4">
            <div>
              <a href="https://tailwindcss.com/" class="image-iframe-elements">
                <img src="@/assets/images/small/img-5.jpg" alt="image" >
              </a>
            </div>
            <div>
              <a class="image-iframe-elements" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.977306439116!2d-73.96648875371474!3d40.77314541916876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bf08488f6b%3A0x618706a9142daa0d!2sUpper+East+Side%2C+Nueva+York%2C+EE.+UU.!5e0!3m2!1ses-419!2smx!4v1511830027642">
                <img src="@/assets/images/small/img-7.jpg" alt="image" >
              </a>
            </div>
          </div>
        </template>
      </CustomSyntax>

    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";
import CustomSyntax from "@/components/custom-syntax.vue";

import GLightbox from 'glightbox';

export default {
  components: {CustomSyntax, Layout, Breadcrumb,},
  mounted() {

// GLightbox Popup
    var lightbox = GLightbox({
      selector: '.image-popup',
      title: false,
    });

// GLightbox Popup

    var lightboxDesc = GLightbox({
      selector: '.image-popup-desc',
    });

// GLightbox Video Pop-up Button
    var lightboxvideo = GLightbox({
      selector: '.image-popup-video-button',
      title: false,
    });

// GLightbox Video
    var lightboxvideo = GLightbox({
      selector: '.image-popup-video',
      title: false,
    });

// GLightbox Iframes and Inline Elements
    var lightboxvideo = GLightbox({
      selector: '.image-iframe-elements',
      title: false,
    });
  }
};
</script>
