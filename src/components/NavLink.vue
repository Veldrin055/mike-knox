<template>
  <router-link class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500" :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: String,
  }
}
</script>
