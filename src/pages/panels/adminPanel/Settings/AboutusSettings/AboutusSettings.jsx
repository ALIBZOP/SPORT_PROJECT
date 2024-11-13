import React from 'react'
import Image from "next/image"
import vector from "../../../../../assets/adminpanel/Vector.png"
import Headphones from "../../../../../assets/adminpanel/Headphones_fill.png"
import Pin from "../../../../../assets/adminpanel/Pin.png"
import check from "../../../../../assets/adminpanel/Chield_check.png"
import card from "../../../../../assets/adminpanel/Credit card.png"
import image1 from "../../../../../assets/adminpanel/image-ab-1.png"
import image2 from "../../../../../assets/adminpanel/image-ab-2.png"
import image3 from "../../../../../assets/adminpanel/image-ab-3.png"
import image4 from "../../../../../assets/adminpanel/image-ab-4.png"

function AboutusSettings() {
  return (
    <>
        <div className="flex flex-col w-[918px] h-[900px] border-1 border-black/20 shadow-md text-black p-8 rounded-2xl gap-2">
           <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center w-[855px] h-[231px] border-1 border-[#0072BB] rounded-2xl">
                    <Image
                        src={vector}
                        width={40}
                        height={26}
                        alt="Picture of the author"
                    />
                </div>
                <div className="flex flex-row text-[10px] text-right gap-4">
                    <p>.فورمت عکس باید png باشد</p>
                    <p>.حداکثر سایز عکس: ۵۷۵*۵۰۰</p>
                </div>
           </div>
           <div className="flex flex-row items-center w-[855px] h-[125px] border-1 border-[#0072BB] mb-[25px] px-4 rounded-2xl gap-20">
                <div className="flex flex-col w-[149px] h-[104px] border-1 border-[#464646] items-center justify-center rounded-2xl gap-2">
                    <Image
                        src={Headphones}
                        width={40}
                        height={26}
                        alt="Picture of the author"
                    />
                    <p>پشتیبانی ۲۴ ساعته</p>
                </div>
                <div className="flex flex-col w-[149px] h-[104px] border-1 border-[#464646] items-center justify-center rounded-2xl gap-2">
                    <Image
                        src={Pin}
                        width={40}
                        height={26}
                        alt="Picture of the author"
                    />
                    <p>بهترین لوکیشن</p>
                </div>
                <div className="flex flex-col w-[149px] h-[104px] border-1 border-[#464646] items-center justify-center rounded-2xl gap-2">
                    <Image
                        src={check}
                        width={40}
                        height={26}
                        alt="Picture of the author"
                    />
                    <p>امنیت بالا</p>
                </div>
                <div className="flex flex-col w-[149px] h-[104px] border-1 border-[#464646] items-center justify-center rounded-2xl gap-2">
                    <Image
                        src={card}
                        width={40}
                        height={26}
                        alt="Picture of the author"
                    />
                    <p>بهترین قیمت</p>
                </div>
           </div>
           <div className="flex flex-row items-center w-[855px] h-[400px] gap-24"> 
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col w-[410px] h-[120px] text-[10px] justify-center text-right border-1 border-[#0072BB] rounded-2xl py-5 px-2 gap-3">
                        <p className="flex text-[#66B10B]">ما که هستیم..؟</p>
                        <p className="text-[#464646] leading-7">فوتینو یک باشگاه حرفه ایی است با ۱۰ سال سابقه با افتخار که همیشه درتلاش بوده بهترین خدمات را به شما عزیزان داشت باشد که موفق بوده بهترین باشگاه شرق تهران</p>
                    </div>
                    <div className="flex flex-col w-[410px] h-[120px] text-[9px] justify-center text-right border-1 border-[#0072BB] rounded-2xl py-5 px-2 gap-3">
                        <p className="flex text-[10px] text-[#66B10B]">ما چه میکنیم..؟</p>
                        <p className="text-[#464646] leading-7">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
                    </div>
                    <div className="flex flex-col w-[410px] h-[120px] text-[10px] justify-center text-right border-1 border-[#0072BB] rounded-2xl py-5 px-2 gap-3">
                        <p className="flex text-[#66B10B]">چه انتظاری باید از ما داشته باشید.؟</p>
                        <p className="text-[#464646] leading-7">فوتینو یک باشگاه حرفه ایی است با ۱۰ سال سابقه با افتخار که همیشه درتلاش بوده بهترین خدمات را به شما عزیزان داشت باشد که موفق بوده بهترین باشگاه شرق تهران</p>
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2">
                        <Image
                            src={image1}
                            width={140}
                            height={26}
                            alt="Picture of the author"
                        />
                        <Image
                            src={image2}
                            width={140}
                            height={26}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image
                            src={image3}
                            width={140}
                            height={26}
                            alt="Picture of the author"
                        />
                        <Image
                            src={image4}
                            width={140}
                            height={26}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default AboutusSettings;
