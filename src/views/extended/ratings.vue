<template>
  <Layout>
    <Breadcrumb title="Ratings" subtitle="Extended"/>
    <div class="grid 2xl:grid-cols-2 gap-6">

      <CustomSyntax title="Rater Js Example">
        <template #card-body>
          <div id="basic-rater"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="5 star rater with step">
        <template #card-body>
          <div id="rater-step"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Random Number Between">
        <template #card-body>
          <div id="rater-message"></div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="On hover Event">
        <template #card-body>
          <div>
            <div id="rater-onhover" class="align-middle"></div>
            <span
                class="ratingnum inline-block text-center rounded-full w-6 h-full text-sm bg-info text-white align-middle ms-2"></span>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Clear/Reset rater">
        <template #card-body>
          <div class="flex items-center">
            <div id="raterreset" class="align-middle"></div>
            <span class="clear-rating"></span>
            <button id="raterreset-button" class="btn btn-sm bg-primary text-white ms-4">Reset</button>
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

import raterJs from 'rater-js/index.js'
export default {
  components: {CustomSyntax, Breadcrumb, Layout},
  mounted() {
    // basic-rater
    if (document.querySelector('#basic-rater'))
      var basicRating = raterJs({
        starSize: 22,
        rating: 3,
        element: document.querySelector("#basic-rater"),
        rateCallback: function rateCallback(rating, done) {
          this.setRating(rating);
          done();
        }
      });

// rater-step
    if (document.querySelector('#rater-step'))
      var starRatingStep = raterJs({
        starSize: 22,
        rating: 1.5,
        element: document.querySelector("#rater-step"),
        rateCallback: function rateCallback(rating, done) {
          this.setRating(rating);
          done();
        }
      });

// rater-message
    var messageDataService = {
      rate: function (rating) {
        return {
          then: function (callback) {
            setTimeout(function () {
              callback((Math.random() * 5));
            }, 1000);
          }
        }
      }
    }

    if (document.querySelector('#rater-message'))
      var starRatingmessage = raterJs({
        isBusyText: "Rating in progress. Please wait...",
        starSize: 22,
        element: document.querySelector("#rater-message"),
        rateCallback: function rateCallback(rating, done) {
          starRatingmessage.setRating(rating);
          messageDataService.rate(rating).then(function (avgRating) {
            starRatingmessage.setRating(avgRating);
            done();
          });
        }
      });

// rater-unlimitedstar
    if (document.querySelector('#rater-unlimitedstar'))
      var starRatingunlimited = raterJs({
        starSize: 22,
        max: 5,
        readOnly: true,
        rating: 3.5,
        element: document.querySelector("#rater-unlimitedstar")
      });

// rater-onhover
    if (document.querySelector('#rater-onhover'))
      var starRatinghover = raterJs({
        starSize: 22,
        rating: 1,
        element: document.querySelector("#rater-onhover"),
        rateCallback: function rateCallback(rating, done) {
          this.setRating(rating);
          done();
        },
        onHover: function (currentIndex, currentRating) {
          document.querySelector('.ratingnum')!.textContent = currentIndex;
        },
        onLeave: function (currentIndex, currentRating) {
          document.querySelector('.ratingnum')!.textContent = currentRating;
        }
      });

// rater-reset
    if (document.querySelector('#raterreset'))
      var starRatingreset = raterJs({
        starSize: 22,
        rating: 2,
        element: document.querySelector("#raterreset"),
        rateCallback: function rateCallback(rating, done) {
          this.setRating(rating);
          done();
        }
      });

    if (document.querySelector('#raterreset-button'))
      document.querySelector('#raterreset-button')!.addEventListener("click", function () {
        starRatingreset.clear();
      }, false);
  }
}
</script>
