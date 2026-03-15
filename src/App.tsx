/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Github, Twitter, Mail, Briefcase, User, TreeDeciduous, RotateCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 当切换页面时，自动滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* 注入高级感字体与自定义样式 */}
      <style>{`
        /* 引入高级衬线体、现代几何无衬线体、极客等宽体 */
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Noto+Serif+SC:wght@400;700;900&family=Outfit:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;0,800;1,400&display=swap');

        body {
          background-color: #000;
          color: #fff;
          font-family: 'Outfit', 'Noto Sans SC', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* 高级黑白质感标题样式 */
        .premium-char {
          font-family: 'Playfair Display', 'Noto Serif SC', serif;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
          display: inline-block;
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .premium-char:hover {
          color: #ffffff;
          transform: translateY(-10px) scale(1.05);
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }
        
        /* 核心标题使用衬线体 */
        h1, h2, h3, .font-serif {
          font-family: 'Playfair Display', 'Noto Serif SC', serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace !important;
        }
        
        .brutalist-border {
          border: 1.5px dashed rgba(255, 255, 255, 0.15);
          transition: border-color 0.4s ease;
        }
        
        .brutalist-border:hover {
          border-color: rgba(255, 255, 255, 0.6);
        }
        
        .fade-enter {
          animation: fadeIn 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* 字符错落动画 */
        @keyframes charAppear {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        
        .animate-char {
          animation: charAppear 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 签筒摇晃动画 */
        @keyframes shakeBucket {
          0% { transform: rotate(0deg) translateX(0); }
          25% { transform: rotate(-6deg) translateX(-4px); }
          50% { transform: rotate(6deg) translateX(4px); }
          75% { transform: rotate(-6deg) translateX(-4px); }
          100% { transform: rotate(0deg) translateX(0); }
        }
        .shake-active {
          animation: shakeBucket 0.4s ease-in-out infinite;
        }

        /* 抽签升起动画 */
        @keyframes fortuneRise {
          0% { transform: translateY(50px) rotate(0deg); opacity: 0; }
          100% { transform: translateY(-130px) rotate(-3deg); opacity: 1; }
        }
        .fortune-stick-active {
          animation: fortuneRise 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67) forwards;
        }

        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        /* 木纹理叠加层 */
        .wood-texture {
          background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png');
          opacity: 0.2;
          pointer-events: none;
        }

        /* 圆柱体立体渐变 */
        .cylinder-body {
          background: linear-gradient(90deg, 
            #1a110a 0%, 
            #3d2b1f 20%, 
            #5d4037 50%, 
            #3d2b1f 80%, 
            #1a110a 100%
          );
        }
      `}</style>

      {/* 页面路由渲染 */}
      <div className="fade-enter" key={activeTab}>
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
        {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
        {activeTab === 'products' && <Products setActiveTab={setActiveTab} />}
      </div>
    </div>
  );
}

/* =========================================
   首页组件 (Home)
   ========================================= */
