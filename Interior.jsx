import { useEffect } from "react";

import bn from "../assets/confrence.png";
import teacher from "../assets/teacher.png";
import classroom from "../assets/classroom.png";
import laptop from "../assets/laptop.png";
import class1 from "../assets/class.png";
import green from "../assets/green house.svg";
import sign from "../assets/sign.png";
import idea from "../assets/idearoom.png";
import korean from "../assets/korean.png";
import bar from "../assets/bar.png";
import wbuild from "../assets/wbuild.png";
import coins  from "../assets/coins.png";
import bbuild  from "../assets/coins.png";
import x  from "../assets/x.png";
import stock  from "../assets/stockmarket.png";
import writing from "../assets/writing.png";
import blual from "../assets/blual.jpg";


function Interior() {
  return (
   <div>
<img src={bn} alt="bn image"></img>
<h1  className="font-bold ml-[120px] mt-[50px] text-[20px]">NPL 특수물건 학원</h1>
<p  className=" ml-[120px] mt-[10px] text-[20px]">NPL 전문가가 되고 싶으신가요? 차별화된교육을 직.</p>
<h1  className="font-bold ml-[120px] mt-[50px] text-[20px]">풀하우스만의 차별화된 NPL 교육</h1>

<div className="">
  <div className="flex gap-6 mt-[50px] ml-[120px]">
    <div className="relative">
      <img src={teacher} alt="image 1" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={classroom} alt="image 2" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>

    <div className="relative">
      <img src={laptop} alt="image 3" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={class1} alt="image 4" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>
  </div>
</div>







<div className="bg-[#E0F1BC] h-[200px] rounded-[20px] flex items-center justify-between px-6 mt-[50px] w-[1430px] ml-[50px]">
  {/* Left text */}
  <div>
    <h1 className="font-bold text-[#527308] text-[25px]">
      NPL 실전투자
    </h1>
    <p className="font-bold text-[20px] mt-[15px]">
경매를 이기는 투자 바이블 놓치지 마세요!    </p>
  </div>

  {/* Right image */}
  <img
    src={green}
    alt="green house"
    className="h-[150px] object-contain"
  />
</div>

<h1  className="font-bold ml-[120px] mt-[50px] text-[20px]">지역별</h1>




<div className="flex gap-4 ml-[120px] mt-[20px]">
  <div
    onClick={(e) => e.target.classList.toggle("bg-[#2f2f2f]")}
    className="bg-white text-black px-6 py-3 rounded-full border-solid border-[1px] border-gray-400 cursor-pointer"
  >
    강남구
  </div>

  <div
    onClick={(e) => e.target.classList.toggle("bg-[#2f2f2f]")}
    className="bg-white text-black px-6 py-3 rounded-full border-solid border-[1px] border-gray-400 cursor-pointer"
  >
    서초구
  </div>

  <div
    onClick={(e) => e.target.classList.toggle("bg-[#2f2f2f]")}
    className="bg-white text-black px-6 py-3 rounded-full border-solid border-[1px] border-gray-400 cursor-pointer"
  >
    송파구
  </div>

  <div
    onClick={(e) => e.target.classList.toggle("bg-[#2f2f2f]")}
    className="bg-white text-black px-6 py-3 rounded-full border-solid border-[1px] border-gray-400 cursor-pointer"
  >
    마포구
  </div>
</div>









<div className="">
  <div className="flex gap-6 mt-[50px] ml-[120px]">
    <div className="relative">
      <img src={sign} alt="image 1" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={idea} alt="image 2" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>

    <div className="relative">
      <img src={teacher} alt="image 3" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={class1} alt="image 4" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>
  </div>
</div>















<div className="">
  <div className="flex gap-6 mt-[50px] ml-[120px]">
    <div className="relative">
      <img src={classroom} alt="image 1" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={korean} alt="image 2" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>

    <div className="relative">
      <img src={bar} alt="image 3" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        강남 NPL 경매학원
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        서울 강남구
      </div>
    </div>

    <div className="relative">
      <img src={laptop} alt="image 4" className="w-[300px] h-[200px] rounded-[25px]" />
      <div className="text-[#D77F2C] text-sm mt-2">
        <span className="text-yellow-500">★</span> 추천
      </div>
      <div className="text-[#00000] font-bold  mt-1">
        서울 강남구
      </div>
      <div className="text-[#64748b] text-sm mt-1">
        강남 NPL 경매학원
      </div>
    </div>
  </div>
</div>





<h1  className="font-bold ml-[120px] mt-[50px] text-[20px]">커뮤니티</h1>
<p  className=" ml-[120px] mt-[10px] text-[15px] text-[#64748b]">엄선된 NPL 학원 관련 모든 커뮤니티 글을 확인해보세요.</p>



<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
  {/* First Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={wbuild} alt="2025 NEW NPL 투자 기초반" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">2025 NEW NPL 투자 기초반</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 4. 5</p>
    </div>
  </div>

  {/* Second Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={coins} alt="NPL 경매 실전 후기" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">NPL 경매 실전 후기</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 4. 2</p>
    </div>
  </div>

  {/* Third Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={bbuild} alt="부동산 투자 트렌드 분석" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">부동산 투자 트렌드 분석</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 3. 28</p>
    </div>
  </div>

  {/* Fourth Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={x} alt="초보자를 위한 NPL 가이드" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">초보자를 위한 NPL 가이드</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 3. 20</p>
    </div>
  </div>

  {/* Fifth Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={stock} alt="NPL 수익 구조 완전 정리" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">NPL 수익 구조 완전 정리</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 3. 15</p>
    </div>
  </div>

  {/* Sixth Item */}
  <div className="flex gap-3 bg-[#e8f6d1] p-3 items-start rounded-lg">
    <img src={writing} alt="법률 리스크 체크 포인트" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" loading="lazy" />
    <div>
      <span className="text-xs text-orange-500">🔥 인기</span>
      <h4 className="text-sm font-medium mt-1 line-clamp-2">법률 리스크 체크 포인트</h4>
      <p className="text-xs text-gray-500 mt-2">부실채권(NPL)을 효과적으로 관리하면 금융기관에 어떤 긍정적인 영향을 미칠 수 있나요?</p>
      <p className="text-xs text-gray-400 mt-1">2025. 3. 10</p>
    </div>
  </div>
</div>

<button class="px-6 py-2 border rounded-full text-sm hover:bg-gray-100 transition ml-[700px] mt-[100px]">더보기 +</button> 







<img src={blual} alt="blual" className="mt-[100px]"></img>









     
<div className='flex  bg-[#141414]  h-[300px] '>

  <div className='ml-[280px] mt-[50px]'>
    <h1 className='font-bold text-[25px] text-[#ffffff]'>FULLHOUSE</h1>
    <h1 className='mt-[30px] text-[#ffffff]'>이메일무단수집거부이용약관</h1>
    <h1 className="mt-[27px] text-[#b4b4b4] text-[10px]">서울특별시 강남구 언주로 651 삼원빌딩 8층</h1>
    <div className='bg-[#b4b4b4] w-[850px] h-[1px] mt-[10px]'></div>
    <h1 className='mt-[30px] text-[#b4b4b4] text-[15px]'>Copyrightⓒ HMKholdings. All rights reserved.</h1>
  </div>
    <div></div>

</div>



   </div>
  );
}

export default Interior;
