<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
        </div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-word">{{ t('projects.title').split(' ')[0] }}</span>
            <span class="title-word highlight">{{ t('projects.title').split(' ')[1] }}</span>
          </h1>
          <p class="hero-subtitle">{{ t('projects.subtitle') }}</p>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">{{ projects.length }}+</div>
              <div class="stat-label">{{ t('projects.statsProjects') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ categories.length - 1 }}</div>
              <div class="stat-label">{{ t('projects.statsCategories') }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">{{ t('projects.statsPassion') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="filter-section">
          <h2 class="section-title">{{ t('projects.filterTitle') }}</h2>
          <div class="filter-buttons">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="filterProjects(category)"
              :class="['filter-btn', { active: activeFilter === category }]"
            >
              <span class="filter-icon">{{ getCategoryIcon(category) }}</span>
              {{ t(`projects.categories.${category.toLowerCase()}`) }}
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
          <div 
            v-for="(project, index) in filteredProjects" 
            :key="project.id"
            class="project-card"
            @click="openProjectModal(project)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="project-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="project-image">
              <img :src="project.image" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-overlay-content">
                  <div class="overlay-icon">🚀</div>
                  <h3>{{ project.title }}</h3>
                  <p>{{ project.shortDescription }}</p>
                  <div class="project-tech">
                    <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                      {{ tech }}
                    </span>
                  </div>
                  <div class="view-project-btn">{{ t('projects.viewProject') }}</div>
                </div>
              </div>
            </div>
            <div class="project-info">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-category">{{ project.category }}</div>
              </div>
              <p class="project-description">{{ project.shortDescription }}</p>
              <div class="project-footer">
                <div class="project-tech-mini">
                  <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" class="tech-mini">
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3" class="tech-more">+{{ project.technologies.length - 3 }}</span>
                </div>
                <div class="project-links">
                  <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link" @click.stop>
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link" @click.stop>
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeProjectModal">&times;</button>
        <div class="modal-header">
          <img :src="selectedProject.image" :alt="selectedProject.title" class="modal-image" />
        </div>
        <div class="modal-body">
          <h2>{{ selectedProject.title }}</h2>
          <p class="modal-description">{{ selectedProject.fullDescription }}</p>
          
          <div class="modal-tech">
            <h4>{{ t('projects.technologiesUsed') }}</h4>
            <div class="tech-tags">
              <span v-for="tech in selectedProject.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="modal-features" v-if="selectedProject.features">
            <h4>{{ t('projects.mainFeatures') }}</h4>
            <ul>
              <li v-for="feature in selectedProject.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>

          <div class="modal-gallery" v-if="selectedProject.gallery">
            <h4>{{ t('projects.gallery') }}</h4>
            <div class="gallery-grid">
              <img 
                v-for="(image, index) in selectedProject.gallery" 
                :key="index"
                :src="image" 
                :alt="`${selectedProject.title} - Image ${index + 1}`"
                class="gallery-image"
              />
            </div>
          </div>

          <div class="modal-links">
            <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" class="modal-link primary">
              <i class="fas fa-external-link-alt"></i> {{ t('projects.viewDemo') }}
            </a>
            <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" class="modal-link secondary">
              <i class="fab fa-github"></i> {{ t('projects.viewCode') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'Projects',
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  data() {
    return {
      activeFilter: 'All',
      selectedProject: null,
      categories: ['All', 'Web', 'Mobile', 'Desktop', 'Design'],
      projects: [
        {
          id: 1,
          title: 'E-Commerce Platform',
          shortDescription: 'Plateforme de commerce électronique moderne avec panier et paiement',
          fullDescription: 'Une plateforme e-commerce complète développée avec React et Node.js. Elle inclut un système de gestion des produits, panier d\'achat, processus de paiement sécurisé et tableau de bord administrateur.',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
          category: 'Web',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
          features: [
            'Système d\'authentification sécurisé',
            'Gestion complète du panier',
            'Intégration paiement Stripe',
            'Interface administrateur',
            'Recherche et filtres avancés',
            'Design responsive'
          ],
          gallery: [
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
          ],
          liveUrl: 'https://demo-ecommerce.netlify.app',
          githubUrl: 'https://github.com/username/ecommerce-platform'
        },
        {
          id: 2,
          title: 'Task Management App',
          shortDescription: 'Application de gestion de tâches collaborative avec interface intuitive',
          fullDescription: 'Une application de gestion de tâches moderne permettant aux équipes de collaborer efficacement. Fonctionnalités incluent la création de projets, assignation de tâches, suivi du progrès et notifications en temps réel.',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
          category: 'Web',
          technologies: ['Vue.js', 'Firebase', 'Vuetify', 'PWA'],
          features: [
            'Collaboration en temps réel',
            'Glisser-déposer intuitif',
            'Notifications push',
            'Mode hors ligne (PWA)',
            'Tableaux de bord personnalisés',
            'Intégration calendrier'
          ],
          gallery: [
            'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop'
          ],
          liveUrl: 'https://taskmaster-app.netlify.app',
          githubUrl: 'https://github.com/username/task-management'
        },
        {
          id: 3,
          title: 'Weather Forecast Mobile App',
          shortDescription: 'Application météo mobile avec prévisions détaillées et géolocalisation',
          fullDescription: 'Application mobile native développée avec React Native offrant des prévisions météorologiques précises. Interface élégante avec animations fluides, géolocalisation automatique et alertes météo personnalisées.',
          image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
          category: 'Mobile',
          technologies: ['React Native', 'TypeScript', 'OpenWeather API', 'AsyncStorage'],
          features: [
            'Géolocalisation automatique',
            'Prévisions sur 7 jours',
            'Alertes météo personnalisées',
            'Interface adaptative',
            'Mode sombre/clair',
            'Cartes météorologiques interactives'
          ],
          gallery: [
            'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop'
          ],
          liveUrl: 'https://play.google.com/store/apps/weather-pro',
          githubUrl: 'https://github.com/username/weather-app'
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeFilter === 'All') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.activeFilter);
    }
  },
  methods: {
    filterProjects(category) {
      this.activeFilter = category;
    },
    getCategoryIcon(category) {
      const icons = {
        'All': '🌟',
        'Web': '🌐',
        'Mobile': '📱',
        'Desktop': '💻',
        'Design': '🎨'
      };
      return icons[category] || '📁';
    },
    openProjectModal(project) {
      this.selectedProject = project;
      document.body.style.overflow = 'hidden';
    },
    closeProjectModal() {
      this.selectedProject = null;
      document.body.style.overflow = '';
    }
  },
  mounted() {
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.selectedProject) {
        this.closeProjectModal();
      }
    });
    
    // Add staggered animation to project cards
    this.$nextTick(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    });
  }
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding-top: 70px;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%, #f093fb 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 120px;
  height: 120px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 25%;
  animation-delay: 4s;
}

