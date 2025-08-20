<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">{{ t('footer.quote') }}</h3>
          <p class="footer-about" style="font-style: italic; font-size: 1.1rem; color: #ddd; text-align: center;">
            "{{ t('footer.quoteText') }}"
          </p>
          <p style="text-align: center; margin-top: 5px; font-weight: bold; color: #ff8c00;">{{ t('footer.quoteAuthor') }}</p>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">{{ t('footer.quickLinks') }}</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">{{ t('nav.home') }}</a></li>
            <li><a href="#about" class="footer-link">{{ t('nav.about') }}</a></li>
            <li><a href="#projects" class="footer-link">{{ t('nav.projects') }}</a></li>
            <li><a href="#contact" class="footer-link">{{ t('nav.contact') }}</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">{{ t('nav.contact') }}</h3>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>orkhisayman@gmail.com</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>+33 671-099-596</span>
            </div>
            <div class="social-links">
              <a href="https://github.com/ayman-orkhis" target="_blank" class="social-link" aria-label="GitHub" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ayman-orkhis/" target="_blank" class="social-link" aria-label="LinkedIn" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
     <div class="footer-bottom" style="text-align:center; padding: 15px 0; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.9rem; color: #aaa;">
  <p style="margin: 5px 0;">
    &copy; {{ currentYear }} <span style="color: #ff8c00; font-weight:bold;">Ayman Orkhis</span>. {{ t('footer.rights') }}.
  </p>
  <div class="footer-legal" style="margin-top: 5px;">
    <a href="#" class="legal-link" style="color: #ccc; margin: 0 10px; text-decoration:none;">{{ t('footer.privacy') }}</a>
    <span class="divider" style="color:#666;">|</span>
    <a href="#" class="legal-link" style="color: #ccc; margin: 0 10px; text-decoration:none;">{{ t('footer.terms') }}</a>
  </div>
</div>
    </div>
    
    <!-- Back to top button -->
    <button 
      class="back-to-top" 
      @click="scrollToTop"
      :aria-label="t('footer.backToTop')"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'Footer',
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  data() {
    return {
      showBackToTop: false,
      currentYear: new Date().getFullYear()
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style scoped>
.footer {
  background: #1a1a2e;
  color: #fff;
  padding: 80px 0 20px;
  position: relative;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.footer-section {
  padding: 0 20px;
}

.footer-title {
  font-size: 1.3rem;
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
  color: #fff;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 50px;
  height: 2px;
  background: var(--primary-color);
}

.footer-about {
  color: #b8c2d8;
  line-height: 1.7;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: #b8c2d8;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  padding-left: 0;
}

.footer-link::before {
  content: '→';
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  color: var(--primary-color);
}

.footer-link:hover {
  color: #fff;
  padding-left: 20px;
}

.footer-link:hover::before {
  opacity: 1;
  transform: translateX(0);
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #b8c2d8;
}

.contact-item i {
  margin-right: 15px;
  color: var(--primary-color);
  width: 20px;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: #b8c2d8;
  transition: all 0.3s ease;
  font-size: 1.1rem;
}

.social-link:hover {
  background: var(--primary-color);
  color: #fff;
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-bottom p {
  color: #b8c2d8;
  margin: 0;
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 15px;
  align-items: center;
}

.legal-link {
  color: #b8c2d8;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: var(--primary-color);
}

.divider {
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--secondary-color);
  transform: translateY(-5px);
}

/* Responsive styles */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-section {
    text-align: center;
    padding: 0 10px;
  }
  
  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .contact-item {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-legal {
    flex-direction: column;
    gap: 5px;
  }
  
  .divider {
    display: none;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .footer {
    background: #0f0f1a;
  }
}
</style>
