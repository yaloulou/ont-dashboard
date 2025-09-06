const docsRoutes = [
    {
        path: "/docs",
        name: "Documentation",
        meta: {authRequired: true},
        children: [
            {
                path: "introduction",
                name: "Introduction",
                component: () => import("@/views/docs/introduction.vue"),
            },
            {
                path: "installation",
                name: "Installation",
                component: () => import("@/views/docs/installation.vue"),
            },
            {
                path: "customization",
                name: "Customization",
                component: () => import("@/views/docs/customization.vue"),
            },
            {
                path: "changelog",
                name: "Change Log",
                component: () => import("@/views/docs/changelog.vue"),
            },
        ]
    },
]

const authRoutes = [
            {
                path: "/login",
                name: "Login",
                component: () => import("@/views/auth-pages/login.vue"),
            },
            {
                path: "/register",
                name: "Register",
                component: () => import("@/views/auth-pages/register.vue"),
            },
            {
                path: "/recoverpw",
                name: "Recover Password",
                component: () => import("@/views/auth-pages/recover-pass.vue"),
            },
            {
                path: "/lock-screen",
                name: "Lock Screen",
                component: () => import("@/views/auth-pages/lock-screen.vue"),
            },
];

const errorPageRoutes = [
    {
        path: "/404",
        name: "Error 404",
        component: () => import("@/views/pages/error-404.vue"),
    },
    {
        path: "/404-alt",
        name: "Error 404 Alt",
        component: () => import("@/views/pages/error-404-alt.vue"),
    },
    {
        path: "/500",
        name: "Error 500",
        component: () => import("@/views/pages/error-500.vue"),
    },
    {
        path: "/:catchAll(.*)",
        redirect: "404",
    },
]

const dashboardRoutes = [
    {
        path: "",
        name: "Dashboard",
        meta: {authRequired: true},
        component: () => import("@/views/dashboard/index.vue"),
    },
];

const appsRoutes = [
    {
        path: "/apps",
        name: "Apps",
        meta: {authRequired: true},
        children: [
            {
                path: "revenue",
                name: "revenue",
                component: () => import("@/views/apps/revenue/revenue.vue"),
            },
            {
                path: "etablissement",
                name: "etablissement",
                component: () => import("@/views/apps/etablissement/index.vue"),
            },
            {
                path: "declarationfiscale",
                name: "declarationfiscale",
                component: () => import("@/views/apps/declarationfiscale/index.vue"),
            },
            {
                path: "police",
                name: "police",
                component: () => import("@/views/apps/police/index.vue"),
            },
            {
                path: "hebergements",
                name: "hebergements",
                component: () => import("@/views/apps/hebergements/index.vue"),
            },
            {
                path: "utilisateurs",
                name: "utilisateurs",
                component: () => import("@/views/apps/utilisateurs/index.vue"),
            },
            {
                path: "paiement",
                name: "paiement",
                component: () => import("@/views/apps/paiement/index.vue"),
            },
            {
                path: "relevemensuel",
                name: "relevemensuel",
                component: () => import("@/views/apps/relevemensuel/index.vue"),
            },
            {
                path: "calendar",
                name: "Calendar",
                component: () => import("@/views/apps/calendar/index.vue"),
            },
            {
                path: "tickets",
                name: "Tickets",
                component: () => import("@/views/apps/tickets/index.vue"),
            },
            {
                path: "file-manager",
                name: "File Manager",
                component: () => import("@/views/apps/file-manager/index.vue"),
            },
            {
                path: "kanban",
                name: "Kanban",
                component: () => import("@/views/apps/kanban/index.vue"),
            },
            {
                path: "project",
                name: "Project",
                children: [
                    {
                        path: "list",
                        name: "List",
                        component: () => import("@/views/apps/project/list/index.vue"),
                    },
                    {
                        path: "detail",
                        name: "Detail",
                        component: () => import("@/views/apps/project/detail/index.vue"),
                    },
                    {
                        path: "create",
                        name: "Create",
                        component: () => import("@/views/apps/project/create/index.vue"),
                    },
                ],
            },
        ],
    },
];

