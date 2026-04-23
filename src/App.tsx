/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wind, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  X, 
  Info,
  Heart,
  Leaf,
  Moon,
  Sun,
  Coffee,
  ExternalLink,
  Smartphone,
  Apple
} from "lucide-react";

// --- Components ---

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  key?: string | number;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-clean-primary/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Modal Header - Fixed */}
          <div className="flex justify-between items-center px-8 py-6 shrink-0 bg-white z-20 border-b border-clean-border/20">
            <h3 className="text-2xl font-serif font-bold text-clean-primary">{title}</h3>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-clean-bg rounded-lg transition-colors text-clean-secondary active:scale-90"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="px-8 py-8 overflow-y-auto grow custom-scrollbar bg-white">
            <div className="text-clean-secondary leading-relaxed font-sans text-lg">
              {children}
            </div>
          </div>

          {/* Modal Footer - Fixed */}
          <div className="p-6 shrink-0 flex justify-center bg-clean-bg/30 border-t border-clean-border/20 z-20">
            <button 
              onClick={onClose}
              className="px-10 py-3 bg-clean-accent text-white rounded-full font-bold hover:shadow-lg transition-all active:scale-95 text-base"
            >
              我知道了
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-left mb-16"
  >
    <div className="text-clean-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">Focus Point</div>
    <h2 className="text-5xl font-serif text-clean-primary mb-6">{title}</h2>
    {subtitle && <p className="text-lg text-clean-secondary max-w-2xl leading-relaxed">{subtitle}</p>}
  </motion.div>
);

