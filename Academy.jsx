import judge from "../assets/judge.png";
import fernandes from "../assets/fernandes.png";
import invest from "../assets/invest.png";
import meeting from "../assets/meeting.png";
import iron from "../assets/iron.png";
import green from "../assets/green house.svg";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import woman1 from "../assets/woman1.png";
import woman2 from "../assets/woman2.png";
import woman3 from "../assets/woman3.png";



function Academy() {
  return (
    <div>
                 <img src={judge} alt="bn image"></img>
                 <h1  className="font-bold ml-[120px] mt-[100px] text-[20px]">법률자문 서비스</h1>
<p  className=" ml-[120px] mt-[20px] text-[20px]">유치권, 명도소송, 가등기 등 복잡한 부동산 법률 문제를 빠르고 정확하게 해결합니다.</p>

      

      
<div className="flex gap-4 ml-[120px] mt-[40px]">
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



<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {/* First Image */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={fernandes} alt="Image" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="mt-4">
          <p className="text-[10px] font-semibold text-orange-500">부동산 · 유치권</p>
          <h3 className="text-lg font-medium mt-1">퍼스트존 법률사무소</h3>
          <p className="text-sm text-gray-500 mt-2">서울 강남구</p>
        </div>
      </div>

      {/* Second Image */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={invest} alt="Image" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="mt-4">
          <p className="text-[10px] font-semibold text-orange-500">부동산 · 유치권</p>
          <h3 className="text-lg font-medium mt-1">퍼스트존 법률사무소</h3>
          <p className="text-sm text-gray-500 mt-2">서울 강남구</p>
        </div>
      </div>

      {/* Third Image */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={meeting} alt="Image" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="mt-4">
          <p className="text-[10px] font-semibold text-orange-500">부동산 · 유치권</p>
          <h3 className="text-lg font-medium mt-1">퍼스트존 법률사무소</h3>
          <p className="text-sm text-gray-500 mt-2">서울 강남구</p>
        </div>
      </div>

      {/* Fourth Image */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <img src={iron} alt="Image" className="w-full h-48 object-cover rounded-t-lg" />
        <div className="mt-4">
          <p className="text-[10px] font-semibold text-orange-500">부동산 · 유치권</p>
          <h3 className="text-lg font-medium mt-1">퍼스트존 법률사무소</h3>
          <p className="text-sm text-gray-500 mt-2">서울 강남구</p>
        </div>
      </div>
      </div>
<button class="flex items-center gap-4 px-6 sm:px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 transition mt-[100px] ml-[600px]"><span class="text-white font-bold text-sm sm:text-lg">통합 컨설팅 상담 신청</span><div class="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">→</div></button>



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


<h1 className="font-bold ml-[120px] mt-[100px] text-[20px]">변호사</h1>
<p className=" ml-[120px] mt-[10px] text-[15px]">다양한 분야의 전문 변호사들이 여러분의 어려움을 해결해드립니다.</p>




<div class="bg-blue-50 rounded-xl p-4 sm:p-6 mb-8 sm:mb-10 w-[1430px] ml-[50px] mt-[50px]"><span class="text-blue-600 font-semibold text-sm">이벤트</span><p class="mt-1 font-bold">4월 한달간 변호사 수임료 50% 할인</p></div>   







<div class="flex gap-2 mb-8 sm:mb-10 overflow-x-auto scrollbar-hide ml-[50px]"><button class="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition">인기순</button><button class="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition">추천순</button><button class="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition">리뷰순</button><button class="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition">분야별</button><button class="px-4 py-2 rounded-full text-sm bg-gray-100 hover:bg-black hover:text-white whitespace-nowrap transition">지역 찾기</button></div>




<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  ">
  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={man1} alt="김대성 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">김대성 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">부동산 전문</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={man2} alt="박지훈 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">박지훈 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">경매 · NPL</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={man3} alt="이수현 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">이수현 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">부동산 소송</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={woman1} alt="정민재 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">정민재 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">채권 추심</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={woman2} alt="오세훈 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">오세훈 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">부동산 자문</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={woman3} alt="최은지 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">최은지 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">경매 컨설팅</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={man1} alt="한지민 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">한지민 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">부동산 계약</p>
  </div>

  <div className="text-center">
    <div className="w-[300px] mx-auto overflow-hidden rounded-xl">
      <img src={man2} alt="윤성호 변호사" className="w-[300px] h-[250px] object-cover rounded-[20px]" />
    </div>
    <h4 className="mt-2 font-bold text-sm sm:text-base">윤성호 변호사</h4>
    <p className="text-xs sm:text-sm text-gray-500">법률 자문</p>
  </div>
</div>


<h1 className="font-bold ml-[120px] mt-[100px] text-[20px]">최신 상담글</h1>
<p  className=" ml-[120px] mt-[10px] text-15px]" >생생한 상담 내용과 후기들을 확인해보세요.</p>








<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="border rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:shadow-lg transition-shadow cursor-pointer h-full w-[600px] ml-[120px]">
    <div>
      <span class="text-sm text-orange-500 font-semibold">
        부동산 · 유치권
      </span>
      <h3 class="mt-3 font-bold text-base sm:text-lg">
        지상권 등기 원인 무효와 지상권 진로 관련 문제
      </h3>
      <p class="mt-3 text-base text-gray-600 line-clamp-2">
        상담을 진행하며 발생한 복잡한 지상권 문제에 대해 조언을 구합니다.
      </p>
    </div>
    <p class="mt-6 text-sm text-gray-400">
      2025.04.05
    </p>
  </div>

  <div class="border rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:shadow-lg transition-shadow cursor-pointer h-full w-[600px]">
    <div>
      <span class="text-sm text-orange-500 font-semibold">
        부동산 · 유치권
      </span>
      <h3 class="mt-3 font-bold text-base sm:text-lg">
        지상권 등기 원인 무효와 지상권 진로 관련 문제
      </h3>
      <p class="mt-3 text-base text-gray-600 line-clamp-2">
        상담을 진행하며 발생한 복잡한 지상권 문제에 대해 조언을 구합니다.
      </p>
    </div>
    <p class="mt-6 text-sm text-gray-400">
      2025.04.05
    </p>
  </div>

  <div class="border rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:shadow-lg transition-shadow cursor-pointer h-full w-[600px] ml-[120px]">
    <div>
      <span class="text-sm text-orange-500 font-semibold">
        부동산 · 유치권
      </span>
      <h3 class="mt-3 font-bold text-base sm:text-lg">
        지상권 등기 원인 무효와 지상권 진로 관련 문제
      </h3>
      <p class="mt-3 text-base text-gray-600 line-clamp-2">
        상담을 진행하며 발생한 복잡한 지상권 문제에 대해 조언을 구합니다.
      </p>
    </div>
    <p class="mt-6 text-sm text-gray-400">
      2025.04.05
    </p>
  </div>

  <div class="border rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white hover:shadow-lg transition-shadow cursor-pointer h-full w-[600px]">
    <div>
      <span class="text-sm text-orange-500 font-semibold">
        부동산 · 유치권
      </span>
      <h3 class="mt-3 font-bold text-base sm:text-lg">
        지상권 등기 원인 무효와 지상권 진로 관련 문제
      </h3>
      <p class="mt-3 text-base text-gray-600 line-clamp-2">
        상담을 진행하며 발생한 복잡한 지상권 문제에 대해 조언을 구합니다.
      </p>
    </div>
    <p class="mt-6 text-sm text-gray-400">
      2025.04.05
    </p>
  </div>
</div>










<div class="flex justify-center mt-8 sm:mt-10"><button class="px-6 py-2 bg-gray-100 hover:bg-black hover:text-white rounded-full text-sm transition">더보기 +</button></div>
















     
<div className='flex  bg-[#141414]  h-[300px] mt-[100px]'>

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

export default Academy;
