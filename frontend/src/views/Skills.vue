<template>
  <div class="page-wrap">
    <h1 class="page-title">Skills</h1>
    <p class="page-subtitle">Technologies and tools I work with</p>

    <div class="skills-grid">
      <div class="card skill-category" v-for="cat in skills" :key="cat.name">
        <h3><span class="cat-icon">{{ cat.icon }}</span> {{ cat.name }}</h3>
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

    <!-- Tech Pills Section -->
    <div class="tools-section">
      <h2>Tools & Platforms</h2>
      <div class="pills">
        <span class="pill" v-for="tool in tools" :key="tool">{{ tool }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    icon: '🌐',
    name: 'Frontend',
    items: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Responsive Design', level: 78 },
    ]
  },
  {
    icon: '⚙️',
    name: 'Backend & Databases',
    items: [
      { name: 'Supabase', level: 65 },
      { name: 'REST APIs', level: 70 },
      { name: 'MySQL', level: 60 },
      { name: 'Node.js', level: 55 },
    ]
  },
  {
    icon: '🛠️',
    name: 'Dev Tools',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Vercel (Deployment)', level: 70 },
      { name: 'Chrome DevTools', level: 75 },
    ]
  },
]

const tools = ['GitHub', 'Vercel', 'Supabase', 'VS Code', 'Figma', 'Postman', 'npm', 'Vite', 'Vue Router', 'Git']
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.skill-category h3 {
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.cat-icon { font-size: 1.2rem; }

.skill-item { margin-bottom: 1rem; }

.skill-label {
  display: flex;
  justify-content: space-between;
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 0.4rem;
}

.skill-pct { color: var(--purple-light); font-weight: 600; }

.bar-bg {
  background: rgba(255,255,255,0.07);
  border-radius: 6px;
  height: 8px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--purple), var(--purple-light));
  border-radius: 6px;
  transition: width 1s ease;
}

.tools-section h2 {
  color: var(--purple-light);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.pills { display: flex; flex-wrap: wrap; gap: 0.6rem; }

.pill {
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: #c4b5fd;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.875rem;
}
</style>
