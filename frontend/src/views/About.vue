<template>
  <div class="page-wrap">
    <h1 class="page-title">About <span class="page-title-accent">Me</span></h1>
    <p class="page-subtitle">Background, interests, and how to reach me</p>

    <div class="about-grid">

      <!-- LEFT -->
      <div class="about-left">
        <div class="photo-wrap">
          <div class="photo-glow"></div>
          <img :src="profilePic" alt="Mark Harvey Dacara" class="profile-img" />
        </div>

        <div class="info-card card">
          <div class="info-row">
            <span class="info-label">Location</span>
            <span>Metro Manila, PH</span>
          </div>
          <div class="info-row">
            <span class="info-label">Course</span>
            <span>BS Information Technology</span>
          </div>
          <div class="info-row">
            <span class="info-label">School</span>
            <span>Asia Pacific College</span>
          </div>
          <div class="info-row">
            <span class="info-label">Email</span>
            <span class="info-email">medacara@student.apc.edu.ph</span>
          </div>
          <div class="info-row">
            <span class="info-label">Status</span>
            <span class="badge-open">Available</span>
          </div>
        </div>

        <div class="social-links">
          <a href="https://github.com/APCmedacara" target="_blank" class="social-btn github">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/mark-harvey-dacara-5b133b329/" target="_blank" class="social-btn linkedin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="about-right">
        <div class="bio-section">
          <h2 class="section-heading">Introduction</h2>
          <p>
            I'm Mark Harvey Dacara, a 20-year-old second-year BS Information Technology
            student at Asia Pacific College in Makati. I'm on the path to becoming a
            full-stack developer — building projects that connect frontend interfaces
            with real backend logic and databases.
          </p>
          <p>
            I started with the basics — HTML, CSS, JavaScript — and have been pushing
            further into Vue.js, NestJS, REST APIs, and cloud deployment. Every project
            I ship teaches me something I couldn't learn in a classroom alone.
          </p>
          <p>
            Outside of code, I ride bikes around Metro Manila, shoot street photography,
            and explore new places whenever I get the chance.
          </p>
        </div>

        <div class="hobbies-section">
          <h2 class="section-heading">Interests</h2>
          <div class="hobby-tags">
            <span class="htag" v-for="h in hobbies" :key="h">{{ h }}</span>
          </div>
        </div>

        <div class="tools-section">
          <h2 class="section-heading">Tools & Platforms</h2>
          <div class="hobby-tags">
            <span class="htag htag--tool" v-for="t in tools" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import profilePic from '../assets/profile.jpg'

const hobbies = ['Biking', 'Hiking', 'Traveling', 'Photography', 'Coding', 'Eating']
const tools = ['GitHub', 'Vercel', 'Supabase', 'VS Code', 'Figma', 'REST API', 'Flutter']
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 2.5rem;
  align-items: start;
}

.about-left { display: flex; flex-direction: column; gap: 1.25rem; }

.photo-wrap {
  position: relative;
  display: flex;
  justify-content: center;
}

.photo-glow {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(192,57,43,0.35) 0%, transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(20px);
}

.profile-img {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  border: 2px solid var(--border-red);
  box-shadow: 0 0 0 4px rgba(192,57,43,0.12), 0 8px 40px rgba(0,0,0,0.5);
  position: relative;
  z-index: 1;
}

.info-card { padding: 0; overflow: hidden; }

.info-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.25rem;
  border-bottom: 1px solid var(--glass-border);
  font-size: 0.82rem;
  gap: 0.75rem;
}

.info-row:last-child { border-bottom: none; }

.info-label {
  color: var(--text-muted);
  font-weight: 400;
  flex-shrink: 0;
}

.info-row > span:last-child {
  color: var(--text);
  text-align: right;
  font-size: 0.8rem;
}

.info-email { font-size: 0.72rem !important; }

.badge-open {
  background: rgba(34,197,94,0.1);
  color: #4ade80;
  border: 1px solid rgba(34,197,94,0.25);
  padding: 0.15rem 0.65rem;
  border-radius: 20px;
  font-size: 0.75rem !important;
  font-weight: 500;
}

.social-links { display: flex; gap: 0.75rem; }

.social-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 0.55rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid var(--glass-border);
}

.github { background: rgba(36,41,47,0.8); color: rgba(240,232,232,0.8); }
.github:hover { background: #24292f; color: white; border-color: rgba(255,255,255,0.15); }
.linkedin { background: rgba(10,102,194,0.15); color: #60a5fa; border-color: rgba(10,102,194,0.3); }
.linkedin:hover { background: rgba(10,102,194,0.3); color: #93c5fd; }

/* RIGHT */
.about-right { display: flex; flex-direction: column; gap: 2rem; }

.section-heading {
  font-family: 'Syne', sans-serif;
  color: var(--text-muted);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.bio-section p {
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 0.85rem;
  font-size: 0.95rem;
  font-weight: 300;
}

.bio-section p:last-child { margin-bottom: 0; }

.hobby-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.htag {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  padding: 0.3rem 0.85rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 400;
  transition: all 0.2s;
}

.htag:hover {
  border-color: var(--border-red);
  color: var(--text);
  background: rgba(192,57,43,0.08);
}

.htag--tool {
  background: rgba(192,57,43,0.07);
  border-color: rgba(192,57,43,0.2);
  color: rgba(231,76,60,0.8);
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-left { align-items: center; }
  .social-links { width: 100%; max-width: 280px; }
}
</style>
