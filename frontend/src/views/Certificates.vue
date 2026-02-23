<template>
  <div class="page-wrap">
    <h1 class="page-title">Certificates</h1>
    <p class="page-subtitle">Certifications and professional development</p>

    <div class="certs-grid">
      <a
        class="card cert-card"
        v-for="cert in certificates"
        :key="cert.id"
        :href="cert.link"
        target="_blank"
        :class="{ 'cert-card--nolink': !cert.link }"
      >
        <div class="cert-issuer-badge" :style="{ background: cert.color }">
          {{ cert.issuerShort }}
        </div>
        <div class="cert-info">
          <h3>{{ cert.name }}</h3>
          <p class="cert-issuer">{{ cert.issuer }}</p>
          <div class="cert-footer">
            <span class="cert-date">{{ cert.date }}</span>
            <span class="cert-verify" v-if="cert.link">View Credential →</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const certificates = [
  {
    id: 1,
    name: 'System Administration: Backup and Recovery',
    issuer: 'LinkedIn Learning',
    issuerShort: 'LI',
    date: '2024',
    color: 'rgba(10,102,194,0.15)',
    link: 'https://www.linkedin.com/learning/certificates/1e7a44ff59b6a4d242a84da3ad2ab58013ba3ab6f7f86ad8d25789e07d2f2674?u=35279340',
  },
  {
    id: 2,
    name: 'Explore Emerging Tech',
    issuer: 'IBM SkillsBuild',
    issuerShort: 'IBM',
    date: '2024',
    color: 'rgba(60,120,220,0.15)',
    link: 'https://www.credly.com/badges/143188e5-bbe8-40e7-88b0-6ea9050445d7/linked_in_profile',
  },
  {
    id: 3,
    name: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services Training and Certification',
    issuerShort: 'AWS',
    date: '2024',
    color: 'rgba(255,153,0,0.12)',
    link: 'https://www.credly.com/badges/8e37fded-639d-4835-81c9-48a1a60facb3/linked_in_profile',
  },
]
</script>

<style scoped>
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.cert-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s;
}

.cert-card--nolink { cursor: default; }

.cert-issuer-badge {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  color: var(--text);
  flex-shrink: 0;
}

.cert-info { flex: 1; display: flex; flex-direction: column; gap: 0.35rem; }

.cert-info h3 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.4;
}

.cert-issuer { color: var(--red-bright); font-size: 0.8rem; font-weight: 500; }

.cert-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.5rem;
  border-top: 1px solid var(--glass-border);
}

.cert-date { color: var(--text-dim); font-size: 0.75rem; letter-spacing: 0.04em; }

.cert-verify {
  color: var(--text-muted);
  font-size: 0.75rem;
  transition: color 0.2s;
}

.cert-card:hover .cert-verify { color: var(--red-bright); }
</style>
