<style scoped lang="scss">
@import "~bulma/sass/utilities/initial-variables";
.main-content {
  padding-bottom: 2rem;
  padding-right: 0%;
  padding-left: 0%;
}
</style>


<template>
  <div>
    <nav
      class="navbar is-fixed-top is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-container container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <strong>Rodrigo Herrera</strong>
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            :class="{ 'is-active': isBurgerToggled }"
            aria-label="menu"
            aria-expanded="false"
            @click="isBurgerToggled = !isBurgerToggled"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isBurgerToggled }">
          <div class="navbar-end">
            <a class="navbar-item" href="#about">About</a>
            <g-link class="navbar-item" to="/cv/">CV</g-link>
            <locale-switcher/>
          </div>
        </div>
      </div>
    </nav>

    <div class="main-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";

@Component({
  components: {LocaleSwitcher},
  metaInfo: {
    bodyAttrs: {
      class: "has-navbar-fixed-top",
    },
  },
})
export default class Default extends Vue {
  isBurgerToggled = false;
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
