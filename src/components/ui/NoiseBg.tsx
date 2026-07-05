"use client";

import { useEffect, useRef } from "react";

export default function NoiseBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle structure
    interface Star {
      x: number;
      y: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      speed: number;
      phase: number;
    }

    const stars: Star[] = [];
    const starCount = 80;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        targetAlpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const resizeHandler = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeHandler);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Fill background
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // Render grid pattern
      const gridSize = 48;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Render star particles
      stars.forEach((star) => {
        // Drift particles slowly upwards
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Pulse alpha
        star.phase += 0.01;
        star.alpha =
          star.targetAlpha * 0.6 + Math.sin(star.phase) * (star.targetAlpha * 0.4);

        // Draw particle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, Math.min(1, star.alpha))})`;
        ctx.fill();
      });

      // Add a subtle radial gradient mask over the center
      const radialGradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      radialGradient.addColorStop(0, "rgba(5, 5, 5, 0)");
      radialGradient.addColorStop(0.5, "rgba(5, 5, 5, 0.3)");
      radialGradient.addColorStop(1, "rgba(5, 5, 5, 0.95)");

      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-20 pointer-events-none"
    />
  );
}
