import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Scroll, Compass } from 'lucide-react';
import uncleHoImg from '../img/1.jpg';

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
        {/* Archival Horizontal Frame of Uncle Ho */}
        <motion.div 
          variants={globeVariants}
          className="relative w-72 h-44 md:w-96 md:h-56 mb-8 flex items-center justify-center group"
        >
          {/* Cyber-academic connecting circle grids in the background */}
          <div className="absolute w-80 h-80 rounded-full border border-dashed border-brand-gold/10 animate-[spin_60s_linear_infinite] pointer-events-none -z-10" />
          <div className="absolute w-60 h-60 rounded-full border border-brand-red/10 animate-[spin_40s_linear_infinite_reverse] pointer-events-none -z-10" />

          {/* Outer glowing border & Glassmorphism card backdrop */}
          <div className="absolute inset-0 rounded-2xl bg-brand-dark-card/90 border border-brand-gold/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-brand-gold/60 group-hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] p-3" />
          <div className="absolute inset-1.5 rounded-[14px] border border-dashed border-brand-red/20 pointer-events-none" />
          
          {/* Portrait of Uncle Ho inside the frame */}
          <div className="absolute inset-3 rounded-lg overflow-hidden border border-brand-gold/20 bg-brand-dark flex items-center justify-center">
            <img 
              src={uncleHoImg} 
              alt="Chân dung Chủ tịch Hồ Chí Minh" 
              className="w-full h-full object-cover object-center filter sepia-[0.25] brightness-[0.9] contrast-[1.05] group-hover:sepia-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            {/* Sheen sweep animation effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          </div>

          {/* Technical Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-gold rounded-tl-lg pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-gold rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-gold rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-gold rounded-br-lg pointer-events-none" />

          {/* Archival Slogan Tag below the frame */}
          <div className="absolute -bottom-3.5 px-4 py-1 bg-brand-dark border border-brand-gold/75 text-[10px] md:text-xs font-cinzel font-bold text-brand-gold tracking-[0.25em] rounded shadow-md z-20 transition-all duration-500 group-hover:bg-brand-red/20 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            CHỦ TỊCH HỒ CHÍ MINH
          </div>

          {/* Retro digital metadata overlay */}
          <div className="absolute top-1.5 left-4 text-[8px] font-mono text-brand-bronze/60 tracking-wider select-none">
            SYS-ID: 1911-HCM
          </div>
          <div className="absolute top-1.5 right-4 text-[8px] font-mono text-brand-gold/60 tracking-wider flex items-center gap-1 select-none">
            <span className="w-1 h-1 rounded-full bg-brand-red animate-ping" />
            <span>HISTORIC_DOC</span>
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
