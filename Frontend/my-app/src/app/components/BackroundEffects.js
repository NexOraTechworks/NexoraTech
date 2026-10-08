"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 45;

    let mouseX = width / 2;
    let mouseY = height / 2;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
      });
    }

    // Resize canvas
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;

        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          particle.x -= dx * 0.01;
          particle.y -= dy * 0.01;
        }

        // Draw particle
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(16, 185, 129, 0.4)";
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const particle2 = particles[j];

          const distanceBetween = Math.hypot(
            particle.x - particle2.x,
            particle.y - particle2.y
          );

          if (distanceBetween < 140) {
            ctx.beginPath();

            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);

            const opacity =
              0.12 * (1 - distanceBetween / 140);

            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Mouse spotlight */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(139,92,246,0.08),transparent_80%)]" />
      </div>

      {/* Particle mesh */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-40"
      />
    </>
  );
}