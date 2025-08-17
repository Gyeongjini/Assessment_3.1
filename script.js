// Theme toggle (simple & readable)
// - Saves choice in localStorage
// - Uses data-theme="light" | "dark" on <html>

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleThemeBtn');
  if (!btn) return;

  const html = document.documentElement;

  // Load previous choice (if any)
  const saved = localStorage.getItem('theme'); // "light" | "dark" | null
  if (saved === 'dark' || saved === 'light') {
    html.setAttribute('data-theme', saved);
    btn.setAttribute('aria-pressed', String(saved === 'dark'));
  } else {
  // default = dark
  html.setAttribute('data-theme', 'dark');
  btn.setAttribute('aria-pressed', 'true');
}

  btn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    btn.setAttribute('aria-pressed', String(next === 'dark'));
    localStorage.setItem('theme', next);
  });
});