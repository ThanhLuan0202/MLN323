import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Handshake, Shield, HelpCircle, CheckCircle } from 'lucide-react';
import img3 from '../img/3.jpg';

const theoryPillars = [
  {
    id: 'foundation',
    title: 'A. Cơ sở hình thành & Biện chứng',
    icon: Award,
    subtitle: 'Nội lực quyết định - Ngoại lực hỗ trợ',
    quote: '“Một dân tộc muốn độc lập phát triển trước hết phải tự lực cánh sinh. Sự đoàn kết quốc tế kết hợp sức mạnh thời đại sẽ tạo thành sức mạnh tổng hợp quyết định thắng lợi.”',
    bullets: [
      '<strong>Tính tất yếu khách quan:</strong> Đoàn kết quốc tế giúp cách mạng Việt Nam tranh thủ sự đồng tình, ủng hộ của nhân dân thế giới.',
      '<strong>Mối quan hệ biện chứng:</strong> Nội lực dân tộc đóng vai trò chủ quan quyết định gốc rễ; hợp tác quốc tế đóng vai trò khách quan thời đại cực kỳ quan trọng.',
      '<strong>Sự kết hợp:</strong> Không tự cô lập, biết tranh thủ dòng chảy công nghệ và tri thức thời đại để củng cố sức mạnh tự thân.'
    ]
  },
  {
    id: 'forces',
    title: 'B. Lực lượng đoàn kết rộng rãi',
    icon: Users,
    subtitle: 'Đoàn kết không ranh giới vì tiến bộ chung',
    quote: '“Ai có lòng yêu hòa bình, độc lập, công lý và tiến bộ đều có thể đứng vào hàng ngũ đoàn kết của chúng ta.”',
    bullets: [
      '<strong>Thành phần đa dạng:</strong> Phong trào cộng sản, công nhân, giải phóng dân tộc, và nhân dân yêu hòa bình trên toàn thế giới.',
      '<strong>Vượt qua ý thức hệ:</strong> Không cục bộ, không hẹp hòi. Kết bạn với tất cả mọi người miễn là có chung mục tiêu công lý.',
      '<strong>Hành động thực tiễn của Bác:</strong> Kết bạn với đủ mọi tầng lớp lao động nghèo (phụ bếp, cào tuyết) cho đến các trí thức, nhà báo, chính khách cánh tả tại Pháp, Anh, Mỹ...'
    ]
  },
  {
    id: 'coexistence',
    title: 'C. Phương châm "Cầu đồng tồn dị"',
    icon: Handshake,
    subtitle: 'Tìm kiếm điểm tương đồng - Tôn trọng khác biệt',
    quote: '“Đoàn kết phải dựa trên lợi ích chung của nhân loại, có lý, có tình và tôn trọng sự tự do, bình đẳng giữa các dân tộc.”',
    bullets: [
      '<strong>Cái "Đồng":</strong> Điểm tương đồng lớn nhất là khát vọng hòa bình, tự do, nhân quyền và công bằng xã hội.',
      '<strong>Cái "Dị":</strong> Điểm khác biệt về ngôn ngữ, màu da, phong tục, thể chế chính trị. Cần học cách bao dung và chung sống hòa hợp.',
      '<strong>Học thuyết ngoại giao:</strong> Vận dụng sâu sắc chương 4 về quan hệ có lý có tình, tìm giải pháp đôi bên cùng có lợi (win-win).'
    ]
  },
  {
    id: 'independence',
    title: 'D. Độc lập, tự chủ & Tự lực',
    icon: Shield,
    subtitle: '“Thực lực là cái chiêng, ngoại giao là cái tiếng”',
    quote: '“Thực lực có to thì tiếng ngoại giao mới lớn. Một dân tộc không tự lực, chỉ chờ đợi người khác giúp đỡ thì không xứng đáng được độc lập.”',
    bullets: [
      '<strong>Hội nhập không phụ thuộc:</strong> Hợp tác quốc tế dựa trên thế chủ động. Bản thân phải có năng lực thật sự mới nhận được sự tôn trọng.',
      '<strong>Chiếc chiêng và tiếng vang:</strong> Ngoại giao chỉ phát huy tối đa khi thực lực quốc gia (hoặc cá nhân) đủ mạnh mẽ.',
      '<strong>Tấm gương tự lập của Bác:</strong> Năm 21 tuổi bước ra thế giới bằng hai bàn tay trắng, tự mưu sinh, viết từ vựng lên tay để tự học ngoại ngữ.'
    ]
  }
];

