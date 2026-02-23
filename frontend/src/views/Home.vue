<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">👋 Welcome to my portfolio</div>
        <h1>Hi, I'm <span class="gradient-text">Harvey</span></h1>
        <p class="hero-tagline">Computer Science Student · Aspiring Web Developer</p>
        <p class="hero-desc">
          I'm passionate about building clean, functional websites and turning ideas
          into real digital experiences. Currently exploring Vue.js, Supabase, and
          full-stack development.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/projects" class="btn-primary">View My Projects</RouterLink>
          <RouterLink to="/guestbook" class="btn-outline">✍️ Sign Guestbook</RouterLink>
        </div>
      </div>
    </section>

    <!-- QUICK CARDS -->
    <section class="quick-section">
      <div class="quick-grid">
        <RouterLink to="/about" class="quick-card">
          <div class="quick-icon">🙋</div>
          <h3>About Me</h3>
          <p>Learn more about who I am and what I do.</p>
        </RouterLink>
        <RouterLink to="/skills" class="quick-card">
          <div class="quick-icon">⚡</div>
          <h3>Skills</h3>
          <p>A look at my technical and creative abilities.</p>
        </RouterLink>
        <RouterLink to="/projects" class="quick-card">
          <div class="quick-icon">🛠️</div>
          <h3>Projects</h3>
          <p>Things I've built and shipped.</p>
        </RouterLink>
        <RouterLink to="/certificates" class="quick-card">
          <div class="quick-icon">🏆</div>
          <h3>Certificates</h3>
          <p>My certifications and achievements.</p>
        </RouterLink>
        <RouterLink to="/hobbies" class="quick-card">
          <div class="quick-icon">🎮</div>
          <h3>Hobbies</h3>
          <p>What I enjoy doing outside of coding.</p>
        </RouterLink>
        <RouterLink to="/guestbook" class="quick-card highlight-card">
          <div class="quick-icon">📖</div>
          <h3>Guestbook</h3>
          <p>Leave a message — I'd love to hear from you!</p>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* HERO */
.hero {
  position: relative;
  min-height: calc(100vh - 62px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 30%, rgba(124, 58, 237, 0.18) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  max-width: 680px;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(124, 58, 237, 0.2);
  border: 1px solid rgba(124, 58, 237, 0.4);
  color: #c4b5fd;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 0.75rem;
}

.gradient-text {
  background: linear-gradient(135deg, #9f67ff, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  color: #a78bfa;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-desc {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: var(--purple);
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary:hover { background: var(--purple-dark); }

.btn-outline {
  background: transparent;
  color: #a78bfa;
  border: 2px solid #7c3aed;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-outline:hover { background: rgba(124, 58, 237, 0.15); }

/* QUICK CARDS */
.quick-section {
  padding: 3rem 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.25rem;
}

.quick-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.2s;
  display: block;
}

.quick-card:hover {
  border-color: var(--purple);
  transform: translateY(-3px);
}

.quick-icon { font-size: 2rem; margin-bottom: 0.75rem; }

.quick-card h3 { color: var(--text); font-size: 1.1rem; margin-bottom: 0.4rem; }

.quick-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.5; }

.highlight-card {
  border-color: rgba(124, 58, 237, 0.4);
  background: linear-gradient(135deg, #1a1a2e, #1e1b4b);
}

.highlight-card:hover { border-color: var(--purple); }
</style>
