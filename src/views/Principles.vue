<template>
<div class="bg-fixed object-cover bg-image">
  <div class="container m-auto px-6 p-10 flex flex-wrap">
    <div class="mx-2 text-left border-b-2 border-purple-300">
      <h3 class="text-gray-600 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        My Principles
      </h3>
    </div>
    <div class="w-full py-10">
      <div class="md:flex bg-white rounded-lg p-6 mb-6 shadow-lg">
        <font-awesome-icon class="text-4xl text-purple-900 mx-auto md:mx-4" :icon="['fas', 'users']" />
        <div class="text-center md:text-left">
          <h2 class="text-2xl border-b-2 border-purple-500">Support the Community</h2>
          <div class="text-gray-700 text-left mt-6">
            <ul class="list-disc">
              <li class="py-2"><strong>Fully Independent - No political party membership</strong></li>
              <li class="py-2"><strong>Freeze rates in FY21/22</strong> and continue to help the financially vulnerable with fair rate discounts and deferments</li>
              <li class="py-2">Town planning and development must <strong>respect the communities wishes</strong></li>
              <li class="py-2">Create more affordable housing options by making <strong>Knox Tiny-house friendly</strong></li>
              <li class="py-2">Increase transparency with <strong>increased community engagement</strong> and adoption of Blockchain governance technology</li>
              <li class="py-2">Stimulate the local economy by ensuring <strong>council procurement prioritises local small business</strong> and startups</li>
              <li class="py-2"><strong>Promote FTG and UFTG towns as the hiking gateways to the Dandenongs</strong> to boost town activity and reduce carpark congestion at 1000 steps</li>
              <li class="py-2">Put our community on the map by <strong>creating a thriving arts scene</strong> with renewed murals, establishing legal walls for street art and financial and logistic support for local artist co-ops</li>
              <li class="py-2">Provide <strong>financial and logistic support</strong> for our local community non-for profits and sports clubs</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="md:flex bg-white rounded-lg p-6 mb-6 shadow-lg">
        <div><font-awesome-icon class="text-4xl text-purple-900 mx-auto md:mx-4" :icon="['fab', 'pagelines']" /></div>
        <div class="text-center md:text-left">
          <h2 class="text-2xl border-b-2 border-purple-500">Nurture the Environment</h2>
          <div class="text-gray-700 text-left mt-6">
            <ul class="list-disc">
              <li class="py-2"><strong>Protect the foothills skyline</strong> and communities connection to the Dandenong's National Park from over-development</li>
              <li class="py-2">Make Knox a leader in Permaculture adoption by <strong>establishing a Permaculture committee</strong> and creating a Permaculture adoption roadmap in the next council five year plan</li>
              <li class="py-2"><strong>Rebalance engagement</strong> between council and environment advocacy groups</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="md:flex bg-white rounded-lg p-6 mb-6 shadow-lg">
        <div><font-awesome-icon class="text-4xl text-purple-900 mx-auto md:mx-4" :icon="['fas', 'heart']" /></div>
        <div class="text-center md:text-left">
          <h2 class="text-2xl border-b-2 border-purple-500">Ensure Wellbeing</h2>
          <div class="text-gray-700 text-left mt-6">
            <ul class="list-disc">
              <li class="py-2">Provide affordable and well resourced health and education services, with a <strong>focus on community mental health, youth outreach and high quality care of our elders</strong></li>
              <li class="py-2">Support the use of <strong>Churches as temporary winter accommodation</strong> for the homeless</li>
              <li class="py-2">Enable access to public <strong>shower facilities for the homeless</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="w-full text-xs position-bottom-0 text-left text-gray-800 text-opacity-25 mb-2 break-words">Andrew Amos (https://commons.wikimedia.org/wiki/File:Mt_Dandenong_from_Mooroolbark.jpg), „Mt Dandenong from Mooroolbark“, https://creativecommons.org/licenses/by-sa/3.0/legalcode</div>
</div>
</template>

<style>
.bg-image {
  background-image: url('/assets/img/principles-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
