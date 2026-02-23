<template>
  <div class="page-wrap">
    <h1 class="page-title">Certificates</h1>
    <p class="page-subtitle">My certifications and achievements</p>

    <div class="certs-grid">
      <div class="card cert-card" v-for="cert in certificates" :key="cert.id">
        <div class="cert-icon">🏆</div>
        <div class="cert-info">
          <h3>{{ cert.name }}</h3>
          <p class="cert-issuer">{{ cert.issuer }}</p>
          <p class="cert-date">📅 {{ cert.date }}</p>
          <a v-if="cert.link && cert.link !== '#'" :href="cert.link" target="_blank" class="verify-link">
            Verify Certificate →
          </a>
        </div>
      </div>
    </div>

    <div class="no-certs-note" v-if="certificates.length === 0">
      <p>No certificates added yet. Add yours to the certificates array!</p>
    </div>
  </div>
</template>

<script setup>
const certificates = [
  {
    id: 1,
    name: 'Vue.js – The Complete Guide',
    issuer: 'Udemy',
    date: '2025',
    link: '#',
  },
  {
    id: 2,
    name: 'Frontend Developer Certificate',
    issuer: 'Coursera',
    date: '2024',
    link: '#',
  },
  {
    id: 3,
    name: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2023',
    link: 'https://freecodecamp.org/certification/yourname/javascript-algorithms-and-data-structures',
  },
]
</script>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.cert-icon {
  font-size: 2rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.cert-info { flex: 1; }

.cert-info h3 { color: var(--text); font-size: 1rem; margin-bottom: 0.35rem; }

.cert-issuer {
  color: var(--purple-light);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.cert-date { color: var(--text-muted); font-size: 0.82rem; margin-bottom: 0.6rem; }

.verify-link {
  display: inline-block;
  color: #7dd3fc;
  font-size: 0.82rem;
  text-decoration: none;
  transition: color 0.2s;
}

.verify-link:hover { color: white; }

.no-certs-note {
  text-align: center;
  color: var(--text-muted);
  padding: 3rem;
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px dashed var(--border);
}
</style>
