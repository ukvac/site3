// Mauritius Learning Passport — shared front-end behaviour
// Everything here is a client-side simulation for demo purposes only.
// No data leaves the browser; nothing is sent to a real server.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Generic on/off switches (data sharing permissions, etc.)
  document.querySelectorAll('.switch-track').forEach(sw => {
    sw.addEventListener('click', () => {
      sw.classList.toggle('on');
      sw.setAttribute('aria-checked', sw.classList.contains('on'));
      const label = sw.closest('.switch')?.querySelector('.switch-status');
      if (label) label.textContent = sw.classList.contains('on') ? 'Shared' : 'Not shared';
    });
  });
});

// Simple helper other pages can use to fake a short "processing" delay
function withDelay(fn, ms = 650) {
  return new Promise(resolve => setTimeout(() => resolve(fn()), ms));
}
