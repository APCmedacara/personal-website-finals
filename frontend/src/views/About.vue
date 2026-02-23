<template>
  <div class="page-wrap">
    <h1 class="page-title">About Me</h1>
    <p class="page-subtitle">A little bit about who I am</p>

    <div class="about-grid">

      <!-- LEFT: Photo + Quick Info -->
      <div class="about-left">
        <div class="photo-wrap">
          <img :src="profilePic" alt="Harvey" class="profile-img" />
        </div>
        <div class="info-card card">
          <div class="info-row"><span class="info-label">📍 Location</span><span>Quezon City, PH</span></div>
          <div class="info-row"><span class="info-label">🎓 Course</span><span>BS Computer Science</span></div>
          <div class="info-row"><span class="info-label">🏫 School</span><span>Asia Pacific College</span></div>
          <div class="info-row"><span class="info-label">📧 Email</span><span>harvey@email.com</span></div>
          <div class="info-row"><span class="info-label">💼 Status</span><span class="badge-open">Open to work</span></div>
        </div>
      </div>

      <!-- RIGHT: Bio + Hobbies -->
      <div class="about-right">
        <div class="bio-section">
          <h2>Hey there! 👋</h2>
          <p>
            I'm Harvey, a Computer Science student with a passion for building things on the web.
            I love the process of turning an idea into a fully working website — from designing the
            interface to making it actually function.
          </p>
          <p>
            I'm currently learning Vue.js, backend development, and database management through
            hands-on projects like this portfolio. Every project I build teaches me something new.
          </p>
          <p>
            When I'm not coding, I enjoy gaming, listening to music, and exploring new places.
            I believe that hobbies outside of tech make you a more creative developer.
          </p>
        </div>

        <div class="hobbies-section">
          <h2>Interests & Hobbies</h2>
          <div class="hobby-tags">
            <span class="htag" v-for="h in hobbies" :key="h">{{ h }}</span>
          </div>
        </div>

        <div class="social-section">
          <h2>Connect With Me</h2>
          <div class="social-links">
            <a href="https://github.com/your-username" target="_blank" class="social-btn github">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" class="social-btn linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profilePic from '../assets/profile.jpg'

const hobbies = ['🎮 Gaming', '📚 Reading', '🎵 Music', '✈️ Traveling', '📷 Photography', '🍕 Trying new food', '💻 Coding side projects']
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

.photo-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.profile-img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--purple);
  box-shadow: 0 0 30px rgba(124, 58, 237, 0.3);
}

.info-card { padding: 1.2rem; }

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.88rem;
  gap: 0.5rem;
}

.info-row:last-child { border-bottom: none; }

.info-label { color: var(--text-muted); }

.badge-open {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
  padding: 0.15rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.bio-section, .hobbies-section, .social-section {
  margin-bottom: 1.75rem;
}

.bio-section h2, .hobbies-section h2, .social-section h2 {
  color: var(--purple-light);
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

.bio-section p {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 0.75rem;
}

.hobby-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.htag {
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: #c4b5fd;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.88rem;
}

.social-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.55rem 1.1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: opacity 0.2s;
}

.social-btn:hover { opacity: 0.8; }

.github { background: #24292f; color: white; }
.linkedin { background: #0a66c2; color: white; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-left { display: flex; flex-direction: column; align-items: center; }
}
</style>
