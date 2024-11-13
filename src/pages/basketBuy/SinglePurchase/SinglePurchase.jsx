import React from 'react'
import Image from "next/image"
import ImageCard1 from "../../assets/userPanel/Image-Card1.jpg"
import Trash from "../../assets/adminPanel/Trash.png"

function SinglePurchase() {

    const data = [

        { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    
      ]
      
  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center gap-14">
           <Header/>
            <div className="flex bg-[] w-full justify-center mt-[80px]">
              <div className="w-[758px] h-[410px] custom-scrollbar overflow-y-auto">
                {data.map((item) => (
                   <div key={item.id} className="flex flex-row w-[730px] h-[180px] border-1 border-black/5 shadow-md mb-[25px] gap-8 px-4 py-4 rounded-3xl">
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
                          <Image
                            src={Trash}
                            width={26}
                            height={26}
                            alt="Picture of the author"
                            className="flex items-center"
                          />
                        </div>
                      <button className="w-[72px] h-[24px] text-[10px] text-[#66B10B] border-1 border-[#66B10B] rounded-full px-2">لغو سانس</button>
                    </div>
                  </div>
                ))}
              </div>
              <div>

              </div>
            </div>
      </div>
    </>
  )
}

export default SinglePurchase;