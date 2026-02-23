<template>
  <div>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-bg-glow"></div>
      <div class="hero-bg-grid"></div>

      <div class="hero-content">
        <div class="hero-badge">BSIT Student — Asia Pacific College</div>

        <h1>
          Mark Harvey<br />
          <span class="hero-name-red">Dacara</span>
        </h1>

        <p class="hero-tagline">Aspiring Full-Stack Developer</p>

        <p class="hero-desc">
          Learning to build real, functional web experiences — from frontend
          interfaces to backend APIs. Currently studying at Asia Pacific College
          and pushing boundaries through hands-on projects.
        </p>

        <div class="hero-buttons">
          <RouterLink to="/projects" class="btn-primary">View Projects</RouterLink>
          <RouterLink to="/about" class="btn-outline">About Me</RouterLink>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-num">3+</span>
            <span class="stat-label">Projects Shipped</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">2nd</span>
            <span class="stat-label">Year BSIT</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">PH</span>
            <span class="stat-label">Metro Manila</span>
          </div>
        </div>
      </div>
    </section>

    <!-- QUICK CARDS -->
    <section class="quick-section">
      <div class="section-label">Navigate</div>
      <div class="quick-grid">
        <RouterLink to="/about" class="quick-card">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
          </div>
          <div class="qc-text">
            <h3>About Me</h3>
            <p>Background, skills, and contact info.</p>
          </div>
          <span class="qc-arrow">→</span>
        </RouterLink>

        <RouterLink to="/skills" class="quick-card">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
          </div>
          <div class="qc-text">
            <h3>Skills</h3>
            <p>Technologies and tools I work with.</p>
          </div>
          <span class="qc-arrow">→</span>
        </RouterLink>

        <RouterLink to="/projects" class="quick-card">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div class="qc-text">
            <h3>Projects</h3>
            <p>Things I have built and shipped.</p>
          </div>
          <span class="qc-arrow">→</span>
        </RouterLink>

        <RouterLink to="/certificates" class="quick-card">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
          </div>
          <div class="qc-text">
            <h3>Certificates</h3>
            <p>Certifications and achievements.</p>
          </div>
          <span class="qc-arrow">→</span>
        </RouterLink>

        <RouterLink to="/hobbies" class="quick-card">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div class="qc-text">
            <h3>Hobbies</h3>
            <p>Life outside of code.</p>
          </div>
          <span class="qc-arrow">→</span>
        </RouterLink>

        <RouterLink to="/guestbook" class="quick-card quick-card--highlight">
          <div class="qc-icon-wrap">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <div class="qc-text">
            <h3>Guestbook</h3>
            <p>Leave a message.</p>
          </div>
          <span class="qc-arrow">→</span>
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
  padding: 4rem 1.5rem;
  overflow: hidden;
}

.hero-bg-glow {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 20%, rgba(192,57,43,0.13) 0%, transparent 65%),
    radial-gradient(ellipse 40% 40% at 80% 80%, rgba(127,29,29,0.08) 0%, transparent 60%);
  pointer-events: none;
}

.hero-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}

.hero-content {
  max-width: 700px;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-block;
  background: rgba(192,57,43,0.12);
  border: 1px solid rgba(192,57,43,0.3);
  color: rgba(231,76,60,0.9);
  padding: 0.35rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
}

.hero h1 {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1.0;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  color: var(--text);
}

.hero-name-red {
  color: var(--red-bright);
  text-shadow: 0 0 40px rgba(231,76,60,0.35), 0 0 80px rgba(192,57,43,0.2);
}

.hero-tagline {
  font-family: 'Syne', sans-serif;
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-desc {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2.25rem;
  font-size: 1rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
}

.hero-buttons {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.btn-primary {
  background: var(--red);
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  transition: all 0.2s;
  border: 1px solid rgba(231,76,60,0.5);
  box-shadow: 0 0 20px rgba(192,57,43,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
}

.btn-primary:hover {
  background: var(--red-bright);
  box-shadow: 0 0 30px rgba(231,76,60,0.4);
  transform: translateY(-1px);
}

.btn-outline {
  background: var(--glass);
  backdrop-filter: blur(12px);
  color: var(--text-muted);
  border: 1px solid var(--glass-border);
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.btn-outline:hover {
  color: var(--text);
  border-color: var(--border-red);
  background: rgba(192,57,43,0.08);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: var(--glass-border);
}

/* QUICK CARDS */
.quick-section {
  padding: 0 1.5rem 4rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1px;
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--glass-border);
}

.quick-card {
  background: var(--bg-card);
  backdrop-filter: blur(8px);
  padding: 1.4rem 1.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;
}

.quick-card:hover {
  background: var(--bg-card-hover);
}

.quick-card--highlight {
  background: rgba(192,57,43,0.07);
}

.quick-card--highlight:hover {
  background: rgba(192,57,43,0.12);
}

.qc-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all 0.2s;
}

.quick-card:hover .qc-icon-wrap {
  border-color: var(--border-red);
  color: var(--red-bright);
}

.quick-card--highlight .qc-icon-wrap {
  color: var(--red-bright);
  border-color: var(--border-red);
}

.qc-text { flex: 1; }

.qc-text h3 {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.qc-text p {
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.4;
  font-weight: 300;
}

.qc-arrow {
  color: var(--text-dim);
  font-size: 1rem;
  transition: all 0.2s;
  flex-shrink: 0;
}

.quick-card:hover .qc-arrow {
  color: var(--red-bright);
  transform: translateX(3px);
}

@media (max-width: 640px) {
  .quick-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 1.25rem; }
  .stat-divider { display: none; }
}
</style>
