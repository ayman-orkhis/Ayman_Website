<template>
  <Navbar />
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Reset and base styles */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Ensure full width for all sections */
section {
  width: 100%;
  position: relative;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #333;
  line-height: 1.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.main-content {
  flex: 1;
  width: 100%;
  margin-top: 70px; /* To account for fixed navbar */
}

/* Ensure all containers take full width */
.container {
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
}

/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}
</style>
