import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import ImageCard1 from "../../assets/userPanel/Image-Card1.jpg";
import Trash from "../../assets/adminPanel/Trash.png";
import {Button} from "@nextui-org/react";
import ModalRemove from "./ModalRemove"
import ModalRemoveBasket from "./ModalRemoveBasket"

function SinglePurchase() {

    const data = [

        { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    
      ]
      
  return (
    <>
      <div className="flex bg-[#ADADAD]/10 flex-col h-[605px] overflow-x-hidden items-center gap-14">
        <Header/>
        <div className="flex flex-col relative w-full h-full justify-center items-center mt-[80px] gap-4">
            <div className="w-[800px] flex flex-row absolute top-[20px] right-[75px] gap-[540px]">
              <p className="text-[18px] w-[200px] text-[#66B10B]">جزئیات سفارش</p>
              <ModalRemoveBasket />
            </div>
            <div className="flex flex-row gap-6">
              <div className="w-[758px] h-[410px] custom-scrollbar-basketBuy overflow-y-auto">
                {data.map((item) => (
                   <div key={item.id} className="flex flex-row bg-white w-[730px] h-[180px] border-1 border-black/5 shadow-md mb-[25px] gap-8 px-4 py-4 rounded-3xl">
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
                    <div className="flex flex-col gap-24 mr-[170px] mb-[10px]">
                        <div className="flex flex-row">
                          <ModalRemove />
                        </div>
                        <Link href="/finalPurchase">
                          <button className="w-[72px] h-[18px] text-[9px] text-black border-1 border-[#66B10B] rounded-full px-2">ادامه رزرو</button>
                        </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-[430px] h-[396px] bg-white shadow-md border-1 border-black/5 px-4 py-6 rounded-2xl gap-[61px]">
                  <div className="flex flex-row gap-[270px]">
                      <p className="text-[14px]">سبد خرید:</p>
                      <p className="text-[#66B10B]">۴۵۰.۰۰۰</p>
                  </div>
                  <div className="flex flex-row gap-[240px]">
                      <p className="text-[14px]">مالیات بر ارزش افزوده:</p>
                      <p className="text-[#66B10B]">۰</p>
                  </div>
                  <div className="border-t-1 border-black/20 h-[2px]"></div>
                  <div className="flex flex-row gap-[255px]">
                      <p className="text-[14px] text-[#66B10B]">مجموع:</p>
                      <p className="text-black">۴۵۰.۰۰۰<span className="text-[12px]">تومان</span></p>
                  </div>
                  <div className="px-16">
                      <Link href="/finalPurchase" passHref>
                        <Button className="w-full h-full flex flex-row items-center justify-center bg-[#66B10B] text-white text-[14px] py-2 rounded-full">
                          نهایی کردن
                        </Button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default SinglePurchase;