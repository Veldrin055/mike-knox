<template>
<div class="h-screen purple-grad">
  <div class="container h-full mx-auto my-auto px-6 hero flex items-center justify-center">
    <div class="mx-2 text-center border-b-2 border-t-2 border-purple-300">
      <h1 class="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        Mike
      </h1>
           <h2 class="text-gray-200 text-3xl xs:text-4xl md:text-5xl leading-tight mt-12">
            The Wise Choice for Knox
           </h2>
    </div>
  </div>
</div>
</template>

<style>
.hero {
  background-image: url("/assets/img/primary.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.purple-grad {
  background-image: linear-gradient(to right, rgb(173, 166, 174), rgb(119, 143, 171));
}
</style>
