<template>
  <div id="app" class="flex flex-col h-screen min-h-screen justify-between">
    <Nav></Nav>
    <main class="flex-grow">
      <Home id="home"></Home>
      <About id="about"></About>
      <Principles id="principles"></Principles>
      <Contact id="contact"></Contact>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import Principles from './views/Principles.vue'
import Contact from './views/Contact.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    Home,
    About,
    Principles,
    Contact
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
