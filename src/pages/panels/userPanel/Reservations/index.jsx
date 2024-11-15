import React from 'react'
import Image from 'next/image'
import SidebarDashboard from '../SidebarDashboard/SidebarDashboard';

function Reservations() {

  const data = [

    { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰", status: "منقضی شده" },
    { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰", status: "لغو شده" },
    { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰", status: "منقضی شده" },

  ]

  return (
    <>
      <div className="relative">
        <SidebarDashboard />
          <div className="flex absolute top-[175px] right-[450px] text-black">
          <div className="w-[758px] h-[800px] overflow-y-auto">
                {data.map((item) => (
                   <div key={item.id} className="flex flex-row w-[730px] h-[180px] border-1 border-black/5 shadow-md mb-[12px] gap-8 px-4 py-4 rounded-3xl">
                    <div className="relative w-[145px] h-[135px]">
                      <Image
                        width={145}
                        height={135}
                        alt="Picture of the author"
                        className="rounded-[26px]"
                      />
                    </div>
                    <div className="w-[225px] flex flex-col gap-6">
                      <p className="text-xl">{item.title}</p>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-row text-xs text-[#66B10B] gap-8">
                          <p>تاریخ:<span className="text-black">{item.date}</span></p>
                        </div>
                        <p className="text-xs text-[#66B10B]">ساعت:<span className="text-black">{item.hour}</span></p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[105px] mr-[40px]">
                        <div className="flex flex-row mr-[150px]">
                          <p className={`flex text-[12px] w-[70px] items-center text-left ${item.status === 'لغو شده' ? 'text-red-500' : 'text-[#66B10B]'}`}>
                            {item.status}
                          </p>
                        </div>
                      <div className="flex flex-row gap-2">
                        <button className="w-[72px] h-[24px] text-[10px] text-[#66B10B] border-1 border-[#66B10B] rounded-full px-2">ثبت امتیاز</button>
                        <p className="flex items-center text-[#66B10B] text-[15px]">قیمت:<span className="text-black">{item.price} تومان</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default Reservations;
