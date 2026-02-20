"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="consult" className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left side text / Trust building */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center lg:text-left"
                >
                    <div className="inline-block px-4 py-2 bg-[#F4EFE6] text-[#8C7A6B] rounded-full text-sm font-bold mb-6">
                        간편 상담 예약
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3E3A39] mb-6 leading-tight">
                        당신의 공간에 <br />
                        <span className="text-[#8C7A6B]">감성</span>을 색칠할 시간
                    </h2>
                    <p className="text-lg text-[#3E3A39]/70 mb-10 max-w-lg mx-auto lg:mx-0">
                        어떤 분위기를 원하시나요? 시공 일정부터 자재 선택까지,
                        가장 편안한 상담을 통해 완벽한 공간을 그려드립니다.
                        부담 없이 문의 남겨주세요.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6">
                        <div className="flex items-center gap-4 bg-[#FDFBF7] px-6 py-4 rounded-2xl border border-[#E8DCC4] shadow-sm">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#8C7A6B] shadow-sm">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-[#3E3A39]/60">빠른 전화 상담</p>
                                <p className="text-xl font-bold text-[#3E3A39]">010-3322-1992</p>
                            </div>
                        </div>

                        <a href="http://pf.kakao.com/_zHwMn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#FEE500] px-6 py-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center text-[#3E3A39]">
                                <Send size={24} />
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-[#3E3A39]/60">카카오채널 문의</p>
                                <p className="text-lg font-bold text-[#3E3A39]">감성도배</p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right side form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md bg-[#FDFBF7] rounded-3xl p-8 md:p-10 shadow-2xl border border-[#E8DCC4]/50"
                >
                    <h3 className="text-2xl font-bold text-[#3E3A39] mb-8 text-center">온라인 상담 예약</h3>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">이름</label>
                            <input type="text" id="name" required placeholder="홍길동"
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/30" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">연락처</label>
                            <input type="tel" id="phone" required placeholder="010-0000-0000"
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/30" />
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">시공 희망일</label>
                            <input type="date" id="date" required
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39]" />
                        </div>

                        <div>
                            <label htmlFor="memo" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">문의 내용 (메모)</label>
                            <textarea id="memo" rows={4} placeholder="시공 원하시는 평수나 공간의 특징, 원하시는 스타일 등을 적어주세요."
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/40 resize-none"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || isSubmitted}
                            className="w-full py-4 mt-4 bg-[#8C7A6B] text-white font-bold rounded-xl hover:bg-[#6b5c50] hover:shadow-lg transition-all disabled:bg-gray-400 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : isSubmitted ? (
                                "상담 예약 완료"
                            ) : (
                                "상담 예약하기"
                            )}
                        </button>
                        <p className="text-center text-xs text-[#3E3A39]/50 mt-4">
                            신청을 남겨주시면 가장 빠른 시간 내에 연락드리겠습니다.
                        </p>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
