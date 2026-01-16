import { useState } from "react";
import golden from "../assets/goldenframe.png";
import halfcircle from "../assets/halfcircle.png";
import bulb from "../assets/bulb.png";
import glass from "../assets/glass.png";
import circle from "../assets/circle.png";

export default function CenterSlider() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with center big

  const cards = [
    { img: glass, title: "시행 · 시공", desc: "NPL 특수물건과 관련된 개발 및 건설 프로젝트를 전문적으로 기획하고 실행하는 서비스로, 고객의 니즈에 맞는 맞춤형 솔루션을 제공합니다." },
    { img: bulb, title: "인테리어", desc: "특수물건의 가치를 극대화하기 위한 전문 인테리어 서비스로, 공간의 활용성을 높이고 투자 가치를 향상시키는 고급 인테리어를 제공합니다." },
    { img: golden, title: "NPL 특수물건 학원", desc: "NPL 특수물건에 대한 전문 지식과 시장 흐름을 익히는 교육을 운영하며, 실무 중심 강의로 전문가 성장을 돕습니다." },
    { img: halfcircle, title: "부동산 법률 자문", desc: "NPL 특수물건과 관련된 복잡한 법률 문제를 해결하기 위해 전문가의 맞춤형 자문 서비스를 제공합니다." },
    { img: circle, title: "대부 (사금융)", desc: "NPL 특수물건 투자 자금 지원을 통해 원활한 조달을 돕고, 신뢰 기반의 안전하고 유연한 금융 솔루션을 제공합니다." }
  ];

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-16 mt-[100px]">
      <div className=" w-full overflow-hidden  ">
        <div
          className="flex gap-5 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(50% - ${activeIndex * 340}px))` // card width + gap
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`flex-shrink-0 rounded-3xl transition-all duration-700
                  ${isActive
                    ? "w-[320px] h-[380px] bg-[#FFFAF7] scale-100 shadow-xl opacity-100"
                    : "w-[260px] h-[320px] bg-[#FBFBFC] scale-90 opacity-70"
                  }`}
              >
                <div className="h-full p-8 flex flex-col justify-end gap-4">
                  <div className={`w-[100px] h-[100px] transition-transform duration-700
                    ${isActive ? "scale-120 -translate-y-6" : "scale-100 -translate-y-4"}`}>
                    <img src={card.img} alt={card.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className={`text-xl font-bold ${isActive ? "text-gray-900" : "text-gray-500"}`}>{card.title}</h3>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-gray-700" : "text-gray-400"}`}>{card.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setActiveIndex((prev) => (prev + 1) % cards.length)}
        className="flex items-center justify-between w-80 px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
      >
        <span className="text-white font-bold text-lg">통합 컨설팅 상담 신청</span>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">→</div>
      </button>
    </div>
  );
}
