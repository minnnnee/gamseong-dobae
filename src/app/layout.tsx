import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "감성도배 | Designing Spaces, Crafting Emotions",
  description: "공간을 디자인하고 감성을 채우는 프리미엄 도배 시공, 감성도배. 꼼꼼한 마감과 미적 감각으로 당신의 공간을 따뜻하게 만들어 드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSansKr.variable} font-sans antialiased bg-[#FDFBF7] text-[#3E3A39]`}>
        {children}
      </body>
    </html>
  );
}
