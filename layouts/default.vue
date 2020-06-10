<template>
  <div id="app" class="is-fullheight hero">
    <div class="hero-head">
      <nav class="navbar is-transparent is-spaced">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <img src="/logo.svg" style="height: 5rem">
          </nuxt-link>

          <a @click="showMobileMenu = !showMobileMenu" :class="{ 'navbar-burger burger': true, 'is-active': showMobileMenu }" data-target="menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="menu" :class="{ 'navbar-menu': true, 'is-active': showMobileMenu }">
          <div class="navbar-end">
            <nuxt-link
              v-for="page in pages"
              :key="page.path"
              :to="page.path"
              :class="{ 'navbar-item': true, 'is-active': $route.path === page.path}"
            >{{ page.text }}</nuxt-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <transition name="page-transition" mode="out-in" appear>
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface Link {
  text: string
  path: string
}

@Component({
  
})
export default class DefaultLayout extends Vue {
  pages: Link[] = [
    { text: 'Home', path: '/' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ]

  showMobileMenu: boolean = false
  transitionName: string = 'page-transition-left'
}
</script>
