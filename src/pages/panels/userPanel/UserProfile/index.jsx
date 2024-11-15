import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";


function UserProfile() {

  const data = [

    { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },

  ]

  return (
    <>
      <div className="relative">
        <SidebarDashboard />
          <div className="flex flex-col absolute top-[175px] right-[450px] text-black gap-8">
            <div className="flex flex-row relative gap-12">
              <div className="flex flex-col items-center border-1 border-black/5 justify-center w-[340px] h-[208px] shadow-md rounded-3xl gap-8">
                <div className="flex flex-row gap-4">
                  <Image
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                  <p className="text-[#66B10B] text-[16px]">کیف پول</p>
                </div>
                <div className="flex flex-col items-center gap-10">
                  <p className="text-[14px]">موجودی:۰<span className="text-[14px]">تومان</span></p>
                  <Link href="/panels/userPanel/wallet" passHref>
                    <button 
                      className="text-white px-16 py-1.5  bg-[#66B10B] rounded-full" 
                    >
                      <p>افزایش موجودی</p>
                  </button>  
                  </Link>
                </div>
              </div>
                <div className="flex flex-col items-center border-1 border-black/5 justify-center w-[340px] h-[208px] shadow-md rounded-3xl gap-8">
                  <div className="flex flex-row gap-4">
                    <Image
                      width={24}
                      height={24}
                      alt="Picture of the author"
                    />
                    <p className="text-[#66B10B] text-[16px]">رزرو های اخیر</p>
                  </div>
                    <div className="flex flex-col items-center gap-10">
                    <p className="text-[14px]">رزروها:<span className="mr-[5px]">۳</span></p>
                      <Link href="/panels/userPanel/Reservations" passHref>
                        <button 
                          className="text-white px-16 py-1.5  bg-[#66B10B] rounded-full" 
                        >
                          <p>مشاهده جزئیات</p>
                        </button>  
                      </Link>
                  </div>
                </div>

            </div>
            <div className="flex flex-col relative gap-8">
                <p className="text-[16px] text-bold">رزرو فعال</p>
              <div className="w-[758px] h-[410px] custom-scrollbar overflow-y-auto">
                {data.map((item) => (
                   <div key={item.id} className="flex flex-row w-[730px] h-[180px] border-1 border-black/5 shadow-md mb-[25px] gap-8 px-4 py-4 rounded-3xl">
                    <div>
                      <Image
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
                          <p className="flex items-center text-[#66B10B]">فعال</p>
                          <Image
                            width={26}
                            height={26}
                            alt="Picture of the author"
                            className="flex items-center"
                          />
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default UserProfile;
