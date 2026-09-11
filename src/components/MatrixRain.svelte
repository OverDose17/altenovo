<script lang="ts">
  import { onMount } from "svelte";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const intervalId = drawMatrixRain(canvas);
    return () => clearInterval(intervalId);
  });

   function drawMatrixRain(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 16;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1); // y-position per column
  const chars = "アカサタナ0123456789ABCDEF"; // any charset works

  return setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // trail fade
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }, 50);
}

</script>

<canvas bind:this={canvas} class="fixed inset-0 z-50"></canvas>