const pagesRoutes = [
    {
        path: "/pages",
        name: "Pages",
        meta: {authRequired: true},
        children: [
            {
                path: "starter",
                name: "Starter",
                component: () => import("@/views/pages/starter.vue"),
            },
            {
                path: "timeline",
                name: "Timeline",
                component: () => import("@/views/pages/timeline.vue"),
            },
            {
                path: "invoice",
                name: "Invoice",
                component: () => import("@/views/pages/invoice.vue"),
            },
            {
                path: "gallery",
                name: "Gallery",
                component: () => import("@/views/pages/gallery.vue"),
            },
            {
                path: "faq",
                name: "FAQ",
                component: () => import("@/views/pages/faq.vue"),
            },
            {
                path: "pricing",
                name: "Pricing",
                component: () => import("@/views/pages/pricing.vue"),
            },
            {
                path: "maintenance",
                name: "Maintenance",
                component: () => import("@/views/pages/maintenance.vue"),
            },
            {
                path: "coming-soon",
                name: "Coming Soon",
                component: () => import("@/views/pages/coming-soon.vue"),
            },
        ],
    },
];

const layoutRoutes = [
    {
        path: "/layout",
        name: "Layouts",
        meta: {authRequired: true},
        children: [
            {
                path: "hovered",
                name: "Hovered Menu",
                component: () => import("@/views/layouts/hovered.vue"),
            },
            {
                path: "icon-view",
                name: "Icon View Menu",
                component: () => import("@/views/layouts/icon-view.vue"),
            },
            {
                path: "compact",
                name: "Compact Menu",
                component: () => import("@/views/layouts/compact.vue"),
            },
            {
                path: "mobile-view",
                name: "Mobile View Menu",
                component: () => import("@/views/layouts/mobile-view.vue"),
            },
            {
                path: "hidden",
                name: "Hidden Menu",
                component: () => import("@/views/layouts/hidden.vue"),
            },
        ],
    },
];

const componentsRoutes = [
    {
        path: "/ui",
        name: "ui",
        meta: {authRequired: true},
        children: [
            {
                path: "accordions",
                name: "Accordions",
                component: () => import("@/views/base-ui/accordions.vue"),
            },
            {
                path: "alerts",
                name: "Alerts",
                component: () => import("@/views/base-ui/alerts.vue"),
            },
            {
                path: "avatars",
                name: "Avatars",
                component: () => import("@/views/base-ui/avatars.vue"),
            },
            {
                path: "buttons",
                name: "Buttons",
                component: () => import("@/views/base-ui/buttons.vue"),
            },
            {
                path: "badges",
                name: "Badges",
                component: () => import("@/views/base-ui/badges.vue"),
            },
            {
                path: "breadcrumbs",
                name: "Breadcrumbs",
                component: () => import("@/views/base-ui/breadcrumb.vue"),
            },
            {
                path: "cards",
                name: "Cards",
                component: () => import("@/views/base-ui/cards.vue"),
            },
            {
                path: "collapse",
                name: "Collapse",
                component: () => import("@/views/base-ui/collapse.vue"),
            },
            {
                path: "dismissible",
                name: "Dismissible",
                component: () => import("@/views/base-ui/dismissible.vue"),
            },
            {
                path: "dropdowns",
                name: "Dropdowns",
                component: () => import("@/views/base-ui/dropdowns.vue"),
            },
            {
                path: "progress",
                name: "Progress",
                component: () => import("@/views/base-ui/progress.vue"),
            },
            {
                path: "skeleton",
                name: "skeleton",
                component: () => import("@/views/base-ui/skeleton.vue"),
            },
            {
                path: "spinners",
                name: "Spinners",
                component: () => import("@/views/base-ui/spinners.vue"),
            },
            {
                path: "list-group",
                name: "List Group",
                component: () => import("@/views/base-ui/list-group.vue"),
            },
            {
                path: "ratio",
                name: "Aspect Ratio",
                component: () => import("@/views/base-ui/ratio.vue"),
            },
            {
                path: "tabs",
                name: "Tabs",
                component: () => import("@/views/base-ui/tabs.vue"),
            },
            {
                path: "modals",
                name: "Modals",
                component: () => import("@/views/base-ui/modals.vue"),
            },
            {
                path: "offcanvas",
                name: "Offcanvas",
                component: () => import("@/views/base-ui/offcanvas.vue"),
            },
            {
                path: "popovers",
                name: "Popovers",
                component: () => import("@/views/base-ui/popovers.vue"),
            },
            {
                path: "tooltips",
                name: "Tooltips",
                component: () => import("@/views/base-ui/tooltips.vue"),
            },
            {
                path: "typography",
                name: "Typography",
                component: () => import("@/views/base-ui/typography.vue"),
            },
        ],
    },
];

