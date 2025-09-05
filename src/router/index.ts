// Fichier: router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import { allRoutes } from "@/router/routes"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((routeTo, routeFrom, next) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired)
  const authToken = localStorage.getItem('authToken');

  // Si la route ne nécessite pas d'authentification, on continue.
  if (!authRequired) {
    return next();
  }

  // Si l'authentification est requise et que le token est présent...
  if (authToken) {
    return next();
  }

  // Sinon, on redirige vers la page de login.
  next({ name: 'Login', query: { redirectFrom: routeTo.fullPath } });
})

export default router