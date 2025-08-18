<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="about-hero-content">
          <h1 class="section-title">{{ t('about.title') }}</h1>
          <p style="font-style: italic; font-size: 1.6rem; line-height: 1.6; color: #333; margin-top: 30px; text-align: center; max-width: 900px; margin-left: auto; margin-right: auto;">
            {{ t('about.quote') }}
            <br>
            <span style="font-weight: bold; color: #ff8c00; font-size: 1.2rem;">{{ t('about.quoteAuthor') }}</span>
            </p>
        </div>
      </div>
      <div class="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-grid">
          <div class="about-image">
            <div class="image-wrapper">
              <img src="@/assets/me.jpeg" alt="Anas Orkhis" class="profile-img">
              <div class="image-overlay"></div>
            </div>
          </div>
          <div class="about-content">
            <h2 class="section-subtitle">{{ t('about.professionalProfile') }}</h2>
            <div class="contact-info">
              <h3>{{ t('about.name') }}</h3>
              <p class="contact-detail">
                <i class="fas fa-map-marker-alt"></i> {{ t('about.location') }}
              </p>
              <p class="contact-detail">
                <i class="fas fa-phone"></i> {{ t('about.phone') }}
              </p>
              <p class="contact-detail">
                <i class="fas fa-envelope"></i> {{ t('about.email') }}
              </p>
            </div>
            
            <p class="about-text" v-html="t('about.bio1')"></p>
            <p class="about-text" v-html="t('about.bio2')"></p>
            <p class="about-text" v-html="t('about.bio3')"></p>
            
            <a href="#" @click="downloadCV" class="cv-download-btn">
              <span class="cv-btn-text">{{ t('about.downloadCV') }}</span>
              <span class="cv-btn-icon"><i class="fas fa-download"></i></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title text-center">Mes Compétences</h2>
        <p class="section-description text-center">Voici quelques-unes des technologies avec lesquelles je travaille</p>
        
        <div class="skills-grid">
          <div class="skill-category">
            <h3 class="skill-category-title">Compétences Techniques</h3>
            <div class="skills-list">
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Langages</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">JavaScript</span>
                  <span class="skill-tag">TypeScript</span>
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">C# (.NET MVC)</span>
                  <span class="skill-tag">SQL</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Frameworks/Libraries</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">NestJS</span>
                  <span class="skill-tag">Express.js</span>
                  <span class="skill-tag">Vue.js</span>
                  <span class="skill-tag">Next.js</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Vite</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Bases de données</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">PostgreSQL</span>
                  <span class="skill-tag">MySQL</span>
                  <span class="skill-tag">Firestore</span>
                  <span class="skill-tag">MongoDB</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Cloud/DevOps</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Google Cloud Platform (GCP)</span>
                  <span class="skill-tag">Docker</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Salesforce</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Apex</span>
                  <span class="skill-tag">LWC</span>
                  <span class="skill-tag">SOQL</span>
                  <span class="skill-tag">Flow Builder</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Outils</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Git</span>
                  <span class="skill-tag">GitHub</span>
                  <span class="skill-tag">Jira</span>
                  <span class="skill-tag">VS Code</span>
                  <span class="skill-tag">Postman</span>
                </div>
              </div>
              
              <div class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">Tests & QA</span>
                </div>
                <div class="skill-tags">
                  <span class="skill-tag">Cypress</span>
                  <span class="skill-tag">Jest</span>
                  <span class="skill-tag">Tests Unitaires</span>
                  <span class="skill-tag">Tests E2E</span>
                  <span class="skill-tag">TDD</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="skill-category">
            <h3 class="skill-category-title">Compétences Comportementales</h3>
            <ul class="soft-skills">
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Excellente communication</span>
              </li>
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Travail d'équipe et collaboration transversale</span>
              </li>
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Autonomie et sens de l'initiative</span>
              </li>
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Esprit analytique et résolution de problèmes</span>
              </li>
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Adaptabilité et apprentissage rapide</span>
              </li>
              <li class="soft-skill-item">
                <i class="fas fa-check-circle"></i>
                <span>Gestion efficace des priorités et du temps</span>
              </li>
            </ul>
            
            <h3 class="skill-category-title" style="margin-top: 30px;">Langues</h3>
            <div class="languages">
              <div class="language-item">
                <span class="language-name">Français</span>
                <span class="language-level">Courant</span>
              </div>
              <div class="language-item">
                <span class="language-name">Anglais</span>
                <span class="language-level">Professionnel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="container">
        <h2 class="section-title text-center">Expérience Professionnelle</h2>
        <p class="section-description text-center">Mon parcours professionnel et mes réalisations</p>
        
        <div class="timeline">
          <!-- Neova ERP -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">Mai 2024 – Présent</div>
              <h3 class="timeline-title">Développeur Full-Stack</h3>
              <h4 class="timeline-company">Neova ERP | Montréal, Canada</h4>
              <ul class="experience-list">
                <li>Développement de composants front-end modulaires réutilisables</li>
                <li>Création de modules applicatifs indépendants (micro-frontends) avec Vue-like / React</li>
                <li>Amélioration continue de l'architecture et performance de la plateforme</li>
                <li>Maintenance active de solutions existantes (debug, refactorisation, support)</li>
                <li>Participation Agile (Scrum), pair programming, revues de code</li>
                <li>Intégration de services métiers backend avec NestJS + base MySQL</li>
                <li>Rédaction de tests unitaires et E2E (Jest, Cypress) et documentation technique</li>
                <li>Encadrement et supervision de stagiaires pendant 5 mois (accompagnement technique et intégration dans l'équipe Agile)</li>
              </ul>
            </div>
          </div>
          
          <!-- Wirkn -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">Mai 2022 – Avril 2024</div>
              <h3 class="timeline-title">Développeur Full-Stack React/NestJS</h3>
              <h4 class="timeline-company">Wirkn | Montréal, Canada</h4>
              <ul class="experience-list">
                <li>Développement SPA avec React, SSR via Next.js et Vite</li>
                <li>Utilisation des hooks modernes, gestion d'état via Context API</li>
                <li>Intégration backend via NestJS, déploiement via Docker + GCP</li>
                <li>Maintien et évolution de modules métiers complexes</li>
                <li>Utilisation avancée de Git + GitHub Actions (CI/CD)</li>
                <li>Collaboration étroite avec les designers pour une UX fluide</li>
              </ul>
            </div>
          </div>
          
          <!-- Stage Salesforce -->
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">Juil. 2017 – Sept. 2018</div>
              <h3 class="timeline-title">Développeur Stagiaire Salesforce-D&A</h3>
              <h4 class="timeline-company">Stage Salesforce | Casablanca, Maroc</h4>
              <ul class="experience-list">
                <li>Initiation à l'écosystème Salesforce : Apex, Visualforce, Lightning</li>
                <li>Création de pages personnalisées et automatisation de processus métier</li>
                <li>Personnalisation d'objets standard et création d'objets personnalisés</li>
                <li>Utilisation de Salesforce Flow pour des automatisations sans code</li>
                <li>Déploiement de solutions via Change Sets et documentation technique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useLanguage } from '@/composables/useLanguage'

