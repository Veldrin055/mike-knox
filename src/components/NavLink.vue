<template>
  <a exact-active-class="bg-purple-500" class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal flex items-center mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 font-semibold" href="#" v-scroll-to="{ el: `#${to}`, onStart: onStart }"><slot></slot></a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: String,
    onStart: Function,
  }
}
</script>
