<template>
  <div class="page-wrap">
    <h1 class="page-title">Education</h1>
    <p class="page-subtitle">My academic journey</p>

    <div class="timeline">
      <div class="timeline-item" v-for="edu in education" :key="edu.id">
        <div class="timeline-line">
          <div class="timeline-dot"></div>
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
          <div class="edu-tags">
            <span class="etag" v-for="tag in edu.tags" :key="tag">{{ tag }}</span>
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
    year: '2022 – Present',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Asia Pacific College',
    status: 'Current',
    description: 'Currently in my 3rd year. Focusing on web development, algorithms, software engineering, and database management. Working on a full-stack portfolio project as part of coursework.',
    tags: ['Web Development', 'Data Structures', 'Databases', 'Software Engineering'],
  },
  {
    id: 2,
    year: '2018 – 2022',
    degree: 'Senior High School — ICT Strand',
    school: 'APC High School',
    status: 'Graduated',
    description: 'Graduated with honors. Focused on the ICT strand which included programming fundamentals, computer hardware, and basic web development.',
    tags: ['HTML & CSS', 'Programming Basics', 'ICT'],
  },
  {
    id: 3,
    year: '2012 – 2018',
    degree: 'Elementary & Junior High School',
    school: 'Your Previous School',
    status: 'Graduated',
    description: 'Consistently an honor student. Developed an early interest in computers and technology during these years.',
    tags: ['Academic Excellence'],
  },
]
</script>

<style scoped>
.timeline { padding-left: 1.5rem; max-width: 750px; margin: 0 auto; }

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.timeline-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: var(--purple);
  border-radius: 50%;
  border: 3px solid var(--bg);
  box-shadow: 0 0 0 2px var(--purple);
  margin-top: 1.2rem;
  flex-shrink: 0;
}

.timeline-card { flex: 1; }

.edu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.edu-year {
  display: block;
  color: var(--purple-light);
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
}

.edu-header h3 { color: var(--text); font-size: 1.05rem; }

.edu-school { color: var(--text-muted); font-size: 0.9rem; margin-top: 0.2rem; }

.edu-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
}

.badge-current {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.badge-done {
  background: rgba(148, 163, 184, 0.1);
  color: var(--text-muted);
  border: 1px solid var(--border);
}

.edu-desc { color: var(--text-muted); line-height: 1.7; font-size: 0.9rem; margin-bottom: 0.75rem; }

.edu-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

.etag {
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: #c4b5fd;
  padding: 0.2rem 0.65rem;
  border-radius: 10px;
  font-size: 0.8rem;
}
</style>
