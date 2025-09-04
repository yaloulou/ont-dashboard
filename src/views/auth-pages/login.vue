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

            <form @submit.prevent="logIn">

              <div v-if="error" class="text-danger text-center mb-2">Svp, entrez les détails correctes</div>

            <div class="mb-4">
              <label
                class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                for="LoggingEmailAddress"
                >Login</label
              >
              <input
                id="LoggingEmailAddress"
                class="form-input"
                v-model="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>

            <div class="mb-4">
              <label
                class="block text-sm font-medium text-gray-600 dark:text-gray-200 mb-2"
                for="loggingPassword"
                >Mot de passe</label
              >
              <input
                id="loggingPassword"
                class="form-input"
                v-model="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="form-checkbox rounded"
                  v-model="checked"
                  id="checkbox-signin"
                />
                <label class="ms-2" for="checkbox-signin">Se souvenir de moi</label>
              </div>
              <router-link
                to="/recoverpw"
                class="text-sm text-primary border-b border-dashed border-primary"
                >Mot de passe oublié ?</router-link
              >
            </div>

            <div class="flex justify-center mb-6">
              <button class="btn w-full text-white bg-primary" type="submit">Se connecter</button>
            </div>

            </form>
            <div class="flex items-center my-6">
              <div
                class="flex-auto mt-px border-t border-dashed border-gray-200 dark:border-slate-700"
              ></div>
              <div
                class="flex-auto mt-px border-t border-dashed border-gray-200 dark:border-slate-700"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useFakeAuthStore } from "@/stores/fakeAuth";
import router from "@/router";
export default {
  data() {
    return {
      checked: true,
      useFakeAuth: useFakeAuthStore(),
      username: 'boyo',
      password: 'Aquachem1',
      error: false
    }
  },
  methods: {
    async logIn() {
      try {
        // Faire la requête POST avec axios
        const response = await axios.post(
          'https://ont-redevance.com/api/v1/auth/establishment/login',
          {
            username: this.username,
            password: this.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        
        // Afficher la réponse dans la console
        //console.log('Réponse du serveur:', response.data);
        
        // Si la réponse est positive, rediriger
        if (response.data.success) {
          // Stocker le token dans localStorage pour une utilisation ultérieure
          localStorage.setItem('authToken', response.data.data.token);
          localStorage.setItem('userData', JSON.stringify(response.data.data.user));

          console.log('Token stocké:', localStorage.getItem('authToken'));

          
          // Rediriger vers la page d'accueil
          router.push('/');
        } else {
          this.error = true;
        }
      } catch (error) {
        console.error('Erreur de connexion:', error);
        this.error = true;
      }
    }
  }
};
</script>