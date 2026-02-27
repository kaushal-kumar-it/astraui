"use client";
import React, { useEffect, useRef } from "react";
export function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let speed = 0.5;
    const numStars = 600;

    const stars: { x: number; y: number; z: number }[] = Array.from({ length: numStars }, () => ({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000,
      z: Math.random() * 2000,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      stars.forEach((star) => {
        star.z -= speed;
        
        // Reset star when it passes the camera
        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
        }
        
        const px = (star.x / star.z) * canvas.width + canvas.width / 2;
        const py = (star.y / star.z) * canvas.height + canvas.height / 2;
        const radius = Math.max(0, (1 - star.z / 2000) * 2.5);

        if (px > 0 && px < canvas.width && py > 0 && py < canvas.height) {
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

    return (
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      />
    );
}