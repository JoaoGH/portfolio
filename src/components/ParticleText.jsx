import React, {useEffect, useRef} from "react";
import {useTheme} from "../hooks/useTheme.js";

// Cores para os modos
const colors = {
    day: {
        bg: '#f5f3ff',
        particles: ['#6D28D9', '#F472B6', '#2DD4BF'],
        connections: '#c4b5fd'
    },
    night: {
        bg: '#111827',
        particles: ['#8B5CF6', '#EC4899', '#06B6D4'],
        connections: '#4c1d95'
    }
};

export const ParticleText = ({text = "< / >"}) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const originalPositionsRef = useRef([]);
    const { isDark } = useTheme();
    const mode = isDark ? 'night' : 'day';
    const modeRef = useRef(mode);
    modeRef.current = mode;

    // Atualiza imediatamente a cor das partículas existentes quando o modo muda
    useEffect(() => {
        modeRef.current = mode;
        if (particlesRef.current.length > 0) {
            const palette = colors[mode].particles;
            particlesRef.current.forEach(p => {
                p.color = palette[Math.floor(Math.random() * palette.length)];
            });
        }
    }, [mode]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;

        // Configurações
        const fontSettings = {
            size: 110,
            family: 'Arial',
            weight: 'bold'
        };

        // Inicialização das partículas
        const initParticles = () => {
            ctx.font = `${fontSettings.weight} ${fontSettings.size}px ${fontSettings.family}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000';

            // Configurações de quebra de linha
            const maxWidth = canvas.width * 0.8;
            const lineHeight = fontSettings.size * 1.2;
            const lines = [];
            let currentLine = '';

            // Quebra o texto automaticamente
            text.split(' ').forEach(word => {
                const testLine = currentLine ? `${currentLine} ${word}` : word;
                const metrics = ctx.measureText(testLine);

                if (metrics.width > maxWidth && currentLine) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            if (currentLine) lines.push(currentLine);

            // Calcula posição vertical inicial
            const textHeight = lines.length * lineHeight;
            const startY = (canvas.height - textHeight) / 2 + fontSettings.size * 0.8;

            // Desenha cada linha
            lines.forEach((line, i) => {
                ctx.fillText(line, canvas.width / 2, startY + i * lineHeight);
            });

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const particles = [];
            const positions = [];
            const gridSize = 5;
            const currentMode = modeRef.current;
            const currentPalette = colors[currentMode].particles;

            for (let y = 0; y < canvas.height; y += gridSize) {
                for (let x = 0; x < canvas.width; x += gridSize) {
                    const pixelIndex = (y * canvas.width + x) * 4;
                    if (imageData.data[pixelIndex + 3] > 128) {
                        const targetX = x;
                        const targetY = y;
                        particles.push({
                            x: Math.random() * canvas.width,
                            y: Math.random() * canvas.height,
                            targetX,
                            targetY,
                            originalX: targetX,
                            originalY: targetY,
                            speed: Math.random() * 0.06 + 0.02,
                            size: Math.random() * Math.PI + 1,
                            color: currentPalette[Math.floor(Math.random() * currentPalette.length)],
                            angle: Math.random() * 0.1
                        });
                        positions.push({targetX, targetY});
                    }
                }
            }

            particlesRef.current = particles;
            originalPositionsRef.current = positions;
        };

        // Animação
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Desenha conexões primeiro (para ficarem atrás)
            drawConnections();

            // Desenha partículas
            particlesRef.current.forEach(p => {
                p.x += (p.targetX - p.x) * p.speed;
                p.y += (p.targetY - p.y) * p.speed;

                // Movimento orgânico
                p.x += Math.cos(p.angle) * 0.5;
                p.y += Math.sin(p.angle) * 0.5;
                p.angle += 0.01;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Desenha conexões entre partículas
        const drawConnections = () => {
            const particles = particlesRef.current;
            const currentMode = modeRef.current;
            ctx.strokeStyle = `${colors[currentMode].connections}30`;
            ctx.lineWidth = 0.5;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dist = Math.sqrt(
                        Math.pow(particles[i].x - particles[j].x, 2) +
                        Math.pow(particles[i].y - particles[j].y, 2)
                    );
                    if (dist < 30) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Redimensionamento responsivo
        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            initParticles();
        };

        // Inicialização
        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, [text]);

    return (
        <div className="relative">
            <div className={`w-[300px] md:w-[370px] h-[310px] md:h-[380px] rounded-3xl relative overflow-hidden
                            transition-colors duration-500 border border-purple-100 dark:border-purple-900/40 shadow-inner ${
                                mode === 'day' ? 'bg-purple-50' : 'bg-gray-900'
                            }`}>
                <canvas
                    ref={canvasRef}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};
