<template>
  <div>
    <!-- ===================== HERO ===================== -->
    <section class="hero" ref="heroRef">

      <!-- Layered animated canvas background -->
      <canvas class="particle-canvas" ref="canvasRef"></canvas>

      <!-- Animated mesh gradient orbs -->
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>

      <!-- Scanline overlay -->
      <div class="scanlines"></div>

      <!-- Animated grid -->
      <div class="hero-grid"></div>

      <!-- Corner decorations -->
      <div class="corner corner-tl">
        <span></span><span></span>
      </div>
      <div class="corner corner-br">
        <span></span><span></span>
      </div>

      <!-- Floating tech tags -->
      <div class="tech-float tech-float-1" :style="floatStyle1">Vue.js</div>
      <div class="tech-float tech-float-2" :style="floatStyle2">NestJS</div>
      <div class="tech-float tech-float-3" :style="floatStyle3">Supabase</div>
      <div class="tech-float tech-float-4" :style="floatStyle4">TypeScript</div>

      <!-- Hero content -->
      <div class="hero-content" :style="contentParallax">

        <div class="hero-badge" :class="{ visible: badgeVisible }">
          <span class="badge-dot"></span>
          BSIT Student — Asia Pacific College
        </div>

        <h1 class="hero-title" :class="{ visible: titleVisible }">
          <span class="line-1">Mark Harvey</span>
          <span class="line-2">
            <span class="name-red glitch" data-text="Dacara">Dacara</span>
          </span>
        </h1>

        <div class="hero-tagline-wrap" :class="{ visible: taglineVisible }">
          <div class="tagline-line"></div>
          <p class="hero-tagline">Aspiring Full-Stack Developer</p>
          <div class="tagline-line"></div>
        </div>

        <p class="hero-desc" :class="{ visible: descVisible }">
          Learning to build real, functional web experiences — from frontend
          interfaces to backend APIs. Currently studying at Asia Pacific College
          and pushing boundaries through hands-on projects.
        </p>

        <div class="hero-buttons" :class="{ visible: btnsVisible }">
          <RouterLink to="/projects" class="btn-primary">
            <span class="btn-glow"></span>
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </RouterLink>
          <RouterLink to="/about" class="btn-outline">
            <span>About Me</span>
          </RouterLink>
        </div>

        <div class="hero-stats" :class="{ visible: statsVisible }">
          <div class="stat">
            <span class="stat-num">3<span class="stat-plus">+</span></span>
            <span class="stat-label">Projects Shipped</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">2<span class="stat-plus">nd</span></span>
            <span class="stat-label">Year BSIT</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">PH</span>
            <span class="stat-label">Metro Manila</span>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-hint" :class="{ visible: statsVisible }">
        <span>Scroll</span>
        <div class="scroll-arrow"></div>
      </div>

    </section>

    <!-- ===================== QUICK CARDS ===================== -->
    <section class="quick-section">
      <div class="section-label">
        <span class="label-line"></span>
        Navigate
        <span class="label-line"></span>
      </div>
      <div class="quick-grid">
        <RouterLink
          v-for="(card, i) in cards"
          :key="card.to"
          :to="card.to"
          class="quick-card"
          :class="{ 'quick-card--highlight': card.highlight }"
          :style="{ '--card-delay': i * 60 + 'ms' }"
        >
          <div class="qc-icon-wrap">
            <div v-html="card.icon" class="qc-icon"></div>
            <div class="qc-icon-glow"></div>
          </div>
          <div class="qc-text">
            <h3>{{ card.label }}</h3>
            <p>{{ card.desc }}</p>
          </div>
          <span class="qc-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
          <div class="card-shine"></div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

// Refs
const heroRef = ref(null)
const canvasRef = ref(null)

// Reveal states
const badgeVisible = ref(false)
const titleVisible = ref(false)
const taglineVisible = ref(false)
const descVisible = ref(false)
const btnsVisible = ref(false)
const statsVisible = ref(false)

// Mouse parallax
const mouse = ref({ x: 0.5, y: 0.5 })

const contentParallax = computed(() => ({
  transform: `translate(${(mouse.value.x - 0.5) * -12}px, ${(mouse.value.y - 0.5) * -8}px)`,
  transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
}))

