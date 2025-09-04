<template>
  <Layout>
    <Breadcrumb title="Sweet Alert" subtitle="Extended"/>
    <div class="grid 2xl:grid-cols-2 grid-cols-1 gap-6">

      <CustomSyntax title="Basic Message">
        <template #card-body>
          <button type="button" class="btn bg-primary text-white" @click="sweetalertBasic">Click me</button>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Title with a Text Under">
        <template #card-body>
          <button type="button" class="btn bg-primary text-white" @click="sweetalertTitle">Click me</button>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Message Alert">
        <template #card-body>
          <div class="space-x-1">
            <button type="button" class="btn bg-success text-white" @click="sweetalertSuccess">Success</button>
            <button type="button" class="btn bg-warning text-white" @click="sweetalertWarning">Warning</button>
            <button type="button" class="btn bg-info text-white" @click="sweetalertInfo">Info</button>
            <button type="button" class="btn bg-danger text-white" @click="sweetalertError">Error</button>
          </div>
        </template>
      </CustomSyntax>

      <CustomSyntax title="Long Content">
        <template #card-body>
          <button type="button" class="btn bg-primary text-white" @click="sweetalertLongContent">Click me</button>
        </template>
      </CustomSyntax>


      <CustomSyntax title="Warning Message">
        <template #card-body>
          <button type="button" class="btn bg-primary text-white" @click="sweetalertParams">Click me</button>
        </template>
      </CustomSyntax>

    </div>
  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import CustomSyntax from "@/components/custom-syntax.vue";


export default {
  components: {CustomSyntax, Layout, Breadcrumb,},

  methods: {
    sweetalertBasic() {
      this.$swal.fire({
        title: 'Any fool can use a computer',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        showCloseButton: false
      })
    },
    sweetalertTitle() {
      this.$swal.fire({
        title: "The Internet?",
        text: 'That thing is still around?',
        icon: 'question',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        showCloseButton: false
      })
    },
    sweetalertSuccess() {
      this.$swal.fire({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'success',
        showCancelButton: true,
        confirmButtonClass: 'btn bg-primary text-white w-xs me-2 mt-2',
        cancelButtonClass: 'btn bg-danger text-white w-xs mt-2',
        buttonsStyling: false,
        showCloseButton: false
      })
    },
    sweetalertWarning() {
      this.$swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        icon: 'error',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        footer: '<a href="">Why do I have this issue?</a>',
        showCloseButton: false
      })
    },
    sweetalertInfo() {
      this.$swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        icon: 'info',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        footer: '<a href="">Why do I have this issue?</a>',
        showCloseButton: false
      })
    },
    sweetalertError() {
      this.$swal.fire({
        title: 'Oops...',
        text: 'Something went wrong!',
        icon: 'warning',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        footer: '<a href="">Why do I have this issue?</a>',
        showCloseButton: false
      })
    },
    sweetalertLongContent() {
      this.$swal.fire({
        imageUrl: 'https://placeholder.pics/svg/300x1500',
        imageHeight: 1500,
        imageAlt: 'A tall image',
        confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
        buttonsStyling: false,
        showCloseButton: false
      })
    },
    sweetalertParams() {

      let swal = this.$swal

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonClass: 'btn bg-primary text-white w-xs me-2 mt-2',
        cancelButtonClass: 'btn bg-danger text-white w-xs mt-2',
        buttonsStyling: false,
        showCloseButton: false
      }).then(function (result) {
        console.log(result)
        if (result.value) {
          swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            confirmButtonClass: 'btn bg-primary text-white w-xs mt-2',
            buttonsStyling: false
          })
        } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
        ) {
          swal.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
            confirmButtonClass: 'btn bg-primary text-white mt-2',
            buttonsStyling: false
          })
        }
      });
    }

  },
};
</script>
