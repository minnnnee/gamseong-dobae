"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Instagram, ArrowUp } from "lucide-react";

export default function FloatingButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
            <div className="flex flex-col gap-3">

                <a href="https://www.tiktok.com/@dobae_dobae" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform font-bold"
                    aria-label="틱톡">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.589 6.686a4.793 4.793 0 0 1-3.97-1.564 4.8 4.8 0 0 1-1.1-3.122h-3.414v15.228a3.46 3.46 0 1 1-3.461-3.461c.414 0 .82.073 1.192.21v-3.606a7.206 7.206 0 1 0 5.673 7.027V9.08a8.232 8.232 0 0 0 5.08 1.737V6.686z"
                            fill="currentColor"
                        />
                    </svg>
                </a>

                <a href="http://pf.kakao.com/_zHwMn" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#FEE500] text-[#3E3A39] font-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl"
                    aria-label="카카오 채널">
                    Ch
                </a>

                <a href="https://blog.naver.com/seswotn11" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#03C75A] text-white font-bold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-sm"
                    aria-label="네이버 블로그">
                    Blog
                </a>

                <a href="https://www.instagram.com/leejeongsuk1224" target="_blank" rel="noopener noreferrer"
                    className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="인스타그램">
                    <Instagram size={24} />
                </a>

                <button onClick={scrollToTop}
                    className="w-14 h-14 bg-white text-[#8C7A6B] border border-[#E8DCC4] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="TOP">
                    <ArrowUp size={24} />
                </button>

            </div>
        </div>
    );
}
