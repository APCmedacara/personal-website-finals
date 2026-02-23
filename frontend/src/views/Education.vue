<template>
  <div class="page-wrap">
    <h1 class="page-title">Education</h1>
    <p class="page-subtitle">Academic background and journey</p>

    <div class="timeline">
      <div class="timeline-item" v-for="edu in education" :key="edu.id">
        <div class="timeline-track">
          <div class="timeline-dot" :class="{ active: edu.status === 'Current' }"></div>
          <div class="timeline-line"></div>
        </div>
        <div class="card timeline-card">
          <div class="edu-header">
            <div>
              <span class="edu-year">{{ edu.year }}</span>
              <h3>{{ edu.degree }}</h3>
              <p class="edu-school">{{ edu.school }}</p>
            </div>
            <span class="edu-badge" :class="edu.status === 'Current' ? 'badge-current' : 'badge-done'">
              {{ edu.status }}
            </span>
          </div>
          <p class="edu-desc">{{ edu.description }}</p>
          <div class="edu-tags" v-if="edu.tags.length">
            <span class="etag" v-for="tag in edu.tags" :key="tag">{{ tag }}</span>
          </div>
          <div class="edu-activity" v-if="edu.activity">
            <span class="activity-label">Activity</span>
            <span class="activity-value">{{ edu.activity }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = [
  {
    id: 1,
    year: '2024 — Present',
    degree: 'BS Information Technology',
    school: 'Asia Pacific College — Makati, PH',
    status: 'Current',
    description: 'Currently in 2nd year. Building skills in web development, databases, mobile apps, and software engineering. Working on full-stack projects including this portfolio using Vue.js, NestJS, and Supabase.',
    tags: ['Web Development', 'Full Stack', 'Mobile Development', 'Database Management'],
    activity: null,
  },
  {
    id: 2,
    year: '2022 — 2024',
    degree: 'Senior High School — ICT Strand',
    school: 'Unida Christian Colleges — Imus, Cavite',
    status: 'Graduated',
    description: 'Completed Senior High School under the Information and Communications Technology strand. Built foundational knowledge in programming and computer systems.',
    tags: ['ICT Strand', 'Programming Basics', 'Computer Systems'],
    activity: null,
  },
  {
    id: 3,
    year: 'Until 2022',
    degree: 'Junior High School',
    school: 'Emilio Aguinaldo National High School — Imus, Cavite',
    status: 'Graduated',
    description: 'Completed junior high school with active involvement in campus activities. Developed communication and design skills through student journalism.',
    tags: [],
    activity: 'Layout Artist — Campus Journalism',
  },
]
</script>

<style scoped>
.timeline {
  max-width: 740px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
}

.timeline-track {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 1.4rem;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--bg2);
  border: 2px solid var(--text-dim);
  flex-shrink: 0;
  transition: all 0.2s;
  position: relative;
  z-index: 1;
}

.timeline-dot.active {
  background: var(--red);
  border-color: var(--red-bright);
  box-shadow: 0 0 12px rgba(231,76,60,0.6), 0 0 24px rgba(192,57,43,0.3);
}

.timeline-line {
  width: 1px;
  flex: 1;
  background: var(--glass-border);
  margin-top: 6px;
  min-height: 2rem;
}

.timeline-item:last-child .timeline-line { display: none; }

.timeline-card {
  flex: 1;
  margin-bottom: 1.5rem;
}

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

.edu-year {
  display: block;
  color: var(--red-bright);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
}

.edu-header h3 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
}

.edu-school { color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem; font-weight: 300; }

.edu-badge {
  padding: 0.2rem 0.7rem;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: 0.04em;
}

.badge-current {
  background: rgba(192,57,43,0.12);
  color: var(--red-bright);
  border: 1px solid var(--border-red);
}

.badge-done {
  background: var(--glass);
  color: var(--text-dim);
  border: 1px solid var(--glass-border);
}

.edu-desc { color: var(--text-muted); line-height: 1.8; font-size: 0.88rem; margin-bottom: 0.85rem; font-weight: 300; }

.edu-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.5rem; }

.etag {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  color: var(--text-dim);
  padding: 0.18rem 0.6rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.edu-activity {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--glass-border);
}

.activity-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.activity-value {
  font-size: 0.82rem;
  color: var(--red-bright);
  font-weight: 500;
}
</style>
