import blual from "../assets/blual.jpg";
import confrencehall from "../assets/confrencehall.png";
import meetinghall from "../assets/meetinghall.png";
import musicroom from "../assets/musicroom.png";
import lectures from "../assets/lectures.png";
import blackclass from "../assets/blackclass.png";
import ideameeting from "../assets/ideameeting.png";
import interview from "../assets/interview.png";
import professor from "../assets/professor.png";
import wbuild from "../assets/wbuild.png";
import coins from "../assets/coins.png";
import bbuild from "../assets/coins.png";
import x from "../assets/x.png";

export default function Contact() {
  return (
    <div>
      {/* Title */}
      <h1 className="font-bold text-[50px] ml-[550px] mt-[80px]">
        풀하우스 통합 검색
      </h1>

      <p className="font-bold text-[20px] ml-[420px] mt-[20px]">
        네이버, 밴드, 카페를 검색하고, 가입 없이 풀하우스에서 최신 정보를 확인하세요.
      </p>

      {/* Search */}
      <div className="flex justify-center mt-[40px]">
        <div className="relative w-[600px]">
          <input
            type="text"
            placeholder="검색어를 입력하세요."
            className="w-full h-[55px] rounded-full border border-gray-300 pl-6 pr-14 text-[16px] focus:outline-none"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-5 top-1/2 -translate-y-1/2"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-center mt-[20px] ml-[50px]">
        <div className="flex gap-3 flex-wrap w-[600px]">
          {["#부동산", "#NPL", "#경매", "#투자", "#대출"].map((tag, i) => (
            <div
              key={i}
              className="px-4 py-2 bg-[#EEEEEE] rounded-full text-[14px] font-bold text-[#555555]"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* First Grid (투자/교육 카드) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {/* First Item */}
        <div className="flex gap-3 bg-white p-2 items-start rounded-lg shadow-sm  w-[500px] ml-[220px]">
          <img
            src={wbuild}
            alt="2025 NEW NPL 투자 기초반"
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
          <div>
            <span className="text-xs text-orange-500">🔥 인기</span>
            <h4 className="text-sm font-medium mt-1 line-clamp-2">
              2025 NEW NPL 투자 기초반
            </h4>
            <p className="text-xs text-gray-500 mt-2">
              부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?
            </p>
            <p className="text-xs text-gray-400 mt-1">2025. 4. 5</p>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex gap-3 bg-white p-2 items-start rounded-lg shadow-sm  w-[500px]">
          <img
            src={coins}
            alt="NPL 경매 실전 후기"
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
          <div>
            <span className="text-xs text-orange-500">🔥 인기</span>
            <h4 className="text-sm font-medium mt-1 line-clamp-2">
              NPL 경매 실전 후기
            </h4>
            <p className="text-xs text-gray-500 mt-2">
              부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?
            </p>
            <p className="text-xs text-gray-400 mt-1">2025. 4. 2</p>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex gap-3 bg-white p-2 items-start rounded-lg shadow-sm  w-[500px] ml-[220px]">
          <img
            src={bbuild}
            alt="부동산 투자 트렌드 분석"
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
          <div>
            <span className="text-xs text-orange-500">🔥 인기</span>
            <h4 className="text-sm font-medium mt-1 line-clamp-2">
              부동산 투자 트렌드 분석
            </h4>
            <p className="text-xs text-gray-500 mt-2">
              부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?
            </p>
            <p className="text-xs text-gray-400 mt-1">2025. 3. 28</p>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="flex gap-3 bg-white p-2 items-start rounded-lg shadow-sm  w-[500px]">
          <img
            src={x}
            alt="초보자를 위한 NPL 가이드"
            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
            loading="lazy"
          />
          <div>
            <span className="text-xs text-orange-500">🔥 인기</span>
            <h4 className="text-sm font-medium mt-1 line-clamp-2">
              초보자를 위한 NPL 가이드
            </h4>
            <p className="text-xs text-gray-500 mt-2">
              부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?
            </p>
            <p className="text-xs text-gray-400 mt-1">2025. 3. 20</p>
          </div>
        </div>
      </div>

      {/* Second Grid (주제별 인기 카페) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">주제별 인기 카페</h2>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-8 overflow-x-auto">
            {[
              "전체",
              "시행·시공",
              "인테리어",
              "NPL 학원",
              "법무",
              "대부(사금융)",
            ].map((item, i) => (
              <button
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: confrencehall, title: "컨퍼런스 홀", count: "2,356" },
              { img: meetinghall, title: "미팅 홀", count: "1,870" },
              { img: musicroom, title: "뮤직 룸", count: "920" },
              { img: lectures, title: "강의실", count: "1,320" },
              { img: blackclass, title: "블랙 클래스", count: "840" },
              { img: ideameeting, title: "아이디어 미팅", count: "1,560" },
              { img: interview, title: "인터뷰 룸", count: "610" },
              { img: professor, title: "교수 연구실", count: "2,890" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-3">
                  <span className="text-xs text-orange-500">네이버카페</span>
                  <h3 className="text-sm font-semibold mt-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    가입자수 {item.count}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* More Button */}
          <button className="mx-auto mt-10 block px-6 py-2 border rounded-full text-sm hover:bg-black hover:text-white transition">
            더보기 +
          </button>
        </div>
      </section>

      {/* Banner Image */}
      <img src={blual} alt="banner" className="mt-[50px] w-full" />

      {/* Footer */}
      <div className="flex bg-[#141414] h-[300px]">
        <div className="ml-[230px] mt-[50px]">
          <h1 className="font-bold text-[25px] text-white">FULLHOUSE</h1>
          <h1 className="mt-[30px] text-white">
            이메일무단수집거부이용약관
          </h1>
          <h1 className="mt-[27px] text-[#b4b4b4] text-[10px]">
            서울특별시 강남구 언주로 651 삼원빌딩 8층
          </h1>
          <div className="bg-[#b4b4b4] w-[850px] h-[1px] mt-[10px]"></div>
          <h1 className="mt-[30px] text-[#b4b4b4] text-[15px]">
            Copyrightⓒ HMKholdings. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}
