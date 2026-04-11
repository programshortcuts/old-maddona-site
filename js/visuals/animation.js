// js/visuals/animation.js

export function initMedicalSpaAnimation() {
  const canvas = document.getElementById("canvas");
  const img = document.getElementById("target");

  // ❗ Safety: only run if elements exist (important for SPA injection)
  if (!canvas || !img) return;

  const ctx = canvas.getContext("2d");

  let particles = [];
  let imagePoints = [];
  let morphing = false;
  let frame = 0;
  let rafId = null;

  function createTextParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";

    ctx.fillText("Madonna Medical Spa", canvas.width / 2, canvas.height / 2);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);

    particles = [];

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;

        if (data.data[index + 3] > 128) {
          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
          });
        }
      }
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function createImagePoints() {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    const imgWidth = 300;
    const imgHeight = 300;

    tempCtx.drawImage(
      img,
      (canvas.width - imgWidth) / 2,
      (canvas.height - imgHeight) / 2,
      imgWidth,
      imgHeight
    );

    const data = tempCtx.getImageData(0, 0, canvas.width, canvas.height);

    imagePoints = [];

    for (let y = 0; y < canvas.height * 4; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;

        if (data.data[index + 3] > 128) {
          imagePoints.push({ x, y });
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;

    particles.forEach((p, i) => {
      if (morphing && imagePoints.length > 0) {
        const target = imagePoints[i % imagePoints.length];

        p.x += (target.x - p.x) * 0.04;
        p.y += (target.y - p.y) * 0.04;
      } else {
        p.x += p.vx;
        p.y += p.vy;

        p.vx += (Math.random() - 0.5) * 0.05;
        p.vy -= 0.01;
      }

      ctx.fillStyle = "rgba(8, 7, 7, 0.5)";
      ctx.fillRect(p.x, p.y, 2, 2);
    });

    rafId = requestAnimationFrame(animate);
  }

  function start() {
    createTextParticles();
    createImagePoints();
    animate();

    setTimeout(() => {
      morphing = true;
    }, 2000);
  }

  // Handle cached images safely
  if (img.complete) {
    start();
  } else {
    img.onload = start;
  }

  // optional cleanup (VERY useful for SPA navigation later)
  return function destroy() {
    cancelAnimationFrame(rafId);
  };
}