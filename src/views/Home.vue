<template>
<div class="h-screen py-8 md:py-12 purple-grad bg-fixed">
  <div class="m-auto container h-full max-h-full px-6 flex flex-col md:items-center">
    <img class="object-contain m-auto md:my-8" src="/assets/img/candidate.jpg" style="max-height: 95%"/>
  </div>
</div>
</template>

<style>
.purple-grad {
  background-image: linear-gradient(to bottom, rgb(175, 174, 179), rgb(228, 217, 197));
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
}
</style>
