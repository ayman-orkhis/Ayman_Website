<template>
  <div class="contact-page">
    <div class="contact-hero">
      <div class="container">
        <h1 class="fade-in">Let's Connect</h1>
        <p class="subtitle">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
      </div>
    </div>

    <div class="contact-container">
      <div class="contact-content">
        <!-- Contact Information -->
        <div class="contact-info slide-in-left">
          <h2>Get in Touch</h2>
          <p class="contact-description">Feel free to reach out for collaborations or just a friendly hello. I'll get back to you as soon as possible!</p>
          
          <div class="contact-details">
            <div class="contact-card">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-text">
                <h3>Email Me</h3>
                <a href="mailto:anasorkhis@gmail.com" class="contact-link">anasorkhis@gmail.com</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="contact-text">
                <h3>Call Me</h3>
                <a href="tel:+14387785746" class="contact-link">+1 438-778-5746</a>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-text">
                <h3>Location</h3>
                <span>Montréal, QC, Canada</span>
              </div>
            </div>
          </div>
          
          <div class="social-section">
            <h3>Follow Me</h3>
            <div class="social-links">
              <a href="https://github.com/yourusername" target="_blank" class="social-link" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/anas-orkhis-b1364b263/" target="_blank" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="contact-form slide-in-right">
          <h2>Send Me a Message</h2>
          <form @submit.prevent="submitForm" class="form-container">
            <div class="form-group">
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                required
                class="form-input"
                @focus="handleFocus"
                @blur="handleBlur"
              >
              <label for="name" class="form-label">Your Name</label>
              <div class="focus-bg"></div>
            </div>
            
            <div class="form-group">
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                required
                class="form-input"
                @focus="handleFocus"
                @blur="handleBlur"
              >
              <label for="email" class="form-label">Your Email</label>
              <div class="focus-bg"></div>
            </div>
            
            <div class="form-group">
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                class="form-input"
                @focus="handleFocus"
                @blur="handleBlur"
              >
              <label for="subject" class="form-label">Subject</label>
              <div class="focus-bg"></div>
            </div>
            
            <div class="form-group">
              <textarea 
                id="message" 
                v-model="form.message" 
                rows="5" 
                required
                class="form-input"
                @focus="handleFocus"
                @blur="handleBlur"
              ></textarea>
              <label for="message" class="form-label">Your Message</label>
              <div class="focus-bg"></div>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span class="btn-text">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </span>
              <span class="btn-icon">
                <i class="fas" :class="isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'"></i>
              </span>
            </button>
          </form>
          
          <div v-if="showSuccess" class="success-message">
            <div class="success-content">
              <i class="fas fa-check-circle"></i>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
              <button @click="showSuccess = false" class="close-btn">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="showSuccess" class="success-message">
      <i class="fas fa-check-circle"></i>
      <p>Votre message a été envoyé avec succès !</p>
      <button @click="showSuccess = false" class="close-btn">×</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isSubmitting: false,
      showSuccess: false
    }
  },
  methods: {
    handleFocus(event) {
      const parent = event.target.parentElement;
      parent.classList.add('focused');
    },
    handleBlur(event) {
      const parent = event.target.parentElement;
      if (!event.target.value) {
        parent.classList.remove('focused');
      }
    },
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        const response = await fetch('http://localhost:3001/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send message');
        }

        this.showSuccess = true;
        this.resetForm();
        
        // Scroll to success message
        this.$nextTick(() => {
          const successEl = document.querySelector('.success-message');
          if (successEl) {
            successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        });
      } catch (error) {
        console.error('Error submitting form:', error);
        // Show error message in a more elegant way
        const errorMessage = error.message || 'There was an error sending your message. Please try again.';
        alert(errorMessage);
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      // Remove focused class from all inputs
      document.querySelectorAll('.form-group').forEach(el => {
        el.classList.remove('focused');
      });
    }
  },
  mounted() {
    // Add animation classes on mount
    setTimeout(() => {
      document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      });
    }, 100);
  }
}
</script>

<style scoped>
/* Base Styles */
.contact-page {
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #f8f9fa;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.contact-hero {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  color: white;
  padding: 100px 0 px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 50%);
  pointer-events: none;
}

.contact-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards 0.2s;
}

.contact-hero .subtitle {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards 0.3s;
}

/* Main Container */
.contact-container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  background: white;
  padding: 80px 0;
  position: relative;
  z-index: 1;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  position: relative;
  z-index: 2;
}

/* Contact Info Section */
.contact-info {
  flex: 1;
  min-width: 300px;
  padding: 50px;
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  color: white;
  border-radius: 12px;
  margin-right: 20px;
  box-shadow: 0 10px 30px rgba(58, 134, 255, 0.15);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
}

.contact-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.1), transparent);
  pointer-events: none;
}

.contact-info h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.contact-description {
  font-size: 1.05rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.contact-details {
  margin-top: 40px;
  position: relative;
  z-index: 1;
}

.contact-card {
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, background 0.3s ease;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-card:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.15);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  flex-shrink: 0;
  font-size: 1.2rem;
  color: white;
  transition: all 0.3s ease;
}

.contact-card:hover .contact-icon {
  background: white;
  color: #3a86ff;
  transform: scale(1.1);
}

