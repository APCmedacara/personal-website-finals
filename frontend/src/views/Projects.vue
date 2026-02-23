<template>
  <div class="page-wrap">
    <h1 class="page-title">Projects</h1>
    <p class="page-subtitle">Things I have built and shipped</p>

    <div class="projects-grid">
      <div class="card project-card" v-for="p in projects" :key="p.id">
        <div class="project-top">
          <span class="project-type">{{ p.type }}</span>
          <div class="project-links">
            <a v-if="p.github" :href="p.github" target="_blank" class="icon-link" title="View Code">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
            </a>
            <a v-if="p.live" :href="p.live" target="_blank" class="icon-link icon-link--live" title="Live Demo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </div>

        <h3>{{ p.name }}</h3>
        <p class="proj-desc">{{ p.description }}</p>

        <div class="tech-tags">
          <span class="tech" v-for="t in p.tech" :key="t">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    name: 'Personal Portfolio Website',
    type: 'Full Stack Web App',
    description: 'This portfolio site built with Vue.js frontend and NestJS REST API backend, connected to Supabase for the live guestbook. Deployed on Vercel and Render.',
    tech: ['Vue.js', 'NestJS', 'Supabase', 'Vercel', 'Render'],
    github: 'https://github.com/APCmedacara/personal-website-finals',
    live: null,
  },
  {
    id: 2,
    name: 'Personal Profile (Midterm)',
    type: 'Frontend',
    description: 'An earlier personal profile website built with plain HTML, CSS and JavaScript as a midterm project for Web Programming.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/APCmedacara/WEBPROG-html-lessons',
    live: 'https://apcmedacara.github.io/WEBPROG-html-lessons/introduction/',
  },
  {
    id: 3,
    name: 'NBA Playoff Oracle',
    type: 'Cloud / Web App',
    description: 'An NBA playoff prediction web app deployed on Azure cloud infrastructure. Built as a cloud computing project.',
    tech: ['Azure', 'HTML', 'CSS', 'JavaScript'],
    github: null,
    live: 'https://nbaplayofforacle123.z7.web.core.windows.net/',
  },
  {
    id: 4,
    name: 'Mobile Application',
    type: 'Mobile App',
    description: 'A mobile application built as part of the Mobile Programming course. Developed using Flutter for cross-platform deployment.',
    tech: ['Flutter', 'Dart'],
    github: null,
    live: 'https://drive.google.com/drive/folders/1Gyb7ebhgOx7XLAixt5cUohnwAFste1Gn',
  },
]
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.project-type {
  background: rgba(192,57,43,0.1);
  color: rgba(231,76,60,0.8);
  border: 1px solid rgba(192,57,43,0.25);
  padding: 0.18rem 0.65rem;
  border-radius: 4px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.project-links { display: flex; gap: 0.5rem; }

.icon-link {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--glass);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  text-decoration: none;
  transition: all 0.2s;
}

.icon-link:hover {
  border-color: var(--border-red);
  color: var(--text);
  background: rgba(192,57,43,0.08);
}

.icon-link--live { color: rgba(231,76,60,0.7); border-color: rgba(192,57,43,0.2); }
.icon-link--live:hover { color: var(--red-bright); }

.project-card h3 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
}

.proj-desc {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 0.87rem;
  flex: 1;
  font-weight: 300;
}

.tech-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: auto; }

.tech {
  background: var(--glass);
  color: var(--text-dim);
  padding: 0.18rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid var(--glass-border);
}
</style>
