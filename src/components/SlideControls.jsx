import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

const sections = [
  { roman: '', title: 'Mở Đầu' },
  { roman: 'I', title: 'Đặt Vấn Đề' },
  { roman: 'II', title: 'Lý Luận' },
  { roman: 'III', title: 'Thực Tiễn' },
  { roman: 'IV', title: 'Bài Học' },
  { roman: 'V', title: 'Kết Luận' },
  { roman: 'VI', title: 'AI Used' }
];

export default function SlideControls({ currentSlide, setCurrentSlide, totalSlides }) {
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 py-4 bg-brand-dark/90 backdrop-blur-md border-t border-brand-gold/15 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Keyboard Shortcuts Hint */}
      <div className="flex items-center gap-2 text-brand-bronze text-[11px] font-sans">
        <Keyboard size={14} className="text-brand-gold" />
        <span>Dùng <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-brand-parchment font-mono">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-brand-parchment font-mono">→</kbd> hoặc <kbd className="px-3 py-0.5 rounded bg-white/10 text-brand-parchment font-mono">Space</kbd> để chuyển trang</span>
      </div>

      {/* Center Progress bar & Slide names */}
      <div className="flex flex-col items-center gap-2 w-full max-w-md">
        <div className="flex justify-between items-center w-full text-xs font-semibold text-brand-bronze font-sans">
          <span>{sections[currentSlide].roman ? `${sections[currentSlide].roman}. ` : ''}{sections[currentSlide].title}</span>
          <span className="font-cinzel text-brand-gold">{currentSlide + 1} / {totalSlides}</span>
        </div>
        <div className="w-full h-1.5 bg-brand-red/10 border border-brand-gold/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-red to-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.6)] transition-all duration-500 ease-out" 
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
            currentSlide === 0
              ? 'border-brand-gold/10 text-brand-gold/20 cursor-not-allowed'
              : 'border-brand-gold/30 text-brand-gold hover:bg-brand-red/15 hover:border-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.1)] active:scale-90 cursor-pointer'
          }`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
            currentSlide === totalSlides - 1
              ? 'border-brand-gold/10 text-brand-gold/20 cursor-not-allowed'
              : 'border-brand-gold/30 text-brand-gold hover:bg-brand-red/15 hover:border-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.1)] active:scale-90 cursor-pointer'
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