export default {
  name: 'About',
  setup() {
    const { t } = useLanguage()
    return { t }
  },
  methods: {
    downloadCV() {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = '/CV_Ayman_Orkhis.pdf';
      link.download = 'CV_Ayman_Orkhis.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  mounted() {
    // Animation for skill bars when section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
              bar.style.width = width;
            }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
}
</script>

<style scoped>
/* Base Styles */
:root {
  --primary-color: #3a86ff;
  --secondary-color: #8338ec;
  --dark-color: #1a1a2e;
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-light: #6c757d;
  --transition: all 0.3s ease;
}

.about-page {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: var(--dark-color);
  position: relative;
  display: inline-block;
  font-weight: 700;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.text-center {
  text-align: center;
}

.text-center .section-title::after {
  left: 50%;
  transform: translateX(-50%);
}

.section-subtitle {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: var(--dark-color);
  font-weight: 600;
}

.section-description {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.btn {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-primary {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  box-shadow: 0 4px 15px rgba(58, 134, 255, 0.3);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(58, 134, 255, 0.4);
}

.btn-text {
  margin-right: 8px;
  position: relative;
  z-index: 1;
}

.btn-icon {
  font-size: 0.9rem;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.btn:hover .btn-icon {
  transform: translateX(5px);
}

/* Hero Section */
.about-hero {
  background: linear-gradient(135deg, #f5f9ff 0%, #e6f0ff 100%);
  padding: 60px 0 40px; /* Reduced padding to make the section shorter */
  position: relative;
  overflow: hidden;
  width: 100%;
  left: 0;
  right: 0;
}

.about-hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 0; /* Added some vertical padding */
}

.about-hero .section-title {
  font-size: 2.2rem; /* Reduced font size */
  margin-bottom: 10px; /* Reduced margin */
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.subtitle {
  font-size: 1.1rem; /* Reduced font size */
  color: var(--text-light);
  margin-bottom: 15px; /* Reduced margin */
  line-height: 1.4; /* Tighter line height */
}

.shape-divider {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.shape-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
}

.shape-fill {
  fill: #FFFFFF;
}

/* About Section */
.about-section {
  padding: 100px 0;
  background: #fff;
  width: 100%;
  left: 0;
  right: 0;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image {
  position: relative;
  padding: 20px;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
}

.profile-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.image-wrapper:hover .profile-img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.about-content {
  padding: 20px 0;
}

.contact-info {
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, rgba(58, 134, 255, 0.05) 0%, rgba(58, 134, 255, 0.02) 100%);
  border-radius: 10px;
  border-left: 4px solid var(--primary-color);
}

.contact-info h3 {
  color: var(--dark-color);
  margin-bottom: 15px;
  font-size: 1.4rem;
  font-weight: 700;
}

.contact-detail {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: var(--text-color);
  font-size: 0.95rem;
}

.contact-detail i {
  color: var(--primary-color);
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.about-text {
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 1.05rem;
  text-align: justify;
}

.info-list {
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  margin-bottom: 15px;
  align-items: center;
}

.info-label {
  font-weight: 600;
  min-width: 100px;
  color: var(--dark-color);
}

.info-value {
  color: var(--text-light);
  flex: 1;
}

/* Skills Section */
.skills-section {
  padding: 100px 0;
  background: #f8faff;
  width: 100%;
  left: 0;
  right: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.skill-category {
  background: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.skill-category-title {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: var(--dark-color);
  position: relative;
  padding-bottom: 15px;
}

.skill-category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  margin-bottom: 20px;
}

.skill-info {
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 600;
  color: var(--dark-color);
  font-size: 1.1rem;
  margin-bottom: 8px;
  display: block;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 5px;
}

.skill-tag {
  background: rgba(58, 134, 255, 0.1);
  color: var(--primary-color);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid rgba(58, 134, 255, 0.2);
}

.skill-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(58, 134, 255, 0.2);
}

/* Soft Skills Styles */
.soft-skills {
  list-style: none;
  padding: 0;
  margin: 0;
}

.soft-skill-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: var(--text-color);
  line-height: 1.5;
}

.soft-skill-item i {
  color: var(--primary-color);
  margin-right: 10px;
  margin-top: 3px;
  font-size: 0.9rem;
}

/* Languages Styles */
.languages {
  margin-top: 15px;
}

.language-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #e0e0e0;
}

.language-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.language-name {
  font-weight: 500;
  color: var(--dark-color);
}

.language-level {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* CV Download Button */
.cv-download-btn {
  display: inline-flex;
  align-items: center;
  background: #2c3e50;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cv-download-btn:hover {
  background: #1a252f;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.cv-btn-text {
  margin-right: 10px;
}

.cv-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.cv-download-btn:hover .cv-btn-icon {
  transform: translateX(3px);
}

/* Experience Section */
.experience-section {
  padding: 100px 0;
  background: #f8faff;
  width: 100%;
  left: 0;
  right: 0;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  width: 100%;
  padding-left: 60px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  min-height: 50px; /* Ensure minimum height for the dot */
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: 12px;
  top: 25px; /* Adjusted to align with the first line of content */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  z-index: 1;
  box-shadow: 0 0 0 4px #f8faff, 0 0 0 6px var(--primary-color);
  transition: all 0.3s ease;
}

.timeline-content {
  background: #fff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  border-left: 3px solid var(--primary-color);
}

.timeline-content:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.timeline-date {
  display: inline-block;
  background: #2c3e50;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
}

.timeline-title {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: var(--dark-color);
  font-weight: 700;
}

.timeline-company {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.timeline-company::before {
  content: '🏢';
  margin-right: 8px;
  font-size: 1.1em;
}

.experience-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  color: var(--text-color);
  line-height: 1.6;
  font-size: 0.95rem;
}

.experience-list li::before {
  content: '▹';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-size: 1.2em;
  line-height: 1.2;
}

.experience-list li:last-child {
  margin-bottom: 0;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .about-grid {
    gap: 40px;
  }
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .about-image {
    max-width: 500px;
    margin: 0 auto;
  }
  
  .about-content {
    text-align: center;
  }
  
  .info-item {
    justify-content: center;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    padding-left: 70px;
    padding-right: 0;
  }
  
  .timeline-dot {
    left: 20px;
    transform: none;
  }
  
  .timeline-content {
    margin-left: 30px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .about-hero .section-title {
    font-size: 2.2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding: 0 20px;
  }
  
  .about-section, 
  .skills-section, 
  .experience-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .about-hero .section-title {
    font-size: 2rem;
  }
  
  .info-item {
    flex-direction: column;
    text-align: center;
  }
  
  .info-label {
    margin-bottom: 5px;
  }
  
  .timeline-content {
    padding: 20px;
  }
}
</style>
