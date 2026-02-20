"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Eye, ShieldCheck } from "lucide-react";

export default function About() {
    const features = [
        {
            icon: <Eye className="w-8 h-8 text-[#8C7A6B]" />,
            title: "탁월한 미적 감각",
            description: "공간의 채광, 바닥재, 가구와의 조화를 고려하여 최적의 벽지 컬러와 텍스처를 제안합니다."
        },
        {
            icon: <Sparkles className="w-8 h-8 text-[#8C7A6B]" />,
            title: "공간의 격을 높이는 디테일",
            description: "작은 마감 하나도 놓치지 않는 꼼꼼함으로 프리미엄 퀄리티의 결과물을 완성합니다."
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-[#8C7A6B]" />,
            title: "진정성 있는 소통",
            description: "고객님의 라이프스타일과 취향을 깊이 이해하고, 가장 적합한 방향을 함께 고민합니다."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-[#8C7A6B]" />,
            title: "책임 있는 시공 보장",
            description: "도배 전 기초 작업부터 시공 후 마무리까지 변함없는 책임감으로 함께합니다."
        }
    ];

    return (
        <section id="about" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-[#3E3A39] mb-4"
                    >
                        왜 <span className="text-[#8C7A6B]">감성도배</span>일까요?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#3E3A39]/70"
                    >
                        단순히 벽지를 바르는 것을 넘어, 머물고 싶은 공간을 만듭니다.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#E8DCC4]/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#3E3A39] mb-3">{feature.title}</h3>
                            <p className="text-[#3E3A39]/80 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}
