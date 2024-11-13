import React from 'react'
import Image from "next/image"
import logoImage from "../../../../../assets/adminpanel/image-logo.png"
import ImageBaner from "../../../../../assets/adminpanel/Image-baner.png"

function HomeSettings() {
  return (
    <>
        <div className="flex flex-col w-[1020px] h-[800px] text-black gap-10">
            <div className="flex flex-col w-[918px] h-[170px] border-1 border-black/20 rounded-2xl shadow-md px-8 py-3 gap-6">
                <div className="flex flex-row items-center h-[170px] gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="text-right">لوگو</p>
                        <div className="flex items-center justify-center w-[80px] h-[80px] border-1 border-[#0072BB] rounded-xl p-1">
                            <Image
                                src={logoImage}
                                width={48}
                                height={26}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row text-[12px] mt-[25px] gap-6">
                        <div className="flex items-center justify-center w-[110px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p>خانه</p>
                        </div>
                        <div className="flex items-center justify-center w-[110px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p>وضعیت سالن ها</p>
                        </div>
                        <div className="flex items-center justify-center w-[110px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p>تماس با ما</p>
                        </div>
                        <div className="flex items-center justify-center w-[110px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p>درباره ما</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row text-[10px] text-right gap-4">
                    <p>.فورمت عکس باید png باشد</p>
                    <p>.حداکثر سایز عکس: ۵۷۵*۵۰۰</p>
                </div>
           </div>
           <div className="flex flex-row w-[918px] h-[290px]  border-1 border-black/20 rounded-2xl shadow-md px-8 py-3 gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-right text-[10px]">تایتل</p>
                        <div className="flex items-center justify-center w-[250px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p>دیگه وقتشه!</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p className="text-right text-[10px]">متن</p>
                        <div className="flex items-center justify-center w-[250px] h-[96px] border-1 border-[#0072BB] rounded-xl px-3 py-4">
                            <p className="w-[216px] h-[68px] text-right text-[10px]">باشگاه فوتینو با بالا ترین امکنات روز دنیا و با رعایت نکات بهداشتی همواره در تلاش است بهترین خدمات را به شما ارائه دهد</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-right text-[10px]">لینک</p>
                        <div className="flex items-center justify-center w-[250px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row text-[10px] text-right gap-4">
                        <p>.فورمت عکس باید png باشد</p>
                        <p>.حداکثر سایز عکس: ۵۷۵*۵۰۰</p>
                    </div>
                    <div className="w-[590px] h-[237px]">
                        <Image
                            src={ImageBaner}
                            alt="Picture of the author"
                            className="w-full h-full" 
                        />
                    </div>
                </div>
           </div>
           <div className="flex flex-row w-[918px] h-[290px] border-1 border-black/20 rounded-2xl shadow-md px-8 py-3 gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-right text-[10px]">لوگو</p>
                        <div className="flex items-center justify-center w-[80px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                            <Image
                                src={logoImage}
                                width={24}
                                height={26}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <p className="text-right text-[10px]">متن</p>
                        <div className="flex items-center justify-center w-[162px] h-[72px] border-1 border-[#0072BB] rounded-xl px-3 py-4">
                            <p className="w-[152px] h-[68px] text-right text-[9px] py-2">فوتینو بهترین باشگاه شرق تهران با وارد کردن شماره تماس خود عضو خانواده بزرگ ما شوید</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-right text-[10px]">لینک</p>
                        <div className="flex items-center justify-center w-[162px] h-[30px] border-1 border-[#0072BB] rounded-lg p-1">
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-[10px] gap-11 mt-[20px]">
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>خانه</p>
                    </div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>وضعیت سالن ها</p>
                    </div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>درباره ما</p>
                    </div>
                </div>
                <div className="flex flex-col text-[10px] gap-11 mt-[20px]">
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>تماس با ما</p>
                    </div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>قوانین</p>
                    </div>
                    <div className="flex items-center justify-center w-[100px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p></p>
                    </div>
                </div>
                <div className="flex flex-col text-[10px] gap-11 mt-[20px]">
                    <div className="flex items-center justify-center w-[230px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>تهران-تهرانپارس-فلکه اول-154 شرقی-پلاک 94</p>
                    </div>
                    <div className="flex items-center justify-center w-[230px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>۰۲۱ ۷۷۷ ۴۴۰ ۳۶</p>
                    </div>
                    <div className="flex items-center justify-center w-[230px] h-[40px] border-1 border-[#0072BB] rounded-xl p-1">
                        <p>footino@gmail.com</p>
                    </div>
                </div>
           </div>
        </div>
    </>
  )
}

export default HomeSettings;
