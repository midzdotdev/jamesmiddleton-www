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
          <router-link to="/" :class="{ 'navbar-item': true, 'is-active': $route.path === '/'}">Home</router-link>
          <router-link to="/portfolio" :class="{ 'navbar-item': true, 'is-active': $route.path === '/portfolio'}">Portfolio</router-link>
          <router-link to="/services" :class="{ 'navbar-item': true, 'is-active': $route.path === '/services'}">Services</router-link>
          <router-link to="/contact" :class="{ 'navbar-item': true, 'is-active': $route.path === '/contact'}">Contact</router-link>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  showMobileMenu = false
}
</script>
