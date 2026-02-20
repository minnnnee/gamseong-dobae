import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Reviews />
      <Contact />

      {/* Footer */}
      <footer className="bg-[#3E3A39] py-12 px-4 md:px-8 text-white/50 text-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left hidden md:block">
            <h4 className="text-xl font-bold text-white mb-2">감성도배</h4>
            <p className="text-sm">Designing Spaces, Crafting Emotions.</p>
          </div>
          <div className="text-sm space-y-2 text-center md:text-right">
            <p>대표: 이정숙 | 상호: 감성도배</p>
            <p>이메일: seswotn11@naver.com | 연락처: 010-3322-1992</p>
            <p className="mt-4 pt-4 border-t border-white/10">© {new Date().getFullYear()} 감성도배. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingButton />
    </main>
  );
}
