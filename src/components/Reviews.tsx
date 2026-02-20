"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const reviews = [
    {
        id: 1,
        badge: "색상 추천이 탁월해요",
        content: "이사하면서 전체 도배를 맡겼는데 정말 만족스러워요. 색상 추천도 너무 잘 해주셔서 집이 훨씬 넓어 보이고 분위기가 확 바뀌었어요. 꼼꼼하게 마무리해 주셔서 군더더기 하나 없어요!",
        author: "김○○ 고객님",
        location: "서울 마포구",
        date: "2024.12",
    },
    {
        id: 2,
        badge: "꼼꼼하고 섬세한 시공",
        content: "여자 분이라 처음엔 걱정했는데 완전 기우였어요. 오히려 더 꼼꼼하고 섬세하게 해주셔서 놀랐습니다. 침실 포인트 벽지 시공이 정말 예쁘게 됐어요. 주변에 다 추천하고 있어요.",
        author: "박○○ 고객님",
        location: "경기 수원시",
        date: "2025.01",
    },
    {
        id: 3,
        badge: "취향 파악이 정확해요",
        content: "상담부터 시공 완료까지 전 과정이 너무 편했어요. 제 취향을 잘 파악하셔서 제안해주신 벽지가 딱 마음에 들었고, 깔끔하게 마무리해 주셨어요. 이사할 때마다 꼭 다시 부를게요!",
        author: "이○○ 고객님",
        location: "서울 강동구",
        date: "2025.02",
    },
    {
        id: 4,
        badge: "마감이 정말 깔끔해요",
        content: "예전 집에 살 때 다른 곳에서 도배했다가 마감이 아쉬웠던 기억이 있어서 이번엔 정말 많이 알아보고 감성도배를 선택했어요. 실크벽지 이음새 부분 티도 안 나게 너무 잘해주셨습니다. 최고예요!",
        author: "최○○ 고객님",
        location: "인천 연수구",
        date: "2025.02",
    },
    {
        id: 5,
        badge: "믿고 맡기는 곳",
        content: "두 번째 의뢰입니다. 첫 번째 집에서 너무 만족해서 이번에 이사하면서 또 연락드렸어요. 역시나 기대를 저버리지 않는 퀄리티! 트렌디한 컬러 추천 덕분에 집안 분위기가 정말 환해졌습니다.",
        author: "정○○ 고객님",
        location: "서울 서초구",
        date: "2025.03",
    },
];

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const checkSize = () => {
            setCardsToShow(window.innerWidth < 768 ? 1 : 3);
        };
        checkSize(); // Initialize on mount
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const totalReviews = reviews.length;
    const maxIndex = Math.max(0, totalReviews - cardsToShow);

    // Sync scroll position to active index dot natively
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        // We add 24px (gap-6) to the clientWidth for exact calculation
        const cardWidth = (scrollRef.current.firstElementChild?.clientWidth || 0) + 24;

        // Find nearest index
        const index = Math.round(scrollLeft / cardWidth);
        setCurrentIndex(Math.min(maxIndex, Math.max(0, index)));
    };

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const cardWidth = (scrollRef.current.firstElementChild?.clientWidth || 0) + 24;
        scrollRef.current.scrollTo({
            left: index * cardWidth,
            behavior: "smooth"
        });
        setCurrentIndex(index);
    };

    const handleNext = () => scrollToIndex(Math.min(currentIndex + 1, maxIndex));
    const handlePrev = () => scrollToIndex(Math.max(currentIndex - 1, 0));

    return (
        <section id="reviews" className="py-24 px-4 md:px-8 bg-[#F4EFE6] relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-5 py-2 bg-[#E8DCC4]/50 text-[#8C7A6B] rounded-full text-sm font-bold mb-6"
                    >
                        고객 후기
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-[#3E3A39] mb-4"
                    >
                        고객님들의 <span className="text-[#c6b497]">진심 어린 후기</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#3E3A39]/70"
                    >
                        감성도배와 함께한 고객분들의 생생한 이야기입니다.
                    </motion.p>
                </div>

                {/* Stats Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-[2rem] p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center justify-evenly divide-y md:divide-y-0 md:divide-x divide-[#E8DCC4] w-full max-w-5xl mx-auto"
                >
                    <div className="text-center w-full py-4 md:py-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#c6b497] mb-2">500+</h3>
                        <p className="text-[#3E3A39]/60 text-sm font-medium">누적 시공</p>
                    </div>
                    <div className="text-center w-full py-4 md:py-2">
                        <h3 className="text-3xl md:text-4xl font-bold text-[#c6b497] mb-2">98%</h3>
                        <p className="text-[#3E3A39]/60 text-sm font-medium">재방문 의향</p>
                    </div>
                    <div className="text-center w-full py-4 md:py-2">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Star className="w-6 h-6 fill-[#c6b497] text-[#c6b497]" />
                            <h3 className="text-3xl md:text-4xl font-bold text-[#c6b497]">4.9</h3>
                        </div>
                        <p className="text-[#3E3A39]/60 text-sm font-medium">평균 별점</p>
                    </div>
                </motion.div>

                {/* Reviews Carousel Layout */}
                <div className="relative mx-auto w-full group">

                    {/* Desktop Navigation Buttons Outside */}
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`hidden md:flex absolute left-0 top-[40%] sm:-translate-x-4 lg:-translate-x-12 z-20 w-14 h-14 rounded-full bg-white shadow-xl items-center justify-center text-[#c6b497] transition-all
              ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-110"}`}
                    >
                        <ChevronLeft size={28} />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={currentIndex === maxIndex}
                        className={`hidden md:flex absolute right-0 top-[40%] sm:translate-x-4 lg:translate-x-12 z-20 w-14 h-14 rounded-full bg-white shadow-xl items-center justify-center text-[#c6b497] transition-all
              ${currentIndex === maxIndex ? "opacity-30 cursor-not-allowed" : "opacity-100 hover:scale-110"}`}
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Native Snap Scrolling Container */}
                    <div className="w-full relative px-0 md:px-12 lg:px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div
                                ref={scrollRef}
                                onScroll={handleScroll}
                                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 pt-4 px-2 -mx-2"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="w-[85vw] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-center md:snap-start h-full"
                                    >
                                        <div className="bg-white hover:shadow-lg transition-shadow duration-300 rounded-[1.5rem] p-8 md:p-10 border border-[#E8DCC4]/30 h-[280px] md:h-[320px] lg:h-[350px] flex flex-col justify-between">
                                            <div>
                                                <div className="flex gap-1 mb-6">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-[#c6b497] text-[#c6b497]" />
                                                    ))}
                                                </div>
                                                <div className="inline-block px-4 py-1.5 bg-[#F4EFE6] text-[#8C7A6B] rounded-full text-sm font-bold w-max mb-5">
                                                    "{review.badge}"
                                                </div>
                                                <p className="text-[#3E3A39]/80 leading-relaxed text-sm md:text-base line-clamp-3 md:line-clamp-4">
                                                    {review.content}
                                                </p>
                                            </div>

                                            <div className="border-t pt-4 md:pt-6 border-[#E8DCC4]/50 flex justify-between items-end mt-4">
                                                <div>
                                                    <p className="font-bold text-[#3E3A39]">{review.author}</p>
                                                    <p className="text-xs text-[#3E3A39]/50 mt-1">{review.location}</p>
                                                </div>
                                                <p className="text-xs text-[#3E3A39]/40">{review.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex flex-col items-center justify-center mt-8 gap-3">
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollToIndex(idx)}
                                    className={`transition-all duration-300 rounded-full ${currentIndex === idx
                                            ? "w-8 h-2.5 bg-[#c6b497]"
                                            : "w-2.5 h-2.5 bg-[#E8DCC4] hover:bg-[#c6b497]/50"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Number Indicator (e.g. 1 / 3) */}
                        <div className="text-[#8C7A6B]/70 text-sm font-medium tracking-widest mt-1">
                            {currentIndex + 1} / {maxIndex + 1}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
