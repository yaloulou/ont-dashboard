import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
// import frost from "@frostui/tailwindcss"

export const defaultLayout = {
  direction: "ltr",
  theme: "light",
  layout: {
    width: "default", // Boxed width Only available at large resolutions > 1600px (xl)
    position: "fixed",
  },
  topbar: {
    color: "light",
  },
  menu: {
    color: "light",
  },
  sidenav: {
    view: "default",
  },
};
const html = document.getElementsByTagName("html")[0];

export const useLayoutStore = defineStore("layout", {
  state: () => {
    return {
      config: useStorage("__CONFIG__", {
        direction: "ltr",
        theme: "light",
        layout: {
          width: "default", // Boxed width Only available at large resolutions > 1600px (xl)
          position: "fixed",
        },
        topbar: {
          color: "light",
        },
        menu: {
          color: "light",
        },
        sidenav: {
          view: "default",
        },
      }),
    };
  },
  actions: {
    init() {
      let config = this.config;

      config.direction = html.getAttribute("dir") || this.config.direction;
      config.theme = html.getAttribute("data-mode") || this.config.theme;
      config.layout.width =
        html.getAttribute("data-layout-width") || this.config.layout.width;
      config.layout.position =
        html.getAttribute("data-layout-position") ||
        this.config.layout.position;
      config.topbar.color =
        html.getAttribute("data-topbar-color") || this.config.topbar.color;
      config.menu.color =
        html.getAttribute("data-menu-color") || this.config.menu.color;
      config.sidenav.view =
        html.getAttribute("data-sidenav-view") || this.config.sidenav.view;

      if (config) {
        html.setAttribute("dir", config.direction);
        html.setAttribute("data-mode", config.theme);
        html.setAttribute("data-layout-width", config.layout.width);
        html.setAttribute("data-layout-position", config.layout.position);
        html.setAttribute("data-topbar-color", config.topbar.color);
        html.setAttribute("data-menu-color", config.menu.color);

        if (window.innerWidth <= 1140) {
          html.setAttribute("data-sidenav-view", "mobile");
        } else {
          html.setAttribute("data-sidenav-view", config.sidenav.view);
        }
      }
    },

    initComponents() {
      const mybutton = document.querySelector('[data-toggle="back-to-top"]');

      window.addEventListener("scroll", function () {
        if (mybutton) {
          if (window.pageYOffset > 72) {
            mybutton.classList.add("flex");
            mybutton.classList.remove("hidden");
          } else {
            mybutton.classList.remove("flex");
            mybutton.classList.add("hidden");
          }
        }
      });

      mybutton!.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    },

    initfullScreenListener() {
      let self = this;
      let fullScreenBtn = document.querySelector('[data-toggle="fullscreen"]');

      if (fullScreenBtn) {
        fullScreenBtn.addEventListener("click", function (e) {
          e.preventDefault();
          document.body.classList.toggle("fullscreen-enable");
          if (!document.fullscreenElement) {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen();
            }
          } else {
            if (document["exitFullscreen"]) {
              document["exitFullscreen"]();
            }
          }
        });
      }
    },

    initSidenav() {
      const self = this;
      const pageUrl = window.location.href.split(/[?#]/)[0];
      const menuLinks = document.querySelectorAll<HTMLAnchorElement>(
        "ul.menu a.menu-link"
      );

      menuLinks.forEach((element) => {
        element.classList.remove('open')
        if (element.href === pageUrl) {
          element.classList.add("active");
          const parentMenu =
            element.parentElement!.parentElement!.parentElement;

          if (parentMenu && parentMenu.classList.contains("menu-item")) {
            const collapseButtonElement = parentMenu.querySelector(
              '.hs-collapse-toggle'
            );
            const collapseElement = parentMenu.querySelector(
                '.hs-collapse'
            );
            if (collapseButtonElement && collapseElement) {
              collapseButtonElement.classList.add('open')
              collapseElement.classList.add('open')
              collapseElement.classList.remove('hidden')
            }
          }
        }
      });

      setTimeout(function () {
        let activatedItem =
          document.querySelector<HTMLElement>("ul.menu .active");
        if (activatedItem != null) {
          let simplebarContent = document.querySelector<HTMLElement>(
            ".app-menu .simplebar-content-wrapper"
          );
          let offset = activatedItem.offsetTop - 300;
          if (simplebarContent && offset > 100) {
            scrollTo(simplebarContent, offset, 600);
          }
        }
      }, 200);

      // scrollTo (Sidenav Active Menu)
      function easeInOutQuad(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      function scrollTo(element: HTMLElement, to: number, duration: number) {
        let start = element.scrollTop,
          change = to - start,
          currentTime = 0,
          increment = 20;
        let animateScroll = function () {
          currentTime += increment;
          let val = easeInOutQuad(currentTime, start, change, duration);
          element.scrollTop = val;
          if (currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
        };
        animateScroll();
      }
    },

    reverseQuery(element: HTMLElement | null, query: string) {
      while (element) {
        if (element.parentElement) {
          if (element.parentElement.querySelector(query) === element)
            return element;
        }
        element = element.parentElement;
      }
      return null;
    },

    changeThemeDirection(direction: string) {
      this.config.direction = direction;
      html.setAttribute("dir", direction);
      this.setSwitchFromConfig();
    },

    changeThemeMode(color: string) {
      this.config.theme = color;
      html.setAttribute("data-mode", color);
      this.setSwitchFromConfig();
    },

    changeLayoutWidth(width: string, save = true) {
      html.setAttribute("data-layout-width", width);
      if (save) {
        this.config.layout.width = width;
        this.setSwitchFromConfig();
      }
    },

    changeLayoutPosition(position: string, save = true) {
      html.setAttribute("data-layout-position", position);
      if (save) {
        this.config.layout.position = position;
        this.setSwitchFromConfig();
      }
    },

    changeTopbarColor(color: string) {
      this.config.topbar.color = color;
      html.setAttribute("data-topbar-color", color);
      this.setSwitchFromConfig();
    },

    changeMenuColor(color: string) {
      this.config.menu.color = color;
      html.setAttribute("data-menu-color", color);
      this.setSwitchFromConfig();
    },

    changeSidenavView(view: string, save = true) {
      html.setAttribute("data-sidenav-view", view);
      if (save) {
        this.config.sidenav.view = view;
        this.setSwitchFromConfig();
      }
    },

    resetTheme() {
      this.changeThemeDirection(defaultLayout.direction);
      this.changeThemeMode(defaultLayout.theme);
      this.changeLayoutWidth(defaultLayout.layout.width);
      this.changeLayoutPosition(defaultLayout.layout.position);
      this.changeTopbarColor(defaultLayout.topbar.color);
      this.changeMenuColor(defaultLayout.menu.color);
      this.changeSidenavView(defaultLayout.sidenav.view);
      this.adjustLayout();
    },

    initSwitchListener() {
      let self = this;

      document
        .querySelectorAll<HTMLInputElement>("input[name=dir]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeThemeDirection(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-mode]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeThemeMode(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-layout-width]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeLayoutWidth(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-layout-position]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeLayoutPosition(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-topbar-color]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeTopbarColor(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-menu-color]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeMenuColor(element.value);
          });
        });

      document
        .querySelectorAll<HTMLInputElement>("input[name=data-sidenav-view]")
        .forEach(function (element) {
          element.addEventListener("change", function (e) {
            self.changeSidenavView(element.value);
          });
        });

      //  Light Dark Button
      let themeColorToggle = document.getElementById("light-dark-mode");
      if (themeColorToggle) {
        themeColorToggle.addEventListener("click", function (e) {
          if (self.config.theme === "light") {
            self.changeThemeMode("dark");
          } else {
            self.changeThemeMode("light");
          }
        });
      }

      // Menu Toggle Button ( Placed in Topbar)
      let menuToggleBtn = document.querySelector("#button-toggle-menu");
      if (menuToggleBtn) {
        menuToggleBtn.addEventListener("click", function () {
          let configView = self.config.sidenav.view;
          let view = html.getAttribute("data-sidenav-view");

          if (view === "mobile") {
            self.showBackdrop();
            html.classList.toggle("sidenav-enable");
          } else {
            if (configView == "hidden") {
              if (view === "hidden") {
                self.changeSidenavView(
                  configView == "hidden" ? "default" : configView,
                  false
                );

              } else {
                self.changeSidenavView("hidden", false);
              }
            } else {
              if (view === "sm") {
                self.changeSidenavView(
                  configView == "sm" ? "default" : configView,
                  false
                );
              } else {
                self.changeSidenavView("sm", false);
              }
            }
          }
        });
      }

      let menuHoverToggleBtn = document.querySelector("#button-hover-toggle");
      if (menuHoverToggleBtn) {
        menuHoverToggleBtn.addEventListener("click", function () {
          let configView = self.config.sidenav.view;
          let view = html.getAttribute("data-sidenav-view");

          if (configView == "hover") {
            if (view === "hover") {
              self.changeSidenavView(
                configView == "hover" ? "hover" : configView,
                true
              );
            } else {
              self.changeSidenavView("hover", true);
            }
          } else {
            if (view === "hover") {
              self.changeSidenavView(
                configView == "hover" ? "hover" : configView,
                true
              );
            } else {
              self.changeSidenavView("hover", true);
            }
          }
        });
      }

      // Config Reset Button
      let resetBtn = document.querySelector("#reset-layout");
      if (resetBtn) {
        resetBtn.addEventListener("click", function (e) {
          self.resetTheme();
        });
      }
    },

    showBackdrop() {
      const backdrop = document.createElement("div");
      backdrop.id = "backdrop";
      backdrop.classList.add(
        "transition-all",
        "fixed",
        "inset-0",
        "z-40",
        "bg-gray-900",
        "bg-opacity-50",
        "dark:bg-opacity-80"
      );
      document.body.appendChild(backdrop);

      if (document.getElementsByTagName("html")[0]) {
        document.body.style.overflow = "hidden";
        if (window.innerWidth > 1140) {
          document.body.style.paddingRight = "15px";
        }
      }

      const self = this;
      backdrop.addEventListener("click", function (e) {
        html.classList.remove("sidenav-enable");
        self.hideBackdrop();
      });
    },

    hideBackdrop() {
      let backdrop = document.getElementById("backdrop");
      if (backdrop) {
        document.body.removeChild(backdrop);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
      document
        .getElementById("theme-customization")
        ?.classList.add("translate-x-full", "rtl:-translate-x-full");
    },

    initWindowSize() {
      let self = this;
      window.addEventListener("resize", function (e) {
        self.adjustLayout();
      });
    },

    adjustLayout() {
      let self = this;

      if (window.innerWidth <= 1140) {
        self.changeSidenavView("mobile", false);
      } else {
        self.changeSidenavView(self.config.sidenav.view);
      }
    },

    setSwitchFromConfig() {
      document
        .querySelectorAll<HTMLInputElement>(
          "#theme-customization input[type=radio]"
        )
        .forEach(function (radio) {
          radio.checked = false;
        });
      let config = this.config;
      if (config) {
        let layoutDirectionSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=dir][value=" + config.direction + "]"
        );
        let layoutModeSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-mode][value=" + config.theme + "]"
        );
        let layoutWidthSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-layout-width][value=" +
            config.layout.width +
            "]"
        );
        let layoutPositionSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-layout-position][value=" +
            config.layout.position +
            "]"
        );
        let topbarColorSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-topbar-color][value=" +
            config.topbar.color +
            "]"
        );
        let menuColorSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-menu-color][value=" +
            config.menu.color +
            "]"
        );
        let sidenavViewSwitch = document.querySelector<HTMLInputElement>(
          "input[type=radio][name=data-sidenav-view][value=" +
            config.sidenav.view +
            "]"
        );

        if (layoutDirectionSwitch) layoutDirectionSwitch.checked = true;
        if (layoutModeSwitch) layoutModeSwitch.checked = true;
        if (layoutWidthSwitch) layoutWidthSwitch.checked = true;
        if (layoutPositionSwitch) layoutPositionSwitch.checked = true;
        if (topbarColorSwitch) topbarColorSwitch.checked = true;
        if (menuColorSwitch) menuColorSwitch.checked = true;
        if (sidenavViewSwitch) sidenavViewSwitch.checked = true;
      }
    },
    initConfig() {
      this.initComponents();
      this.initfullScreenListener();

      this.initSidenav();
      this.initSwitchListener();
      this.initWindowSize();
      this.adjustLayout();
      this.setSwitchFromConfig();
    },
  },
});
