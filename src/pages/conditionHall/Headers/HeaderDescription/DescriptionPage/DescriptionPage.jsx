import React from 'react'

function DescriptionPage() {
  return (
    <>
      <div className="flex flex-col relative w-[555px] h-[250px] gap-6 ml-[50px] text-right">
        <div>
            <h1 className="text-xl text-[#66B10B]">زمین چمن استاد معین</h1>
        </div>
        <div className="flex text-sm flex-row gap-0">
            <div className="flex flex-col w-[190px] gap-6 ">
               <div>
                  <p>.زمین چمن مصنوعی</p>
               </div>
               <div>
                  <p>.ابعاد ۴۵x۵۰</p>
               </div>
               <div>
                  <p>.سال ساخت ۱۳۹۸</p>
               </div>
            </div>
            <div className="flex flex-col w-[200px] gap-6">
                <div>
                  <p>.رشته:فوتبال</p>
                </div>
                <div>
                  <p>.هزینه اجاره توپ:۵۰.۰۰۰</p>
                </div>
                <div>
                  <p>.اب سرد کن</p>
                </div>
            </div>
            <div className="flex flex-col w-[200px] gap-6">
                <div>
                  <p>.رختکن</p>
                </div>
                <div>
                  <p>.بوفه</p>
                </div>
                <div>
                  <p>.سرویس بهداشتی</p>
                </div>
            </div>
        </div>
        <div className="absolute right-[395px] top-[200px]">
          <p className="text-xs w-[160px] px-2 py-2 border-2 border-[#66B10B] rounded-full"><span className="text-[#66B10B] ">قیمت:</span> <span className="text-lg mr-[5px]">۴۵۰.۰۰۰</span>تومان</p>
        </div>
      </div>
    </>
  )
}

export default DescriptionPage;