function Home({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const nameArr = ["大", "大", "大", "哪", "吒"];
  const offsets = [
    { y: '-10px', rot: '-5deg', size: 'text-7xl md:text-9xl' },
    { y: '20px', rot: '3deg', size: 'text-6xl md:text-8xl' },
    { y: '-30px', rot: '-2deg', size: 'text-8xl md:text-[11rem]' },
    { y: '15px', rot: '6deg', size: 'text-7xl md:text-9xl' },
    { y: '-15px', rot: '-4deg', size: 'text-9xl md:text-[12rem]' }
  ];

  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex flex-col p-6 md:p-12 max-w-[1600px] mx-auto w-full pt-12 md:pt-20 justify-center items-center relative">
        <div className="w-full flex justify-center items-center mb-24 md:mb-32">
          <div className="flex flex-row items-center gap-2 md:gap-8">
            {nameArr.map((char, i) => (
              <div 
                key={i} 
                className="animate-char" 
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  transform: `translateY(${offsets[i].y}) rotate(${offsets[i].rot})`
                }}
              >
                <span className={`premium-char ${offsets[i].size} ${i % 2 === 0 ? 'opacity-100' : 'opacity-70'}`}>
                  {char}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl flex flex-col relative z-20">
            <div className="brutalist-border p-8 md:p-20 flex flex-col items-center justify-center text-center flex-grow h-full min-h-[400px] relative overflow-hidden group bg-black/40 backdrop-blur-sm">
              <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-800 tracking-widest">/ ORIGIN_PROFILE</div>
              <div className="flex gap-10 mb-14 text-gray-600">
                <Github size={20} className="hover:text-white cursor-pointer transition-colors duration-300" />
                <Twitter size={20} className="hover:text-white cursor-pointer transition-colors duration-300" />
                <Mail size={20} className="hover:text-white cursor-pointer transition-colors duration-300" />
              </div>
              <h2 className="font-bold mb-10 text-3xl md:text-4xl tracking-wide font-serif italic text-gray-200">Dearest friend,</h2>
              <p className="text-lg md:text-xl leading-loose text-gray-500 max-w-2xl mx-auto font-light tracking-wide">
                it is such an honour to have you here.<br/><br/>欢迎来到我的个人精神角落。<br/><br/>Feel at home.
              </p>
              <div className="mt-12 flex items-center justify-center text-gray-800 hover:text-white transition-colors duration-1000">
                <TreeDeciduous size={44} strokeWidth={0.8} />
              </div>
            </div>
        </div>
      </div>

      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 md:p-12 border-t-[1px] border-dashed border-gray-900 bg-[#020202]">
        <h2 className="text-[10px] md:text-xs mb-20 font-mono text-gray-700 tracking-[0.5em] text-center uppercase">/ Navigation Map /</h2>
        <div className="grid grid-cols-2 gap-4 md:gap-10 w-full max-w-6xl px-4">
          <button onClick={() => setActiveTab('about')} className="group relative brutalist-border p-8 md:p-20 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 bg-black cursor-pointer aspect-square md:aspect-auto">
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <User size={24} className="relative z-10 mb-4 md:mb-8 text-gray-800 group-hover:text-black transition-colors duration-500" />
            <span className="relative z-10 text-2xl md:text-5xl font-bold group-hover:text-black transition-colors duration-500 font-serif">关于我</span>
          </button>
          <button onClick={() => setActiveTab('products')} className="group relative brutalist-border p-8 md:p-20 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 bg-black cursor-pointer aspect-square md:aspect-auto">
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <Briefcase size={24} className="relative z-10 mb-4 md:mb-8 text-gray-800 group-hover:text-black transition-colors duration-500" />
            <span className="relative z-10 text-2xl md:text-5xl font-bold group-hover:text-black transition-colors duration-500 font-serif">我的产品</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   关于我 组件 (About) - 恢复详尽内容
   ========================================= */
function About({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const timelineData = [
    { 
      date: "2004.03.24 — ONGOING", 
      title: "原点：生长的序章", 
      desc: "2004年的春日，我以第一声啼哭与世界初见。从懵懂无知的孩童，到在岁月里野蛮生长的探索者，时光赋予了我敏感的触角与不灭的好奇。我始终带着一腔赤诚与无畏，去感知、去经历，在平淡或喧嚣的日子里，一点点拼凑出属于自己的灵魂轮廓。" 
    },
    { 
      date: "2020.09 — 2024.06", 
      title: "本科阶段：探索与破局", 
      desc: "就读于南京特殊教育师范学院，主修数据科学与大数据技术。在 Hadoop、数据仓库与 Python 可视化的代码世界中，我建立起了缜密的逻辑思维；在“挑战杯”与高等数学竞赛中屡获殊荣。同时，担任校社联外联部部长的经历，也赋予了我出色的沟通与资源统筹能力。" 
    },
    { 
      date: "2024.09 — PRESENT", 
      title: "研究生阶段：深耕与沉淀", 
      desc: "进入上海应用技术大学攻读管理科学与工程硕士。学术上，我专注于消费者行为与市场营销，通过大量阅读文献，探索感性人类行为决策背后的深层逻辑。学术之外，出于旺盛的表达欲，我跨界导演了一场完整的喜剧节目。从前期的剧本甄选、演员招募，到舞台策划与排练统筹，我全程把控。这不仅释放了我的创造力与活力，更是一次跳出舒适圈的创新尝试，展现了我在资源整合与团队激发上的另一面。" 
    },
    { 
      date: "2025.09 — 2025.11", 
      title: "知行合一：上海人工智能实验室", 
      desc: "于相风科技担任市场部实习生。独立负责“售电”垂直领域的潜在客户与合作伙伴挖掘，通过邮件主动触达超过 2000家目标公司，并交付一份含200家有意向合作客户的名单。此外，还撰写了“重载机器人”行业分析报告，深度参与战略数据分析与内容运营。这段高强度的经历让我深刻体会到，如何将数据的敏锐度无缝转化为强大的商业洞察与落地执行力。" 
    },
    { 
      date: "ALWAYS IN MOTION", 
      title: "自我评价：理性与感性的交响", 
      desc: "大数据的理性背景与营销管理的感性视角在我身上交汇。注重逻辑与细节的严谨；同时我也热爱生活与运动，喜欢思考，偏爱文字，能敏锐捕捉生活里细腻的体验与感受。具备良好的多线程沟通协调与快速学习能力。我相信技术应当隐于无形，期待在未来的探索中脚踏实地，创造属于自己的回音。" 
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 md:py-24">
      <button onClick={() => setActiveTab('home')} className="mb-20 flex items-center gap-3 text-gray-700 hover:text-white transition-colors font-mono uppercase tracking-[0.3em] text-[10px]">
        <ArrowLeft size={14} /> Back to Origin
      </button>
      <h1 className="text-4xl md:text-6xl font-bold mb-24 uppercase tracking-wider border-b-[1px] border-dashed border-gray-900 pb-10 flex items-center gap-6 font-serif text-gray-200">
        <User size={48} className="text-gray-700" /> 关于我
      </h1>
      <div className="relative border-l-[1px] border-dashed border-gray-900 ml-4 md:ml-8 space-y-24 py-8">
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative pl-12 md:pl-20 group">
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border-[1px] border-gray-700 group-hover:bg-white group-hover:border-white transition-all duration-500"></div>
            <div className="text-[10px] text-gray-600 font-mono mb-4 uppercase tracking-[0.3em]">{item.date}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif tracking-wide text-gray-300">{item.title}</h3>
            <p className="text-gray-500 leading-loose text-lg text-justify font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================
   我的产品 组件 (Products) - “上上签”互动模块
   ========================================= */
function Products({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const [isShaking, setIsShaking] = useState(false);
  const [currentFortune, setCurrentFortune] = useState<string | null>(null);

  const fortunePool = [
    "当下即是最好的答案。", "万物皆有裂痕，那是光照进来的地方。", "所有的等待终将开花结果。", "相信直觉，你的选择是正确的。", 
    "去见你想见的人，趁阳光正好。", "休息也是一种前进。", "此时此刻，你已经被爱着。", "未来不远，就在脚下的每一步。",
    "心之所向，素履以往。", "平凡日常中藏着闪光的瞬间。", "接受不完美，那是独特的注脚。", "做你想做的梦，去你想去的地方。",
    "好运正在派送中。", "生活是场盛大的庆典。", "勇敢一点，世界会为你让路。", "你是无可替代的存在。",
    "保持热爱，可抵岁月漫长。", "深呼吸，一切都在变好。", "梦想万一实现了呢。", "哪怕只有一点点进步，也值得庆祝。",
    "在这个喧嚣的世界，守护好内心的静谧。", "最好的时间是现在。", "顺其自然，往往有惊喜。", "慢一点，灵魂才能跟上脚步。",
    "知足且上进，温柔且坚定。", "所有的相遇都有意义。", "路在脚下，更在心里。", "做自己，世界会适应你。",
    "你是这个世界的礼物。", "保持那份纯粹的执着。", "去看海吧，让海风吹走烦恼。", "哪怕身处阴沟，也要仰望星空。",
    "心怀浪漫，生活便不只是生存。", "坚定地走向属于你的旷野。", "别让焦虑偷走你的现在。", "你是宇宙中独一无二的波长。",
    "好心情是最好的护肤品。", "允许一切发生，保持内心平静。", "此时的你，正是最美的样子。", "去拥抱生命里的每一场风暴。",
    "知足且上进，温柔且坚定。", "所有的相遇都有意义。", "你的路在脚下，更在心里。", "做自己，世界会适应你。",
    "你是这个世界的礼物。", "保持那份纯粹的执着。", "哪怕只是一点点进步，也值得庆祝。", "生命因专注而深邃。",
    "去看海吧，让海风吹走烦恼。", "最好的时间是现在。", "你的坚韧是无声的勋章。", "在这个喧嚣的世界，守护好内心的静谧。",
    "别担心，总会有办法的。", "你是值得被认真对待的人。", "保持期待，万事可爱。", "让心里的花儿悄悄绽放。",
    "有些光虽然微弱，却能穿透黑暗。", "你是生活的创造者。", "别总盯着终点，看看身边的风景。", "内心丰盈，便是最好的状态。",
    "大胆一点，你的人生没有标准答案。", "去做那个能让你开心的决定。", "你正在成为更好的自己。", "温柔的人，终会被温柔相待。",
    "别怕慢，只要不停止就好。", "世界很大，你的心可以更大。", "每个动作都有回响。", "你是独一无二的风景。",
    "去感受，去体验，去不虚此行。", "你的选择决定了你的高度。", "做一个有趣的人，比完美更重要。", "别让别人的标准限制了你的可能。",
    "你是自己世界的中心。", "保持那颗少年心。", "每一朵花都有自己的花期。", "相信时间的力量。",
    "去做那件你一直想做的事。", "你的潜力超乎想象。", "别怕输，赢的滋味才更甜。", "在繁华中自律，在落魄中自强。",
    "每一个黄昏都值得等待。", "你是光，哪怕微弱也能照亮前程。", "顺境不骄，逆境不馁。", "生活不需要那么多理由。",
    "这一刻的安静，属于你。", "你的存在让世界更美好了一点。", "别怕错过，错过的都不属于你。", "去追逐那道光。",
    "你是最好的自己。", "保持善良，会有回响。", "梦想万一实现了呢。", "别让琐事消耗了你的灵气。",
    "换个心情，你会看到不一样的天空。", "你是无可取代的。", "给自己一个拥抱。", "万物可爱，你也可爱。",
    "在这个秋天，收获属于你的成熟。", "让一切随风，让美好留下。", "你是生命里的主宰者。", "保持清醒，保持热爱。",
    "好运总会降临在努力的人身上。", "去书写属于你的篇章。", "你是自己最好的朋友。", "别否定自己，你已经很棒了。",
    "在平淡中寻找不凡。", "你的眼神里藏着星辰大海。", "学会拒绝，那是保护内心的篱笆。", "保持那份勇气。",
    "明天又是崭新的一页。", "有些路必须一个人走，但光在前面。", "你是生活的探索家。", "给自己一点掌声。",
    "换个视角看世界。", "你的温柔是治愈的力量。", "别总和别人比，只和昨天的自己比。", "你是独一无二的存在。",
    "好运一直在你身边。", "相信奇迹，奇迹才会发生。", "去感知生命的厚度。", "你是最美的风景。",
    "保持那份纯真和好奇。", "每一个动作都有回响。", "梦想万一实现了呢。", "哪怕只有一点点进步，也值得庆祝。"
  ];

  const handleDraw = useCallback(() => {
    if (isShaking) return;
    setIsShaking(true);
    setCurrentFortune(null);
    
    setTimeout(() => {
      setIsShaking(false);
      const randomIndex = Math.floor(Math.random() * fortunePool.length);
      setCurrentFortune(fortunePool[randomIndex]);
    }, 1200);
  }, [isShaking, fortunePool]);

  return (
    <div className="max-w-[1400px] mx-auto py-12 px-6 md:py-24">
      <button onClick={() => setActiveTab('home')} className="mb-20 flex items-center gap-3 text-gray-700 hover:text-white transition-colors font-mono uppercase tracking-[0.3em] text-[10px]">
        <ArrowLeft size={14} /> Back to Origin
      </button>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-16 uppercase tracking-wider border-b-[1px] border-dashed border-gray-900 pb-10 flex items-center gap-6 font-serif text-gray-200">
        <Briefcase size={48} className="text-gray-700" /> 我的产品
      </h1>

      <div className="brutalist-border p-8 md:p-20 bg-[#010101] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16 min-h-[800px]">
        <div className="absolute top-4 left-4 text-gray-800 font-mono text-[10px] tracking-[0.5em] uppercase">Project // 001: SHANG SHANG QIAN</div>
        
        <div className="lg:w-1/2 flex flex-col z-10 pt-10">
          <h2 className="text-6xl md:text-8xl font-black font-serif text-white mb-6 tracking-tighter uppercase leading-none italic">上上签</h2>
          <p className="text-[#a67c52] font-mono text-xs mb-10 tracking-[0.3em] uppercase font-bold">The Oracle Bucket</p>
          <div className="w-12 h-[1px] bg-[#4a3728] mb-10"></div>
          <p className="text-gray-400 text-lg leading-relaxed font-light mb-12 max-w-md">
            在这个充满不确定性的世界里，每一根木签都是一份坚定的心理锚点。点击圆柱木质签筒，摇晃岁月的波长，抽选一段属于你的积极话语。每一签，皆是上上。
          </p>
          <div className="flex gap-4 text-gray-700 text-[10px] font-mono uppercase tracking-widest">
            <span>200+ Positive Answers</span>
            <span>/</span>
            <span className="text-[#8b5e34]">Pure Wood Craft</span>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col items-center justify-center relative w-full h-[550px] pt-24 lg:pt-32">
          {currentFortune && (
            <div className="absolute top-20 lg:top-32 fortune-stick-active z-50 flex flex-col items-center">
               <div className="relative bg-gradient-to-b from-[#4a3728] to-[#1a110a] w-[50px] md:w-[70px] h-[260px] md:h-[350px] shadow-[30px_30px_60px_rgba(0,0,0,0.9)] border-[1px] border-[#8b5e34]/30 flex items-center justify-center p-4">
                  <div className="absolute inset-0 wood-texture"></div>
                  <div className="absolute inset-[4px] border-[0.5px] border-[#a67c52]/20"></div>
                  <div className="writing-vertical text-[#e6ba95] font-serif text-lg md:text-2xl font-bold tracking-[0.3em] leading-tight z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {currentFortune}
                  </div>
                  <div className="absolute bottom-4 w-5 h-5 rounded-full border-[1.5px] border-[#a67c52]/40"></div>
               </div>
               <button onClick={() => setCurrentFortune(null)} className="mt-12 text-[#a67c52] hover:text-white transition-all flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest bg-black py-2 px-8 border-[1px] border-[#4a3728] relative z-[60]">
                 <RotateCw size={12} /> Re-try Ceremony
               </button>
            </div>
          )}

          {!currentFortune && (
            <div onClick={handleDraw} className={`relative cursor-pointer transition-all duration-300 ${isShaking ? 'shake-active' : 'hover:scale-105 group'}`}>
              <div className="absolute top-0 left-0 w-full h-[35px] md:h-[45px] bg-[#1a110a] rounded-[100%] border-[2px] border-[#4a3728] z-0 shadow-inner"></div>
              <div className="absolute top-[-35px] left-1/2 -translate-x-1/2 flex gap-1 items-end h-[100px] z-10 px-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2 md:w-3 bg-gradient-to-t from-[#2d1e12] to-[#6d4c41] h-full origin-bottom rounded-t-sm shadow-md" style={{ transform: `rotate(${(i - 2.5) * 6}deg) translateY(${Math.random() * 20}px)`, opacity: isShaking ? 0.4 : 1 }}></div>
                ))}
              </div>
              <div className="w-[140px] md:w-[190px] h-[210px] md:h-[300px] mt-[18px] md:mt-[23px] cylinder-body relative z-20 rounded-b-[45px] md:rounded-b-[65px] shadow-[0_45px_90px_rgba(0,0,0,0.8)] border-x-[0.5px] border-b-[2px] border-[#4a3728]/50 overflow-hidden">
                 <div className="absolute inset-0 wood-texture"></div>
                 <div className="absolute top-10 w-full h-4 bg-gradient-to-r from-[#8b5e34] via-[#f3d5b5] to-[#8b5e34] border-y-[1px] border-[#4a3728] opacity-50 shadow-inner"></div>
                 <div className="absolute bottom-14 w-full h-4 bg-gradient-to-r from-[#8b5e34] via-[#f3d5b5] to-[#8b5e34] border-y-[1px] border-[#4a3728] opacity-50 shadow-inner"></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-36 md:w-36 md:h-48 border-[1px] border-[#a67c52]/30 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px]">
                       <div className="text-[9px] font-mono text-[#a67c52] mb-5 tracking-[0.5em] opacity-40 uppercase font-bold">Divine Project</div>
                       <span className="text-[#e6ba95] font-serif text-5xl md:text-8xl drop-shadow-[0_12px_12px_rgba(0,0,0,0.7)]">籤</span>
                       <div className="w-10 h-[1px] bg-[#a67c52]/30 mt-8"></div>
                    </div>
                 </div>
                 {isShaking && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30">
                      <div className="text-[10px] font-mono text-white tracking-[0.8em] animate-pulse">摇晃中...</div>
                   </div>
                 )}
              </div>
              <div className="w-[160px] md:w-[230px] h-12 bg-black/90 rounded-[100%] blur-3xl mt-5 mx-auto"></div>
              <div className="mt-14 text-center">
                 <p className="text-[#8b5e34] font-mono text-[10px] uppercase tracking-[0.6em] animate-pulse group-hover:text-white transition-colors">Tap to Shake</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-20 flex justify-center opacity-5">
         <div className="h-[1px] w-32 bg-white dashed"></div>
      </div>
    </div>
  );
}
