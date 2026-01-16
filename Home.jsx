import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";
import BookSlider from "../BookSlider";
import FAQAccordion from "../FAQAccordion";
import AutoCarousel from "../AutoCarousel";
import PartnerSearchSection from "./PartnerSearchSection";


import scrapper from "../assets/scrapper.jpg";
import palour from "../assets/palour.jpg";
import building from "../assets/building.jpg";
import windowImg from "../assets/window.jpg";
import penthouse from "../assets/penthouse.jpg";
import poolside from "../assets/poolside.jpg";
import houseImg from "../assets/house.jpg";

import CenterSlider from "./CenterSlider";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';  

function App() {
const [offset, setOffset] = useState(700);

  return (
    <div  className="max-w-[1200px] mx-auto px-4">
 


<BookSlider/>


  <CenterSlider />








      {/* Latest NPL Section */}
      <h1 className='ml-[700px] font-bold mt-5 text-[25px]'>최신 NPL 물건</h1>
      <p className='text-[13px] ml-[510px]'>엄선된 반값 부동산 물건을 만나보세요. 모든 어려움은 풀하우스의 전문가 집단이 해결해드립니다. </p>






      <div className='flex gap-4 mt-4 ml-[250px]'>
        <img src={windowImg} alt="window" className="w-[500px] h-[400px] rounded-[10px]" />
        <img src={poolside} alt="poolside" className="w-[500px] h-[400px] rounded-[10px]" />
      </div>

      <div className='flex gap-4 mt-2 ml-[230px]'>
        <div className="w-[260px] rounded-[10px] p-4 text-black">
          <div className="flex items-center gap-1 text-[14px]">
            <span className="text-[#FF7D2F]">★</span>
            <span className="font-bold text-[#FF7D2F]">4.0</span>
          </div>
          <h3 className="font-bold mt-1">2024-105003</h3>
          <p className="text-[13px] mt-1">서울시 중랑구 면목동:근린주택</p>
        </div>
        <div className="w-[260px] rounded-[10px] p-4 text-black ml-[250px]">
          <div className="flex items-center gap-1 text-[14px]">
            <span className="text-[#FF7D2F]">★</span>
            <span className="font-bold text-[#FF7D2F]">4.0</span>
          </div>
          <h3 className="font-bold mt-1">2024-105003</h3>
          <p className="text-[13px] mt-1">서울시 중랑구 면목동:근린주택</p>
        </div>
      </div>

      <div className='flex gap-4 mt-4 ml-[250px]'>
        <img src={penthouse} alt="penthouse" className="w-[500px] h-[400px] rounded-[10px]" />
        <img src={houseImg} alt="house" className="w-[500px] h-[400px] rounded-[10px]" />
      </div>



      <div className='flex gap-4 mt-2 ml-[230px]'>
        <div className="w-[260px] rounded-[10px] p-4 text-black">
          <div className="flex items-center gap-1 text-[14px]">
            <span className="text-[#FF7D2F]">★</span>
            <span className="font-bold text-[#FF7D2F]">4.0</span>
          </div>
          <h3 className="font-bold mt-1">2024-105003</h3>
          <p className="text-[13px] mt-1">서울시 중랑구 면목동:근린주택</p>
        </div>
        <div className="w-[260px] rounded-[10px] p-4 text-black ml-[250px]">
          <div className="flex items-center gap-1 text-[14px]">
            <span className="text-[#FF7D2F]">★</span>
            <span className="font-bold text-[#FF7D2F]">4.0</span>
          </div>
          <h3 className="font-bold mt-1">2024-105003</h3>
          <p className="text-[13px] mt-1">서울시 중랑구 면목동:근린주택</p>
        </div>
      </div>


      <AutoCarousel />



      <FAQAccordion />

      {/* 풀하우스 이야기 */}
      <h1 className='ml-[600px] font-bold mt-10 text-[30px]'>풀하우스 이야기</h1>
      <h1 className='ml-[520px]  mt-5 text-[19px]'>풀하우스의 다양한 이야기를 확인해보세요.</h1>

      <div className='flex gap-4 mt-5 ml-[20px]'>
        {[scrapper, palour, building].map((imgSrc, i) => (
          <div key={i} className='w-[500px] h-[280px] bg-[#B0B0B0] rounded-[10px] relative'>
            <img src={imgSrc} alt={`story-${i}`} className='w-full h-full rounded-[10px]'/>
            <div className="absolute flex justify-center items-center w-15 h-10 bg-[#ED1D24] rounded-[13px] shadow-lg cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.25 4.5l14.25 7.5-14.25 7.5V4.5z"/>
              </svg>
            </div>
          </div>
        ))}
      </div>



 <PartnerSearchSection />


  

<div className='flex  bg-[#141414]  h-[300px] mt-10'>

  <div className='ml-[230px] mt-[50px]'>
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

export default App;
