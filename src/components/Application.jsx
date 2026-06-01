import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Users, ShieldAlert, Cpu, Award } from 'lucide-react';
import img4 from '../img/4.jpg';

const opportunities = [
  {
    title: 'Bệ Phóng "Ngoại Giao Cây Tre"',
    desc: 'Đường lối đối ngoại độc lập, tự chủ và đa phương hóa giúp nâng vị thế Việt Nam. Sinh viên bước ra thế giới với vị thế bình đẳng, tự hào dân tộc.',
    icon: Award,
  },
  {
    title: 'Tích Hợp Nguồn Lực Toàn Cầu',
    desc: 'Dễ dàng tranh thủ công nghệ tiên tiến (AI, Big Data), tri thức, học bổng và các chuyên gia, doanh nghiệp đa quốc gia để bứt phá bản thân.',
    icon: Cpu,
  },
  {
    title: 'Mạng Lưới Kết Nối Đa Phương',
    desc: 'Chủ động gia nhập các mạng lưới thanh niên khu vực và quốc tế. Điển hình như Tổ chức Thanh niên ASEAN (ASEAN Youth Organization - AYO).',
    icon: Users,
  }
];

const challenges = [
  {
    title: 'Va Chạm & Khác Biệt Văn Hóa',
    desc: 'Xung đột trực tiếp trong giao tiếp đội nhóm quốc tế về: deadline, phong cách phản hồi, múi giờ và quan điểm cá nhân/tập thể.',
    icon: ShieldAlert,
  },
  {
    title: 'Nguy Cơ "Hòa Tan" Bản Sắc',
    desc: 'Tiếp xúc sâu với văn hóa ngoại lai dễ dẫn đến sự sao chép máy móc, đánh mất cốt cách, giá trị văn hóa và lòng tự tôn dân tộc.',
    icon: Globe,
  },
  {
    title: 'Áp Lực Thực Lực Nội Tại',
    desc: 'Như Bác nói "Chiêng có to tiếng mới lớn". Nếu không rèn luyện kỹ năng thực tế, ngoại ngữ và chuyên môn, sinh viên sẽ bị gạt ra lề.',
    icon: TrendingUp,
  }
];

export default function Application() {
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
      id="app" 
      className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center items-center relative border-b border-brand-gold/10 bg-brand-dark"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 via-transparent to-brand-gold/5 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full z-10 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">SECTION III</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4">
            THỰC TIỄN VẬN DỤNG
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            Cơ hội & Thách thức đối với sinh viên thời đại mới
          </p>
        </motion.div>

        {/* Dynamic Nodes Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          
          {/* Opportunities - Golden Theme */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl bg-brand-dark-card/50 border border-brand-gold/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Soft decorative glow */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-gold/5 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 border-b border-brand-gold/20 pb-4 mb-2">
              <span className="text-2xl">🌟</span>
              <div>
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-brand-gold">CƠ HỘI: KẾT HỢP SỨC MẠNH THỜI ĐẠI</h3>
                <p className="text-[10px] text-brand-bronze font-sans uppercase tracking-widest font-medium">Bản lĩnh hội nhập & Bệ phóng quốc gia</p>
              </div>
            </div>

            <div className="space-y-6">
              {opportunities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold shrink-0 transition-transform group-hover:scale-110 shadow-[0_0_8px_rgba(212,175,55,0.15)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-brand-parchment text-sm md:text-base group-hover:text-brand-gold transition-colors">{item.title}</h4>
                      <p className="font-sans text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Challenges - Red Theme */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col gap-6 p-6 md:p-8 rounded-2xl bg-brand-dark-card/50 border border-brand-red/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Soft decorative glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-red/5 rounded-full filter blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-3 border-b border-brand-red/20 pb-4 mb-2">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-cinzel text-lg md:text-xl font-bold text-brand-red-light">THÁCH THỨC: VA CHẠM & TỰ LỰC</h3>
                <p className="text-[10px] text-brand-bronze font-sans uppercase tracking-widest font-medium">Đối mặt va chạm & Giữ vững bản sắc</p>
              </div>
            </div>

            <div className="space-y-6">
              {challenges.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0 transition-transform group-hover:scale-110 shadow-[0_0_8px_rgba(122,10,16,0.15)]">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-brand-parchment text-sm md:text-base group-hover:text-brand-red-light transition-colors">{item.title}</h4>
                      <p className="font-sans text-xs md:text-sm text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Infographic connecting bridge */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 w-full max-w-4xl p-5 rounded-2xl bg-brand-dark-card border border-brand-gold/15 shadow-xl flex flex-col md:flex-row items-center gap-6 text-left relative overflow-hidden"
        >
          {/* Historical landscape photo of Bác */}
          <div className="w-full md:w-1/3 rounded-xl overflow-hidden border border-brand-gold/20 bg-brand-dark/40 flex items-center justify-center shadow-inner shrink-0 relative pointer-events-auto">
            <img 
              src={img4} 
              alt="Bác Hồ chỉ đạo cách mạng" 
              className="w-full max-h-36 object-contain filter sepia-[0.25] brightness-[0.85] contrast-[1.05] hover:sepia-0 hover:brightness-100 transition-all duration-500 ease-in-out"
            />
            <div className="absolute top-1 left-2 text-[7px] font-mono text-brand-gold/60 tracking-wider select-none">
              DOC-ID: NATION-BUILD-1950
            </div>
          </div>
          
          <div className="flex-1">
            <div className="font-cinzel text-xs text-brand-gold font-bold tracking-widest uppercase mb-2">Kết Luận Biện Chứng</div>
            <p className="font-sans text-xs md:text-sm text-gray-300 italic leading-relaxed">
              "Muốn giải được bài toán Thách thức để đón đầu Cơ hội, sinh viên không thể đi một mình một cách thụ động hay ăn theo, mà phải rèn luyện 
              <span className="text-brand-gold font-semibold"> năng lực tự thân vững mạnh (nội lực) </span> 
              song song với việc tiếp thu có chọn lọc những giá trị thời đại (ngoại lực)."
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
