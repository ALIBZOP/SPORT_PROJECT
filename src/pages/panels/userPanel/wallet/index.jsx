import React from 'react';
import SidebarDashboard from '../SidebarDashboard/SidebarDashboard';

function Wallet() {
  const Transaction = [
    { id: 1, date: "۱۴۰۳/۰۱/۱۰", hour: "۱۴تا ۱۲.۳۰", amount: "۳۰۰.۰۰۰", sign: "-" },
    { id: 2, date: "۱۴۰۳/۰۳/۰۱", hour: "۱۸تا ۱۶.۳۰", amount: "۲۰۰.۰۰۰", sign: "+" },
    { id: 3, date: "۱۴۰۳/۰۸/۱۹", hour: "۹تا ۷.۳۰", amount: "۴۰۰.۰۰۰", sign: "-" },
    //{id: 4, date: "۱۴۰۳/۰۸/۱۹", hour: "۹تا ۷.۳۰", amount: "۴۰۰.۰۰۰", sign: "+"},
    //{id: 5, date: "۱۴۰۳/۰۸/۱۹", hour: "۹تا ۷.۳۰", amount: "۴۰۰.۰۰۰", sign: "-"},
  ];

  return (
    <>
      <div className="relative">
        <SidebarDashboard />
        <div className="flex flex-col absolute top-[175px] right-[440px] text-[14px] text-black gap-8">
          <div className="flex flex-row items-center w-[752px] h-[80px] border-1 shadow-md rounded-2xl px-6 gap-[500px]">
            <p className="flex text-[#66B10B] text-[22px]">موجودی<span className="text-black">:۰</span></p>
            <button className="w-[100px] h-[40px] bg-[#66B10B] text-white rounded-full">
              افزایش
            </button>
          </div>
          <p>تراکنش ها</p>
          <div className="h-[515px] w-[780px] custom-scrollbar overflow-y-auto">
            {Transaction.map((item) => (
              <div key={item.id} className="flex flex-row items-center w-[750px] h-[122px] shadow-md border-1 rounded-2xl mb-[20px] px-6 gap-6">
                <div className="flex flex-col gap-4">
                  <p className="text-[18px]"><span className="text-[#66B10B]">تاریخ</span>:<span>{item.date}</span></p>
                  <p className="text-[18px]"><span className="text-[#66B10B]">ساعت</span>:<span>{item.hour}</span></p>
                </div>
                <div className="flex flex-col mr-[410px]">
                  <p className="flex flex-row text-[18px] gap-2">
                    <span> {item.amount} تومان</span>
                    <span className={`text-[18px] ${item.sign === '+' ? 'text-green-500' : 'text-red-500'}`}>
                      {item.sign}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallet;
