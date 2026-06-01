import React from 'react';
import { Presentation, Scroll, BookOpen, Compass, Award, ShieldAlert, CheckSquare, MessageSquare, Sparkles } from 'lucide-react';

const sections = [
  { id: 'hero', title: 'Mở Đầu', icon: BookOpen, roman: '' },
  { id: 'intro', title: 'Đặt Vấn Đề', icon: Compass, roman: 'I' },
  { id: 'theory', title: 'Lý Luận', icon: Award, roman: 'II' },
  { id: 'app', title: 'Thực Tiễn', icon: ShieldAlert, roman: 'III' },
  { id: 'solution', title: 'Bài Học', icon: CheckSquare, roman: 'IV' },
  { id: 'conclusion', title: 'Kết Luận', icon: MessageSquare, roman: 'V' },
  { id: 'aiused', title: 'AI Used', icon: Sparkles, roman: 'VI' }
];

export default function Navigation({ viewMode, setViewMode, activeSection, scrollToSection, currentSlide, setCurrentSlide }) {
  const activeId = viewMode === 'slide' ? sections[currentSlide].id : activeSection;

  const handleNavClick = (index, id) => {
    if (viewMode === 'slide') {
      setCurrentSlide(index);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/15 py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick(0, 'hero')} 
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-red/10 shadow-[0_0_10px_rgba(212,175,55,0.1)] group-hover:border-brand-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all">
          <span className="font-cinzel text-brand-gold text-lg font-bold group-hover:scale-110 transition-transform">🇻🇳</span>
        </div>
        <div className="flex flex-col">
          <span className="font-cinzel text-brand-gold font-bold tracking-widest text-sm md:text-base leading-none">
            TƯ TƯỞNG HỒ CHÍ MINH
          </span>
          <span className="text-[10px] text-brand-bronze tracking-wider font-medium font-sans uppercase mt-1 leading-none">
            Đoàn Kết Quốc Tế & Hội Nhập Đa Cực
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
        {sections.map((sec, idx) => {
          const Icon = sec.icon;
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => handleNavClick(idx, sec.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-sans text-sm tracking-wide transition-all ${
                isActive
                  ? 'bg-brand-red/20 text-brand-gold font-semibold border border-brand-gold/30 shadow-[0_0_10px_rgba(122,10,16,0.3)]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-white/5 border border-transparent'
              }`}
            >
              {sec.roman && (
                <span className="font-cinzel text-brand-gold font-semibold text-xs border-r border-brand-gold/20 pr-1.5">{sec.roman}</span>
              )}
              <span>{sec.title}</span>
            </button>
          );
        })}
      </nav>

      {/* Toggle View Mode Button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setViewMode(viewMode === 'scroll' ? 'slide' : 'scroll')}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 bg-gradient-to-r from-brand-red to-brand-red-light border border-brand-gold/40 text-brand-gold hover:border-brand-gold hover:scale-105 shadow-[0_0_12px_rgba(212,175,55,0.25)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95 cursor-pointer"
        >
          {viewMode === 'scroll' ? (
            <>
              <Presentation size={15} className="animate-pulse" />
              <span>CHẾ ĐỘ SLIDE</span>
            </>
          ) : (
            <>
              <Scroll size={15} />
              <span>CHẾ ĐỘ CUỘN</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
