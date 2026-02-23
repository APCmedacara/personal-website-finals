<template>
  <div class="page-wrap">
    <h1 class="page-title">Hobbies</h1>
    <p class="page-subtitle">Things I enjoy doing outside of coding</p>

    <div class="hobbies-grid">
      <div class="card hobby-card" v-for="hobby in hobbies" :key="hobby.name">
        <div class="hobby-emoji">{{ hobby.emoji }}</div>
        <h3>{{ hobby.name }}</h3>
        <p>{{ hobby.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const hobbies = [
  {
    emoji: '🎮',
    name: 'Gaming',
    description: 'I love playing RPGs and strategy games. Gaming sharpens my problem-solving skills and keeps me creative.',
  },
  {
    emoji: '📷',
    name: 'Photography',
    description: 'Capturing everyday moments and landscapes. I enjoy street photography and editing shots on my phone.',
  },
  {
    emoji: '✈️',
    name: 'Traveling',
    description: 'Exploring new places, trying local food, and meeting different people. It broadens perspective and fuels creativity.',
  },
  {
    emoji: '🎵',
    name: 'Music',
    description: 'I listen to a wide variety of music. Music keeps me focused during long coding sessions.',
  },
  {
    emoji: '📚',
    name: 'Reading',
    description: 'I enjoy reading tech blogs, self-improvement books, and the occasional sci-fi novel.',
  },
  {
    emoji: '🍕',
    name: 'Trying New Food',
    description: 'I love exploring different cuisines — especially Filipino street food and anything spicy.',
  },
]
</script>

<style scoped>
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
}

.hobby-card { text-align: center; padding: 2rem 1.5rem; }

.hobby-emoji { font-size: 2.8rem; margin-bottom: 0.75rem; }

.hobby-card h3 { color: var(--text); font-size: 1.1rem; margin-bottom: 0.5rem; }

.hobby-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
</style>
