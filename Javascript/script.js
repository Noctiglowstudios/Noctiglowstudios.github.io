const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() 
{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function initStars(count = 420) 
{
  stars = [];
  for (let i = 0; i < count; i++) 
    {
    stars.push(
      {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      d: Math.random() * 0.05 + 0.02
    });
  }
}
initStars();

function animate() 
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0ff';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.d;
    if (star.y > canvas.height) 
      {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}
animate();

