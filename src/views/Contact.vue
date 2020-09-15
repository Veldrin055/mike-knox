<template>
<div class="container m-auto px-6 p-10 flex flex-col md:h-screen justify-center">
  <div class="w-full">
    <h3 class="mx-2 text-left border-b-2 border-purple-300 text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl">
      Contact
    </h3>
  </div>
  <div class="w-full py-10">
    <div class="w-auto shadow-lg p-6 rounded">
      <h4 class="text-left text-xl text-gray-700 mb-6">Stay connected on Social Media</h4>
      <div class="flex flex-wrap text-5xl">
        <a class="w-full flex items-center mx-2" href="https://www.linkedin.com/in/mkoclega" target="_blank">
          <font-awesome-icon class="text-purple-900 ml-1" :icon="['fab', 'linkedin']" />
          <span class="text-base px-4">LinkedIn</span>
        </a>
        <a class="w-full flex items-center m-2" href="https://www.facebook.com/Mike4Knox" target="_blank">
          <font-awesome-icon class="text-purple-900" :icon="['fab', 'facebook']" />
          <span class="text-base px-4">Facebook</span>
        </a>
        <a class="w-full flex items-center m-2" href="https://www.instagram.com/mike4knox/" target="_blank">
          <font-awesome-icon class="text-purple-900" :icon="['fab', 'instagram']" />
          <span class="text-base px-4">Instagram</span>
        </a>
      </div>
    </div>
  </div>

  <div class="w-full py-10">
    <div class="w-auto shadow-lg p-6 rounded">
      <h4 class="text-left text-xl text-gray-700 mb-6">Get in touch</h4>
      <mail-signup-form></mail-signup-form>
    </div>
  </div>

</div>
</template>

<script>
import MailSignupForm from '../components/MailSignupForm.vue'

export default {
  name: 'Contact',
  components: {
    MailSignupForm,
  }
}
</script>