const extendedRoutes = [
    {
        path: "/extended",
        name: "Extended",
        meta: {authRequired: true},
        children: [
            {
                path: "swiper",
                name: "Swiper",
                component: () => import("@/views/extended/swiper.vue"),
            },
            {
                path: "nestable",
                name: "Nestable List",
                component: () => import("@/views/extended/nestable-list.vue"),
            },
            {
                path: "ratings",
                name: "Ratings",
                component: () => import("@/views/extended/ratings.vue"),
            },
            {
                path: "animation",
                name: "Animation",
                component: () => import("@/views/extended/animation.vue"),
            },
            {
                path: "player",
                name: "Player",
                component: () => import("@/views/extended/player.vue"),
            },
            {
                path: "scrollbar",
                name: "Scrollbar",
                component: () => import("@/views/extended/scrollbar.vue"),
            },
            {
                path: "sweet-alert",
                name: "Sweet Alert",
                component: () => import("@/views/extended/sweet-alert.vue"),
            },
            {
                path: "tour",
                name: "Tour Page",
                component: () => import("@/views/extended/tour.vue"),
            },
            {
                path: "tippy-tooltips",
                name: "Tippy Tooltip",
                component: () => import("@/views/extended/tippy-tooltip.vue"),
            },
            {
                path: "lightbox",
                name: "Lightbox",
                component: () => import("@/views/extended/lightbox.vue"),
            },
        ],
    },
];

const formRoutes = [
    {
        path: "/forms",
        name: "Forms",
        meta: {authRequired: true},
        children: [
            {
                path: "elements",
                name: "Form Elements",
                component: () => import("@/views/forms/form-elements.vue"),
            },
            {
                path: "select",
                name: "Form Select",
                component: () => import("@/views/forms/select.vue"),
            },
            {
                path: "range",
                name: "Form Range",
                component: () => import("@/views/forms/range.vue"),
            },
            {
                path: "pickers",
                name: "Form Pickers",
                component: () => import("@/views/forms/pickers.vue"),
            },
            {
                path: "masks",
                name: "Form Masks",
                component: () => import("@/views/forms/masks.vue"),
            },
            {
                path: "editor",
                name: "Form Editors",
                component: () => import("@/views/forms/editors.vue"),
            },
            {
                path: "file-uploads",
                name: "Form File upload",
                component: () => import("@/views/forms/file-upload.vue"),
            },
            {
                path: "validation",
                name: "Form Validation",
                component: () => import("@/views/forms/validation.vue"),
            },
            {
                path: "layout",
                name: "Form Layout",
                component: () => import("@/views/forms/form-layout.vue"),
            },
        ],
    },
]

const tableRoutes = [
    {
        path: "/tables",
        name: "Table",
        meta: {authRequired: true},
        children: [
            {
                path: "basic",
                name: "Basic Table",
                component: () => import("@/views/tables/basic-tables.vue"),
            }, {
                path: "datatables",
                name: "Data Tables",
                component: () => import("@/views/tables/data-tables.vue"),
            },
        ],
    },
];

const iconsRoutes = [
    {
        path: "/icons",
        name: "Icons",
        meta: {authRequired: true},
        children: [
            {
                path: "mingcute",
                name: "Mingcute",
                component: () => import("@/views/icons/mingcute.vue"),
            },
            {
                path: "feather",
                name: "feather",
                component: () => import("@/views/icons/feather.vue"),
            },
            {
                path: "material-symbols",
                name: "material",
                component: () => import("@/views/icons/material-symbols.vue"),
            },
        ],
    },
];

const chartRoutes = [
    {
        path: "/charts",
        name: "Charts",
        meta: {authRequired: true},
        component: () => import("@/views/charts/index.vue"),
    },
];

const mapRoutes = [
    {
        path: "/maps",
        name: "Maps",
        meta: {authRequired: true},
        children: [
            {
                path: "vector-maps",
                name: "Vector Maps",
                component: () => import("@/views/maps/vector-maps/index.vue"),
            },
            {
                path: "google-maps",
                name: "Google Maps",
                component: () => import("@/views/maps/google-maps/index.vue"),
            }
        ],
    },
]

export const authProtectedRoutes = [...dashboardRoutes, ...appsRoutes, ...pagesRoutes,...layoutRoutes, ...componentsRoutes, ...extendedRoutes, ...formRoutes, ...tableRoutes, ...iconsRoutes, ...chartRoutes, ...mapRoutes]

export const allRoutes = [...docsRoutes,...authRoutes, ...errorPageRoutes, ...authProtectedRoutes];
