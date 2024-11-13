import React from 'react'
import SidebarDashboard from '../SidebarDashboard/SidebarDashboard';

function PersonalInformation() {
  return (
    <>
      <div className="relative">
        <SidebarDashboard />
          <div className="flex absolute border-1 w-[700px] h-[310px] top-[175px] rounded-2xl shadow-md right-[460px] text-black px-5 py-6">
            <form className=" flex flex-col w-[539px] h-[456px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-14">
                    <div className="gap-2">
                      <label className="flex flex-col gap-2">
                        <p className="mr-[10px] text-[14px]">نام و نام خانوادگی </p>
                          <input type="text" className="w-[300px] h-[50px] focus:outline-none rounded-full bg-[#F2F2F2] px-4"/>
                      </label>
                    </div>
                      <div>
                        <button type="text" className="w-[300px] h-[50px] text-white focus:outline-none rounded-full bg-[#66B10B]/90 mt-[30px]">
                          تغییر رمز عبور
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-row gap-14">
                      <div>
                        <label className="flex flex-col gap-2">
                          <p className="mr-[10px] text-[14px]">جنسیت</p>
                          <input type="number" className="w-[300px] h-[50px] focus:outline-none no-spinner rounded-full bg-[#F2F2F2] px-4" />
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2">
                          <p className="mr-[10px] text-[14px]">تاریخ تولد</p>
                            <input type="email" className="w-[300px] h-[50px] focus:outline-none rounded-full bg-[#F2F2F2] px-4" />
                        </label>
                      </div>
                    </div>
                  <div>
                </div>
              </div>
              <button 
                type="submit"
                className="bg-[#66B10B]/95 text-white w-[100px] h-[40px] rounded-full mr-[555px]"
              >
                ذخیره 
              </button>
            </div>
          </form> 
        </div>
      </div>
    </>
  )
}

export default PersonalInformation;
