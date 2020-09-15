<template>
<nav class="top-0 select-none bg-purple-900 text-gray-100 lg:flex lg:items-stretch w-full z-20 shadow-lg fixed">
  <div class="flex flex-no-shrink items-stretch h-12">
    <a href="#" v-scroll-to="'#home'" class="flex-no-grow flex-no-shrink relative py-2 px-4 text-lg leading-normal text-white md:font-extrabold flex items-center truncate">Mike Koclęga for Dobson Ward - Knox City</a>
    <button @click="toggleMenu" class="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg v-show="!expanded" class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg v-show="expanded" class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <div class="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow border-b-2 border-purple-500 md:border-b-0" :class="{hidden: !expanded}">
    <div class="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <nav-link to="home" :onStart="close">Home</nav-link>
      <nav-link to="about" :onStart="close">About Me</nav-link>
      <nav-link to="principles" :onStart="close">My Principles</nav-link>
      <nav-link to="contact" :onStart="close">Contact</nav-link>
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
    close() {
      this.expanded = false
    }
  },
}
</script>
