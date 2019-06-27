<template>
  <div id="app">
    <nav class="navbar is-transparent is-spaced" style="position: fixed; width: 100vw">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="./assets/logo.svg" style="height: 5rem">
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

    <transition :name="transitionName" mode="out-in" appear>
      <router-view/>
    </transition>
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

  /** Updates `transitionName` depending on navigation direction. */
  created () {
    this.$watch('$route', (to, from) => {
      const pageOrder = this.pages.map(x => x.path)

      const originIndex = pageOrder.findIndex(x => x === from.path)
      const destinationIndex = pageOrder.findIndex(x => x === to.path)

      this.transitionName = originIndex > destinationIndex
        ? 'page-transition-left'
        : 'page-transition-right'
    })
  }
}
</script>
