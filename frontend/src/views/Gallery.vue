<template>
  <div class="page-wrap">
    <h1 class="page-title">Gallery</h1>
    <p class="page-subtitle">Photos and memories</p>

    <div class="gallery-grid">
      <div
        class="gallery-item"
        v-for="(img, i) in images"
        :key="i"
        @click="openModal(img)"
      >
        <img :src="img.src" :alt="img.alt" />
        <div class="gallery-overlay">
          <span>{{ img.alt }}</span>
        </div>
      </div>
    </div>

    <!-- Empty state -->
    <div class="empty-gallery" v-if="images.length === 0">
      <p>📷 Add your photos to the images array in Gallery.vue!</p>
    </div>

    <!-- MODAL -->
    <div class="modal-backdrop" v-if="selected" @click="selected = null">
      <div class="modal-box" @click.stop>
        <button class="modal-close" @click="selected = null">✕</button>
        <img :src="selected.src" :alt="selected.alt" />
        <p>{{ selected.alt }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Replace with your actual photos. For local photos put them in /public/gallery/ folder.
// Example: src: '/gallery/photo1.jpg'
// For now using placeholder images from picsum.photos
const images = ref([
  { src: 'https://picsum.photos/seed/harvey1/600/400', alt: 'A great moment' },
  { src: 'https://picsum.photos/seed/harvey2/600/400', alt: 'Outdoor adventure' },
  { src: 'https://picsum.photos/seed/harvey3/600/400', alt: 'City exploration' },
  { src: 'https://picsum.photos/seed/harvey4/600/400', alt: 'Tech setup' },
  { src: 'https://picsum.photos/seed/harvey5/600/400', alt: 'Campus life' },
  { src: 'https://picsum.photos/seed/harvey6/600/400', alt: 'Fun with friends' },
])

const selected = ref(null)
const openModal = (img) => { selected.value = img }
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/2;
  background: var(--bg-card);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
  display: block;
}

.gallery-item:hover img { transform: scale(1.07); }

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay { opacity: 1; }

.gallery-overlay span { color: white; font-size: 0.9rem; }

.empty-gallery {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-muted);
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px dashed var(--border);
}

/* MODAL */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-box {
  position: relative;
  max-width: 750px;
  width: 100%;
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
}

.modal-box img { width: 100%; display: block; max-height: 70vh; object-fit: contain; }

.modal-box p { text-align: center; padding: 0.9rem; color: var(--text-muted); font-size: 0.9rem; }

.modal-close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(0,0,0,0.6);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: background 0.2s;
}

.modal-close:hover { background: rgba(255,255,255,0.2); }
</style>
