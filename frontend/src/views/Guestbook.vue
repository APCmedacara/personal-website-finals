<template>
  <div class="page-wrap">
    <h1 class="page-title">Guestbook 📖</h1>
    <p class="page-subtitle">Leave a message — I'd love to hear from you!</p>

    <!-- SUBMIT FORM -->
    <div class="card form-card">
      <h2>✍️ Leave a Message</h2>

      <div class="form-group">
        <label for="name">Your Name *</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="e.g. Juan Dela Cruz"
          maxlength="60"
          :disabled="submitting"
        />
      </div>

      <div class="form-group">
        <label for="comment">Your Message *</label>
        <textarea
          id="comment"
          v-model="form.comment"
          placeholder="Write something nice! 😊"
          rows="4"
          maxlength="300"
          :disabled="submitting"
        ></textarea>
        <div class="char-count">{{ form.comment.length }}/300</div>
      </div>

      <button class="submit-btn" @click="submitComment" :disabled="submitting">
        <span v-if="!submitting">✉️ Send Message</span>
        <span v-else>⏳ Sending...</span>
      </button>

      <p class="msg success" v-if="successMsg">{{ successMsg }}</p>
      <p class="msg error" v-if="errorMsg">{{ errorMsg }}</p>
    </div>

    <!-- COMMENTS LIST -->
    <div class="comments-section">
      <h2>💬 Messages ({{ comments.length }})</h2>

      <div class="loading-state" v-if="loading">
        <div class="spinner"></div>
        <p>Loading messages...</p>
      </div>

      <div class="empty-state" v-if="!loading && comments.length === 0">
        <p>No messages yet. Be the first to leave one! 👆</p>
      </div>

      <TransitionGroup name="fade" tag="div">
        <div class="card comment-card" v-for="c in comments" :key="c.id">
          <div class="comment-header">
            <div class="avatar">{{ c.name.charAt(0).toUpperCase() }}</div>
            <div class="comment-meta">
              <strong>{{ c.name }}</strong>
              <span class="comment-date">{{ formatDate(c.created_at) }}</span>
            </div>
          </div>
          <p class="comment-text">{{ c.comment }}</p>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
const BACKEND_URL = 'https://personal-website-finals-bsq7.onrender.com'

export default {
  name: 'Guestbook',
  data() {
    return {
      form: { name: '', comment: '' },
      comments: [],
      loading: true,
      submitting: false,
      successMsg: '',
      errorMsg: '',
    }
  },
  methods: {
    async fetchComments() {
      this.loading = true
      try {
        const res = await fetch(`${BACKEND_URL}/guestbook`)
        this.comments = await res.json()
      } catch (e) {
        this.errorMsg = 'Could not load messages.'
      }
      this.loading = false
    },

    async submitComment() {
      this.successMsg = ''
      this.errorMsg = ''

      if (!this.form.name.trim() || !this.form.comment.trim()) {
        this.errorMsg = '⚠️ Please fill in both your name and message.'
        return
      }

      this.submitting = true

      try {
        const res = await fetch(`${BACKEND_URL}/guestbook`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: this.form.name.trim(),
            comment: this.form.comment.trim(),
          }),
        })
        if (!res.ok) throw new Error('Failed')
        this.successMsg = '🎉 Message sent! Thank you for signing my guestbook!'
        this.form.name = ''
        this.form.comment = ''
        await this.fetchComments()
        setTimeout(() => { this.successMsg = '' }, 5000)
      } catch (e) {
        this.errorMsg = '❌ Failed to send message. Please try again.'
      }

      this.submitting = false
    },

    formatDate(dateStr) {
      if (!dateStr) return ''
      return new Date(dateStr).toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
  mounted() {
    this.fetchComments()
  },
}
</script>

<style scoped>
.page-wrap { max-width: 700px; }

.form-card { margin-bottom: 2.5rem; }
.form-card h2 { color: var(--text); font-size: 1.2rem; margin-bottom: 1.25rem; }

.form-group { margin-bottom: 1.1rem; position: relative; }

.form-group label {
  display: block;
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: 0.4rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--purple);
}

.form-group input:disabled,
.form-group textarea:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.char-count {
  position: absolute;
  bottom: -1.3rem;
  right: 0;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.submit-btn {
  background: var(--purple);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 0.5rem;
}

.submit-btn:hover:not(:disabled) { background: var(--purple-dark); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.msg { margin-top: 0.85rem; font-size: 0.9rem; }
.success { color: #4ade80; }
.error { color: #f87171; }

.comments-section h2 { color: var(--text); font-size: 1.1rem; margin-bottom: 1rem; }

.loading-state, .empty-state {
  text-align: center;
  padding: 2.5rem;
  color: var(--text-muted);
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  margin-bottom: 1rem;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--border);
  border-top-color: var(--purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 0.75rem;
}

@keyframes spin { to { transform: rotate(360deg); } }

.comment-card { margin-bottom: 1rem; }

.comment-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--purple), var(--purple-light));
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  flex-shrink: 0;
}

.comment-meta strong { display: block; color: var(--text); font-size: 0.95rem; }
.comment-date { color: var(--text-muted); font-size: 0.78rem; }
.comment-text { color: #cbd5e1; line-height: 1.7; }

.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(-8px); }
.fade-leave-to { opacity: 0; }
</style>