// --- Main Application ---

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [finalConclusion, setFinalConclusion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const coreConcepts = [
    {
      id: "what",
      icon: <Wind size={20} />,
      title: "01 什麼是正念",
      summary: "專注於此時此刻，不對過去感到懊悔，也不對未來感到焦慮。",
      content: "正念並非「放空」或「不想事情」，而是一種特殊的注意模式。卡巴金博士（Jon Kabat-Zinn）定義為：有目的地、在當下、不加評判地去覺察事物。它能幫助我們跳脫自動導航模式，更清晰地看見自己的內在狀態。"
    },
    {
      id: "benefits",
      icon: <Heart size={20} />,
      title: "02 衛教資源",
      summary: "臨床研究顯示，持續練習能降低壓力中心活性，提升情緒調節能力。",
      content: "臨床研究顯示，持續的正念練習能降低大腦杏仁核（壓力中心）的活性，並增加前額葉皮質（決策與情緒調節中心）的連結。對於焦慮、慢性疼痛及憂鬱復發都有顯著地輔助效果。"
    },
    {
      id: "practice",
      icon: <Sparkles size={20} />,
      title: "03 實踐時機",
      summary: "隨時隨地。洗碗時感受水的溫度、走路時觀察足部的觸感。",
      content: "你可以從簡單的「正念呼吸」開始：找一個舒適的身姿，感受空氣進入與離開鼻尖的感覺。當念頭飄走時（這很正常），溫柔地將注意力帶回呼吸。關鍵不在於制止念頭，而在於意識到它飄走並帶回來。"
    }
  ];

  return (
    <div className="relative min-h-screen bg-clean-bg selection:bg-clean-accent/30 selection:text-clean-primary">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-clean-accent z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-white rounded-full opacity-40 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <div className="text-clean-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">Mindfulness Intro</div>
          <h1 className="text-6xl sm:text-7xl font-serif text-clean-primary tracking-tight leading-[1.1] mb-8">
            在繁瑣的世界裡 <br />
            練習「覺察」
          </h1>
          <p className="text-xl text-clean-secondary max-w-2xl mx-auto leading-relaxed mb-12">
            正念不是要你放空，而是有意識地觀察當下的感受。
            不帶批判地與自己相處，讓心靈重獲平靜。
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a 
              href="#intro" 
              className="bg-clean-accent text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3 w-fit mx-auto"
            >
              開始探索 
              <ChevronRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction / Content Section with the Stripe Card Style */}
      <section id="intro" className="py-24 sm:py-32 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-20">
          <SectionHeading 
            title="核心內容與實踐" 
            subtitle="讓正念成為您的日常習慣，從每天五分鐘開始。簡單來說，就是「人在心在」。" 
          />
          
          <div className="space-y-6">
            {coreConcepts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveModal(item.id)}
                className="info-stripe-card"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-clean-primary flex items-center gap-3">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-clean-accent bg-clean-accent/10 px-3 py-1 rounded">重點</span>
                </div>
                <p className="text-clean-secondary leading-relaxed">{item.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Sections: Where & When - Modified for Minimalism */}
      <section className="bg-white py-32 border-y border-clean-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            {/* Where Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-clean-accent text-xs font-bold tracking-[0.2em] mb-4">RESOURCES</div>
              <h2 className="text-4xl font-serif text-clean-primary mb-10">哪裡可以獲取資源？</h2>
              <div className="grid gap-4">
                {[
                  { id: "cm-center", title: "華人正念減壓", desc: "華人正念減壓中心提供豐富的網站教學、影片，是學習正念減壓（MBSR）的權威資源。", link: "https://www.mindfulness.com.tw/" },
                  { id: "cm-course", title: "正念減壓 8 週課程", desc: "各大醫學中心（如台大、亞東、慈濟醫院）的身心科，及心理諮商所常設有 MBSR 專業課程。", link: "https://www.mindfulness.com.tw/course/%E8%BA%AB%E5%BF%83%E5%81%A5%E5%BA%B7%E8%AA%B2%E7%A8%8B-i.1" },
                  { id: "digital-tools", title: "數位引導工具", desc: "推薦 Insight Timer、The Breathing App 及 Tide，點擊查看各平台下載連結。", isModal: true },
                  { id: "books", title: "經典書籍閱讀", desc: "推薦卡巴金博士的《正念療癒力》，是深度理解正念醫療應用的必讀經典。" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={(item.link || item.isModal) ? { scale: 1.02 } : {}}
                    className={`p-6 bg-clean-bg/40 rounded-xl border border-transparent transition-all ${(item.link || item.isModal) ? 'hover:border-clean-accent/40 cursor-pointer shadow-sm bg-white' : ''}`}
                    onClick={() => {
                      if (item.link) window.open(item.link, '_blank');
                      if (item.isModal) setActiveModal(item.id);
                    }}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-clean-primary">{item.title}</h4>
                      {(item.link || item.isModal) && <ExternalLink size={14} className="text-clean-accent" />}
                    </div>
                    <p className="text-clean-secondary text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* When Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-clean-accent text-xs font-bold tracking-[0.2em] mb-4">PRACTICE MOMENTS</div>
              <h2 className="text-4xl font-serif text-clean-primary mb-10">生活的正念瞬間</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Coffee />, label: "用餐時" },
                  { icon: <Sun />, label: "清晨醒來" },
                  { icon: <Moon />, label: "睡覺前" },
                  { icon: <Leaf />, label: "通勤中" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 border border-clean-border rounded-xl">
                    <div className="text-clean-accent">{item.icon}</div>
                    <div className="font-bold text-clean-primary">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-clean-secondary italic leading-relaxed">
                不只是坐著冥想，通勤、用餐、甚至在呼吸的瞬間，都能練習。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Interaction Area */}
      <section className="py-24 px-4 bg-clean-bg">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="互動提醒" 
            subtitle="點擊下方的重點，感受那些你平常可能忽略的細微知覺。" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { id: "tip1", label: "感受地板", color: "border-clean-border", text: "text-clean-primary", content: "閉上眼睛 10 秒，單純地感受你的腳掌與地板接觸的力量感。這能幫助你「落地」回歸當下。" },
              { id: "tip2", label: "觀察氣息", color: "border-clean-border", text: "text-clean-primary", content: "注意到你正在呼吸嗎？不用調整它，只是看著它進來，又看著它離開。" },
              { id: "tip3", label: "聽聽環境", color: "border-clean-border", text: "text-clean-primary", content: "現在周遭有什麼聲音？冷氣聲、遠處車聲、呼吸聲。不論好壞，聽聽它們就好。" },
              { id: "tip4", label: "檢視肩膀", color: "border-clean-border", text: "text-clean-primary", content: "你的肩膀現在是緊繃的嗎？試著在下一次吐氣時，讓它微微下沉一點點。" }
            ].map((tip) => (
              <button
                key={tip.id}
                onClick={() => setActiveModal(tip.id)}
                className={`p-6 rounded-xl border-2 hover:bg-white hover:border-clean-accent hover:shadow-sm transition-all text-left group font-bold ${tip.color} ${tip.text} flex justify-between items-center`}
              >
                {tip.label}
                <ChevronRight size={16} className="text-clean-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA Section - Updated for Minimalism */}
      <footer className="bg-white py-24 px-4 border-t border-clean-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-left">
            <h2 className="text-4xl font-serif text-clean-primary mb-4">領取核心結論</h2>
            <p className="text-clean-secondary max-w-sm">讓正念成為您的日常習慣，從每天五分鐘開始。</p>
          </div>
          <button
            onClick={() => setFinalConclusion(true)}
            className="bg-clean-accent text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3"
          >
            獲取核心結論 <Sparkles size={20} />
          </button>
        </div>
        <div className="max-w-4xl mx-auto mt-20 pt-10 border-t border-clean-border/50 text-center">
          <p className="text-clean-secondary/60 text-sm tracking-widest uppercase">
            &copy; 2026 Mindfulness Intro. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* Modals and Overlays */}
      {coreConcepts.map(item => (
        <Modal 
          key={item.id}
          isOpen={activeModal === item.id} 
          onClose={() => setActiveModal(null)}
          title={item.title}
        >
          {item.content}
        </Modal>
      ))}

      {/* Interaction Tips Modals */}
      {[
        { id: "tip1", title: "關於「落地」", content: "當你感到混亂時，連結感官（如觸覺）是最快平息焦慮的方式。腳踏實地，能給予大腦一股安全感的訊號。" },
        { id: "tip2", title: "呼吸是錨點", content: "呼吸永遠伴隨著你。它就像一個錨，在思緒像暴風雨一樣猛烈時，呼吸能將你穩固在當下的平靜港灣。" },
        { id: "tip3", title: "聽而不判", content: "練習不僅僅是專注，更是學會「客觀」。聽聲音時，試著不要標籤它是『好聽』或『吵鬧』，只是觀察聲波的起伏。" },
        { id: "tip4", title: "身體的訊號", content: "身體常比大腦更早反應壓力。學會覺察細微的緊繃，即意味著你開始擁有了自我調節情緒的主動權。" }
      ].map(tip => (
        <Modal 
          key={tip.id}
          isOpen={activeModal === tip.id} 
          onClose={() => setActiveModal(null)}
          title={tip.title}
        >
          {tip.content}
        </Modal>
      ))}

      {/* Digital Tools Modal */}
      <Modal
        isOpen={activeModal === "digital-tools"}
        onClose={() => setActiveModal(null)}
        title="推薦數位引導工具"
      >
        <div className="space-y-8">
          {[
            {
              name: "Insight Timer",
              featured: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&q=80&w=1200",
              desc: "全球最大的免費冥想資源庫，擁有上萬種引導。內容包含正念、睡眠與情緒調節。",
              web: "https://insighttimer.com/",
              ios: "https://apps.apple.com/tw/app/insight-timer-meditate-sleep/id337472899",
              android: "https://play.google.com/store/apps/details?id=com.spotlightsix.zentimerlite2"
            },
            {
              name: "Peace",
              featured: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
              desc: "Peace收錄了超過200種冥想練習課程，並會根據新手和已經有冥想經驗的使用者推薦不同的訓練課程，其中冥想課程則又分為基礎課程、療癒課程、情感課程、意識指引四大類別，幫助使用者依照自己想達成的目標選擇不一樣的練習。",
              web: "https://peace-app.com/",
              ios: "https://apps.apple.com/tw/app/peace-breathe-relax-calm/id6758351591",
              android: "https://play.google.com/store/apps/details?id=com.peace.ahc&hl=zh_TW"
            },
            {
              name: "Tide (潮汐)",
              featured: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200",
              desc: "將自然環境音與冥想結合。提供番茄鐘、睡眠與正念練習，設計極致簡潔優雅。",
              web: "https://tide.fm/",
              ios: "https://apps.apple.com/cn/app/%E6%BD%AE%E6%B1%90-%E7%9D%A1%E7%9C%A0%E7%9B%91%E6%B5%8B-%E5%8A%A9%E7%9C%A0-%E6%A2%A6%E8%AF%9D%E6%89%93%E9%BC%BE-%E5%86%A5%E6%83%B3-%E7%99%BD%E5%99%AA%E9%9F%B3-hrv%E5%8E%8B%E5%8A%9B/id1077776989",
              android: "https://play.google.com/store/apps/details?id=io.moreless.tide&hl=zh_TW"
            }
          ].map((app, index) => (
            <div key={index} className="border-b border-clean-border last:border-0 pb-12 last:pb-0">
              <div className="mb-4">
                <h4 className="font-bold text-2xl text-clean-primary">{app.name}</h4>
              </div>
              
              <div className="mb-6 overflow-hidden rounded-xl border border-clean-border shadow-sm aspect-video">
                <img 
                  src={app.featured} 
                  alt={`${app.name} preview`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-clean-secondary text-base leading-relaxed mb-8">{app.desc}</p>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href={app.web} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border border-clean-accent text-clean-accent rounded-full text-sm font-bold hover:bg-clean-accent/5 transition-colors shadow-sm"
                >
                  <ExternalLink size={16} /> 官方網站
                </a>
                <a 
                  href={app.ios} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  <Apple size={16} /> App Store
                </a>
                <a 
                  href={app.android} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-neutral-100 text-neutral-800 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors border border-neutral-300 shadow-sm"
                >
                  <Smartphone size={16} /> Google Play
                </a>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Final Conclusion Alert */}
      <AnimatePresence>
        {finalConclusion && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-clean-primary/60 backdrop-blur-sm"
              onClick={() => setFinalConclusion(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white p-12 rounded-2xl shadow-2xl max-w-lg text-center"
            >
              <h4 className="text-2xl font-serif font-bold text-clean-primary mb-6">核心結論</h4>
              <p className="text-xl text-clean-secondary leading-relaxed mb-10">
                「正念不代表問題會消失，而是讓我們擁有更大的容器去承載生命中的一切。」
              </p>
              <button 
                onClick={() => setFinalConclusion(false)}
                className="bg-clean-accent text-white px-10 py-3 rounded-full font-bold hover:shadow-lg transition-all"
              >
                關閉視窗
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
