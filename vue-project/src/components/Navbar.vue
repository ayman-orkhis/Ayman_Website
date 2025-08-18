<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">
        <span class="logo-text">
          <span class="logo-first">Ayman</span>
          <span class="logo-last">Orkhis</span>
        </span>
      </router-link>
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu">{{ t('nav.home') }}</router-link>
        <router-link to="/a-propos" class="nav-link" @click="closeMenu">{{ t('nav.about') }}</router-link>
        <router-link to="/projets" class="nav-link" @click="closeMenu">{{ t('nav.projects') }}</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu" active-class="active">{{ t('nav.contact') }}</router-link>
        <button 
          @click="toggleLanguage" 
          class="language-toggle"
          :title="currentLanguage === 'en' ? 'Switch to French' : 'Passer à l\'anglais'"
        >
          <span class="flag">{{ currentLanguage === 'en' ? '🇫🇷' : '🇺🇸' }}</span>
          <span class="lang-text">{{ currentLanguage === 'en' ? 'FR' : 'EN' }}</span>
        </button>
      </div>
      <div class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }" aria-label="Toggle menu">
        <span class="menu-line"></span>
        <span class="menu-line"></span>
        <span class="menu-line"></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'Navbar',
  setup() {
    const { currentLanguage, setLanguage, t } = useLanguage()
    
    return {
      currentLanguage,
      setLanguage,
      t
    }
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },
    toggleLanguage() {
      const newLang = this.currentLanguage === 'en' ? 'fr' : 'en'
      this.setLanguage(newLang)
    },
    handleNavLinkClick(section) {
      this.closeMenu();
      if (this.$route.path !== '/') {
        this.$router.push('/');
        // Wait for the route to change before scrolling
        this.$nextTick(() => {
          this.scrollToSection(section);
        });
      } else {
        this.scrollToSection(section);
      }
    },
    scrollToSection(section) {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjust for fixed header
          behavior: 'smooth'
        });
      }
    },
    closeOnOutsideClick(event) {
      if (this.isMenuOpen && !event.target.closest('.navbar')) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', this.closeOnOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeOnOutsideClick);
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px 0;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  min-height: 70px;
  box-sizing: border-box;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Space between logo and nav */
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  height: 100%;
}


.logo-img {
  height: 44px; /* Slightly reduced to fit within container */
  width: auto;
  max-width: 150px; /* Control maximum width */
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.logo-text {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: all 0.3s ease;
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-first {
  color: #667eea;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.logo-last {
  color: #764ba2;
  font-weight: 600;
  position: relative;
}

.logo-last::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 1px;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.logo:hover .logo-last::after {
  transform: scaleX(1);
}

.logo:hover .logo-first {
  color: #5a6fd8;
  transform: translateY(-1px);
}

.logo:hover .logo-last {
  color: #6b4c93;
  transform: translateY(-1px);
}

.logo a:hover {
  opacity: 0.8;
}

.nav-links {
  display: flex;
  gap: 35px;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin-left: auto; /* Push nav to the right */
}

.nav-link {
  color: var(--dark-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 12px 12px;
  margin: 0 2px;
  white-space: nowrap;
  letter-spacing: 0.3px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  transition: none;
}

.nav-link:hover {
  color: var(--primary-color);
  background: transparent;
  transform: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link:focus::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--primary-color);
}

/* Active link styles */
.router-link-active {
  color: var(--primary-color);
  font-weight: 500;
  background: rgba(58, 134, 255, 0.1);
  border-radius: 4px;
}

.router-link-active:hover {
  background: rgba(58, 134, 255, 0.15);
}

/* Mobile menu toggle button */
.menu-toggle {
  display: none; /* Hidden by default */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px; /* Larger touch target */
  height: 44px; /* Larger touch target */
  cursor: pointer;
  z-index: 1001;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  padding: 10px;
}

.menu-line {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333; /* Dark color for contrast */
  transition: all 0.3s ease;
  transform-origin: center;
  pointer-events: none;
  margin: 3px 0;
  border-radius: 2px;
}

.menu-toggle.active .menu-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.active .menu-line:nth-child(2) {
  opacity: 0;
  transform: translateX(-10px);
}

.menu-toggle.active .menu-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Show menu toggle on mobile */
@media (max-width: 992px) {
  .menu-toggle {
    display: flex;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  
  .nav-links {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 20px 0;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
  
  .nav-links.active {
    display: flex;
  }
  
  .nav-link {
    padding: 15px 25px;
    margin: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .nav-link:last-child {
    border-bottom: none;
  }
}

.menu-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--dark-color);
  transition: all 0.3s ease;
  transform-origin: left center;
}

.menu-toggle .open:nth-child(1) {
  transform: rotate(45deg) translateY(-2px);
}

.menu-toggle .open:nth-child(2) {
  opacity: 0;
}

.menu-toggle .open:nth-child(3) {
  transform: rotate(-45deg) translateY(2px);
}

/* Responsive styles */
@media (max-width: 992px) {
  .navbar .container {
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100vh;
    background: white;
    flex-direction: column;
    justify-content: center;
    padding: 80px 40px;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
    transition: right 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 1000;
    margin: 0;
    gap: 20px;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-link {
    font-size: 1.2rem;
    margin: 15px 0;
  }

  .menu-toggle {
    display: flex;
  }
}

/* Language Toggle Button */
.language-toggle {
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  padding: 8px 12px;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 60px;
  justify-content: center;
}

.language-toggle:hover {
  background: rgba(102, 126, 234, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateY(-1px);
}

.language-toggle:active {
  transform: translateY(0);
}

.flag {
  font-size: 1rem;
  line-height: 1;
}

.lang-text {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 992px) {
  .language-toggle {
    margin-left: 0;
    margin-top: 20px;
    justify-content: center;
    width: 120px;
    align-self: center;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .navbar {
    background: rgba(20, 20, 30, 0.95);
  }
  
  .nav-link {
    color: #f0f0f0;
  }
  
  .menu-toggle span {
    background-color: #f0f0f0;
  }
  
  @media (max-width: 992px) {
    .nav-links {
      background: #1a1a2e;
    }
  }
}
</style>
