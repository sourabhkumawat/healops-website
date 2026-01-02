'use client';

import { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export const BackgroundParticles = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Generate random particles only on client to avoid hydration mismatch
    const particles = useMemo(() => {
        if (!mounted) return [];
        return Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
        }));
    }, [mounted]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Dark Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `
                }}
            />

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                           linear-gradient(to bottom, #888 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary/30 blur-[1px]"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: particle.delay
                    }}
                />
            ))}

            {/* Glowing Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
            <div
                className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] animate-pulse"
                style={{ animationDelay: '2s' }}
            />
        </div>
    );
};