export default function Theory() {
  const [activeTab, setActiveTab] = useState(0);

  const activePillar = theoryPillars[activeTab];
  const ActiveIcon = activePillar.icon;

  return (
    <section 
      id="theory" 
      className="min-h-screen w-full py-24 px-6 md:px-12 flex flex-col justify-center items-center relative border-b border-brand-gold/10 bg-brand-dark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.04),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl w-full z-10 flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-cinzel text-brand-gold text-sm tracking-widest font-bold border-b border-brand-gold/30 pb-2">SECTION III</span>
          <h2 className="font-cinzel text-3xl md:text-5xl font-black text-brand-parchment mt-4">
            CƠ SỞ LÝ LUẬN
          </h2>
          <p className="font-playfair text-brand-bronze text-base md:text-lg italic mt-2">
            Hệ thống tư tưởng Hồ Chí Minh về đoàn kết quốc tế
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Left Panel: Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {theoryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-xl border font-sans transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-red/35 to-brand-red/10 border-brand-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-brand-dark-card/50 border-brand-gold/10 hover:border-brand-gold/35 hover:bg-brand-dark-card/85 text-gray-400 hover:text-brand-parchment'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                    isActive 
                      ? 'bg-brand-gold text-[#0A0A0A] shadow-[0_0_10px_rgba(212,175,55,0.4)] scale-105' 
                      : 'bg-brand-red/10 text-brand-gold border border-brand-gold/20 group-hover:scale-105'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-cinzel text-xs md:text-sm font-bold tracking-wider ${isActive ? 'text-brand-gold' : 'text-gray-300'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-brand-bronze italic mt-0.5">{pillar.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Content Box */}
          <div className="lg:col-span-7 bg-brand-dark-card/75 border border-brand-gold/15 rounded-2xl p-6 md:p-8 min-h-[420px] flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] glow-gold relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col flex-1"
              >
                {/* Header Icon + Subtitle */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold animate-pulse">
                    <ActiveIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs md:text-sm font-black text-brand-parchment tracking-widest uppercase">
                      Lý luận & Thực tiễn Lịch sử
                    </h4>
                    <p className="text-xs text-brand-bronze font-sans uppercase font-medium">{activePillar.subtitle}</p>
                  </div>
                </div>

                {/* Revolutionary Quote */}
                <blockquote className="border-l-2 border-brand-gold pl-4 py-1.5 bg-brand-red/5 rounded-r-lg mb-6 font-playfair italic text-xs md:text-sm text-brand-parchment/90 leading-relaxed shadow-inner">
                  {activePillar.quote}
                </blockquote>

                {/* Historical landscape photo of Bác */}
                <div className="w-full rounded-xl overflow-hidden border border-brand-gold/20 mb-5 bg-brand-dark/40 flex items-center justify-center shadow-[0_4px_15px_rgba(212,175,55,0.15)] relative pointer-events-auto">
                  <img 
                    src={img3} 
                    alt="Bác Hồ và lý luận đoàn kết quốc tế" 
                    className="w-full max-h-48 md:max-h-56 object-contain filter sepia-[0.25] brightness-[0.85] contrast-[1.05] group-hover:sepia-0 group-hover:brightness-100 transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute top-1 left-2 text-[7px] font-mono text-brand-gold/60 tracking-wider select-none">
                    DOC-ID: THEORY-DOC-1945
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5 font-sans text-xs md:text-sm text-gray-300 leading-relaxed">
                  {activePillar.bullets.map((bullet, index) => (
                    <li key={index} className="flex gap-2.5 items-start">
                      <CheckCircle size={15} className="text-brand-gold shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 border-t border-brand-gold/10 pt-4 flex justify-between items-center text-[10px] text-brand-bronze font-sans uppercase tracking-widest">
              <span>Hồ Chí Minh toàn tập</span>
              <span className="font-cinzel font-semibold text-brand-gold">Đoàn Kết Quốc Tế</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
