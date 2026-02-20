"use client";

import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const date = formData.get("date") as string;
        const memo = formData.get("memo") as string;

        // ==========================================
        // 🚨 여기에 사용자님의 디스코드 웹훅 주소를 넣으시면 됩니다 🚨
        // ==========================================
        const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1474438829044924478/UQ8emMUDLU3PU3joEUYH5Q4VU29dndn2KdTplVMqMZMx3AiKEplZffqCoTlkNKwbmli5";

        const messageData = {
            content: "🚨 **[감성도배] 새로운 온라인 상담 예약 접수** 🚨",
            embeds: [
                {
                    title: "문의 내역 상세 보기",
                    color: 0xFEE500, // 카카오톡 노란색 포인트 컬러
                    fields: [
                        { name: "👤 고객성함", value: name, inline: true },
                        { name: "📞 연락처", value: phone, inline: true },
                        { name: "📅 희망 시공일", value: date, inline: false },
                        { name: "📝 문의/요청사항", value: memo || "없음", inline: false },
                    ],
                    timestamp: new Date().toISOString(),
                }
            ]
        };

        try {
            if (!DISCORD_WEBHOOK_URL) {
                // 웹훅 주소가 비어있을 땐 서버연동 전 테스트/가상 완료 처리
                setTimeout(() => {
                    setIsSubmitting(false);
                    setSubmitStatus("success");
                    setTimeout(() => setSubmitStatus("idle"), 5000);
                }, 1000);
                return;
            }

            const response = await fetch(DISCORD_WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(messageData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                e.currentTarget.reset(); // 폼 초기화
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
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
                            <input type="text" id="name" name="name" required placeholder="홍길동"
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/30" />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">연락처</label>
                            <input type="tel" id="phone" name="phone" required placeholder="010-1234-5678"
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/30" />
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">시공 희망일</label>
                            <input type="date" id="date" name="date" required
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39]" />
                        </div>

                        <div>
                            <label htmlFor="memo" className="block text-sm font-medium text-[#3E3A39]/80 mb-2">문의 내용 (선택)</label>
                            <textarea id="memo" name="memo" rows={4} placeholder="시공 원하시는 평수나 공간의 특징 등을 자유롭게 적어주세요."
                                className="w-full px-4 py-3 bg-white border border-[#E8DCC4] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8C7A6B]/50 transition-all text-[#3E3A39] placeholder:text-[#3E3A39]/40 resize-none"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || submitStatus === "success"}
                            className="w-full py-4 mt-4 bg-[#8C7A6B] text-white font-bold rounded-xl hover:bg-[#6b5c50] hover:shadow-lg transition-all disabled:bg-gray-400 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : submitStatus === "success" ? (
                                "✅ 상담 예약 완료!"
                            ) : submitStatus === "error" ? (
                                "⚠️ 오류가 발생했습니다. 다시 시도해주세요."
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
