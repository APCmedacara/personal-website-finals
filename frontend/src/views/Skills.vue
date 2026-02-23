<template>
  <div class="page-wrap">
    <h1 class="page-title">Technical <span class="page-title-accent">Skills</span></h1>
    <p class="page-subtitle">Technologies and tools I work with</p>

    <div class="skills-grid">
      <div class="card skill-category" v-for="cat in skills" :key="cat.name">
        <div class="cat-header">
          <div class="cat-icon-wrap">
            <component :is="cat.icon" />
          </div>
          <h3>{{ cat.name }}</h3>
        </div>
        <div class="skill-bars">
          <div class="skill-item" v-for="skill in cat.items" :key="skill.name">
            <div class="skill-label">
              <span>{{ skill.name }}</span>
              <span class="skill-pct">{{ skill.level }}%</span>
            </div>
            <div class="bar-bg">
              <div class="bar-fill" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tools-section">
      <div class="tools-label">Tools & Platforms</div>
      <div class="pills">
        <span class="pill" v-for="tool in tools" :key="tool">{{ tool }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    icon: 'svg-frontend',
    name: 'Frontend',
    items: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 82 },
      { name: 'Vue.js', level: 78 },
      { name: 'Responsive Design', level: 80 },
    ]
  },
  {
    icon: 'svg-backend',
    name: 'Backend & Databases',
    items: [
      { name: 'NestJS', level: 55 },
      { name: 'Supabase', level: 68 },
      { name: 'REST APIs', level: 72 },
      { name: 'MySQL', level: 60 },
    ]
  },
  {
    icon: 'svg-tools',
    name: 'Dev Tools',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel / Render', level: 72 },
      { name: 'Flutter', level: 50 },
    ]
  },
]

const tools = ['GitHub', 'Vercel', 'Render', 'Supabase', 'VS Code', 'Figma', 'REST API', 'Flutter', 'Vue Router', 'Vite', 'npm', 'NestJS']
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.skill-category { display: flex; flex-direction: column; gap: 1.25rem; }

.cat-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cat-icon-wrap {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(192,57,43,0.1);
  border: 1px solid var(--border-red);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-bright);
  flex-shrink: 0;
}

.cat-header h3 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.skill-item { margin-bottom: 0.9rem; }
.skill-item:last-child { margin-bottom: 0; }

.skill-label {
  display: flex;
  justify-content: space-between;
  color: var(--text-muted);
  font-size: 0.82rem;
  margin-bottom: 0.45rem;
  font-weight: 300;
}

.skill-pct { color: var(--red-bright); font-weight: 600; }

.bar-bg {
  background: rgba(255,255,255,0.05);
  border-radius: 4px;
  height: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--red-dim), var(--red-bright));
  border-radius: 4px;
  transition: width 1s ease;
  box-shadow: 0 0 8px rgba(231,76,60,0.4);
}

.tools-section {
  border-top: 1px solid var(--glass-border);
  padding-top: 2rem;
}

.tools-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.pill {
  background: var(--glass);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.8rem;
  transition: all 0.2s;
}

.pill:hover {
  border-color: var(--border-red);
  color: var(--text);
  background: rgba(192,57,43,0.08);
}
</style>
