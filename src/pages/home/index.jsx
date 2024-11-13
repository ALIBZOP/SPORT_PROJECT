import React from 'react'
import Image from "next/image" 
import Link from "next/link";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import PhotoBaner from "../../assets/home/Image-baner.png"
import IconBaner from "../../assets/home/Icon-baner.png"
import NavbarSearchHome from "./NavbarSearchHome/NavbarSearchHome"
import ImageCard1 from "../../assets/userPanel/Image-Card1.jpg"
import {Button} from "@nextui-org/react";


function home() {

  const data = [

    { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 4, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 5, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },

  ]

  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden gap-10 ">
        <Header className="z-10"/>
          <div className="flex flex-row bg-home-image w-[1400px] h-[560px] text-white px-24 py-16 gap-20 mt-[80px]">
            <div className="absolute inset-0 h-[640px] bg-black opacity-40"></div>
              <div className="flex flex-row relative z-10 text-white p-8" gap-20>
                <div className="flex flex-col justify-center w-[400px] gap-20">
                  <div>
                    <h1 className="text-6xl w-full">دیگه وقتشه!</h1>
                  </div>
                    <div>
                      <p className="text-lg/[26px]">باشگاه فوتینو با بالا ترین امکنات روز دنیا و با رعایت نکات بهداشتی همواره در تلاش است بهترین خدمات را به شما ارائه دهد</p>
                    </div>
                    <div>
                      <Link href="/conditionHall" passHref>
                        <Button 
                          className="text-white px-14 py-8  bg-[#66B10B] gap-8 rounded-3xl" 
                        >
                          <p>مشاهده همه سانس ها</p>
                            <Image 
                              src={IconBaner}
                              width={40}
                              height={40}
                              alt="Picture of the author"
                            />
                        </Button>  
                      </Link>
                    </div>
                </div>
                <div className="justify-center absolute w-[600px] h-full top-[10px] right-[550px]">
                  <Image 
                    src={PhotoBaner}
                    alt="Picture of the author"
                    className="h-[400px] w-[681px]"
                  />
              </div>
            </div>
              <NavbarSearchHome />
          </div>
            <div className="w-[990px] h-[650px] mt-[150px] custom-scrollbar overflow-y-auto">
              {data.map((item) => (
                  <div key={item.id} className="flex flex-row w-[950px] h-[180px] border-1 border-black/5 shadow-md mb-[25px] gap-8 px-4 py-4 rounded-3xl">
                    <div>
                        <Image
                          src={item.image}
                          width={145}
                          height={135}
                          alt="Picture of the author"
                          className="rounded-[26px]"
                        />
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-xl">{item.title}</p>
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-row text-xs text-[#66B10B] gap-8">
                            <p>تاریخ:<span className="text-black">{item.date}</span></p>
                            <p>قیمت:<span className="text-black">{item.price}تومان</span></p>
                          </div>
                          <p className="text-xs text-[#66B10B]">ساعت:<span className="text-black">{item.hour}</span></p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-24 mr-[180px]">
                          <div className="flex flex-row mr-[15px]">
                          </div>
                      </div>
                        <div className="mr-[155px] mt-[120px]">
                          <Link href="/conditionHall">
                            <button className="border-1 border-[#66B10B] rounded-full px-4 py-2">
                              <p className="text-[10px]">دیدن سانس</p>
                            </button>
                          </Link>
                        </div>
                    </div>
                  ))}
               </div>
             <Footer/>
        </div>
    </>
  )
}

export default home;
