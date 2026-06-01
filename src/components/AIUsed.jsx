import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, Shield, GraduationCap, Check, X, FileText, Compass } from 'lucide-react';

export default function AIUsed() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Close modal when pressing Esc key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

        {/* Phụ Lục AI Button */}
        <motion.div variants={itemVariants} className="mt-14 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full font-sans text-xs md:text-sm font-bold tracking-widest text-[#0A0A0A] bg-brand-gold hover:bg-brand-gold-light border border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <FileText size={16} className="text-[#0A0A0A]" />
            <span>PHỤ LỤC: AI USAGE</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Pop-up Modal overlay with AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-brand-dark/85 backdrop-blur-md"
            />

            {/* Modal Box wrapper */}
            <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative w-full max-w-4xl bg-brand-dark-card border border-brand-gold/35 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] glow-gold overflow-hidden"
              >
                {/* Background red/gold soft gradients */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-parchment hover:text-brand-gold hover:border-brand-gold transition-colors cursor-pointer z-50 bg-brand-dark/40"
                  aria-label="Đóng phụ lục"
                >
                  <X size={16} />
                </button>

                {/* Modal Content */}
                <div className="relative z-10 max-h-[80vh] overflow-y-auto pr-2 scrollbar-thin">
                  {/* Top Badge */}
                  <div className="flex justify-center mb-4">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-brand-red/10 border border-brand-red/35 text-brand-gold font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] rounded-full uppercase">
                      <FileText size={12} className="text-brand-gold" />
                      Phụ lục: AI Usage
                    </span>
                  </div>

                  {/* Modal Header Title */}
                  <h3 className="font-cinzel text-center text-2xl md:text-4xl font-black text-brand-parchment mb-4 leading-tight">
                    Nguyên tắc sử dụng AI trong dự án học tập và nghiên cứu
                  </h3>

                  {/* Golden Line Divider */}
                  <div className="h-0.5 w-24 bg-brand-gold mx-auto mb-8" />

                  {/* Course requirements highlight box */}
                  <div className="bg-brand-gold/5 border border-brand-gold/30 rounded-2xl p-5 mb-10 max-w-3xl mx-auto text-center shadow-inner">
                    <p className="font-sans text-xs md:text-sm text-brand-gold-light leading-relaxed">
                      <strong className="text-brand-gold">Yêu cầu môn học:</strong> Môn HCM202 – Tư tưởng Hồ Chí Minh yêu cầu sinh viên ứng dụng AI có trách nhiệm và đạo đức, đồng thời phải có giải trình cụ thể về việc sử dụng AI trong quá trình làm ra sản phẩm.
                    </p>
                  </div>

                  {/* Grid Sections */}
                  <div className="space-y-12">
                    
                    {/* Section 1: Minh Bạch */}
                    <div className="border border-brand-gold/15 rounded-2xl overflow-hidden shadow-md">
                      {/* Header bar */}
                      <div className="bg-brand-red/90 p-4 border-b border-brand-gold/20 flex items-center gap-3.5 relative">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.1),transparent_60%)]" />
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-parchment shrink-0">
                          <Eye size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">1.</span>
                          <h4 className="font-cinzel text-md font-bold text-brand-parchment leading-tight">Minh Bạch</h4>
                          <span className="text-[9px] text-brand-parchment/60 font-sans tracking-wide">Công Cụ Và Mục Đích Sử Dụng</span>
                        </div>
                      </div>
                      {/* Content inside */}
                      <div className="p-5 bg-brand-dark/40 grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="bg-brand-dark-card border border-brand-gold/10 rounded-xl p-4 flex flex-col gap-2 hover:border-brand-gold/25 transition-all">
                          <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1">🤖 ChatGPT</span>
                          <p className="text-xs text-gray-300 leading-relaxed">Hỗ trợ tìm kiếm và tổng hợp thông tin cho website để hệ thống lý luận chặt chẽ hơn.</p>
                        </div>
                        <div className="bg-brand-dark-card border border-brand-gold/10 rounded-xl p-4 flex flex-col gap-2 hover:border-brand-gold/25 transition-all">
                          <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1">📚 NotebookLM</span>
                          <p className="text-xs text-gray-300 leading-relaxed">Trích xuất thông tin lý thuyết trực tiếp từ giáo trình Tư tưởng Hồ Chí Minh, giáo trình Lịch sử Đảng Cộng sản Việt Nam và các nguồn báo chí chính thống.</p>
                        </div>
                        <div className="bg-brand-dark-card border border-brand-gold/10 rounded-xl p-4 flex flex-col gap-2 hover:border-brand-gold/25 transition-all">
                          <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1">💻 Claude</span>
                          <p className="text-xs text-gray-300 leading-relaxed">Hỗ trợ thiết kế giao diện và chỉnh sửa CSS cho website, có thể xây dựng một website hoàn chỉnh.</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Có Trách Nhiệm */}
                    <div className="border border-brand-gold/15 rounded-2xl overflow-hidden shadow-md">
                      {/* Header bar */}
                      <div className="bg-slate-900 p-4 border-b border-brand-gold/20 flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-parchment shrink-0">
                          <Shield size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">2.</span>
                          <h4 className="font-cinzel text-md font-bold text-brand-parchment leading-tight">Có Trách Nhiệm</h4>
                          <span className="text-[9px] text-brand-parchment/60 font-sans tracking-wide">Kiểm Chứng & Trách Nhiệm Cá Nhân</span>
                        </div>
                      </div>
                      {/* Content list */}
                      <div className="p-5 bg-brand-dark/40 space-y-3.5">
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-5 h-5 rounded-full bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                            <Check size={12} />
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Kiểm Chứng Thông Tin</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">Tất cả thông tin do AI hỗ trợ đều được kiểm chứng lại bằng giáo trình và các văn bản, nghị quyết chính thống.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-5 h-5 rounded-full bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                            <Check size={12} />
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Trách Nhiệm Cá Nhân</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">Nhóm chịu trách nhiệm hoàn toàn về nội dung cuối cùng, không để AI thay thế toàn bộ quá trình học tập và nghiên cứu.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-5 h-5 rounded-full bg-emerald-950/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                            <Check size={12} />
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Học Tập Tích Cực</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">AI chỉ là công cụ hỗ trợ, không thay thế việc học tập và nghiên cứu của sinh viên.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Sáng Tạo */}
                    <div className="border border-brand-gold/15 rounded-2xl overflow-hidden shadow-md">
                      {/* Header bar */}
                      <div className="bg-brand-gold p-4 border-b border-brand-gold/25 flex items-center gap-3.5 text-brand-dark font-bold">
                        <div className="w-8 h-8 rounded-full bg-brand-dark/15 flex items-center justify-center text-brand-dark shrink-0">
                          <Sparkles size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans text-brand-dark/80 font-bold uppercase tracking-wider block leading-none">3.</span>
                          <h4 className="font-cinzel text-md font-black leading-tight text-brand-dark">Sáng Tạo</h4>
                          <span className="text-[9px] text-brand-dark/65 font-sans tracking-wide">Ứng Dụng AI Trong Sáng Tạo</span>
                        </div>
                      </div>
                      {/* Content grid & note */}
                      <div className="p-5 bg-brand-dark/40 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-brand-dark-card border border-brand-gold/10 rounded-xl p-4 flex flex-col gap-1.5 hover:border-brand-gold/25 transition-all">
                            <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1.5">🎨 Thiết Kế Và Hình Ảnh</span>
                            <p className="text-xs text-gray-300 leading-relaxed">Ảnh minh họa, thiết kế giao diện, chỉnh sửa CSS.</p>
                          </div>
                          <div className="bg-brand-dark-card border border-brand-gold/10 rounded-xl p-4 flex flex-col gap-1.5 hover:border-brand-gold/25 transition-all">
                            <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1.5">⚡ Tương Tác Và Trò Chơi</span>
                            <p className="text-xs text-gray-300 leading-relaxed">Gợi ý câu hỏi và tích hợp vào chatbot đối thoại ôn tập lý luận.</p>
                          </div>
                        </div>
                        <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-4 text-center">
                          <p className="text-xs text-brand-gold-light leading-relaxed">
                            <strong className="text-brand-gold">Lưu ý:</strong> Nội dung học thuật: Nội dung phân tích, dẫn chứng và lập luận học thuật được nhóm biên soạn dựa trên tài liệu chính thống.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Liêm Chính Học Thuật */}
                    <div className="border border-brand-gold/15 rounded-2xl overflow-hidden shadow-md">
                      {/* Header bar */}
                      <div className="bg-brand-red/90 p-4 border-b border-brand-gold/20 flex items-center gap-3.5">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-brand-parchment shrink-0">
                          <GraduationCap size={16} />
                        </div>
                        <div>
                          <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">4.</span>
                          <h4 className="font-cinzel text-md font-bold text-brand-parchment leading-tight">Liêm Chính Học Thuật</h4>
                          <span className="text-[9px] text-brand-parchment/60 font-sans tracking-wide">Cam Kết Học Thuật</span>
                        </div>
                      </div>
                      {/* Content list with numbers */}
                      <div className="p-5 bg-brand-dark/40 space-y-4">
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-6 h-6 rounded-full bg-brand-red text-brand-parchment flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            1
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Cam Kết</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">Không để AI làm thay hoàn toàn, mà chỉ sử dụng như công cụ hỗ trợ.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-6 h-6 rounded-full bg-brand-red text-brand-parchment flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            2
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Phân Định Rõ</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">Các kết quả AI sinh ra đều được chú thích và có phần chỉnh sửa, bổ sung bởi sinh viên.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-brand-dark-card/50 border border-brand-gold/5 rounded-xl p-4">
                          <div className="w-6 h-6 rounded-full bg-brand-red text-brand-parchment flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                            3
                          </div>
                          <div>
                            <strong className="text-brand-parchment font-sans text-xs md:text-sm block mb-1">Đối Chiếu Nguồn</strong>
                            <p className="text-xs text-gray-300 leading-relaxed">Nội dung của sản phẩm được rút ra từ "Giáo trình tư tưởng Hồ Chí Minh" 2021.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
