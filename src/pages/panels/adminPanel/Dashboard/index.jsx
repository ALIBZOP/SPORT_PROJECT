import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import iconImage from "../../../../assets/adminpanel/icon-image.png";
import ReservationTable from "./ReservationTable";
import UserTable from "./UserTable";

function Dashboard() {
  const HeaderData = [
    { id: 1, title: "رزرو ها", icon: iconImage, amount: "۱۱-" },
    { id: 2, title: "فروش", icon: iconImage, amount: "۱۰.۲۳۳.۹۸۸+" },
    { id: 3, title: "مشترکین", icon: iconImage, amount: "۲۳+" },
    { id: 4, title: "بازدید", icon: iconImage, amount: "۱۲۴.۳۴۵+" },
  ];

  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
        <div className="w-[1020px]">
          <div className="flex flex-col custom-scrollbar-admin overflow-y overflow-x-hidden w-[1020px] h-[560px] bg-white absolute top-[25px] right-[320px] text-black rounded-3xl p-8">
            <div className='flex items-center justify-center w-[940px] h-[140px] py-4 border-1 border-black/5 shadow-md rounded-2xl flex-row gap-24'>
              {HeaderData.map((item, index) => (
                <div key={item.id} className="flex flex-row items-center gap-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row gap-2">
                      <div className="flex">
                        <Image
                          width={50}
                          height={50}
                          alt="icon"
                        />
                      </div>
                      <div className="flex">
                        <p className='flex items-center justify-center text-[18px] text-[#B4B4B4]'>{item.title}</p>
                      </div>
                    </div>
                    <div>
                      <p className={`flex items-center justify-center text-[26px] ${item.id === 1 ? 'text-[#FF0000]' : ''}`}>
                        {item.amount}
                      </p>
                    </div>
                    <div
                      className={`flex absolute mr-[180px] items-center h-[115px] ${index !== HeaderData.length - 1 ? 'border-l border-gray-300' : ''}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex absolute items-center gap-[720px] flex-row h-[20px] top-[195px]">
              <p className="text-[14px]">وضعیت سالن ها</p>
              <div className="text-left text-[14px]">
                <Link href="" className="flex flex-row text-blue-600 gap-2">
                  مشاهده همه
                  <Image
                    width={20}
                    alt="Expand icon"
                  />
                </Link>
              </div>
            </div>
            <ReservationTable />
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
