<template>
  <div id="portfolio" class="container">
    <div style="display: flex; flex-wrap: wrap; justify-content: center">
      <a
        v-for="item in items"
        :key="item.title"
        class="portfolio-item notification is-dark level"
        @mouseenter="current = item"
        @mouseleave="current = null"
        :href="item.link"
        target="_blank"
      >
        <div class="container">
          <h2 class="title is-size-2 has-text-centered">{{ item.title }}</h2>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({

})
export default class Portfolio extends Vue {
  current = null
  
  items = [
    {
      title: 'CryptoBase',
      image: '/cryptoinsights.png',
      description: `
        Informative website for the upcoming platform.
        CryptoBase aims to be the central hub for all things cryptocurrency related.
        Learn, trade, automate, share, earn and gain insights from one place.
      `,
      repo: 'https://github.com/james2mid/cryptobase-www',
      link: 'https://cryptobase.cc'
    },
    {
      title: 'JM',
      image: '#',
      description: `
        Professional website showcasing my best projects and services that I offer.
      `,
      repo: 'https://github.com/james2mid/jamesmiddleton-www',
      link: 'https://jamesmiddleton.me'
    },
    {
      title: 'Screening',
      image: '#',
      description: `
        Provides ProVQ with a platform to receive apprenticeship applications and ensure a standardised minimum skill level. <br>
        The website features an admin panel for ProVQ staff to modify the assessments, browse through the users and export data for company reports.
      `,
      repo: false,
      link: 'https://screening.provq.com'
    }
  ]
}
</script>

<style lang="sass">
  .portfolio-item
    height: 20rem
    width: 20rem
    margin: 2rem !important
    border-radius: 0 !important

    position: relative
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)

    &::after
      content: ""
      position: absolute
      z-index: -1
      top: 0
      left: 0
      width: 100%
      height: 100%
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3)
      opacity: 0
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)

    &:hover
      transform: scale(1.05)

    &:hover::after
      opacity: 1
</style>