.contact-text h3 {
  margin: 0 0 5px;
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.contact-link, .contact-text span {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  opacity: 0.9;
  font-size: 0.95rem;
}

.contact-link:hover {
  opacity: 1;
  text-decoration: underline;
  transform: translateX(3px);
}

/* Social Links */
.social-section {
  margin-top: 50px;
  position: relative;
  z-index: 1;
}

.social-section h3 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(255,255,255,0.2), transparent);
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: -1;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.social-link:hover::before {
  transform: translateY(0);
}

/* Contact Form */
.contact-form {
  flex: 1.2;
  min-width: 300px;
  padding: 50px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
  position: relative;
  z-index: 2;
}

.contact-form h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
  font-weight: 700;
  position: relative;
  display: inline-block;
}

.contact-form h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #3a86ff, #8338ec);
  border-radius: 2px;
}

.form-container {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 30px;
  position: relative;
  padding-top: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-group.focused {
  border-color: #3a86ff;
}

.form-input {
  width: 100%;
  padding: 16px 20px;
  font-size: 1rem;
  color: #333;
  background: #f8f9fa;
  border: 2px solid #e1e4e8;
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.form-input:focus {
  border-color: #3a86ff;
  box-shadow: 0 0 0 4px rgba(58, 134, 255, 0.15);
  outline: none;
  background: white;
}

textarea.form-input {
  min-height: 150px;
  resize: vertical;
  line-height: 1.6;
  padding-top: 20px;
}

.form-label {
  position: absolute;
  top: 25px;
  left: 20px;
  color: #6c757d;
  font-size: 1rem;
  transition: all 0.3s ease;
  pointer-events: none;
  transform-origin: left center;
  background: white;
  padding: 0 5px;
  margin-left: -5px;
  border-radius: 4px;
}

.form-group.focused .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  top: 0;
  transform: translateY(-50%) scale(0.85);
  color: #3a86ff;
  font-weight: 500;
  background: linear-gradient(to bottom, white 50%, #f8f9fa 50%);
}

.focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(58, 134, 255, 0.05);
  border-radius: 8px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.form-group.focused .focus-bg {
  opacity: 1;
}

/* Submit Button */
.submit-btn {
  background: linear-gradient(45deg, #3a86ff, #8338ec);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 220px;
  margin-top: 10px;
  box-shadow: 0 4px 15px rgba(58, 134, 255, 0.3);
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #8338ec, #3a86ff);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(58, 134, 255, 0.4);
}

.submit-btn:hover::before {
  opacity: 1;
}

.submit-btn:active {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(58, 134, 255, 0.3);
}

.submit-btn:disabled {
  background: #e9ecef;
  color: #adb5bd;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.submit-btn:disabled::before {
  display: none;
}

.btn-text, .btn-icon {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.submit-btn:hover .btn-icon {
  transform: translateX(5px);
}

/* Success Message */
.success-message {
  position: fixed;
  top: 30px;
  right: 30px;
  background: #4caf50;
  color: white;
  padding: 20px 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
  z-index: 1000;
  animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  max-width: 400px;
  border-left: 5px solid #2e7d32;
}

.success-content {
  flex: 1;
}

.success-message i {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
}

.success-message h3 {
  margin: 0 0 5px;
  font-size: 1.2rem;
  font-weight: 600;
}

.success-message p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
  line-height: 1.5;
}

.close-btn {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: rotate(90deg);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .contact-info, .contact-form {
    padding: 40px 30px;
  }
  
  .contact-hero h1 {
    font-size: 2.5rem;
  }
  
  .contact-form h2, .contact-info h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    padding: 0 15px;
  }
  
  .contact-info {
    margin-right: 0;
    margin-bottom: 30px;
    border-radius: 12px 12px 0 0;
  }
  
  .contact-form {
    border-radius: 0 0 12px 12px;
  }
  
  .contact-hero {
    padding: 80px 20px 50px;
  }
  
  .contact-hero h1 {
    font-size: 2.2rem;
  }
  
  .contact-hero .subtitle {
    font-size: 1.1rem;
  }
  
  .submit-btn {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .contact-hero h1 {
    font-size: 2rem;
  }
  
  .contact-hero .subtitle {
    font-size: 1rem;
  }
  
  .contact-info, .contact-form {
    padding: 30px 20px;
  }
  
  .contact-form h2, .contact-info h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .contact-icon {
    margin-bottom: 15px;
  }
  
  .success-message {
    left: 15px;
    right: 15px;
    max-width: none;
    top: 15px;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  
  .success-message i {
    margin-bottom: 10px;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    margin: 0;
  }
}

/* Animation Classes */
.slide-in-left, .slide-in-right {
  opacity: 1;
  transform: translateX(0) !important;
}

/* Form Validation Styling */
.form-group.error .form-input {
  border-color: #ff4444;
  background: #fff8f8;
}

.form-group.error .form-label {
  color: #ff4444;
}

.form-group .error-message {
  color: #ff4444;
  font-size: 0.85rem;
  margin-top: 5px;
  display: block;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Loading Animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

/* Map Container */
.map-container {
  margin-top: 60px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
