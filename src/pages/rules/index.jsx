import React from 'react'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function Rules() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center gap-10">
          <Header />
            <div className="flex flex-col relative w-full h-[780px] items-center bg-[#ADADAD]/10 mt-[80px] px-12 py-8 gap-4">
                <div>
                  <h1 className="text-xl absolute top-8 right-20 text-[#66B10B] ">قوانین</h1>
                </div>
                <div className="flex flex-col w-[1200px] h-[575px] bg-white border-1 rounded-2xl px-14 py-8 mt-8 gap-8">
                  <div className="flex flex-col h-[110px] py-1 px-0 gap-8">
                    <div className="flex flex-row gap-8">
                      <div className="flex items-center border-1 border-[#66B10B] w-[56px] h-[56px] py-3 px-6 rounded-full">
                        <h2 className="text-lg">۱</h2>
                      </div>
                      <div className="w-[950px] text-lg">
                        <p className="leading-[40px]">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[1090px] border-b-1 border-[#000000]/20 px-16"></div>
                  </div>
                  <div className="flex flex-col h-[110px] py-1 px-0 gap-8">
                    <div className="flex flex-row gap-8">
                      <div className="flex items-center relative border-1 border-[#66B10B] w-[56px] h-[56px] py-3 px-6 rounded-full">
                        <h2 className="text-lg absolute right-[20px]">۲</h2>
                      </div>
                      <div className="w-[950px] text-lg">
                        <p className="leading-[40px]">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[1090px] border-b-1 border-[#000000]/20 px-16"></div>
                  </div>
                  <div className="flex flex-col h-[110px] py-1 px-0 gap-8">
                    <div className="flex flex-row gap-8">
                      <div className="flex items-center relative border-1 border-[#66B10B] w-[56px] h-[56px] py-3 px-6 rounded-full">
                        <h2 className="text-lg absolute right-[20px]">۳</h2>
                      </div>
                      <div className="w-[950px] text-lg">
                        <p className="leading-[40px]">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[1090px] border-b-1 border-[#000000]/20 px-16"></div>
                  </div>
                  <div className="flex flex-col h-[110px] py-1 px-0 gap-8">
                    <div className="flex flex-row gap-8">
                      <div className="flex items-center relative border-1 border-[#66B10B] w-[56px] h-[56px] py-3 px-6 rounded-full">
                        <h2 className="text-lg absolute right-[20px]">۴</h2>
                      </div>
                      <div className="w-[950px] text-lg">
                        <p className="leading-[40px]">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
                      </div>
                    </div>
                    <div className="flex items-center w-[1090px] border-b-1 border-[#000000]/0 px-16"></div>
                  </div>
                </div>
                <div className="absolute top-[650px] right-20">
                  <button 
                   type="submit"
                   className="text-white bg-[#66B10B] hover:bg-[#66B10B]/80 border-[1px] border-[#ADADAD] w-[150px] h-[40px] rounded-full mt-12" 
                  >
                    متوجه شدم 
                  </button>
                </div>
            </div>
          <Footer />
      </div>
    </>
  )
}

export default Rules;
