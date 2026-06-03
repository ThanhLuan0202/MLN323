import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';

export default function AIUsed() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
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
        className="max-w-5xl w-full z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">
            SECTION VI
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4 uppercase">
            AI Usage Policy
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            Nguyên tắc ứng dụng trí tuệ nhân tạo minh bạch và có trách nhiệm
          </p>
        </motion.div>

        {/* Academic Requirement Frame */}
        <motion.div 
          variants={itemVariants}
          className="bg-brand-gold/5 border border-brand-gold/20 rounded-2xl p-5 mb-10 max-w-3xl w-full text-center shadow-[inset_0_0_15px_rgba(212,175,55,0.05)]"
        >
          <p className="font-sans text-xs md:text-sm text-brand-gold-light leading-relaxed">
            <strong className="text-brand-gold font-bold">Khung yêu cầu học thuật:</strong> Học phần HCM202 – Tư tưởng Hồ Chí Minh khuyến khích sinh viên chủ động tiếp cận công nghệ mới, đồng thời yêu cầu tuyệt đối về trách nhiệm cá nhân, đạo đức học thuật và sự minh bạch trong việc sử dụng các trợ lý AI hỗ trợ dự án.
          </p>
        </motion.div>

        {/* 2x2 Grid of Paraphrased AI Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
          
          {/* Card 1: Minh Bạch Công Cụ */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 shadow-md hover:border-purple-500/30 hover:shadow-[0_0_20px_rgba(147,51,234,0.1)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3.5 mb-4 border-b border-brand-gold/10 pb-3">
              <div className="w-9 h-9 rounded-full bg-purple-950/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <Eye size={16} />
              </div>
              <div>
                <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">Phần 1</span>
                <h3 className="font-cinzel text-md font-bold text-brand-parchment">Minh Bạch Công Cụ</h3>
              </div>
            </div>

            <div className="space-y-4 flex-grow">
              <div className="bg-brand-dark/40 border border-brand-gold/5 rounded-xl p-3.5">
                <span className="text-purple-400 text-xs font-bold font-sans flex items-center gap-1.5 mb-1">
                  ✦ Google Gemini
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Hỗ trợ nghiên cứu lý luận, tìm kiếm nguồn tư liệu trích dẫn và xây dựng sườn nội dung chính thống cho các đề mục thuyết trình.
                </p>
              </div>
              <div className="bg-brand-dark/40 border border-brand-gold/5 rounded-xl p-3.5">
                <span className="text-brand-gold text-xs font-bold font-sans flex items-center gap-1.5 mb-1">
                  ✦ Antigravity
                </span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Đồng hành lập trình giao diện tương tác, tối ưu hóa CSS động (Framer Motion) và phát triển trợ lý chatbot học thuật thông minh.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Kiểm Chứng & Trách Nhiệm */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 shadow-md hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-4 border-b border-brand-gold/10 pb-3">
              <div className="w-9 h-9 rounded-full bg-blue-950/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Shield size={16} />
              </div>
              <div>
                <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">Phần 2</span>
                <h3 className="font-cinzel text-md font-bold text-brand-parchment">Kiểm Chứng & Trách Nhiệm</h3>
              </div>
            </div>

            <div className="space-y-3.5 flex-grow font-sans text-xs">
              <div className="flex items-start gap-2.5 bg-brand-dark/30 p-3 rounded-lg border border-brand-gold/5">
                <CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-parchment block mb-0.5">Xác thực đa chiều</strong>
                  <p className="text-gray-400 leading-relaxed">Đối chiếu chéo mọi thông tin do AI đề xuất với giáo trình và tài liệu nghiên cứu gốc trước khi đưa vào sản phẩm cuối.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-brand-dark/30 p-3 rounded-lg border border-brand-gold/5">
                <CheckCircle size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-parchment block mb-0.5">Làm chủ học thuật</strong>
                  <p className="text-gray-400 leading-relaxed">Sinh viên là chủ thể nghiên cứu và chịu trách nhiệm 100% về tính chính xác của dữ liệu, không ỷ lại hay để công nghệ thay thế tư duy độc lập.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Định Hướng Sáng Tạo */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 shadow-md hover:border-brand-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-gold/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-4 border-b border-brand-gold/10 pb-3">
              <div className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform">
                <Sparkles size={16} />
              </div>
              <div>
                <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">Phần 3</span>
                <h3 className="font-cinzel text-md font-bold text-brand-parchment">Định Hướng Sáng Tạo</h3>
              </div>
            </div>

            <div className="space-y-4 flex-grow font-sans text-xs">
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-brand-dark/30 p-3.5 rounded-xl border border-brand-gold/5">
                  <span className="text-brand-gold font-bold block mb-1">🎨 Trải Nghiệm Thị Giác & Tương Tác</span>
                  <p className="text-gray-300 leading-relaxed">
                    Sử dụng các công cụ kỹ thuật để tối ưu hóa hiệu ứng hình ảnh, cách sắp xếp bố cục hợp lý và phát triển chatbot đối thoại sinh động hỗ trợ ôn tập lý luận học thuật.
                  </p>
                </div>
              </div>
              <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-3 text-center">
                <p className="text-[10px] text-brand-gold-light leading-relaxed">
                  <strong className="text-brand-gold">Giá trị nguyên bản:</strong> Toàn bộ nội dung phân tích sâu sắc, hệ thống dẫn chứng lịch sử và lập luận chính trị đều được nhóm biên soạn dựa trên các tư liệu lịch sử chính thức.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Cam Kết Liêm Chính */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/65 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-6 shadow-md hover:border-brand-red/40 hover:shadow-[0_0_20px_rgba(122,10,16,0.15)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-red/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-4 border-b border-brand-gold/10 pb-3">
              <div className="w-9 h-9 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red group-hover:scale-105 transition-transform">
                <GraduationCap size={16} />
              </div>
              <div>
                <span className="text-[10px] font-sans text-brand-gold font-bold uppercase tracking-wider block leading-none">Phần 4</span>
                <h3 className="font-cinzel text-md font-bold text-brand-parchment">Cam Kết Liêm Chính</h3>
              </div>
            </div>

            <div className="space-y-3.5 flex-grow font-sans text-xs">
              <div className="flex items-start gap-2.5 bg-brand-dark/30 p-3 rounded-lg border border-brand-gold/5">
                <div className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red font-bold text-[10px] shrink-0">
                  1
                </div>
                <div>
                  <strong className="text-brand-parchment block mb-0.5">Tôn trọng học thuật</strong>
                  <p className="text-gray-400 leading-relaxed">Không sao chép nguyên bản đầu ra của AI. Mọi thông tin đều phải được cá nhân hóa, biên tập và bổ sung sâu bởi thành viên nhóm.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-brand-dark/30 p-3 rounded-lg border border-brand-gold/5">
                <div className="w-5 h-5 rounded-full bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red font-bold text-[10px] shrink-0">
                  2
                </div>
                <div>
                  <strong className="text-brand-parchment block mb-0.5">Đối chiếu nguồn gốc</strong>
                  <p className="text-gray-400 leading-relaxed">Nội dung của sản phẩm được rút ra từ <strong>"Giáo trình tư tưởng Hồ Chí Minh" (Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật, năm 2021)</strong>.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Group Pledge Bottom Line */}
        <motion.div 
          variants={itemVariants} 
          className="mt-12 bg-brand-red/5 border border-brand-gold/20 px-6 py-4 rounded-xl max-w-2xl text-center shadow-lg"
        >
          <span className="text-xs md:text-sm font-semibold text-brand-gold font-sans tracking-wide italic">
            “Tập thể Nhóm 7 – Lớp HCM202 cam kết tuân thủ các nguyên tắc đạo đức học thuật, ứng dụng trí tuệ nhân tạo một cách minh bạch, trung thực và có trách nhiệm.”
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
