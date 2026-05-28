import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Compass, Heart, Landmark, RefreshCw } from 'lucide-react';
import img2 from '../img/2.jpg';

export default function Introduction() {
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
      id="intro" 
      className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center items-center relative border-b border-brand-gold/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-red/5 to-transparent pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">SECTION II</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4">
            ĐẶT VẤN ĐỀ
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            “Công dân toàn cầu trong một thế giới đa cực”
          </p>
        </motion.div>

        {/* Global Context Intro */}
        <motion.div 
          variants={itemVariants} 
          className="bg-brand-dark-card/60 backdrop-blur-md border border-brand-gold/10 rounded-2xl p-6 md:p-8 mb-12 shadow-[0_4px_30px_rgba(0,0,0,0.4)] glow-red max-w-4xl text-center"
        >
          <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed">
            Trong bối cảnh toàn cầu hóa và hội nhập quốc tế sâu rộng, sinh viên ngày nay không còn học tập và làm việc trong không gian khép kín. Chỉ với chiếc laptop, một người trẻ Việt Nam có thể nhận dự án từ doanh nghiệp toàn cầu, làm việc nhóm xuyên quốc gia. Nhưng sự mở rộng ấy cũng đặt ra thách thức: 
            <span className="text-brand-gold font-semibold"> khác biệt văn hóa, xung đột lợi ích, sự cạnh tranh khốc liệt và nguy cơ đánh mất bản sắc cá nhân.</span>
          </p>
          <div className="h-px w-20 bg-brand-gold/30 mx-auto my-4" />
          <p className="text-brand-bronze font-playfair italic text-xs md:text-sm">
            UNESCO khẳng định giáo dục công dân toàn cầu hướng đến việc giúp người học trở thành những chủ thể tích cực, đóng góp cho một thế giới hòa bình, khoan dung, bao trùm và bền vững.
          </p>
        </motion.div>

        {/* Parallel Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-6 relative">
          
          {/* Central Connecting Node Animation */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-brand-gold/30 bg-brand-dark flex items-center justify-center z-20 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <RefreshCw className="text-brand-gold animate-spin-slow" size={24} />
          </div>

          {/* Column 1: Modern Student */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/70 border border-brand-gold/10 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -z-10" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                <Laptop size={22} />
              </div>
              <div>
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-brand-gold">BÀI TOÁN SINH VIÊN HIỆN ĐẠI</h3>
                <p className="text-[10px] text-brand-bronze font-sans uppercase tracking-widest">Thời Đại Công Nghệ Số & Đa Cực</p>
              </div>
            </div>

            <ul className="space-y-4 font-sans text-sm text-gray-300 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-brand-gold">▪</span>
                <span><strong>Hội nhập số:</strong> Kết nối xuyên biên giới, làm việc với đa văn hóa nhưng dễ vấp phải định kiến xã hội.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-gold">▪</span>
                <span><strong>Xung đột đa cực:</strong> Các quốc gia vừa hợp tác vừa cạnh tranh, yêu cầu cá nhân phải liên tục thích ứng, ứng xử ngoại giao khéo léo.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-gold">▪</span>
                <span><strong>Đánh mất gốc rễ:</strong> Tiếp thu văn hóa thế giới một cách thụ động, dễ dẫn đến hiện tượng "bắt chước máy móc" làm lu mờ giá trị Việt Nam.</span>
              </li>
              <li className="flex gap-2 border-t border-brand-gold/10 pt-4 text-brand-parchment font-semibold italic text-xs md:text-sm">
                <span>Câu hỏi đặt ra: Làm sao để hội nhập quốc tế bình đẳng nhưng vẫn giữ vững tư duy độc lập, đạo đức và bản sắc dân tộc?</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Nguyen Tat Thanh (Anh Ba) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col bg-brand-dark-card/70 border border-brand-red/20 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-red/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full -z-10" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shadow-[0_0_10px_rgba(122,10,16,0.2)] animate-pulse">
                <Compass size={22} />
              </div>
              <div>
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-brand-red-light">HÀNH TRÌNH CỨU NƯỚC CỦA BÁC</h3>
                <p className="text-[10px] text-brand-bronze font-sans uppercase tracking-widest">Tàu Latouche-Tréville - Năm 1911</p>
              </div>
            </div>

            {/* Historical Landscape Photo of Uncle Ho */}
            <div className="w-full rounded-xl overflow-hidden border border-brand-red/30 mb-5 bg-brand-dark/40 flex items-center justify-center shadow-[0_4px_15px_rgba(122,10,16,0.15)] relative pointer-events-auto">
              <img 
                src={img2} 
                alt="Bác Hồ ra đi tìm đường cứu nước" 
                className="w-full max-h-48 md:max-h-56 object-contain filter sepia-[0.3] brightness-[0.85] contrast-[1.05] group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
              />
              <div className="absolute top-1 left-2 text-[7px] font-mono text-brand-gold/60 tracking-wider select-none">
                DOC-ID: LATOUCHE-1911
              </div>
            </div>

            <ul className="space-y-4 font-sans text-sm text-gray-300 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-brand-red">▪</span>
                <span><strong>Hai bàn tay trắng:</strong> Ra đi làm đủ nghề mưu sinh từ phụ bếp, cào tuyết, quét lò để chủ động học tập và thấu hiểu nhân loại.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">▪</span>
                <span><strong>Hòa nhập đa văn hóa:</strong> Học ngôn ngữ nước bạn, kết giao với bạn lao động nghèo tới các trí thức Pháp, Anh, Mỹ, Nga, Trung Quốc...</span>
              </li>
              <li className="flex gap-2">
                <span className="text-brand-red">▪</span>
                <span><strong>Không bao giờ hòa tan:</strong> Trải qua bao nhiêu văn hóa tiên tiến, Người chưa một giây phút nào quên mình là người Việt Nam và quên đi đích đến độc lập.</span>
              </li>
              <li className="flex gap-2 border-t border-brand-red/20 pt-4 text-brand-gold font-semibold italic text-xs md:text-sm">
                <span>Bài học lịch sử: Tự lực cánh sinh, chủ động tiếp thu tri thức nhân loại để phục vụ tổ quốc chính là gốc rễ của Công dân toàn cầu!</span>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Conclusion Link to Next slide */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center bg-brand-red/5 border border-brand-gold/10 px-6 py-4 rounded-xl max-w-2xl"
        >
          <span className="text-sm font-semibold text-brand-gold font-sans tracking-wide">
            Chủ đề lựa chọn: “Công dân toàn cầu trong một thế giới đa cực: bài học từ tư tưởng Hồ Chí Minh về đoàn kết quốc tế”
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
