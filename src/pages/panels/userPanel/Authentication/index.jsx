import React from 'react'
import Link from "next/link"
import SidebarDashboard from '../SidebarDashboard/SidebarDashboard';

function Authentication() {
  return (
    <>
      <div className="relative">
        <SidebarDashboard />
          <div className="flex absolute border-1 w-[700px] h-[491px] top-[175px] rounded-2xl shadow-md right-[460px] text-black px-16 py-8">
            <form className=" flex flex-col w-[539px] h-[456px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-14">
                    <p className="text-[12px]">
                      با توجه به <Link href="/rules" className="text-blue-500 underline">قوانین</Link> به جهت برداشت وجه از کیف پول، لطفاً اطلاعات زیر را تکمیل کنید. توجه کنید که اطلاعات ارائه شده باید <span className="font-bold">متعلق به یک فرد</span> باشد.
                    </p>
                    <div className="flex flex-row gap-20">
                      <div className="gap-2">
                        <label className="flex flex-col gap-2">
                          <p className="text-[12px]">تاریخ تولد</p>
                            <input type="text" className="w-[250px] h-[40px] focus:outline-none rounded-full bg-[#66B10B]/20 px-4"/>
                        </label>
                      </div>
                        <div>
                          <label className="flex flex-col gap-2">
                          <p className="text-[12px]">شماره همراه</p>
                              <input type="email" className="w-[250px] h-[40px] focus:outline-none rounded-full bg-[#66B10B]/20 px-4" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-20">
                      <div>
                        <label className="flex flex-col gap-2">
                          <p className="text-[12px]">شماره شبا</p>
                            <input type="number" className="w-[250px] h-[40px] focus:outline-none no-spinner rounded-full bg-[#66B10B]/20 px-4" />
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2">
                          <p className="text-[12px]">کد ملی</p>
                            <input type="email" className="w-[250px] h-[40px] focus:outline-none rounded-full bg-[#66B10B]/20 px-4" />
                        </label>
                      </div>
                    </div>
                  <div>
                </div>
              </div>
              <button 
                type="submit"
                className="bg-[#66B10B]/95 text-white text-[14px] w-[80px] h-[35px] rounded-full mr-[500px] mt-[100px]"
              >
                ثبت 
              </button>
            </div>
          </form> 
        </div>
      </div>
    </>
  )
}

export default Authentication;