const floatStyle1 = computed(() => ({
  transform: `translate(${(mouse.value.x - 0.5) * 30}px, ${(mouse.value.y - 0.5) * 20}px)`,
}))
const floatStyle2 = computed(() => ({
  transform: `translate(${(mouse.value.x - 0.5) * -25}px, ${(mouse.value.y - 0.5) * 35}px)`,
}))
const floatStyle3 = computed(() => ({
  transform: `translate(${(mouse.value.x - 0.5) * 40}px, ${(mouse.value.y - 0.5) * -20}px)`,
}))
const floatStyle4 = computed(() => ({
  transform: `translate(${(mouse.value.x - 0.5) * -35}px, ${(mouse.value.y - 0.5) * -30}px)`,
}))

// Cards data
const cards = [
  {
    to: '/about', label: 'About Me', desc: 'Background, skills, and contact info.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`
  },
  {
    to: '/skills', label: 'Skills', desc: 'Technologies and tools I work with.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  {
    to: '/projects', label: 'Projects', desc: 'Things I have built and shipped.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
  },
  {
    to: '/certificates', label: 'Certificates', desc: 'Certifications and achievements.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`
  },
  {
    to: '/hobbies', label: 'Hobbies', desc: 'Life outside of code.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    to: '/guestbook', label: 'Guestbook', desc: 'Leave a message.', highlight: true,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`
  },
]

// Particle canvas
let animId = null
let particles = []

function initCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  const resize = () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  // Create particles
  const count = Math.floor((canvas.width * canvas.height) / 14000)
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    alpha: Math.random() * 0.5 + 0.1,
    pulse: Math.random() * Math.PI * 2,
  }))

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.pulse += 0.012

      // Wrap
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0

      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse))
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(231, 76, 60, ${a})`
      ctx.fill()
    })

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(192, 57, 43, ${0.12 * (1 - dist / 120)})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    animId = requestAnimationFrame(draw)
  }
  draw()
}

// Mouse move handler
function onMouseMove(e) {
  const rect = heroRef.value?.getBoundingClientRect()
  if (!rect) return
  mouse.value = {
    x: (e.clientX - rect.left) / rect.width,
    y: (e.clientY - rect.top) / rect.height,
  }
}

onMounted(() => {
  initCanvas()

  // Staggered entrance reveals
  setTimeout(() => { badgeVisible.value = true }, 200)
  setTimeout(() => { titleVisible.value = true }, 450)
  setTimeout(() => { taglineVisible.value = true }, 750)
  setTimeout(() => { descVisible.value = true }, 950)
  setTimeout(() => { btnsVisible.value = true }, 1100)
  setTimeout(() => { statsVisible.value = true }, 1300)

  heroRef.value?.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
  heroRef.value?.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
/* ===================== HERO ===================== */
.hero {
  position: relative;
  min-height: calc(100vh - 62px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  overflow: hidden;
}

/* Canvas */
.particle-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 600px;
  height: 600px;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(192, 57, 43, 0.18) 0%, transparent 70%);
  animation: orb-drift-1 12s ease-in-out infinite alternate;
}

.orb-2 {
  width: 400px;
  height: 400px;
  bottom: 5%;
  right: -100px;
  background: radial-gradient(circle, rgba(127, 29, 29, 0.15) 0%, transparent 70%);
  animation: orb-drift-2 15s ease-in-out infinite alternate;
}

.orb-3 {
  width: 300px;
  height: 300px;
  bottom: 20%;
  left: -60px;
  background: radial-gradient(circle, rgba(192, 57, 43, 0.1) 0%, transparent 70%);
  animation: orb-drift-3 10s ease-in-out infinite alternate;
}

@keyframes orb-drift-1 {
  from { transform: translateX(-60%) translateY(0) scale(1); }
  to   { transform: translateX(-40%) translateY(40px) scale(1.15); }
}
@keyframes orb-drift-2 {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(-30px, -50px) scale(1.2); }
}
@keyframes orb-drift-3 {
  from { transform: translate(0, 0); }
  to   { transform: translate(40px, -30px) scale(1.1); }
}

/* Scanlines */
.scanlines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.03) 2px,
    rgba(0, 0, 0, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1;
}

/* Grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 0;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 80%);
  animation: grid-pan 20s linear infinite;
}

@keyframes grid-pan {
  0%   { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}

/* Corner decorations */
.corner {
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 2;
  pointer-events: none;
}

.corner span {
  position: absolute;
  background: var(--red-bright);
  opacity: 0.5;
}

.corner-tl { top: 1.5rem; left: 1.5rem; }
.corner-tl span:nth-child(1) { top: 0; left: 0; width: 100%; height: 1px; }
.corner-tl span:nth-child(2) { top: 0; left: 0; width: 1px; height: 100%; }

.corner-br { bottom: 1.5rem; right: 1.5rem; }
.corner-br span:nth-child(1) { bottom: 0; right: 0; width: 100%; height: 1px; }
.corner-br span:nth-child(2) { bottom: 0; right: 0; width: 1px; height: 100%; }

/* Floating tech tags */
.tech-float {
  position: absolute;
  font-size: 0.7rem;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(231, 76, 60, 0.45);
  border: 1px solid rgba(192, 57, 43, 0.2);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  background: rgba(10, 8, 8, 0.4);
  pointer-events: none;
  z-index: 2;
  transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.tech-float-1 { top: 18%; left: 8%; animation: float-a 7s ease-in-out infinite; }
.tech-float-2 { top: 28%; right: 7%; animation: float-b 9s ease-in-out infinite; }
.tech-float-3 { bottom: 30%; left: 6%; animation: float-c 8s ease-in-out infinite; }
.tech-float-4 { bottom: 22%; right: 8%; animation: float-d 10s ease-in-out infinite; }

@keyframes float-a { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
@keyframes float-b { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(10px); } }
@keyframes float-c { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
@keyframes float-d { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(12px); } }

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 3;
  max-width: 720px;
  will-change: transform;
}

/* Badge */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(192, 57, 43, 0.1);
  border: 1px solid rgba(192, 57, 43, 0.3);
  color: rgba(231, 76, 60, 0.9);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-badge.visible {
  opacity: 1;
  transform: translateY(0);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--red-bright);
  box-shadow: 0 0 8px var(--red-bright);
  animation: pulse-dot 2s ease-in-out infinite;
  flex-shrink: 0;
}

@keyframes pulse-dot {
  0%, 100% { box-shadow: 0 0 4px var(--red-bright); opacity: 1; }
  50% { box-shadow: 0 0 12px var(--red-bright), 0 0 24px rgba(231,76,60,0.4); opacity: 0.8; }
}

/* Title */
.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(3.2rem, 9vw, 6.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.04em;
  color: var(--text);
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.hero-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.line-1 {
  display: block;
}

.line-2 {
  display: block;
}

/* Glitch effect */
.name-red {
  color: var(--red-bright);
  text-shadow:
    0 0 40px rgba(231, 76, 60, 0.5),
    0 0 80px rgba(192, 57, 43, 0.3);
  position: relative;
  display: inline-block;
}

.name-red.glitch::before,
.name-red.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  animation: glitch-anim 6s infinite;
}

.name-red.glitch::before {
  color: rgba(231, 76, 60, 0.7);
  clip-path: polygon(0 20%, 100% 20%, 100% 40%, 0 40%);
  animation: glitch-anim 5s infinite;
}

.name-red.glitch::after {
  color: rgba(255, 120, 100, 0.5);
  clip-path: polygon(0 60%, 100% 60%, 100% 80%, 0 80%);
  animation: glitch-anim2 7s infinite;
}

@keyframes glitch-anim {
  0%, 90%, 100% { transform: translate(0); opacity: 0; }
  91% { transform: translate(-3px, 1px); opacity: 1; }
  93% { transform: translate(3px, -1px); opacity: 1; }
  95% { transform: translate(-2px, 0); opacity: 0.8; }
  97% { transform: translate(0); opacity: 0; }
}

@keyframes glitch-anim2 {
  0%, 85%, 100% { transform: translate(0); opacity: 0; }
  86% { transform: translate(4px, 0); opacity: 1; }
  88% { transform: translate(-3px, 1px); opacity: 1; }
  90% { transform: translate(0); opacity: 0; }
}

/* Tagline */
.hero-tagline-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
}

.hero-tagline-wrap.visible {
  opacity: 1;
  transform: translateY(0);
}

.tagline-line {
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(192, 57, 43, 0.5), transparent);
}

.hero-tagline {
  font-family: 'Syne', sans-serif;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* Desc */
.hero-desc {
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-desc.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Buttons */
.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-buttons.visible {
  opacity: 1;
  transform: translateY(0);
}

.btn-primary {
  position: relative;
  background: var(--red);
  color: white;
  text-decoration: none;
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.03em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(231, 76, 60, 0.5);
  box-shadow: 0 0 24px rgba(192, 57, 43, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.25s ease;
  overflow: hidden;
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%);
  pointer-events: none;
  transition: opacity 0.3s;
}

.btn-primary:hover {
  background: var(--red-bright);
  box-shadow: 0 0 40px rgba(231, 76, 60, 0.5), 0 0 80px rgba(192, 57, 43, 0.2);
  transform: translateY(-2px);
}

.btn-primary svg {
  transition: transform 0.2s;
}
.btn-primary:hover svg {
  transform: translateX(3px);
}

.btn-outline {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(12px);
  color: var(--text-muted);
  border: 1px solid rgba(255,255,255,0.1);
  text-decoration: none;
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.25s ease;
}

.btn-outline:hover {
  color: var(--text);
  border-color: rgba(192, 57, 43, 0.5);
  background: rgba(192, 57, 43, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(192, 57, 43, 0.15);
}

/* Stats */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-stats.visible {
  opacity: 1;
  transform: translateY(0);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.04em;
  line-height: 1;
}

.stat-plus {
  font-size: 1.1rem;
  color: var(--red-bright);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-dim);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent);
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  opacity: 0;
  transition: opacity 0.8s ease 0.3s;
  z-index: 3;
}

.scroll-hint.visible {
  opacity: 1;
}

.scroll-hint span {
  font-size: 0.65rem;
  color: var(--text-dim);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.scroll-arrow {
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, rgba(192,57,43,0.6), transparent);
  animation: scroll-line 1.8s ease-in-out infinite;
}

@keyframes scroll-line {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
}

/* ===================== QUICK CARDS ===================== */
.quick-section {
  padding: 0 1.5rem 5rem;
  max-width: 1050px;
  margin: 0 auto;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.68rem;
  color: var(--text-dim);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
}

.label-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07));
}

.label-line:first-child {
  background: linear-gradient(90deg, rgba(255,255,255,0.07), transparent);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1px;
  background: rgba(255,255,255,0.05);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.quick-card {
  position: relative;
  background: var(--bg-card);
  backdrop-filter: blur(12px);
  padding: 1.5rem 1.6rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  transition: background 0.25s ease, transform 0.2s ease;
  overflow: hidden;
  animation: card-in 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation-delay: var(--card-delay);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.quick-card:hover {
  background: rgba(255,255,255,0.075);
  z-index: 1;
}

.quick-card--highlight {
  background: rgba(192,57,43,0.07);
}

.quick-card--highlight:hover {
  background: rgba(192,57,43,0.13);
}

/* Shine on hover */
.card-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}

.quick-card:hover .card-shine {
  opacity: 1;
}

.qc-icon-wrap {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.qc-icon-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at center, rgba(231,76,60,0.2), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s;
}

.quick-card:hover .qc-icon-wrap {
  border-color: rgba(192, 57, 43, 0.4);
  color: var(--red-bright);
  background: rgba(192,57,43,0.08);
  box-shadow: 0 0 16px rgba(192,57,43,0.2);
}

.quick-card:hover .qc-icon-glow {
  opacity: 1;
}

.quick-card--highlight .qc-icon-wrap {
  color: var(--red-bright);
  border-color: rgba(192, 57, 43, 0.35);
}

.qc-text {
  flex: 1;
  min-width: 0;
}

.qc-text h3 {
  color: var(--text);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
}

.qc-text p {
  color: var(--text-muted);
  font-size: 0.82rem;
  line-height: 1.45;
  font-weight: 300;
}

.qc-arrow {
  color: var(--text-dim);
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.quick-card:hover .qc-arrow {
  color: var(--red-bright);
  transform: translateX(4px);
}

/* ===================== MOBILE ===================== */
@media (max-width: 640px) {
  .tech-float { display: none; }
  .corner { display: none; }
  .quick-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 1.5rem; }
  .stat-divider { display: none; }
  .hero-title { font-size: clamp(2.8rem, 14vw, 4rem); }
  .scroll-hint { display: none; }
}

@media (max-width: 380px) {
  .hero-buttons { flex-direction: column; align-items: center; }
  .btn-primary, .btn-outline { width: 100%; justify-content: center; }
}
</style>
