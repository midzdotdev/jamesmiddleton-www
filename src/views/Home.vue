<template>
  <div id="home" class="container">
    <section class="section">
      <p class="title is-size-3 subtitle">I'm James.</p>
      <p class="title is-size-1 title has-text-black-ter">
        I'm

        <transition name="text-transition" mode="out-in">
          <span :key="determiner">
            {{ determiner }}
          </span>
        </transition>

        <transition name="text-transition" mode="out-in" appear>
          <span :key="noun">
            {{ noun }}.
          </span>
        </transition>
      </p>

      <div class="buttons">
        <router-link to="/portfolio" class="button is-outlined is-dark">VIEW MY WORK</router-link>
        <router-link to="/contact" class="button is-outlined is-dark">HIRE ME</router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const duration = 5000

const nouns = [
  'developer',
  'designer',
  'consultant',
  'architect',
  'ideator'
]

@Component
export default class Home extends Vue {
  index = 0

  get determiner () {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.includes(this.noun[0])) {
      return 'an'
    } else {
      return 'a'
    }
  }

  get noun () {
    return nouns[this.index]
  }

  created () {
    setInterval(() => {
      this.index === nouns.length - 1
        ? this.index = 0
        : this.index++
    }, duration)
  }
}
</script>
