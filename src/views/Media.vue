<template>
<div class="container m-auto px-6 p-10 flex flex-col justify-center">
  <div class="w-full">
    <h3 class="mx-2 my-4 text-left text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl border-b-2 border-purple-300">
      Media
    </h3>
  </div>
  <div class="w-full text-justify text-gray-700 py-6 px-4 md:text-lg">
    <EmbeddedVideo link="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeettheknoxcandidates%2Fvideos%2F3122086607913730%2F"></EmbeddedVideo>
    <EmbeddedVideo link="https://www.youtube.com/embed/X-g-nBC4lMI"></EmbeddedVideo>
  </div>
</div>
</template>

<script>
import EmbeddedVideo from '../components/EmbeddedVideo.vue'

export default {
  name: 'Media',
  components: {
    EmbeddedVideo,
  }
}
</script>
