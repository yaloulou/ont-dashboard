<template>
  <Layout>
    <Breadcrumb title="Validation" subtitle="Forms"/>

    <div class="flex flex-col gap-6">

      <CustomSyntax title="Browser defaults">
        <template #card-body>
          <form class="valid-form grid lg:grid-cols-3 gap-6">
            <div class="form-group">
              <label for="validationDefault01" class="text-gray-800 text-sm font-medium inline-block mb-2">First
                name</label>
              <input type="text" class="form-input" id="validationDefault01" value="Mark" required>
            </div>
            <div class="form-group">
              <label for="validationDefault02" class="text-gray-800 text-sm font-medium inline-block mb-2">Last
                name</label>
              <input type="text" class="form-input" id="validationDefault02" value="Otto" required>
            </div>
            <div class="form-group">
              <label for="validationDefaultUsername" class="text-gray-800 text-sm font-medium inline-block mb-2">Username</label>
              <div class="flex items-center">
                <span class="py-2 px-3 bg-light rounded-l" id="inputGroupPrepend2">@</span>
                <input type="text" class="form-input rounded-l-none" id="validationDefaultUsername"
                       aria-describedby="inputGroupPrepend2" required>
              </div>
            </div>
            <div class="form-group">
              <label for="validationDefault03" class="text-gray-800 text-sm font-medium inline-block mb-2">City</label>
              <input type="text" class="form-input" id="validationDefault03" required>
            </div>
            <div class="form-group">
              <label for="validationDefault04" class="text-gray-800 text-sm font-medium inline-block mb-2">State</label>
              <select class="form-select" id="validationDefault04" required>
                <option selected disabled value="">Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group">
              <label for="validationDefault05" class="text-gray-800 text-sm font-medium inline-block mb-2">Zip</label>
              <input type="text" class="form-input" id="validationDefault05" required>
            </div>
            <div class="col-span-3">
              <div class="form-check">
                <input class="form-checkbox rounded" type="checkbox" value="" id="invalidCheck2" required>
                <label class="ms-1.5" for="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div class="col-span-3">
              <button class="btn bg-primary text-white" type="submit">Submit form</button>
            </div>
          </form>
        </template>
      </CustomSyntax>


      <CustomSyntax title="PristineJS Validation">
        <template #card-body>
          <p class="text-gray-400 text-sm mb-4">Three part must included <code>.form-valid, .form-group and
            required</code> element. More details about Pristine please read <a target="_blank"
                                                                                href="https://github.com/sha256/Pristine"
                                                                                class="text-primary">on here</a></p>
          <form class="valid-form grid lg:grid-cols-3 gap-6">
            <div class="form-group">
              <label for="inputEmail4" class="text-gray-800 text-sm font-medium inline-block mb-2">Email</label>
              <input type="email" class="form-input" id="inputEmail4" required>
            </div>
            <div class="form-group">
              <label for="inputPassword4" class="text-gray-800 text-sm font-medium inline-block mb-2">Password</label>
              <input type="password" class="form-input" id="inputPassword4" required>
            </div>
            <div class="form-group">
              <label for="inputAddress" class="text-gray-800 text-sm font-medium inline-block mb-2">Address</label>
              <input type="text" class="form-input" id="inputAddress" placeholder="1234 Main St" required>
            </div>
            <div class="form-group">
              <label for="inputAddress2" class="text-gray-800 text-sm font-medium inline-block mb-2">Address 2</label>
              <input type="text" class="form-input" id="inputAddress2" placeholder="Apartment, studio, or floor"
                     required>
            </div>
            <div class="form-group">
              <label for="inputCity" class="text-gray-800 text-sm font-medium inline-block mb-2">City</label>
              <input type="text" class="form-input" id="inputCity" required>
            </div>
            <div class="form-group">
              <label for="inputState" class="text-gray-800 text-sm font-medium inline-block mb-2">State</label>
              <select id="inputState" class="form-input" required>
                <option>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group">
              <label for="inputZip" class="text-gray-800 text-sm font-medium inline-block mb-2">Zip</label>
              <input type="text" class="form-input" id="inputZip" required>
            </div>
            <div class="form-group col-span-3">
              <div class="form-check">
                <input class="form-checkbox rounded" type="checkbox" value="" id="checked-demo" required>
                <label class="ms-1.5" for="checked-demo">
                  I agree to the Terms of Use
                </label>
              </div>
            </div>

            <div class="form-group col-span-3">
              <button type="submit" class="btn bg-primary text-white">Register Now</button>
            </div>
          </form>
        </template>
      </CustomSyntax>

    </div>

  </Layout>
</template>

<script lang="ts">
import Layout from "@/components/layouts/layout.vue";
import Breadcrumb from "@/components/breadcrumb.vue";

import Pristine from 'pristinejs'
import CustomSyntax from "@/components/custom-syntax.vue";

export default {
  components: {CustomSyntax, Breadcrumb, Layout},
  mounted() {
    const valid_form = document.querySelectorAll(".valid-form");

    if (valid_form != null) {
      for (let i = 0; i < valid_form.length; i++) {
        const pristine = new Pristine(valid_form[i]);

        valid_form[i].addEventListener('submit', function (e) {
          e.preventDefault();
          // check if the form is valid
          const valid = pristine.validate(); // returns true or false
        });
      }
    }
  }

}
</script>
