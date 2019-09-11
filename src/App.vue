<template>
  <div id="app" class="is-fullheight hero">
    <div class="hero-head">
      <nav class="navbar is-transparent is-spaced">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <img src="/logo.svg" style="height: 5rem">
          </router-link>

          <a @click="showMobileMenu = !showMobileMenu" :class="{ 'navbar-burger burger': true, 'is-active': showMobileMenu }" data-target="menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="menu" :class="{ 'navbar-menu': true, 'is-active': showMobileMenu }">
          <div class="navbar-end">
            <router-link
              v-for="page in pages"
              :key="page.path"
              :to="page.path"
              :class="{ 'navbar-item': true, 'is-active': $route.path === page.path}"
            >{{ page.text }}</router-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <transition name="page-transition" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  pages = [
    { text: 'Home', path: '/' },
    { text: 'Portfolio', path: '/portfolio' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' }
  ]

  showMobileMenu = false
  transitionName = 'page-transition-left'
}
</script>
