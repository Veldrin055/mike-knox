<template>
<div class="h-full purple-grad">
  <div class="container mx-auto px-6 flex flex-col items-center justify-center">
  <div class="fixed z-0 pos">
    <font-awesome-icon class="spinny" :icon="['fas', 'bahai']" />
  </div>
    <div class="my-6 w-1/2 md:w-1/3 z-10">
      <img class="object-contain shadow-lg" src="/assets/img/primary.jpg" />
    </div>
    <div class="mx-2 mt-2 md:mt-12 md:w-1/2 text-center border-b-2 border-t-2 border-purple-300 z-10">
      <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        Mike
      </h1>
      <h2 class="text-gray-200 text-xl md:text-5xl leading-tight mt-2 md:mt-8 mb-2">
      The Wise Choice for Knox
      </h2>
    </div>
  </div>
</div>
</template>

<style>
.purple-grad {
  background-image: linear-gradient(to right, rgb(173, 166, 174), rgb(119, 143, 171));
}

.spinny {
  animation: spinner 40s linear infinite;
  font-size: 2000px;
  opacity: 0.05;
  z-index: 0;
}

.pos {
  left: -900px;
  bottom: -900px;
}

@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
