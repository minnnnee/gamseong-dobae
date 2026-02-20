"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MOODS = [
    {
        id: 0,
        image: "/hero_beige.png",
        label: "미니멀 베이지",
        desc: "따뜻하고 포근한 분위기",
    },
    {
        id: 1,
        image: "/hero_green.jpeg",
        label: "세련된 딥 그린",
        desc: "차분하고 깊이감 있는 분위기",
    }
];

export default function Hero() {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Normalized mouse coordinates: -0.5 to 0.5
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Background shifts opposite to mouse (Parallax)
    const bgShiftX = useTransform(smoothX, [-0.5, 0.5], [15, -15]);
    const bgShiftY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

    // Text shifts same direction as mouse (Depth)
    const textShiftX = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
    const textShiftY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

    // 3D Rotation for the images (subtle perspective)
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

    useEffect(() => {
        setIsMounted(true);

        // Auto switch every 5 seconds
        const interval = setInterval(() => {
            setCurrentIdx((prev) => (prev === 0 ? 1 : 0));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    function handleMouseMove(e: React.MouseEvent) {
        // Normalize from -0.5 to +0.5
        mouseX.set(e.clientX / window.innerWidth - 0.5);
        mouseY.set(e.clientY / window.innerHeight - 0.5);
    }

    const currentMood = MOODS[currentIdx];

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
            style={{ perspective: 1000 }}
        >
            {/* Background Layer: 3D Motion */}
            <motion.div
                style={{
                    x: bgShiftX,
                    y: bgShiftY,
                    rotateX: isMounted ? rotateX : 0,
                    rotateY: isMounted ? rotateY : 0,
                    scale: 1.05 // Prevent edges from showing during shift
                }}
                className="absolute inset-0 w-full h-full z-0 origin-center"
            >
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentIdx}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={currentMood.image}
                            alt={currentMood.desc}
                            fill
                            className="object-cover"
                            priority
                            quality={100}
                            unoptimized
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Dark vignette overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/30 w-full h-full" />
            </motion.div>

            {/* Floating 3D Text Content */}
            <motion.div
                style={{ x: textShiftX, y: textShiftY, translateZ: 50, transformStyle: "preserve-3d" }}
                className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center justify-center h-full"
            >
                <div className="text-center mt-20 md:mt-0">
                    <motion.h1
                        style={{ translateZ: 80 }}
                        className="text-4xl md:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] mb-8 drop-shadow-2xl"
                    >
                        오직 도배만으로,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8DCC4] to-[#f4ece0]">
                            달라지는 분위기
                        </span>
                    </motion.h1>

                    <motion.p
                        style={{ translateZ: 60 }}
                        className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 leading-relaxed font-light drop-shadow-lg"
                    >
                        벽지 한 장이 바꾸는 공간의 온도. <br className="hidden md:block" />
                        당신의 일상에 완벽히 어울리는 새로운 무드를 <br className="hidden md:block" />
                        감성도배가 만들어 드립니다.
                    </motion.p>

                    <motion.div
                        style={{ translateZ: 40 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto mx-auto"
                    >
                        <a
                            href="#consult"
                            className="px-10 py-5 bg-[#c6b497] text-white rounded-full font-bold text-lg hover:bg-[#b5a386] hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            상담 받기
                        </a>
                        <a
                            href="#portfolio"
                            className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                        >
                            시공 사례
                        </a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Slide Status UI at Bottom */}
            <motion.div
                style={{ translateZ: 20 }}
                className="absolute bottom-12 left-0 right-0 z-20 px-4 md:px-12 flex flex-col items-center"
            >
                <div className="max-w-7xl w-full">
                    {/* Label Display */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm">
                            현재 스타일
                        </span>
                        <p className="text-white font-medium text-sm md:text-base drop-shadow-md">
                            <span className="font-bold text-[#f4ece0]">{currentMood.label}</span> — {currentMood.desc}
                        </p>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden relative backdrop-blur-sm">
                        {/* Progress Fill matching index changing every 5s */}
                        <motion.div
                            key={currentIdx} // Remounts and restarts animation each index change
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="h-full bg-white absolute top-0 left-0 rounded-full"
                        />
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
