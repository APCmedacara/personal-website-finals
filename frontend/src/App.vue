<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <div id="app">
    <!-- NAVBAR -->
    <nav class="navbar">
      <RouterLink to="/" class="nav-brand" @click="closeMenu">
        <span class="brand-dot"></span>
        Harvey
      </RouterLink>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>

      <ul :class="['nav-links', { open: menuOpen }]">
        <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
        <li><RouterLink to="/about" @click="closeMenu">About</RouterLink></li>
        <li><RouterLink to="/skills" @click="closeMenu">Skills</RouterLink></li>
        <li><RouterLink to="/education" @click="closeMenu">Education</RouterLink></li>
        <li><RouterLink to="/projects" @click="closeMenu">Projects</RouterLink></li>
        <li><RouterLink to="/certificates" @click="closeMenu">Certificates</RouterLink></li>
        <li><RouterLink to="/hobbies" @click="closeMenu">Hobbies</RouterLink></li>
        <li><RouterLink to="/gallery" @click="closeMenu">Gallery</RouterLink></li>
        <li>
          <RouterLink to="/guestbook" class="nav-guestbook" @click="closeMenu">
            Guestbook
          </RouterLink>
        </li>
      </ul>
    </nav>

    <!-- PAGE CONTENT -->
    <main>
      <RouterView />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <p>© 2026 Mark Harvey Dacara &nbsp;·&nbsp; Vue.js + NestJS + Supabase &nbsp;·&nbsp; Hosted on Vercel</p>
    </footer>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

/* ===== RESET & BASE ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --red: #c0392b;
  --red-bright: #e74c3c;
  --red-glow: #ff4444;
  --red-dim: #7f1d1d;
  --red-subtle: rgba(192, 57, 43, 0.15);
  --bg: #0a0808;
  --bg2: #100c0c;
  --bg-card: rgba(255,255,255,0.04);
  --bg-card-hover: rgba(255,255,255,0.07);
  --glass: rgba(255,255,255,0.05);
  --glass-border: rgba(255,255,255,0.08);
  --text: #f0e8e8;
  --text-muted: #9a8a8a;
  --text-dim: #6b5b5b;
  --border: rgba(255,255,255,0.07);
  --border-red: rgba(192,57,43,0.35);
  --radius: 14px;
  --radius-sm: 8px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'DM Sans', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Global noise texture overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

main { flex: 1; }

/* ===== NAVBAR ===== */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 62px;
  background: rgba(10,8,8,0.7);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid var(--glass-border);
  position: sticky;
  top: 0;
  z-index: 999;
  flex-wrap: wrap;
  gap: 0.5rem;
}

/* Red glow line at top of navbar */
.navbar::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--red-bright), transparent);
  opacity: 0.6;
}

.nav-brand {
  font-family: 'Syne', sans-serif;
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  letter-spacing: -0.3px;
  transition: color 0.2s;
}

.nav-brand:hover { color: var(--red-bright); }

.brand-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red-bright);
  box-shadow: 0 0 10px var(--red-glow), 0 0 20px var(--red-glow);
  flex-shrink: 0;
  animation: pulse-dot 2.5s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 8px var(--red-glow), 0 0 16px var(--red-glow); }
  50% { box-shadow: 0 0 14px var(--red-glow), 0 0 28px var(--red-glow), 0 0 40px rgba(255,68,68,0.3); }
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.1rem;
  flex-wrap: wrap;
  align-items: center;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.4rem 0.7rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-links a:hover {
  color: var(--text);
  background: var(--glass);
}

.nav-links a.router-link-exact-active {
  color: var(--text);
  background: rgba(192,57,43,0.12);
  border: 1px solid var(--border-red);
}

.nav-guestbook {
  background: var(--red) !important;
  color: white !important;
  font-weight: 600 !important;
  border: 1px solid rgba(231,76,60,0.4) !important;
  box-shadow: 0 0 14px rgba(192,57,43,0.3) !important;
  transition: all 0.2s !important;
}

.nav-guestbook:hover {
  background: var(--red-bright) !important;
  box-shadow: 0 0 22px rgba(231,76,60,0.5) !important;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-muted);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ===== FOOTER ===== */
.footer {
  text-align: center;
  padding: 1.75rem;
  background: rgba(10,8,8,0.8);
  color: var(--text-dim);
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  border-top: 1px solid var(--glass-border);
}

/* ===== SHARED PAGE STYLES ===== */
.page-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3.5rem 1.5rem;
}

.page-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: var(--text);
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: -0.02em;
}

.page-title-accent {
  color: var(--red-bright);
}

.page-subtitle {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 3rem;
  font-size: 0.95rem;
  font-weight: 300;
}

/* Glass card */
.card {
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: all 0.25s ease;
}

.card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-red);
  box-shadow: 0 4px 32px rgba(192,57,43,0.12), 0 0 0 1px rgba(192,57,43,0.08);
}

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.2rem;
    padding: 0.75rem 0;
    border-top: 1px solid var(--glass-border);
  }

  .nav-links.open { display: flex; }
  .nav-links a { width: 100%; }
  .navbar { padding: 0 1.25rem; height: auto; padding-top: 0.75rem; padding-bottom: 0.75rem; }
}
</style>
