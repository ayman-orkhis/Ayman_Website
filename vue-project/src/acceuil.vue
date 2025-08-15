<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Bonjour, je suis <span class="highlight">Anas Orkhis</span></h1>
          <h2>Développeur Full-Stack</h2>
          <p class="intro">Développeur Full-Stack avec 7+ ans d'expérience en création d'applications web robustes et évolutives</p>
          <div class="cta-buttons">
            <router-link to="/contact" class="btn btn-primary">
              <span class="btn-text">Me Contacter</span>
              <span class="btn-icon">→</span>
            </router-link>
            <a href="#projects" class="btn btn-secondary">
              <span class="btn-text">Voir mes Projets</span>
              <span class="btn-icon">↗</span>
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-upload-container" @click="triggerFileInput">
            <input 
              type="file" 
              ref="fileInput" 
              @change="handleImageUpload" 
              accept="image/*"
              class="file-input"
            />
            <div class="image-preview" :class="{ 'has-image': imagePreview }">
              <img v-if="imagePreview" :src="imagePreview" alt="Profile Preview" class="profile-image" />
              <div v-else class="upload-placeholder">
                <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>Ajouter une photo de profil</span>
              </div>
              <div class="image-overlay">
                <span>Changer la photo</span>
              </div>
            </div>
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import meImage from '@/assets/me.jpeg';

export default {
  name: 'Acceuil',
  data() {
    return {
      imagePreview: meImage,
      projects: [
        {
          title: 'Application Web Moderne',
          description: 'Une application web complète avec authentification et base de données en temps réel.',
          tags: ['Vue.js', 'Firebase', 'SCSS'],
          image: 'https://via.placeholder.com/600x400',
          demo: '#',
          github: '#'
        },
        {
          title: 'Site E-commerce',
          description: 'Plateforme de commerce électronique avec panier d\'achat et paiement en ligne.',
          tags: ['React', 'Node.js', 'MongoDB'],
          image: 'https://via.placeholder.com/600x400',
          demo: '#',
          github: '#'
        },
        {
          title: 'Application Mobile',
          description: 'Application mobile multiplateforme pour la gestion des tâches quotidiennes.',
          tags: ['React Native', 'Redux', 'Firebase'],
          image: 'https://via.placeholder.com/600x400',
          demo: '#',
          github: '#'
        }
      ]
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    }
  }
}
</script>

<style scoped>
/* Global Styles */
:root {
  --primary-color: #3a86ff;
  --secondary-color: #8338ec;
  --dark-color: #1a1a2e;
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-light: #6c757d;
  --white: #ffffff;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--white);
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

section {
  padding: 100px 0;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.3;
}

p {
  margin-bottom: 1rem;
  color: var(--text-light);
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: var(--transition);
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 2px solid transparent;
  overflow: hidden;
  z-index: 1;
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
  border-color: var(--primary-color);
  box-shadow: 0 4px 15px rgba(58, 134, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(58, 134, 255, 0.4);
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  z-index: -1;
  transition: opacity 0.4s ease;
  opacity: 1;
}

.btn-primary:hover::before {
  opacity: 0.9;
}

.btn-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  position: relative;
  z-index: 1;
  transition: none;
}

.btn-secondary:hover {
  color: var(--primary-color);
  transform: none;
  box-shadow: none;
  background-color: transparent;
}

/* Remove any hover effects */
.btn-secondary::after,
.btn-secondary:hover::after {
  display: none;
}

.btn-small {
  padding: 8px 20px;
  font-size: 0.9rem;
}

.btn-text {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  color: inherit;
  pointer-events: none;
}

.btn-icon {
  margin-left: 10px;
  transition: all 0.4s ease;
  display: inline-block;
  transform: translateX(0);
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

.btn-secondary:hover .btn-icon {
  transform: translateX(5px) rotate(-45deg);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 70px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 2px;
}

/* Hero Section */
.hero {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f9ff 0%, #f0f7ff 100%);
  margin: 0;
  box-sizing: border-box;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.hero .container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 15px;
  line-height: 1.2;
  color: var(--dark-color);
}

.hero h2 {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: var(--primary-color);
  margin-bottom: 20px;
  font-weight: 500;
}

.highlight {
  position: relative;
  color: var(--primary-color);
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: rgba(58, 134, 255, 0.2);
  z-index: -1;
  border-radius: 5px;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: var(--text-light);
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.hero-content {
  flex: 0 1 600px;
  min-width: 0;
  padding-right: 40px;
  box-sizing: border-box;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-image {
  flex: 0 1 500px;
  min-width: 0;
  position: relative;
  z-index: 1;
  perspective: 1000px;
  margin-top: 0;
}

.image-upload-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  cursor: pointer;
  transform-style: preserve-3d;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotateY(-5deg); }
  50% { transform: translateY(-20px) rotateY(5deg); }
}

.file-input {
  display: none;
}

.image-preview {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateZ(20px);
  border: 2px dashed #e0e9ff;
}

.image-preview:hover {
  transform: translateZ(30px) scale(1.02);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.15);
}

.image-preview.has-image {
  border-color: transparent;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  text-align: center;
  color: #7a8db3;
  transition: all 0.3s ease;
}

.upload-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  stroke-width: 1.5;
  color: var(--primary-color);
  opacity: 0.8;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
}

