import { useEffect } from "react";

/**
 * Fondo con cuadrados suaves flotando (ligero y sin fugas de memoria).
 * Si no lo querés, simplemente quitá <BackgroundEffects /> del App.jsx.
 */
export default function BackgroundEffects() {
  useEffect(() => {
    const canvas = document.getElementById("bgCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const squares = Array.from({ length: 48 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: 6 + Math.random() * 12,
      vx: -0.25 + Math.random() * 0.5,
      vy: -0.25 + Math.random() * 0.5,
      a: 0.08 + Math.random() * 0.08,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const q of squares) {
        q.x += q.vx;
        q.y += q.vy;
        if (q.x < -20) q.x = canvas.width + 20;
        if (q.x > canvas.width + 20) q.x = -20;
        if (q.y < -20) q.y = canvas.height + 20;
        if (q.y > canvas.height + 20) q.y = -20;

        ctx.globalAlpha = q.a;
        ctx.fillStyle = "#86a8e7";
        ctx.fillRect(q.x, q.y, q.s, q.s);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="bgCanvas"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
