<template>
  <div class="page-wrap">
    <h1 class="page-title">Gallery</h1>
    <p class="page-subtitle">Photography and moments captured around Metro Manila</p>

    <div class="gallery-grid">
      <div
        class="gallery-item"
        v-for="(img, i) in images"
        :key="i"
        @click="openModal(img, i)"
        :class="img.span ? 'gallery-item--wide' : ''"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" />
        <div class="gallery-overlay">
          <span class="overlay-label">{{ img.alt }}</span>
          <span class="overlay-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
              <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <Transition name="modal">
      <div class="modal-backdrop" v-if="selected" @click="selected = null">
        <div class="modal-box" @click.stop>
          <button class="modal-close" @click="selected = null">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <div class="modal-nav modal-nav--prev" @click="navigate(-1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
          </div>
          <div class="modal-nav modal-nav--next" @click="navigate(1)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
          <img :src="selected.src" :alt="selected.alt" />
          <p class="modal-caption">{{ selected.alt }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  { src: '/gallery/bike-night.jpg', alt: 'Night ride — BGC', span: true },
  { src: '/gallery/skyscraper-up.jpg', alt: 'Looking up' },
  { src: '/gallery/bikes-leaning.jpg', alt: 'Parked bikes' },
  { src: '/gallery/city-buildings.jpg', alt: 'City at night' },
  { src: '/gallery/monster-bike.jpg', alt: 'Monster — detail shot' },
  { src: '/gallery/road-night.jpg', alt: 'Empty road, late night' },
  { src: '/gallery/sign-wall.jpg', alt: 'Regrets? Bad Vibes?' },
  { src: '/gallery/bgc-street.jpg', alt: 'BGC after dark' },
  { src: '/gallery/handlebar-green.jpg', alt: 'Scott handlebar detail' },
  { src: '/gallery/bikes-parked.jpg', alt: 'Group ride stop' },
])

const selectedIndex = ref(0)
const selected = ref(null)

const openModal = (img, i) => {
  selectedIndex.value = i
  selected.value = img
}

const navigate = (dir) => {
  selectedIndex.value = (selectedIndex.value + dir + images.value.length) % images.value.length
  selected.value = images.value[selectedIndex.value]
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.gallery-item {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  background: var(--bg-card);
}

.gallery-item--wide {
  grid-column: span 2;
  aspect-ratio: 16/9;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  display: block;
}

.gallery-item:hover img { transform: scale(1.04); }

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 70%);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.85rem 0.9rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay { opacity: 1; }

.overlay-label { color: rgba(255,255,255,0.9); font-size: 0.8rem; font-weight: 400; }
.overlay-icon { color: rgba(255,255,255,0.6); }

/* MODAL */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
}

.modal-box {
  position: relative;
  max-width: 840px;
  width: 100%;
  background: var(--bg2);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--glass-border);
  box-shadow: 0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(192,57,43,0.1);
}

.modal-box img {
  width: 100%;
  display: block;
  max-height: 72vh;
  object-fit: contain;
}

.modal-caption {
  text-align: center;
  padding: 0.85rem;
  color: var(--text-muted);
  font-size: 0.82rem;
  border-top: 1px solid var(--glass-border);
  font-weight: 300;
}

.modal-close {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  background: rgba(0,0,0,0.7);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.2s;
}

.modal-close:hover { background: var(--red); color: white; border-color: var(--red); }

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.6);
  border: 1px solid var(--glass-border);
  color: var(--text-muted);
  width: 38px;
  height: 38px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.2s;
}

.modal-nav:hover { background: var(--red); color: white; border-color: var(--red); }
.modal-nav--prev { left: 0.85rem; }
.modal-nav--next { right: 0.85rem; }

/* Modal transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-item--wide { grid-column: span 2; }
}
</style>
