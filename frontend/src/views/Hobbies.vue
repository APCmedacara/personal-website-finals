<template>
  <div class="page-wrap">
    <h1 class="page-title">Hobbies</h1>
    <p class="page-subtitle">Life outside of code</p>

    <div class="hobbies-grid">
      <div class="card hobby-card" v-for="hobby in hobbies" :key="hobby.name">
        <div class="hobby-icon">
          <svg v-html="hobby.svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"></svg>
        </div>
        <h3>{{ hobby.name }}</h3>
        <p>{{ hobby.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const hobbies = [
  {
    name: 'Biking',
    description: 'Riding around Metro Manila on my mountain bike — from BGC to Makati and beyond. Night rides are my favorite.',
    svg: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/><path d="m6 17.5 3.5-7 1.5 3"/>'
  },
  {
    name: 'Hiking',
    description: 'Exploring trails around the Philippines — the physical challenge and the views at the summit make it all worth it.',
    svg: '<path d="M3 17h4l2-4 4 7 2-5h6"/><path d="M13 5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>'
  },
  {
    name: 'Traveling',
    description: 'Discovering new places, trying local food, and immersing in different environments. Every trip changes my perspective.',
    svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
  },
  {
    name: 'Photography',
    description: 'Shooting street scenes and urban landscapes, mostly at night. The interplay of light and shadow in a city is endlessly interesting.',
    svg: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>'
  },
  {
    name: 'Coding Side Projects',
    description: 'Building things outside of class — from small experiments to real deployed apps. It is how I learn the most.',
    svg: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'
  },
  {
    name: 'Eating',
    description: 'Trying different food — Filipino street food, Japanese, anything spicy. Good food is one of life\'s great pleasures.',
    svg: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>'
  },
]
</script>

<style scoped>
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.25rem;
}

.hobby-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: all 0.25s;
}

.hobby-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(192,57,43,0.08);
  border: 1px solid rgba(192,57,43,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red-bright);
  transition: all 0.25s;
}

.hobby-card:hover .hobby-icon {
  background: rgba(192,57,43,0.15);
  box-shadow: 0 0 16px rgba(231,76,60,0.2);
}

.hobby-card h3 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
}

.hobby-card p {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.7;
  font-weight: 300;
}
</style>
