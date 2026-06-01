import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function AIUsed() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="aiused" 
      className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center items-center relative border-b border-brand-gold/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,10,16,0.03),transparent_50%)] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">
            SECTION VI
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4 uppercase">
            AI Used
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            Công nghệ trí tuệ nhân tạo đồng hành cùng dự án
          </p>
        </motion.div>

        {/* AI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl mt-4">
          
          {/* Card 1: Google Gemini */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] glow-red hover:border-purple-500/40 hover:shadow-[0_15px_40px_rgba(147,51,234,0.15)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none -z-10" />
            
            {/* Custom Gemini Icon with Purple Gradient */}
            <div className="w-16 h-16 rounded-2xl bg-purple-950/20 border border-purple-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.15)] group-hover:scale-110 group-hover:border-purple-400 group-hover:shadow-[0_0_25px_rgba(147,51,234,0.3)] transition-all duration-500 mb-8 relative">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                <defs>
                  <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path 
                  d="M12 2Q12 12 22 12Q12 12 12 22Q12 12 2 12Q12 12 12 2Z" 
                  fill="url(#geminiGrad)"
                />
              </svg>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-brand-parchment tracking-wide group-hover:text-purple-300 transition-colors">
              Google Gemini
            </h3>
            
            <p className="font-sans text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mt-1.5 mb-6">
              Soạn thảo nội dung
            </p>

            <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs mb-8 flex-grow">
              Nghiên cứu, tổng hợp và chắt lọc các luận điểm cốt lõi về Tư tưởng Hồ Chí Minh. Hỗ trợ soạn thảo nội dung thuyết trình khoa học và xây dựng cơ sở dữ liệu học thuật cho trợ lý AI.
            </p>

            <button className="px-6 py-2.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 font-sans font-bold text-xs tracking-wider uppercase hover:bg-purple-900/30 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(147,51,234,0.1)]">
              <span>Content & Research</span>
            </button>
          </motion.div>

          {/* Card 2: Antigravity */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center text-center bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-3xl p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] glow-gold hover:border-brand-gold/40 hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full pointer-events-none -z-10" />

            {/* Custom Antigravity Icon with Gold Gradient */}
            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:scale-110 group-hover:border-brand-gold group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500 mb-8 relative">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-brand-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                <defs>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3E5AB" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
                {/* A beautifully tilted gold star representing Antigravity */}
                <path 
                  d="M12 4Q12 12 20 12Q12 12 12 20Q12 12 4 12Q12 12 12 4Z" 
                  fill="url(#goldGrad)"
                  transform="rotate(15 12 12)"
                />
              </svg>
            </div>

            <h3 className="font-cinzel text-2xl font-bold text-brand-parchment tracking-wide group-hover:text-brand-gold transition-colors">
              Antigravity
            </h3>

            <p className="font-sans text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mt-1.5 mb-6">
              Lập trình & Thiết kế Web
            </p>

            <p className="font-sans text-xs md:text-sm text-gray-400 leading-relaxed max-w-xs mb-8 flex-grow">
              Lập trình toàn bộ giao diện web phản hồi tương tác, thiết lập hệ thống chuyển động mượt mà và xây dựng chatbot Trợ lý Học thuật AI trả lời thời gian thực.
            </p>

            <button className="px-6 py-2.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold font-sans font-bold text-xs tracking-wider uppercase hover:bg-brand-gold/15 hover:border-brand-gold hover:text-brand-gold-light transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.1)]">
              <span>Web Development</span>
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
