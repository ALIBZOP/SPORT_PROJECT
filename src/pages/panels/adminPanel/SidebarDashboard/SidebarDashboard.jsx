import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { Avatar } from "@nextui-org/react";
import HomeInactive from "../../../../assets/userPanel/Home.png"
import BasketInactive from "../../../../assets/userPanel/Group.png"
import SunlightInactive from "../../../../assets/userPanel/Sunlight.png"
import PapeInactive from "../../../../assets/userPanel/Pape.png"
import ChataltInactive from "../../../../assets/userPanel/Chat_alt.png"
import SettingInactive from "../../../../assets/userPanel/Setting.png"
import HomeActive from "../../../../assets/userPanel/Home_fill.png"
import GroupActive from "../../../../assets/userPanel/Group_fill.png"
import SunlightActive from "../../../../assets/userPanel/Sunlight_fill.png"
import PapeActive from "../../../../assets/userPanel/Pape_fill.png"
import ChataltActive from "../../../../assets/userPanel/Chat_alt_fill.png"
import SettingActive from "../../../../assets/userPanel/Setting_fill.png"
import Meatballs_menu from "../../../../assets/userPanel/Meatballs_menu.png";

function SidebarDashboardAdmin() {
  const router = useRouter();
  
  const data = [
    { id: 1, name: 'داشبورد', iconInactive: HomeInactive, iconActive: HomeActive, href: '/panels/adminPanel/Dashboard' },
    { id: 2, name: 'کاربران', iconInactive: BasketInactive, iconActive: GroupActive, href: '/panels/adminPanel/Users' },
    { id: 3, name: 'سالن ها', iconInactive: SunlightInactive, iconActive: SunlightActive, href: '/panels/adminPanel/Halls' },
    { id: 4, name: 'رزرو ها', iconInactive: PapeInactive, iconActive: PapeActive, href: '/panels/adminPanel/Reservations' },
    { id: 5, name: 'نظرات', iconInactive: ChataltInactive, iconActive: ChataltActive, href: '/panels/adminPanel/Comments' },
    { id: 6, name: 'تنظیمات', iconInactive: SettingInactive, iconActive: SettingActive, href: '/panels/adminPanel/Settings' },
  ];

  return (
    <>
      <div className="flex flex-col relative bg-[#0072BB] items-center overflow-hidden">
        <div className="flex flex-row items-center w-[1300px] h-[487px] mt-[120px] rounded-3xl py-8">
          <div className="flex flex-col w-[250px] h-[675px] rounded-xl gap-2">
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-row items-center p-2 gap-2 bg-white rounded-full">
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-[56px] h-[56px] text-large" />
                <div className="flex flex-col gap-2">
                  <p className="text-[16px]">احمد ادیب زاده</p>
                  <p className="text-xs text-[#000000]/40">ادمین</p>
                </div>
                <div className="mr-[20px]"> 
                  <Image
                    src={Meatballs_menu}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                  />
                </div>
              </div>
              <div className="flex flex-col p-4 gap-2">
                {data.map((item) => {
                  const isActive = router.pathname === item.href;
                  return (
                    <Link key={item.id} href={item.href} passHref>
                      <div
                        className={`flex flex-row items-center p-4 rounded-full bordre-5 border-text-blue-700 cursor-pointer gap-4 transition-all duration-300 ${
                          isActive ? 'bg-white shadow-md shadow-black text-blue-700  bordre-5' : 'text-[#65a9d5] hover:bg-white/20'
                        }`}
                      >
                        <Image
                          src={isActive ? item.iconActive : item.iconInactive}
                          width={24}
                          height={18}
                          alt="Picture of the author"
                        />
                        <h2 className="text-[16px] font-bold">{item.name}</h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarDashboardAdmin;
