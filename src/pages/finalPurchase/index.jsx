import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import ImageCard1 from "../../assets/userPanel/Image-Card1.jpg";
import Credit from "../../assets/adminPanel/Credit.png";
import Expand from '../../assets/adminPanel/Expand_left.png';
import Wallet from "../../assets/adminPanel/Wallet.png";
import Basket from "../../assets/adminPanel/Basket.png";
import Union from "../../assets/adminPanel/Union.png";

function finalPurchase() {

    const data = [

        { id: 1, image: ImageCard1, title: "زمین چمن استاد معین", date: "۱۴۰۳/۰۳/۰۴", price: "۴۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 2, image: ImageCard1, title: "استخر استاد معین", date: "۱۴۰۳/۰۴/۰۳", price: "۳۵۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
        { id: 3, image: ImageCard1, title: "سالن رزمی استاد معین", date: "۱۴۰۳/۰۳/۳۱", price: "۳۰۰.۰۰۰", hour: "۱۴تا ۱۲.۳۰" },
    
      ]
      
  return (
    <>
      <div className="flex bg-[#ADADAD]/10 flex-col h-[605px] overflow-x-hidden items-center gap-14">
        <Header/>
        <div className="flex flex-col relative w-full h-full justify-center items-center mt-[80px] gap-8">
            <div className="flex flex-row gap-6">
              <div className="flex flex-col w-[758px] h-[410px] gap-4">
                <div className="w-[758px] h-[190px] flex flex-row bg-white shadow-md border-1 border-black/5 px-4 py-6 rounded-2xl gap-[430px]">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-[15px] text-[#66B10B]">انتخاب روش پرداخت</p>
                    </div>
                    <div className="flex flex-row items-center h-[45px] gap-4">
                      <div className="flex flex-row gap-2">
                        <div>
                          <input 
                            id="option2" 
                            type="radio" 
                            name="options" 
                            className="w-4 h-4 mt-[4px] border-1 text-green-600 bg-gray-100 border-[#66B10B] focus:ring-green-500" 
                          />
                        </div>
                      <div>
                        <Image
                          src={Credit}
                          width={22}
                          height={18}
                          alt="Picture of the author"
                        />
                      </div>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-[14px]">پرداخت اینترنتی</p>
                        <p className="text-[10px]">پرداخت انلاین با تمامی کارت های بانکی</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center h-[45px] gap-4">
                      <div className="flex flex-row gap-2">
                        <div>
                          <input 
                            id="option2" 
                            type="radio" 
                            name="options" 
                            className="w-4 h-4 mt-[4px] text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" 
                          />
                        </div>
                      <div>
                        <Image
                          src={Wallet}
                          width={22}
                          height={18}
                          alt="Picture of the author"
                        />
                      </div>
                      </div>
                      <div>
                        <p className="text-[14px]">پرداخت اعتباری</p>
                        <p className="text-[10px]">پرداخت با موجودی کیف پول</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Image
                      src={Union}
                      width={40}
                      height={18}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className="w-[758px] h-[190px] flex flex-row bg-white shadow-md px-4 py-6 border-1 border-black/5 gap-[430px] rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[15px] text-[#66B10B]">خلاصه سفارش</p>
                    </div>
                    <div>
                      <div className="flex flex-row gap-2">
                        <div>
                          <Image
                            src={Basket}
                            width={22}
                            height={18}
                            alt="Picture of the author"
                          />
                        </div>
                        <div className="flex flex-col gap-4">
                          <p className="text-[14px]">زمین فوتبال استاد معین</p>
                          <p className="text-[12px]">شنبه ۱ تیر - ساعت: ۱۳.۳۰ تا ۱۵</p>
                        </div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link href="/basketBuy" className="flex text-[12px] flex-row text-blue-600 gap-1">
                      مشاهده سبد
                      <Image
                        src={Expand}
                        width={18}
                        alt="Expand icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[430px] h-[396px] bg-white shadow-md border-1 border-black/5 px-4 py-6 rounded-2xl gap-[61px]">
                  <div className="flex flex-row gap-[245px]">
                      <p className="text-[14px]">سبد خرید:</p>
                      <p className="">۵۰۰.۰۰۰<span className="text-[12px]">تومان</span></p>
                  </div>
                  <div className="flex flex-row gap-[170px]">
                      <p className="text-[14px]">مالیات بر ارزش افزوده:</p>
                      <p className="">۵۰۰.۰۰۰<span className="text-[12px]">تومان</span></p>
                  </div>
                  <div className="border-t-1 border-black/20 h-[2px]"></div>
                  <div className="flex flex-row gap-[215px]">
                      <p className="text-[14px] ">قابل پرداخت:</p>
                      <p className="text-black">۱.۰۰۰.۰۰۰<span className="text-[12px]">تومان</span></p>
                  </div>
                  <div className="px-12">
                      <button href="/finalPurchase" className="w-full h-full flex flex-row items-center justify-center bg-[#66B10B] text-white text-[14px] py-2 rounded-xl">
                        پرداخت
                      </button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  )
}

export default finalPurchase;