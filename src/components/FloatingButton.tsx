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

                <a href="#consult"
                    className="w-14 h-14 bg-[#FEE500] text-[#3E3A39] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    aria-label="카카오톡 상담">
                    <MessageCircle size={28} className="fill-current" />
                </a>

                <a href="#"
                    className="w-14 h-14 bg-[#FEE500] text-[#3E3A39] font-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-2xl"
                    aria-label="카카오 채널">
                    Ch
                </a>

                <a href="#"
                    className="w-14 h-14 bg-[#03C75A] text-white font-bold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform text-sm"
                    aria-label="네이버 블로그">
                    Blog
                </a>

                <a href="#"
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