.image-preview:hover .image-overlay {
  opacity: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  opacity: 0.1;
  z-index: -1;
  filter: blur(30px);
  animation: pulse 8s infinite alternate;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -150px;
  right: -100px;
  animation-delay: 0.5s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 1s;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.1; }
  100% { transform: scale(1.2); opacity: 0.2; }
}

/* About Section */
.about {
  background-color: var(--white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text p {
  margin-bottom: 20px;
  font-size: 1.05rem;
  line-height: 1.8;
}

.personal-info {
  margin-top: 30px;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.info-label {
  font-weight: 600;
  min-width: 120px;
  color: var(--dark-color);
}

.info-value {
  color: var(--text-light);
}

.skills h3 {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: var(--dark-color);
}

.skills-grid {
  display: grid;
  gap: 20px;
}

.skill-item {
  margin-bottom: 20px;
}

.skill-name {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--dark-color);
}

.skill-bar {
  height: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
}

.skill-level {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 5px;
  transition: width 1s ease-in-out;
}

/* Projects Section */
.projects {
  background-color: #f8f9fa;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--white);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-content {
  padding: 25px;
}

.project-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--dark-color);
}

.project-content p {
  margin-bottom: 20px;
  color: var(--text-light);
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  display: inline-block;
  padding: 5px 12px;
  background-color: #e9ecef;
  border-radius: 50px;
  font-size: 0.8rem;
  color: var(--text-light);
}

.project-links {
  display: flex;
  gap: 15px;
}

/* Contact Section */
.contact {
  background-color: var(--white);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 50px;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--dark-color);
}

.contact-info p {
  margin-bottom: 30px;
  font-size: 1.05rem;
  line-height: 1.8;
}

.contact-details {
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.05rem;
}

.contact-item i {
  width: 40px;
  height: 40px;
  background-color: #e9ecef;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #e9ecef;
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-5px);
}

.contact-form {
  background-color: #f8f9fa;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .container {
    max-width: 100%;
    padding: 0 20px;
  }
  
  .hero h1 {
    font-size: 2.8rem;
  }
  
  .hero h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 992px) {
  section {
    padding: 80px 0;
  }
  
  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero .container {
    flex-direction: column;
    text-align: center;
    padding: 0 15px;
  }
  
  .hero-content {
    margin-bottom: 40px;
    padding: 0;
  }
  
  .hero-image {
    padding: 0;
  }
  
  .cta-buttons {
    justify-content: center;
    gap: 15px;
  }
  
  .profile-placeholder {
    max-width: 100%;
    height: auto;
    aspect-ratio: 1/1;
  }
}

@media (max-width: 768px) {
  section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .contact-form {
    padding: 25px;
  }
  
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero h2 {
    font-size: 1.5rem;
  }
  
  .intro {
    font-size: 1.1rem;
  }
}

@media (max-width: 576px) {
  html {
    font-size: 14px;
  }
  
  section {
    padding: 50px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 12px;
    padding: 10px 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 12px;
  }
  
  .project-links {
    flex-direction: column;
    gap: 12px;
  }
  
  .project-links .btn {
    width: 100%;
    margin: 0;
  }
  
  .hero {
    padding: 70px 0 30px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
    margin-bottom: 10px;
  }
  
  .hero h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
  
  .intro {
    font-size: 1rem;
    margin-bottom: 25px;
  }
  
  .about-content {
    gap: 30px;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }
  
  .info-label {
    min-width: 100%;
    margin-bottom: 5px;
  }
}
</style>
