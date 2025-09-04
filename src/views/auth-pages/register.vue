<template>
  <div
      class="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-gray-700 dark:via-gray-900 dark:to-black"
  >
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="2xl:w-1/4 lg:w-1/3 md:w-1/2 w-full">
        <div class="card overflow-hidden sm:rounded-md rounded-none">
          <div class="p-6">
            <router-link to="/" class="block mb-8">
              <img
                  class="h-6 block dark:hidden"
                  src="@/assets/images/logo-dark.png"
                  alt=""
              />
              <img
                  class="h-6 hidden dark:block"
                  src="@/assets/images/logo-light.png"
                  alt=""
              />
            </router-link>

            <form @submit.prevent="register">

              <div v-if="error" class="text-danger text-center mb-2">Please enter valid details</div>

              <div class="mb-4">
                <label
                    class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    for="LoggingNameAddress"
                >Full Name</label
                >
                <input
                    id="LoggingNameAddress"
                    class="form-input"
                    v-model="name"
                    type="text"
                    placeholder="Enter your Name"
                />
              </div>

              <div class="mb-4">
                <label
                    class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    for="LoggingEmailAddress"
                >Email Address</label
                >
                <input
                    id="LoggingEmailAddress"
                    class="form-input"
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                />
              </div>

              <div class="mb-4">
                <label
                    class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                    for="loggingPassword"
                >Password</label
                >
                <input
                    id="loggingPassword"
                    class="form-input"
                    v-model="password"
                    type="password"
                    placeholder="Enter your password"
                />
              </div>

              <div class="mb-4">
                <div class="flex items-center">
                  <input
                      type="checkbox"
                      class="form-checkbox rounded"
                      id="checkbox-signup"
                  />
                  <label
                      class="ms-2 text-slate-900 dark:text-slate-200"
                      for="checkbox-signup"
                  >I accept
                    <a class="text-gray-400 underline"
                    >Terms and Conditions</a
                    ></label
                  >
                </div>
              </div>

              <div class="flex justify-center mb-6">
                <button class="btn w-full text-white bg-primary" type="submit">Register</button>
              </div>

            </form>

            <div class="flex items-center my-6">
              <div
                  class="flex-auto mt-px border-t border-dashed border-gray-200 dark:border-slate-700"
              ></div>
              <div class="mx-4 text-secondary">Or</div>
              <div
                  class="flex-auto mt-px border-t border-dashed border-gray-200 dark:border-slate-700"
              ></div>
            </div>

            <div class="flex gap-4 justify-center mb-6">
              <a class="btn border-light text-gray-400 dark:border-slate-700">
                <span class="flex justify-center items-center gap-2">
                  <i class="mgc_github_line text-info text-xl"></i>
                  <span class="lg:block hidden">Github</span>
                </span>
              </a>
              <a class="btn border-light text-gray-400 dark:border-slate-700">
                <span class="flex justify-center items-center gap-2">
                  <i class="mgc_google_line text-danger text-xl"></i>
                  <span class="lg:block hidden">Google</span>
                </span>
              </a>
              <a class="btn border-light text-gray-400 dark:border-slate-700">
                <span class="flex justify-center items-center gap-2">
                  <i class="mgc_facebook_line text-primary text-xl"></i>
                  <span class="lg:block hidden">Facebook</span>
                </span>
              </a>
            </div>

            <p class="text-gray-500 dark:text-gray-400 text-center">
              Already have account ?
              <router-link
                  to="/login"
                  class="text-primary ms-1"
              ><b>Log In</b></router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useFakeAuthStore } from "@/stores/fakeAuth";
import router from "@/router";
export default {
  data() {
    return {
      useFakeAuth: useFakeAuthStore(),
      name: '',
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    register() {
      if (this.useFakeAuth.register(this.name, this.email, this.password)) {
        return router.push('/')
      }
      this.error = true
    }
  }
};
</script>
