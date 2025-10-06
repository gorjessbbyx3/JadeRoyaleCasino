
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  type: 'circle' | 'star' | 'diamond';
}

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 50;
    const colors = [
      'hsl(158, 64%, 52%)', 
      'hsl(45, 93%, 58%)', 
      'hsl(265, 83%, 35%)',
      'hsl(158, 64%, 62%)',
      'hsl(45, 93%, 68%)'
    ];
    
    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const particleType = Math.random() > 0.7 ? 'star' : 'circle';
      
      particle.className = `absolute pointer-events-none animate-particles ${
        particleType === 'star' ? 'star-particle' : 'rounded-full'
      }`;
      
      const size = Math.random() * 12 + 3;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const duration = Math.random() * 15 + 20;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.7 + 0.3;
      
      if (particleType === 'star') {
        particle.innerHTML = '★';
        particle.style.fontSize = `${size}px`;
        particle.style.color = color;
      } else {
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
      }
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.opacity = opacity.toString();
      
      // Add random horizontal drift
      const drift = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--drift', `${drift}px`);
      
      container.appendChild(particle);
    }

    // Add floating orbs
    for (let i = 0; i < 5; i++) {
      const orb = document.createElement('div');
      orb.className = 'absolute rounded-full blur-sm animate-float-slow pointer-events-none';
      
      const size = Math.random() * 100 + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const delay = Math.random() * 5;
      
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.left = `${left}%`;
      orb.style.top = `${top}%`;
      orb.style.background = `radial-gradient(circle, ${color}20, transparent)`;
      orb.style.animationDelay = `${delay}s`;
      
      container.appendChild(orb);
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      data-testid="particles-background"
    />
  );
}
