import React from 'react'
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import Image from "next/image";

function Reservations() {

  const Datacard = [
    {id: 1, originalphoto: Image1, photo1: Image2, photo2: Image3, title: "زمین چمن استاد معین" },
    {id: 2, originalphoto: Image1, photo1: Image2, photo2: Image3, title: "استخر استاد معین" },
    {id: 3, originalphoto: Image1, photo1: Image2, photo2: Image3, title: "سالن فوتسال استاد معین" },
    {id: 4, originalphoto: Image1, photo1: Image2, photo2: Image3, title: "سالن رزمی استاد معین" },
  ]

  const descriptions = [
    {
      id: 1,
      values: [
        "زمین چمن مصنوعی", 
        "رشته: فوتبـال", 
        "ابعاد ۴۵x۵۰",  
        "رختکن", 
        "هزینه اجاره:۵۰.۰۰۰تومان",
        "بوفه", 
        "سال ساخت ۱۳۹۸", 
        "آب سرد کن", 
        "سرویس بهداشتی"
      ]
    },
    {
      id: 2,
      values: [
        "استخر مدرن", 
        "رشته: شنا", 
        "ابعاد ۵۰x۶۰", 
        "رختکن VIP", 
        "هزینه اجاره:۸۰.۰۰۰تومان",
        "بوفه ندارد", 
        "سال ساخت ۱۴۰۰", 
        "آب سرد کن پیشرفته", 
        "سرویس بهداشتی مدرن"
      ]
    },
    {
      id: 3,
      values: [
        "سالن فوتسال مدرن", 
        "رشته: فوتسال", 
        "ابعاد ۵۵x۶۵", 
        "رختکن VIP", 
        "هزینه اجاره:۱۰۰.۰۰۰تومان",
        "بوفه با امکانات", 
        "سال ساخت ۱۴۰۲", 
        "آب سرد کن حرفه‌ای", 
        "سرویس بهداشتی لوکس"
      ]
    },
    {
      id: 4,
      values: [
        "سالن رزمی پیشرفته", 
        "رشته: رزمی", 
        "ابعاد ۵۵x۶۵", 
        "رختکن معمولی", 
        "هزینه اجاره:۱۲۰.۰۰۰تومان",
        "بوفه Premium", 
        "سال ساخت ۱۴۰۲", 
        "آب سرد کن", 
        "سرویس بهداشتی مدرن"
      ]
    }
  ];

  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
          <div className="flex flex-col w-[1020px] h-[560px] bg-white absolute top-[25px] right-[320px] text-black rounded-3xl p-8 gap-3">
            <div className="mr-[830px]">
              <button className="flex flex-row items-center justify-center text-white bg-[#0072BB] w-[110px] h-[40px] gap-1 rounded-full border-1 border-[#0072BB]">
                <p className="text-[12px]">افزودن سالن</p>
                  <Image
                      width={15}
                      height={25}
                      className="rounded-full"
                  />
              </button>
            </div>
            <div className="w-[940px] h-[470px] border-1 border-black/10 rounded-2xl shadow-md">
              <div className="w-[955px] h-[460px] custom-scrollbar-admin-User overflow-x-hidden ">
                {Datacard.map((item, index) => {
                  const description = descriptions.find(desc => desc.id === item.id);
                  return (
                    <div 
                      key={item.id} 
                      className={`flex w-[940px] flex-row py-4 px-4 gap-6 ${index !== Datacard.length - 1 ? 'border-b border-gray-300'  : ''}`}
                    >
                      <div className="flex flex-col gap-2">
                        <div>
                          <Image
                            width={140}
                            height={25}
                            className="rounded-2xl"
                          />
                        </div>
                        <div className="flex flex-row gap-5">
                          <Image
                            width={60}
                            height={25}
                            className="rounded-2xl"
                          />
                          <Image
                            width={60}
                            height={25}
                            className="rounded-2xl"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-7">
                        <div>
                          <p className="text-[18px] text-[#66B10B]">{item.title}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {description && description.values.map((value, index) => (
                            <div key={index} className="text-[12px] py-0.5">
                              {value}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-row gap-4 mr-[155px]">
                        <div>
                          <button className="flex items-center justify-center w-[60px] h-[24px] text-[10px] text-[#0072BB] border-1 border-[#0072BB] gap-1 rounded-full">
                            <p>ویرایش</p>
                            <Image
                              width={10}
                              height={25}
                            />
                          </button>
                        </div>
                        <div>
                        <button className="flex items-center justify-center w-[60px] h-[24px] text-[10px] text-[#FF0000] border-1 border-[#FF0000] gap-1 rounded-full"> 
                          <p>حذف</p>
                        </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Reservations;
