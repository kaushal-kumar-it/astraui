'use client';

import React, { useEffect, useRef } from "react";

interface StarsBackgroundProps {
  starColor?: string;
  bgColor?: string;
  speed?: number;
  density?: number;
}

export const StarsBackground: React.FC<StarsBackgroundProps> = ({
  starColor = "#ffffff",
  bgColor = "rgba(10, 10, 10, 0.3)", 
  speed = 1.5,
  density = 600,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const stars: { x: number; y: number; z: number }[] = Array.from({ length: density }, () => ({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000,
      z: Math.random() * 2000,
    }));

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    };

    window.addEventListener("resize", resize);
    
    const startupTimer = setTimeout(() => {
      resize();
      draw();
    }, 50);

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = starColor;
      stars.forEach((star) => {
        star.z -= speed;
        
        if (star.z <= 0) {
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
          star.z = 2000;
        }
        
        const px = (star.x / star.z) * canvas.width + canvas.width / 2;
        const py = (star.y / star.z) * canvas.height + canvas.height / 2;
        
        const radius = Math.max(0.1, (1 - star.z / 2000) * 2.5);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    return () => {
      clearTimeout(startupTimer);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [starColor, bgColor, speed, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};