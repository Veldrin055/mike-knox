<template>
<div>
  <div class="container m-auto px-6 p-10 flex flex-wrap">
    <div class="mx-2 text-left border-b-2 border-purple-300">
      <h3 class="text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        Contact
      </h3>
    </div>
    <div class="w-full py-10">
      <div class="w-auto shadow-lg p-6 rounded">
        <h4 class="text-left text-lg mb-6">Subscribe to the newsletter</h4>
        <mail-signup-form></mail-signup-form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import MailSignupForm from './MailSignupForm.vue'

export default {
  name: 'Contact',
  components: {
    MailSignupForm,
  }
}
</script>
