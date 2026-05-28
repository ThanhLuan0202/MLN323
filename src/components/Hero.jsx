import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Scroll, Compass } from 'lucide-react';

export default function Hero({ setViewMode, scrollToSection, setCurrentSlide }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const globeVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1.5, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex flex-col justify-center items-center relative px-6 md:px-12 pt-20 overflow-hidden"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 text-center max-w-5xl flex flex-col items-center"
      >
        {/* Revolutinary Star / Globe Badge */}
        <motion.div 
          variants={globeVariants}
          className="relative w-28 h-28 md:w-36 md:h-36 mb-6 flex items-center justify-center"
        >
          {/* Animated concentric gold borders */}
          <div className="absolute inset-0 rounded-full border border-brand-gold/20 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-brand-gold/40 animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-4 rounded-full border-2 border-brand-red/30 shadow-[0_0_15px_rgba(122,10,16,0.3)]" />
          
          {/* Golden Center Globe Symbol */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red/10 border border-brand-gold flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <span className="text-3xl md:text-4xl animate-pulse">⭐</span>
          </div>
        </motion.div>

        {/* Category tag */}
        <motion.div 
          variants={itemVariants}
          className="px-4 py-1 rounded-full border border-brand-red/40 bg-brand-red/5 text-brand-gold font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 shadow-[0_0_10px_rgba(122,10,16,0.15)]"
        >
          Đề Tài Thuyết Trình Học Thuật Cao Cấp
        </motion.div>

        {/* Big Title */}
        <motion.h1 
          variants={itemVariants}
          className="font-cinzel text-3xl sm:text-4xl md:text-6xl font-black text-brand-parchment tracking-wider leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          CÔNG DÂN TOÀN CẦU <br className="hidden md:inline" />
          TRONG MỘT THẾ GIỚI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light font-black">ĐA CỰC</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 
          variants={itemVariants}
          className="font-playfair text-lg sm:text-xl md:text-2xl italic text-brand-bronze tracking-wide mt-6 max-w-3xl leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] border-t border-b border-brand-gold/10 py-3"
        >
          “Bài học từ tư tưởng Hồ Chí Minh về đoàn kết quốc tế”
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="font-sans text-sm md:text-base text-gray-400 max-w-2xl mt-6 leading-relaxed"
        >
          Khám phá sự giao thoa biện chứng giữa nền tảng lý luận tư tưởng cách mạng Việt Nam 
          và bản lĩnh sinh viên trong việc chủ động hội nhập, tự lực tự cường bước ra trường quốc tế.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-10 z-20"
        >
          <button
            onClick={() => {
              setViewMode('slide');
              setCurrentSlide(1);
            }}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-widest text-[#0A0A0A] bg-gradient-to-r from-brand-gold to-brand-gold-light border border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Presentation size={16} />
            <span>BẮT ĐẦU TRÌNH CHIẾU</span>
          </button>
          
          <button
            onClick={() => scrollToSection('intro')}
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-sans text-sm font-bold tracking-widest text-brand-gold border border-brand-gold/40 bg-brand-red/10 hover:bg-brand-red/25 hover:border-brand-gold shadow-[0_0_12px_rgba(122,10,16,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Compass size={16} />
            <span>CUỘN TÌM HIỂU DẦN</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative side quote columns (traditional philosophy style) */}
      <div className="absolute left-6 bottom-10 hidden xl:flex flex-col gap-2 max-w-[200px] text-left opacity-35 font-cinzel text-xs text-brand-gold tracking-widest border-l border-brand-gold/25 pl-4">
        <span>ĐỘC LẬP - TỰ CHỦ</span>
        <span>TỰ LỰC - TỰ CƯỜNG</span>
      </div>
      <div className="absolute right-6 bottom-10 hidden xl:flex flex-col gap-2 max-w-[200px] text-right opacity-35 font-cinzel text-xs text-brand-gold tracking-widest border-r border-brand-gold/25 pr-4">
        <span>CẦU ĐỒNG TỒN DỊ</span>
        <span>HÒA NHẬP - KHÔNG HÒA TAN</span>
      </div>

      {/* Abstract geometric mesh layout under title */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  );
}