.shape-4 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: 1s;
}

.shape-5 {
  width: 40px;
  height: 40px;
  top: 10%;
  left: 60%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  animation: fadeInUp 0.8s ease-out;
}

.title-word {
  display: inline-block;
  margin-right: 20px;
  animation: slideInLeft 0.8s ease-out;
}

.title-word.highlight {
  background: linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7f, #4d9de0);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientShift 3s ease-in-out infinite, slideInRight 0.8s ease-out;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 2rem;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.stat-item {
  text-align: center;
  position: relative;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #ffd93d;
  text-shadow: 0 0 20px rgba(255, 217, 61, 0.5);
  animation: pulse 2s ease-in-out infinite;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Projects Section */
.projects-section {
  padding: 100px 20px;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f0f4ff 100%);
  position: relative;
}

.projects-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(180deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%);
  pointer-events: none;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 3rem;
  position: relative;
  animation: fadeInUp 0.8s ease-out;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 2px;
}

.filter-section {
  margin-bottom: 60px;
}

.container {
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Filter Buttons */
.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.filter-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  color: #667eea;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
  position: relative;
  overflow: hidden;
}

.filter-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.filter-btn:hover::before {
  left: 100%;
}

.filter-btn:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
}

.filter-btn.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.filter-icon {
  font-size: 1.2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-3px);
  }
  60% {
    transform: translateY(-2px);
  }
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: none;
  perspective: 1000px;
}

.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: cardSlideIn 0.6s ease-out both;
}

.project-card:hover {
  transform: translateY(-15px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.project-card:hover::before {
  opacity: 1;
}

.project-number {
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 3;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  animation: numberPulse 2s ease-in-out infinite;
}

@keyframes numberPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.95), rgba(118, 75, 162, 0.95));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: white;
  text-align: center;
  padding: 30px;
  backdrop-filter: blur(10px);
  transform: scale(0.8);
}

.project-card:hover .project-overlay {
  opacity: 1;
  transform: scale(1);
}

.overlay-icon {
  font-size: 3rem;
  margin-bottom: 15px;
  animation: rocketBounce 1s ease-in-out infinite;
}

@keyframes rocketBounce {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.view-project-btn {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px 25px;
  border-radius: 25px;
  margin-top: 20px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
}

.view-project-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.project-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project-overlay p {
  margin-bottom: 15px;
  opacity: 0.9;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  backdrop-filter: blur(10px);
}

.project-info {
  padding: 30px;
  position: relative;
  z-index: 2;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.project-category {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.project-tech-mini {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tech-mini {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tech-more {
  background: rgba(118, 75, 162, 0.1);
  color: #764ba2;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.project-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-links {
  display: flex;
  gap: 10px;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 50%;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.project-link:hover {
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}


/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 15px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-header {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-body {
  padding: 30px;
}

.modal-body h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

.modal-description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 25px;
}

.modal-tech h4,
.modal-features h4,
.modal-gallery h4 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.modal-tech .tech-tag {
  background: #667eea;
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
}

.modal-features ul {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.modal-features li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  padding-left: 20px;
}

.modal-features li:before {
  content: '✓';
  color: #667eea;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.gallery-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.05);
}

.modal-links {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.modal-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.modal-link.primary {
  background: #667eea;
  color: white;
}

.modal-link.secondary {
  background: #f8f9fa;
  color: #333;
  border: 2px solid #ddd;
}

.modal-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-stats {
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .projects-section {
    padding: 80px 15px;
  }
  
  .hero-section {
    padding: 50px 15px;
    min-height: 35vh;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .filter-buttons {
    gap: 10px;
  }
  
  .filter-btn {
    padding: 12px 20px;
    font-size: 0.9rem;
  }
  
  .project-card:hover {
    transform: translateY(-8px);
  }
  
  .modal-content {
    margin: 10px;
    max-height: 95vh;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .modal-links {
    flex-direction: column;
  }
  
  .project-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .project-footer {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
