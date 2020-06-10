<template>
  <div class="container">
    <p class="text-3xl font-medium">I'm James.</p>
    <p class="-mt-2 text-6xl font-bold text-gray-800">
      I'm

      <transition
        enter-active-class="transition-all duration-150 ease-in"
        leave-active-class="transition-all duration-200 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <span :key="determiner">
          {{ determiner }}
        </span>
      </transition>

      <transition
        enter-active-class="transition-all duration-150 ease-in"
        leave-active-class="transition-all duration-200 ease-in"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <span :key="noun">
          {{ noun }}.
        </span>
      </transition>
    </p>

    <div class="flex mt-2">
      <nuxt-link to="/portfolio" class="px-4 py-2 mr-3 text-black border-2 border-black hover:bg-gray-900 hover:text-white">VIEW MY WORK</nuxt-link>
      <nuxt-link to="/contact" class="px-4 py-2 mr-3 text-black border-2 border-black hover:bg-gray-900 hover:text-white">HIRE ME</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const duration = 5000

const nouns = [
  'developer',
  'designer',
  'consultant',
  'architect'
]

@Component({

})
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
