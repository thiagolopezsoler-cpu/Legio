import { useEffect } from 'react';

function BackgroundEffects() {
    useEffect(() => {
        const canvas = document.getElementById("bgCanvas");
        const ctx = canvas.getContext("2d");

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const squares = [];
        for (let i = 0; i < 50; i++) {
            squares.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: 20 + Math.random() * 20,
                speed: 1 + Math.random() * 3,
                color: `rgba(255, 0, 0, ${0.3 + Math.random() * 0.5})`
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            squares.forEach(s => {
                ctx.fillStyle = s.color;
                ctx.fillRect(s.x, s.y, s.size, s.size);
                s.y += s.speed;
                if (s.y > canvas.height) s.y = -s.size;
            });
            requestAnimationFrame(draw);
        };

        draw();

        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <canvas
            id="bgCanvas"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "100%"
            }}
        />
    );
}

export default BackgroundEffects;
