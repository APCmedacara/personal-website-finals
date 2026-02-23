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
        <span class="brand-icon">💻</span> Harvey
      </RouterLink>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
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
            Guestbook ✍️
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
      <p>© 2026 Harvey · Built with Vue.js + Supabase · Hosted on Vercel</p>
    </footer>

  </div>
</template>

<style>
/* ===== GLOBAL RESET & BASE ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --purple: #7c3aed;
  --purple-light: #9f67ff;
  --purple-dark: #5b21b6;
  --bg: #0f0f1a;
  --bg-card: #1a1a2e;
  --bg-card2: #16213e;
  --text: #e2e8f0;
  --text-muted: #94a3b8;
  --border: #2d2d4e;
  --radius: 12px;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main { flex: 1; }

/* ===== NAVBAR ===== */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 2rem;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 999;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nav-brand {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--purple-light);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 0.25rem;
  flex-wrap: wrap;
  align-items: center;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s;
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text);
  background: rgba(124, 58, 237, 0.2);
}

.nav-guestbook {
  background: var(--purple) !important;
  color: white !important;
  border-radius: 8px !important;
  font-weight: 600;
}

.nav-guestbook:hover {
  background: var(--purple-dark) !important;
}

/* Hamburger button */
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
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ===== FOOTER ===== */
.footer {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-card);
  color: var(--text-muted);
  font-size: 0.85rem;
  border-top: 1px solid var(--border);
}

/* ===== SHARED PAGE STYLES ===== */
.page-wrap {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--purple-light);
  margin-bottom: 0.4rem;
  text-align: center;
}

.page-subtitle {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  font-size: 1rem;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.card:hover { border-color: var(--purple); }

/* ===== MOBILE ===== */
@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem 0;
  }

  .nav-links.open { display: flex; }

  .nav-links a { width: 100%; }

  .navbar { padding: 0.9rem 1.25rem; }
}
</style>
