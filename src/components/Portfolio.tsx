"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
    { id: 1, category: "아파트", title: "화이트&우드 웜톤 인테리어", size: "large", image: "/apt1.jpeg" },
    { id: 2, category: "아파트", title: "모던 미니멀 복도", size: "small", image: "/apt2.jpeg" },
    { id: 3, category: "아파트", title: "고급 실크벽지 다이닝룸", size: "medium", image: "/apt3.jpeg" },
    { id: 4, category: "아파트", title: "밝은 톤 거실 인테리어", size: "small", image: "/apt4.jpeg" },
    { id: 5, category: "아파트", title: "포인트 벽지 시공", size: "large", image: "/apt5.jpeg" },
    { id: 6, category: "아파트", title: "안방 아늑한 무드", size: "medium", image: "/apt6.jpeg" },
    { id: 7, category: "아파트", title: "화사한 아이방 도배", size: "small", image: "/apt7.jpeg" },
    { id: 8, category: "아파트", title: "깔끔한 화이트 톤", size: "medium", image: "/apt8.jpeg" },
    { id: 9, category: "아파트", title: "프리미엄 질감 벽지", size: "large", image: "/apt9.jpeg" },
    { id: 10, category: "아파트", title: "파스텔 톤 포인트 드레스룸", size: "small", image: "/apt10.jpeg" },
    { id: 11, category: "아파트", title: "거실 확 트인 뷰", size: "medium", image: "/apt11.jpeg" },
    { id: 12, category: "아파트", title: "차분한 웜그레이 톤 서재", size: "small", image: "/apt12.jpeg" },
    { id: 13, category: "아파트", title: "침실 포근한 분위기", size: "large", image: "/apt13.jpeg" },
    { id: 14, category: "상업공간", title: "모던 미니멀 스튜디오", size: "small", bg: "bg-gradient-to-tr from-[#8C7A6B] to-[#D5C6B5]" },
    { id: 15, category: "빌라", title: "따뜻한 크림베이지 거실", size: "medium", bg: "bg-gradient-to-bl from-[#FDFBF7] to-[#E8DCC4]" },
    { id: 16, category: "오피스텔", title: "호텔식 럭셔리 질감 도배", size: "small", bg: "bg-gradient-to-br from-[#b6a08c] to-[#E8DCC4]" },
    { id: 17, category: "전원주택", title: "자연 친화적 린넨 텍스처", size: "large", bg: "bg-gradient-to-t from-[#D5C6B5] to-[#FDFBF7]" },
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("전체");
    const [visibleCount, setVisibleCount] = useState(9); // 초기에 보여질 개수
    const filters = ["전체", "아파트", "빌라", "상업공간", "오피스텔", "전원주택"];

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
        setVisibleCount(9); // 필터 변경 시 초기화
    };

    const filteredItems = activeFilter === "전체"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const displayedItems = filteredItems.slice(0, visibleCount);
    const hasMore = visibleCount < filteredItems.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6); // 더보기 클릭 시 6개씩 추가
    };

    return (
        <section id="portfolio" className="py-24 px-4 md:px-8 bg-[#F4EFE6] min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-[#3E3A39] mb-4"
                        >
                            시공 갤러리
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#3E3A39]/70"
                        >
                            감성도배가 완성한 아름다운 공간들을 확인해보세요.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 mt-6 md:mt-0"
                    >
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => handleFilterClick(filter)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? "bg-[#8C7A6B] text-white shadow-md"
                                    : "bg-white text-[#8C7A6B] hover:bg-[#E8DCC4]/50 border border-[#E8DCC4]"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] grid-flow-row-dense"
                >
                    {displayedItems.map((item) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={item.id}
                            className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${item.size === "large" ? "md:row-span-2 lg:col-span-2" :
                                item.size === "medium" ? "row-span-2" : ""
                                }`}
                        >
                            <div className={`w-full h-full ${item.bg || 'bg-[#E8DCC4]'} flex items-center justify-center relative overflow-hidden`}>
                                {'image' in item && item.image ? (
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                ) : (
                                    <span className="text-[#3E3A39]/30 font-bold text-2xl tracking-widest uppercase rotate-[-45deg] select-none p-8">IMAGE {item.id}</span>
                                )}
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-white text-2xl font-bold tracking-wider">{item.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {hasMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-16 flex justify-center"
                    >
                        <button
                            onClick={handleLoadMore}
                            className="px-8 py-3 bg-white border border-[#E8DCC4] text-[#8C7A6B] rounded-full font-medium shadow-sm hover:shadow-md hover:bg-[#FDFBF7] transition-all flex items-center gap-2"
                        >
                            <span>포트폴리오 더보기</span>
                            <span className="textlg leading-none">+</span>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
