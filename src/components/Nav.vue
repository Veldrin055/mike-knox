<template>
<nav class="relative select-none bg-purple-900 text-gray-100 lg:flex lg:items-stretch w-full z-20">
  <div class="flex flex-no-shrink items-stretch h-12">
    <router-link to="/" class="flex-no-grow flex-no-shrink relative py-2 px-4 text-lg leading-normal text-white font-extrabold no-underline flex items-center hover:bg-grey-dark">Mike for Knox</router-link>
    <button @click="toggleMenu" class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg v-show="!expanded" class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg v-show="expanded" class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow" :class="{hidden: !expanded}">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <nav-link to="/">Home</nav-link>
      <nav-link to="/about">About Me</nav-link>
      <nav-link to="/principles">My Principles</nav-link>
      <nav-link to="/pillars">My Pillars</nav-link>
      <nav-link to="/contact">Contact</nav-link>
    </div>
  </div>
</nav>
</template>

<script>
import NavLink from './NavLink.vue'

export default {
  name: 'Nav',
  components: {
    NavLink,
  },
  data: () => ({
    expanded: false,
  }),
  methods: {
    toggleMenu() {
      this.expanded = !this.expanded
    },
  },
}
</script>
