import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareCode, X, Send, Bot, HelpCircle, AlertCircle } from 'lucide-react';

const qaDatabase = [
  {
    keywords: ['cau dong ton di', 'dong ton di', 'cau dong ton'],
    question: 'Phương châm "Cầu đồng tồn dị" là gì?',
    answer: `Phương châm **"Cầu đồng tồn dị"** (Tìm cái chung, tôn trọng khác biệt) của Bác Hồ:
- **Cái "Đồng":** Khát vọng độc lập, tự do, hòa bình.
- **Cái "Dị":** Khác biệt về ngôn ngữ, văn hóa, thể chế.
Bác nhấn mạnh cần tôn trọng, bao dung để chung sống hòa bình.

**Bài học cho sinh viên:** Tập trung mục tiêu chung của nhóm, tôn trọng sự khác biệt của các thành viên.`
  },
  {
    keywords: ['thuc luc la cai chieng', 'cai chieng', 'tieng ngoai giao', 'tieng ngoai'],
    question: 'Ý nghĩa câu nói: "Thực lực là cái chiêng..."?',
    answer: `Bác Hồ dạy: **“Thực lực là cái chiêng, ngoại giao là cái tiếng. Chiêng có to tiếng mới lớn.”**
- **Ý nghĩa:** Quốc gia phải tự lực tự cường, xây dựng nội lực vững mạnh thì tiếng nói ngoại giao mới có trọng lượng.
- **Bài học cho sinh viên:** Tự kiến tạo thực lực chuyên môn (ngoại ngữ, kỹ năng) để có vị thế hợp tác bình đẳng.`
  },
  {
    keywords: ['hoa nhap nhung khong hoa tan', 'hoa nhap khong hoa tan', 'khong hoa tan'],
    question: 'Làm sao để "Hòa nhập nhưng không hòa tan"?',
    answer: `**"Hòa nhập nhưng không hòa tan"** là kim chỉ nam hội nhập toàn cầu:
- **Hòa nhập:** Chủ động học hỏi tinh hoa tri thức, ngoại ngữ, công nghệ mới.
- **Không hòa tan:** Giữ vững tự tôn dân tộc, bản sắc văn hóa Việt Nam và đạo đức học thuật (không gian lận, không đạo văn).`
  },
  {
    keywords: ['ngoai giao cay tre', 'cay tre', 'tre viet nam'],
    question: 'Trường phái "Ngoại giao cây tre" của Việt Nam?',
    answer: `**"Ngoại giao cây tre"** kế thừa tư tưởng Hồ Chí Minh:
- **Gốc vững chắc:** Sức mạnh lòng dân và lợi ích quốc gia - dân tộc tối thượng.
- **Thân uyển chuyển:** Khéo léo, linh hoạt trong hành động đối ngoại, đa dạng hóa quan hệ.`
  },
  {
    keywords: ['luc luong doan ket', 'doan ket quoc te', 'ai doan ket'],
    question: 'Lực lượng đoàn kết quốc tế gồm những ai?',
    answer: `Lực lượng đoàn kết quốc tế trong tư tưởng Hồ Chí Minh:
1. Phong trào cộng sản, công nhân quốc tế và giải phóng dân tộc.
2. Lực lượng yêu chuộng hòa bình, tự do, dân chủ và công lý.
3. Nhân dân các nước thế giới (kể cả nhân dân các nước đối đầu cũ).`
  },
  {
    keywords: ['cong dan toan cau', 'tro thanh cong dan', 'dan toan cau'],
    question: 'Làm sao để làm công dân toàn cầu thực thụ?',
    answer: `Để làm một **Công dân toàn cầu** bản lĩnh, sinh viên cần:
1. **Hợp tác:** Áp dụng phương châm "cầu đồng tồn dị".
2. **Bản lĩnh văn hóa:** Giữ gốc rễ Việt Nam và đạo đức học thuật.
3. **Tự lực:** Học tập suốt đời, chủ động nắm vững công nghệ và ngoại ngữ.
4. **Trách nhiệm:** Hành động vì môi trường, bình đẳng và hòa bình.`
  },
  {
    keywords: ['asean youth', 'ayo', 'thanh nien asean'],
    question: 'Tổ chức Thanh niên ASEAN (AYO) là gì?',
    answer: `**Tổ chức Thanh niên ASEAN (AYO)** là tổ chức thanh niên khu vực nhằm thúc đẩy giao lưu, hợp tác và học tập giữa người trẻ khối ASEAN, tạo bệ phóng hội nhập toàn cầu cho sinh viên.`
  },
  {
    keywords: ['sinh nam bao nhieu', 'ngay sinh', 'sinh ngay nao', 'sinh nam nao', 'nam sinh', 'ngay sinh cua bac', 'sinh nam may', 'sinh nam bn'],
    question: 'Bác Hồ sinh năm bao nhiêu?',
    answer: 'Chủ tịch Hồ Chí Minh sinh ngày **19/05/1890** tại Kim Liên, Nam Đàn, Nghệ An.'
  },
  {
    keywords: ['ra di tim duong', 'tim duong cuu nuoc', 'nha rong', '1911'],
    question: 'Bác Hồ đi tìm đường cứu nước khi nào?',
    answer: 'Bác Hồ ra đi tìm đường cứu nước vào ngày **05/06/1911** từ bến cảng Nhà Rồng trên con tàu Đô đốc Latouche-Tréville.'
  },
  {
    keywords: ['mat nam bao nhieu', 'qua doi', 'mat nam nao', 'mat ngay nao', '1969'],
    question: 'Bác Hồ mất năm bao nhiêu?',
    answer: 'Chủ tịch Hồ Chí Minh qua đời ngày **02/09/1969** tại Hà Nội, hưởng thọ 79 tuổi.'
  },
  {
    keywords: ['ten that', 'ten khai sinh', 'tat thanh', 'ai quoc'],
    question: 'Tên thật và các tên gọi của Bác Hồ?',
    answer: 'Tên khai sinh là **Nguyễn Sinh Cung**, khi đi học tên là **Nguyễn Tất Thành**. Khi hoạt động cách mạng, Người dùng tên **Nguyễn Ái Quốc**, **Hồ Chí Minh** và tên thân mật **Anh Ba**.'
  },
  {
    keywords: ['tuyen ngon doc lap', '2/9', '02/09', '1945'],
    question: 'Tuyên ngôn Độc lập đọc ngày nào?',
    answer: 'Bác Hồ đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày **02/09/1945** tại Quảng trường Ba Đình, Hà Nội.'
  }
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Xin chào! Tôi là **Trợ lý Học thuật AI** hỗ trợ tìm hiểu chuyên đề *“Công dân toàn cầu & Tư tưởng Hồ Chí Minh”*. Bạn muốn đặt câu hỏi nào?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const userText = textToSend || inputValue.trim();
    if (!userText) return;

    // Add user message
    const userMessage = {
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    
    // Simulate AI thinking and typing
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getAIResponse(userText);
      const botMessage = {
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Semantic keyword filter response logic
  const getAIResponse = (query) => {
    const cleanQuery = query.toLowerCase()
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'd')
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    
    const cleanWithoutTones = cleanQuery.trim();

    // 0. Handle common greetings and thanks
    const greetings = ['chao', 'xin chao', 'hello', 'hi', 'halo', 'hey', 'chao ban', 'xin chao ban'];
    const thanks = ['cam on', 'thank', 'thanks'];
    const whoAreYou = ['ban la ai', 'bot la ai', 'tro ly la ai', 'ai day', 'gioi thieu'];
    
    if (greetings.some(g => cleanWithoutTones === g || cleanWithoutTones.startsWith(g + ' ') || cleanWithoutTones.endsWith(' ' + g))) {
      return `Xin chào! Tôi là **Trợ lý Học thuật AI** về đề tài *“Công dân toàn cầu & Tư tưởng Hồ Chí Minh”*. Bạn muốn đặt câu hỏi nào về chuyên đề này?`;
    }

    if (thanks.some(t => cleanWithoutTones.includes(t))) {
      return `Rất vui được hỗ trợ bạn! Chúc bạn có một buổi thuyết trình thành công!`;
    }

    if (whoAreYou.some(w => cleanWithoutTones.includes(w))) {
      return `Tôi là **Trợ lý Học thuật AI** hỗ trợ tìm hiểu chuyên đề. Tôi có thể trả lời về:
- Các nguyên tắc ngoại giao của Bác Hồ (Cầu đồng tồn dị, Thực lực là cái chiêng).
- Cơ hội và thách thức của sinh viên (Ngoại giao cây tre, AYO).
- Cẩm nang hành động của sinh viên (Hòa nhập không hòa tan, Đạo đức học thuật).`;
    }

    // 1. Search exact database match
    for (const item of qaDatabase) {
      for (const kw of item.keywords) {
        if (cleanQuery.includes(kw)) {
          return item.answer;
        }
      }
    }

    // 2. Loose checks: identify completely unrelated topics (entertainment, coding, cooking, weather, sports, games)
    const unrelatedCategories = [
      {
        keywords: ['thoi tiet', 'nhiet do', 'troi mua', 'troi nang'],
        response: 'Tôi chỉ hỗ trợ giải đáp các câu hỏi học thuật về lịch sử, triết học và đề tài đoàn kết quốc tế của Bác Hồ. Bạn có muốn hỏi điều gì liên quan không?'
      },
      {
        keywords: ['lap trinh', 'code', 'javascript', 'python', 'html', 'css', 'react', 'code web', 'sua loi'],
        response: 'Tôi không hỗ trợ lập trình. Hãy đặt câu hỏi liên quan đến lịch sử cách mạng, triết học hoặc hội nhập toàn cầu nhé!'
      },
      {
        keywords: ['nau an', 'mon an', 'nau lam sao', 'cach lam banh', 'nau canh', 'cong thuc nau'],
        response: 'Tôi không có công thức nấu ăn, nhưng tôi có thể chia sẻ "công thức" hội nhập toàn cầu của sinh viên. Hãy hỏi tôi về đề tài này nhé!'
      },
      {
        keywords: ['the thao', 'bong da', 'ngoai hang anh', 'ronaldo', 'messi', 'champions league'],
        response: 'Tôi không có chuyên môn thể thao. Hãy hỏi tôi về lịch sử, triết học hoặc các nguyên tắc ngoại giao của Bác Hồ nhé!'
      },
      {
        keywords: ['game', 'lien quan', 'pubg', 'fifa', 'choi game'],
        response: 'Hãy cùng tôi tìm hiểu các bài học lịch sử của Bác Hồ hoặc kỹ năng hội nhập toàn cầu của sinh viên nhé!'
      }
    ];

    for (const cat of unrelatedCategories) {
      if (cat.keywords.some(kw => cleanQuery.includes(kw))) {
        return cat.response;
      }
    }

    // 3. Broad academic check (philosophy, history, Marxism, society, etc.)
    const broadAcademicKeywords = [
      'triet', 'lich su', 'mac', 'lenin', 'marx', 'engels', 'duy vat', 'duy tam', 
      'bien chung', 'quy luat', 'mau thuan', 'luong chat', 'phu dinh', 'dau tranh', 
      'giai cap', 'xa hoi', 'dan toc', 'quoc gia', 'chinh tri', 'kinh te', 'van hoa', 
      'giao duc', 'tuong lai', 'qua khu', 'su kien', 'chien tranh', 'hoa binh', 
      'nguoi tre', 'sinh vien', 'thanh nien', 'bac ho', 'ho chi minh', 'ong ba', 
      'cach mang', 'viet nam', 'the gioi', 'da cuc', 'toan cau', 'hoi nhap', 'hop tac'
    ];

    const isAcademic = broadAcademicKeywords.some(kw => cleanQuery.includes(kw));

    if (isAcademic) {
      return `🏛️ Câu hỏi của bạn liên quan đến lịch sử/triết học. Để bám sát đề tài thuyết trình, bạn có thể hỏi về:
- **Phương châm "Cầu đồng tồn dị"** hoặc **"Thực lực là cái chiêng"**
- **Ngoại giao cây tre** và **Tổ chức Thanh niên ASEAN (AYO)**
- Cách sinh viên **"Hòa nhập nhưng không hòa tan"**`;
    }

    // 4. Default response if completely unrecognizable
    return `⚠️ Câu hỏi này nằm ngoài đề tài. Bạn có thể hỏi về các chủ đề liên quan như: **Triết học, Lịch sử cách mạng Việt Nam, hoặc Kỹ năng hội nhập toàn cầu** của sinh viên.`;
  };

  const parseMarkdown = (text) => {
    // Simple regex replacements for basic markdown support in chat bubbles
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n/g, '<br />');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-brand-red to-brand-red-light border-2 border-brand-gold text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.45)] hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Mở Trợ lý AI"
      >
        <MessageSquareCode size={26} className={isOpen ? 'hidden' : 'animate-pulse'} />
        <X size={26} className={isOpen ? 'block' : 'hidden'} />
      </button>

      {/* Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.85 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed bottom-40 right-6 z-50 w-[340px] md:w-[400px] h-[520px] rounded-2xl bg-brand-dark-card border-2 border-brand-gold/30 shadow-[0_15px_45px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden glow-red"
          >
            {/* Header */}
            <div className="bg-brand-red/90 p-4 border-b border-brand-gold/20 flex justify-between items-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_60%)]" />
              <div className="flex items-center gap-2.5 z-10">
                <div className="w-9 h-9 rounded-full bg-brand-dark border border-brand-gold flex items-center justify-center text-brand-gold shadow-md">
                  <Bot size={18} className="animate-bounce" />
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-xs md:text-sm text-brand-gold leading-none tracking-widest">
                    TRỢ LÝ HỌC THUẬT AI
                  </h3>
                  <span className="text-[9px] text-brand-parchment/65 font-mono">ONLINE • TOPIC SPECIALIST</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-parchment/80 hover:text-brand-gold transition-colors z-10 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/40 scrollbar-thin">
              {messages.map((msg, index) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={index} className={`flex ${isBot ? 'justify-start' : 'justify-end'} gap-2.5`}>
                    {isBot && (
                      <div className="w-7 h-7 rounded-full bg-brand-red/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 text-[10px] mt-0.5">
                        🤖
                      </div>
                    )}
                    <div className="flex flex-col max-w-[78%]">
                      <div className={`p-3 rounded-2xl text-xs md:text-sm font-sans leading-relaxed shadow-sm ${
                        isBot 
                          ? 'bg-brand-dark-card/90 border border-brand-gold/15 text-gray-300 rounded-tl-sm' 
                          : 'bg-gradient-to-r from-brand-red to-brand-red-light border border-brand-gold/30 text-brand-parchment rounded-tr-sm shadow-[0_3px_10px_rgba(122,10,16,0.25)]'
                      }`}>
                        {parseMarkdown(msg.text)}
                      </div>
                      <span className={`text-[8px] text-brand-bronze mt-1 font-mono ${!isBot && 'text-right'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex justify-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-red/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0 text-[10px] mt-0.5">
                    🤖
                  </div>
                  <div className="p-3 rounded-2xl bg-brand-dark-card/90 border border-brand-gold/15 text-gray-400 rounded-tl-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestions Scroll Box */}
            <div className="px-4 py-2 border-t border-brand-gold/10 bg-brand-dark-card/95 flex gap-2 overflow-x-auto whitespace-nowrap select-none scrollbar-none">
              {qaDatabase.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(item.question)}
                  className="px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-red/5 text-[10px] text-brand-gold hover:bg-brand-red/20 hover:border-brand-gold transition-all duration-300 font-sans cursor-pointer"
                >
                  <HelpCircle size={10} className="inline mr-1" />
                  {item.question}
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 border-t border-brand-gold/15 bg-brand-dark flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập câu hỏi học thuật..."
                className="flex-1 bg-brand-dark-card border border-brand-gold/20 rounded-full px-4 py-2 text-xs md:text-sm text-brand-parchment placeholder-brand-bronze/60 focus:outline-none focus:border-brand-gold font-sans"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-brand-gold hover:bg-brand-gold-light text-brand-dark flex items-center justify-center shrink-0 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
