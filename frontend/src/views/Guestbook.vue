<template>
  <div class="page-wrap">
    <h1 class="page-title">Guestbook</h1>
    <p class="page-subtitle">Leave a message — I would love to hear from you</p>

    <!-- SUBMIT FORM -->
    <div class="card form-card">
      <div class="form-card-header">
        <h2>Leave a Message</h2>
        <span class="form-counter">{{ comments.length }} messages</span>
      </div>

      <div class="form-fields">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Your name"
            maxlength="60"
            :disabled="submitting"
          />
        </div>

        <div class="form-group form-group--full">
          <label for="comment">
            Message
            <span class="char-count">{{ form.comment.length }}/300</span>
          </label>
          <textarea
            id="comment"
            v-model="form.comment"
            placeholder="Write something..."
            rows="4"
            maxlength="300"
            :disabled="submitting"
          ></textarea>
        </div>
      </div>

      <div class="form-footer">
        <div class="form-messages">
          <p class="msg success" v-if="successMsg">{{ successMsg }}</p>
          <p class="msg error" v-if="errorMsg">{{ errorMsg }}</p>
        </div>
        <button class="submit-btn" @click="submitComment" :disabled="submitting">
          <span v-if="!submitting">Send Message</span>
          <span v-else class="btn-loading">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
            Sending
          </span>
        </button>
      </div>
    </div>

    <!-- COMMENTS LIST -->
    <div class="comments-section">
      <div class="comments-header">
        <h2>Messages</h2>
        <div class="divider"></div>
      </div>

      <div class="loading-state" v-if="loading">
        <div class="spinner"></div>
        <p>Loading messages...</p>
      </div>

      <div class="empty-state" v-if="!loading && comments.length === 0">
        <p>No messages yet. Be the first to sign the guestbook.</p>
      </div>

      <TransitionGroup name="fade" tag="div" class="comments-list">
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
        this.errorMsg = 'Please fill in both your name and message.'
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
        this.successMsg = 'Message sent. Thank you for signing my guestbook.'
        this.form.name = ''
        this.form.comment = ''
        await this.fetchComments()
        setTimeout(() => { this.successMsg = '' }, 5000)
      } catch (e) {
        this.errorMsg = 'Failed to send message. Please try again.'
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

/* FORM */
.form-card { margin-bottom: 3rem; }

.form-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.form-card-header h2 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
}

.form-counter {
  font-size: 0.75rem;
  color: var(--text-dim);
  letter-spacing: 0.04em;
}

.form-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.form-group--full { grid-column: 1 / -1; }

.form-group { display: flex; flex-direction: column; gap: 0.4rem; }

.form-group label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.03em;
}

.char-count { color: var(--text-dim); font-size: 0.72rem; }

.form-group input,
.form-group textarea {
  width: 100%;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--glass-border);
  color: var(--text);
  padding: 0.7rem 0.9rem;
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 3px rgba(192,57,43,0.12);
}

.form-group input:disabled,
.form-group textarea:disabled { opacity: 0.5; cursor: not-allowed; }

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.form-messages { flex: 1; min-height: 1.4rem; }

.msg { font-size: 0.82rem; }
.success { color: #4ade80; }
.error { color: #f87171; }

.submit-btn {
  background: var(--red);
  color: white;
  border: 1px solid rgba(231,76,60,0.5);
  padding: 0.65rem 1.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 0 16px rgba(192,57,43,0.2);
  white-space: nowrap;
  flex-shrink: 0;
}

.submit-btn:hover:not(:disabled) {
  background: var(--red-bright);
  box-shadow: 0 0 24px rgba(231,76,60,0.35);
}

.submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }

.btn-loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.spin { animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* COMMENTS */
.comments-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.comments-header h2 {
  font-family: 'Syne', sans-serif;
  color: var(--text);
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap;
}

.divider { flex: 1; height: 1px; background: var(--glass-border); }

.loading-state, .empty-state {
  text-align: center;
  padding: 3rem 2rem;
  color: var(--text-dim);
  background: var(--bg-card);
  border-radius: var(--radius);
  border: 1px solid var(--glass-border);
  font-size: 0.875rem;
  font-weight: 300;
}

.spinner {
  width: 28px;
  height: 28px;
  border: 2px solid var(--glass-border);
  border-top-color: var(--red-bright);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  margin: 0 auto 0.85rem;
}

.comments-list { display: flex; flex-direction: column; gap: 0.85rem; }

.comment-card { padding: 1.25rem; }

.comment-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 0.85rem;
}

.avatar {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--red-dim), var(--red));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(192,57,43,0.2);
}

.comment-meta strong { display: block; color: var(--text); font-size: 0.9rem; font-weight: 600; }
.comment-date { color: var(--text-dim); font-size: 0.75rem; font-weight: 300; }

.comment-text { color: var(--text-muted); line-height: 1.75; font-size: 0.9rem; font-weight: 300; }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from { opacity: 0; transform: translateY(-6px); }
.fade-leave-to { opacity: 0; }

@media (max-width: 540px) {
  .form-fields { grid-template-columns: 1fr; }
  .form-group--full { grid-column: 1; }
  .form-footer { flex-direction: column; align-items: flex-start; }
  .submit-btn { width: 100%; }
}
</style>
