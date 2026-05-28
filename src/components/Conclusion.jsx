import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, BookOpen, Share2 } from 'lucide-react';

export default function Conclusion({ setViewMode, setCurrentSlide }) {
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
      id="conclusion" 
      className="min-h-screen w-full flex flex-col justify-between items-center relative px-6 md:px-12 pt-28 pb-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(122,10,16,0.1),transparent_60%)] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl w-full z-10 flex flex-col items-center text-center my-auto"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">EPILOGUE</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4">
            ĐÚC KẾT & KẾT LUẬN
          </h2>
        </motion.div>

        {/* Famous Calligraphy Quote Card */}
        <motion.div 
          variants={itemVariants}
          className="bg-brand-dark-card/60 backdrop-blur-md border-2 border-brand-gold/25 rounded-2xl p-8 md:p-12 mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] glow-gold max-w-3xl relative"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-brand-gold text-brand-dark font-cinzel text-[10px] tracking-[0.25em] font-black rounded-full uppercase">
            Tư tưởng bất hủ
          </div>
          
          <p className="font-cinzel text-xl md:text-3xl text-brand-gold font-bold leading-relaxed tracking-wider drop-shadow-md">
            “ĐOÀN KẾT, ĐOÀN KẾT, ĐẠI ĐOÀN KẾT.<br />
            THÀNH CÔNG, THÀNH CÔNG, ĐẠI THÀNH CÔNG!”
          </p>
          
          <div className="h-px w-24 bg-brand-gold/20 mx-auto my-6" />
          
          <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto italic">
            "Trở thành một Công dân toàn cầu theo tư tưởng Hồ Chí Minh là quá trình không ngừng 'tu thân' để đủ thực lực hòa nhập, đồng thời luôn giữ vững 'gốc' văn hóa, lòng tự trọng và đạo đức dân tộc để đóng góp có ích cho nhân loại."
          </p>
        </motion.div>

        {/* Replay or Back to Start Button */}
        <motion.div variants={itemVariants} className="flex gap-4">
          <button
            onClick={() => {
              setViewMode('slide');
              setCurrentSlide(0);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-sans text-xs md:text-sm font-bold tracking-widest text-[#0A0A0A] bg-brand-gold hover:bg-brand-gold-light border border-brand-gold shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <BookOpen size={15} />
            <span>XEM LẠI TỪ ĐẦU</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Premium Scholarly Footer */}
      <motion.footer 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl mt-16 pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-brand-bronze text-[11px] font-sans tracking-wide z-10"
      >
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-cinzel text-brand-gold font-bold tracking-wider text-xs">
            HỘI NGHỊ LÝ LUẬN KHOA HỌC TRẺ 2026
          </span>
          <span>Báo cáo nghiên cứu • Bộ môn Tư Tưởng Hồ Chí Minh & Triết Học Mác - Lênin</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            Made with <Heart size={10} className="text-brand-red animate-pulse" /> for academic excellence
          </span>
          <span className="border-l border-brand-gold/20 pl-4">© 2026 Nhóm Nghiên Cứu. All rights reserved.</span>
        </div>
      </motion.footer>
    </section>
  );
}
