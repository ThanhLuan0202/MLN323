import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, CheckSquare, Shield, Globe, Award, Sparkles } from 'lucide-react';
import img5 from '../img/5.jpg';

const solutions = [
  {
    title: '1. Năng Lực Hợp Tác & Đối Thoại',
    icon: Handshake,
    pillar: 'Phương châm "Cầu đồng tồn dị"',
    uncleHo: 'Tìm kiếm những điểm tương đồng lớn lao (khát vọng hòa bình, tự do), gác lại khác biệt nhỏ nhặt, tiến tới đoàn kết lâu dài, có lý có tình.',
    action: 'Khi làm việc nhóm quốc tế, sinh viên chủ động tập trung vào cái "Đồng" (mục tiêu chung của dự án, tiến độ công việc); tôn trọng cái "Dị" (thói quen sinh hoạt, múi giờ, sự khác biệt văn hóa của bạn bè quốc tế), không áp đặt cực đoan.',
  },
  {
    title: '2. Giữ Vững Bản Lĩnh Cốt Lõi',
    icon: Shield,
    pillar: '“Hòa nhập nhưng không hòa tan”',
    uncleHo: 'Thâu thái (tiếp thu) tinh hoa văn hóa nhân loại một cách có chọn lọc để làm giàu văn hóa dân tộc. Rèn luyện đạo đức cách mạng Cần, Kiệm, Liêm, Chính.',
    action: 'Trước cái "Vạn biến" của mạng xã hội, áp lực đồng trang lứa và công nghệ bùng nổ, cái "Bất biến" cần giữ là đạo đức học thuật và lòng tự trọng dân tộc: Không gian lận học thuật, không lạm dụng AI đạo văn, có trách nhiệm cao với deadline của đội nhóm.',
  },
  {
    title: '3. Tự Chủ & Tự Lực Cánh Sinh',
    icon: Award,
    pillar: '“Vừa hồng vừa chuyên”',
    uncleHo: 'Muốn người ta giúp mình thì trước hết phải tự giúp mình trước. Tự lực cánh sinh, rèn luyện thực lực để đứng vững trên chính đôi chân của mình.',
    action: 'Chủ động học tập suốt đời, làm chủ công nghệ mới (AI, Data, Cloud), thành thạo ngoại ngữ và rèn luyện tư duy phản biện độc lập. Phải kiến tạo "giá trị nội tại độc lập" thì mới khiến đối tác quốc tế nể trọng và làm việc bình đẳng.',
  },
  {
    title: '4. Trách Nhiệm Toàn Cầu',
    icon: Globe,
    pillar: 'Đóng góp vì tiến bộ của nhân loại',
    uncleHo: 'Xem cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới, thắng lợi của dân tộc đóng góp trực tiếp vào hòa bình thế giới.',
    action: 'Không chỉ hoạt động vì lợi ích cá nhân hay quốc gia mình, sinh viên cần chủ động đóng góp vào mục tiêu chung toàn cầu: Phát triển xanh, bảo vệ môi trường, thúc đẩy bình đẳng xã hội và giáo dục bao trùm.',
  }
];

export default function Solution() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id="solution" 
      className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center items-center relative border-b border-brand-gold/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(122,10,16,0.05),transparent_50%)] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">SECTION IV</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4">
            BÀI HỌC & GIẢI PHÁP
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            Hành trang của một Công dân toàn cầu bản lĩnh
          </p>
        </motion.div>

        {/* 3D Tab-like Checklist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          
          {/* Left solution list */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {solutions.map((sol, idx) => {
              const Icon = sol.icon;
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? 'bg-brand-red/25 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.25)]'
                      : 'bg-brand-dark-card/40 border-brand-gold/10 hover:border-brand-gold/25 hover:bg-brand-dark-card/80 text-gray-400 hover:text-brand-parchment'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-brand-gold text-[#0A0A0A]' 
                        : 'bg-brand-red/10 text-brand-gold'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <span className="font-sans font-bold text-sm md:text-base">{sol.title}</span>
                  </div>
                  {isActive && <Sparkles size={16} className="text-brand-gold animate-bounce" />}
                </button>
              );
            })}
          </div>

          {/* Right active details panel */}
          <div className="lg:col-span-6 bg-brand-dark-card/85 border border-brand-gold/15 rounded-2xl p-6 md:p-8 flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.6)] glow-red min-h-[380px] justify-between relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-bl-full pointer-events-none -z-10" />
            
            <div>
              {/* Category Subtitle */}
              <div className="flex items-center gap-2 text-brand-gold font-sans font-bold text-xs uppercase tracking-widest mb-4">
                <CheckSquare size={14} />
                <span>Chi tiết cẩm nang hành động</span>
              </div>

              {/* Landscape photo of Bác */}
              <div className="w-full rounded-xl overflow-hidden border border-brand-gold/15 mb-4 bg-brand-dark/40 flex items-center justify-center relative pointer-events-auto">
                <img 
                  src={img5} 
                  alt="Bài học và giải pháp từ Bác Hồ" 
                  className="w-full max-h-48 md:max-h-56 object-contain filter sepia-[0.25] brightness-90 hover:brightness-100 hover:sepia-0 transition-all duration-500 ease-in-out"
                />
                <div className="absolute top-1 left-2 text-[7px] font-mono text-brand-gold/60 tracking-wider select-none">
                  DOC-ID: LESSON-GLOBAL-1960
                </div>
              </div>

              {/* Title & Pillar */}
              <h3 className="font-cinzel text-lg md:text-xl font-bold text-brand-parchment mb-1">
                {solutions[selectedIdx].title.substring(3)}
              </h3>
              <p className="font-playfair text-xs md:text-sm text-brand-bronze italic mb-6">
                Chốt chặn lý luận: {solutions[selectedIdx].pillar}
              </p>

              {/* Uncle Ho vs Student Action */}
              <div className="space-y-4 font-sans text-xs md:text-sm">
                <div className="bg-brand-dark border-l-2 border-brand-red/50 p-3 rounded-r-md">
                  <strong className="text-brand-red-light block mb-1">💡 Tư tưởng của Bác:</strong>
                  <p className="text-gray-300 leading-relaxed">{solutions[selectedIdx].uncleHo}</p>
                </div>

                <div className="bg-brand-gold/5 border-l-2 border-brand-gold/60 p-3 rounded-r-md">
                  <strong className="text-brand-gold block mb-1">🚀 Hành động thời đại số (Sinh viên):</strong>
                  <p className="text-gray-300 leading-relaxed font-medium">{solutions[selectedIdx].action}</p>
                </div>
              </div>
            </div>

            {/* Bottom status */}
            <div className="mt-6 pt-4 border-t border-brand-gold/10 text-right text-[10px] text-brand-bronze font-sans uppercase tracking-widest">
              <span>Hội nhập tự chủ • hòa nhập không hòa tan</span>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
