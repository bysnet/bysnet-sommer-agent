let agentActive = false;
let agentShown = false;

document.getElementById('aiConsent').addEventListener('change', (e) => {
  agentActive = e.target.checked;
});

document.addEventListener('click', (e) => {
  if (agentActive && !agentShown) {
    showSommerCircle(e.clientX, e.clientY);
    agentShown = true;
  }
});

function showSommerCircle(x, y) {
  const circle = document.createElement('div');
  circle.className = 'sommer-circle';
  circle.innerHTML = '<div class="center-s">S</div>';
  document.body.appendChild(circle);

  gsap.set(circle, { x: x - 60, y: y - 60, scale: 0 });
  gsap.to(circle, { scale: 1, duration: 0.5, ease: 'power2.out' });
}
