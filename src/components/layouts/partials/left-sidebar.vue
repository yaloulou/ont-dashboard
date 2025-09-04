<template>
  <div class="app-menu">
    <a href="/" class="logo-box">
      <div class="logo-light">
        <img
            src="@/assets/images/logo-light.png"
            class="logo-lg h-6"
            alt="Light logo"
        />
        <img
            src="@/assets/images/logo-sm.png"
            class="logo-sm"
            alt="Small logo"
        />
      </div>

      <div class="logo-dark">
        <img
            src="@/assets/images/logo-dark.png"
            class="logo-lg h-6"
            alt="Dark logo"
        />
        <img
            src="@/assets/images/logo-sm.png"
            class="logo-sm"
            alt="Small logo"
        />
      </div>
    </a>

    <button
        id="button-hover-toggle"
        class="absolute top-5 end-2 rounded-full p-1.5"
    >
      <span class="sr-only">Menu Toggle Button</span>
      <i class="mgc_round_line text-xl"></i>
    </button>

    <!--- Menu -->
    <div class="srcollbar" data-simplebar>
      <ul class="menu" data-fc-type="accordion">
        <li class="menu-title">Menu</li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_home_3_line"></i></span>
            <span class="menu-text"> Tableau de bord </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_building_2_line"></i></span>
            <span class="menu-text"> Mes hébergements </span>
          </router-link>
        </li>

        <li class="menu-item">  
          <router-link to="/apps/etablissement" class="menu-link">
            <span class="menu-icon"><i class="mgc_bank_line"></i></span>
            <span class="menu-text"> Établissements </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/apps/declarationfiscale" class="menu-link">
            <span class="menu-icon"><i class="mgc_file_check_line"></i></span>
            <span class="menu-text"> Déclarations fiscales </span>
          </router-link>
        </li>

        <!-- <li class="menu-item">
          <router-link to="/apps/calendar" class="menu-link">
            <span class="menu-icon"><i class="mgc_chart_bar_line"></i></span>
            <span class="menu-text"> Rapports de revenus </span>
          </router-link>
        </li> -->

        <li class="menu-item">
          <router-link to="/apps/relevemensuel" class="menu-link">
            <span class="menu-icon"><i class="mgc_calendar_line"></i></span>
            <span class="menu-text"> Relevé mensuel </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_currency_dollar_line"></i></span>
            <span class="menu-text"> Paiement </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_user_3_line"></i></span>
            <span class="menu-text"> Gestion des utilisateurs </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_badge_line"></i></span>
            <span class="menu-text"> Fiche de police </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_time_line"></i></span>
            <span class="menu-text"> Hébergements en cours </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/" class="menu-link">
            <span class="menu-icon"><i class="mgc_folder_2_line"></i></span>
            <span class="menu-text"> Documents </span>
          </router-link>
        </li>

        <li class="menu-title">Apps</li>

        <li class="menu-item" >
          <router-link to="/apps/calendar" class="menu-link">
            <span class="menu-icon"><i class="mgc_calendar_line"></i></span>
            <span class="menu-text"> Calendar </span>
          </router-link>
        </li>

        <li class="menu-item">
          <router-link to="/apps/tickets" class="menu-link">
            <span class="menu-icon"><i class="mgc_coupon_line"></i></span>
            <span class="menu-text"> Tickets </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {useLayoutStore} from "@/stores/layout";

export default {
  data() {
    return {
      useLayout: useLayoutStore(),
    };
  },
};
</script>