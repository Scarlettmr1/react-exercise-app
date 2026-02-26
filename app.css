@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #080c10;
  --surface: #111620;
  --rep-accent: #e94560;
  --dur-accent: #00d4aa;
  --text: #f0f4f8;
  --muted: #6b7a8d;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', sans-serif;
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background:
    radial-gradient(ellipse at 20% 20%, rgba(233, 69, 96, 0.07) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(0, 212, 170, 0.07) 0%, transparent 60%),
    var(--bg);
}

/* ─── Menu Screen ─── */
.menu-screen {
  width: 100%;
  max-width: 640px;
}

.app-header {
  margin-bottom: 48px;
}

.header-tag {
  font-family: 'Bebas Neue', cursive;
  font-size: 0.85rem;
  letter-spacing: 0.4em;
  color: var(--rep-accent);
  margin-bottom: 8px;
}

.app-title {
  font-family: 'Bebas Neue', cursive;
  font-size: clamp(3rem, 10vw, 5.5rem);
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.app-subtitle {
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: 300;
  margin-top: 14px;
  letter-spacing: 0.02em;
}

.exercise-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.exercise-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 20px 22px;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.22s ease;
  position: relative;
  overflow: hidden;
  text-align: left;
}

.exercise-btn::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--rep-accent);
  transform: scaleX(0);
  transition: transform 0.22s ease;
}

.exercise-btn.duration::before {
  background: var(--dur-accent);
}

.exercise-btn:hover {
  background: #161d28;
  border-color: rgba(255,255,255,0.14);
  transform: translateY(-2px);
}

.exercise-btn:hover::before {
  transform: scaleX(1);
}

.ex-type-badge {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(233, 69, 96, 0.12);
  color: var(--rep-accent);
}

.duration .ex-type-badge {
  background: rgba(0, 212, 170, 0.12);
  color: var(--dur-accent);
}

.ex-name {
  font-family: 'Bebas Neue', cursive;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  color: var(--text);
}

.ex-arrow {
  font-size: 0.9rem;
  color: var(--muted);
  margin-top: auto;
  transition: transform 0.2s;
}

.exercise-btn:hover .ex-arrow {
  transform: translateX(4px);
  color: var(--text);
}

/* ─── Exercise Screen ─── */
.exercise-screen {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
}

.back-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--muted);
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
  transition: all 0.18s;
  align-self: flex-start;
}

.back-btn:hover {
  color: var(--text);
  border-color: rgba(255,255,255,0.25);
}

/* ─── Shared Exercise Card ─── */
.exercise-card {
  border-radius: 20px;
  padding: 40px 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.exercise-name {
  font-family: 'Bebas Neue', cursive;
  font-size: 2.2rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text);
}

.counter-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.counter-value {
  font-family: 'Bebas Neue', cursive;
  font-size: 6rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

.counter-label {
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
}

.button-group {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 12px 32px;
  border-radius: 50px;
  border: none;
  font-family: 'Bebas Neue', cursive;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 400;
}

.btn-reset {
  background: transparent;
  border: 2px solid rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.6);
}

.btn-reset:hover {
  border-color: rgba(255,255,255,0.4);
  color: var(--text);
  transform: translateY(-2px);
}

.btn-primary {
  color: var(--text);
}

@media (max-width: 480px) {
  .exercise-grid {
    grid-template-columns: 1fr;
  }
  .counter-value {
    font-size: 5rem;
  }
}
