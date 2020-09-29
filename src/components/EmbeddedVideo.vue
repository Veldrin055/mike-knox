<template>
  <div class="videowrapper">
    <iframe :src="link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'EmbeddedVideo',
  props: {
    link: String,
  },
}
</script>

<style>
.videowrapper {
  position: relative;
  height: 0;
  padding-bottom: calc(var(--aspect-ratio, .5625) * 100%);
}

.videowrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
