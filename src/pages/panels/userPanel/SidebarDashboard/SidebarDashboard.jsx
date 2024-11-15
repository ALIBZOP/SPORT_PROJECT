import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Header from "../../../../components/Header/Header"
import { useRouter } from 'next/router'

const SidebarDashboard = () => {
  const router = useRouter()

  const menuItems = [
    { id: 1, name: 'نمایه کاربری', iconInactive: UserBoxInactive, iconActive: UserBoxActive, href: '/panels/userPanel/UserProfile' },
    { id: 2, name: 'رزرو های شما', iconInactive: BasketInactive, iconActive: BasketActive, href: '/panels/userPanel/Reservations' },
    { id: 3, name: 'اطلاعات شخصی', iconInactive: OrderInactive, iconActive: OrderActive, href: '/panels/userPanel/PersonalInformation' },
    { id: 4, name: 'احراز هویت', iconInactive: UserScanInactive, iconActive: UserScanActive, href: '/panels/userPanel/Authentication' },
    { id: 5, name: 'کیف پول', iconInactive: WalletInactive, iconActive: WalletActive, href: '/panels/userPanel/wallet' },
  ]

  return (
    <>
      <div className="flex flex-col relative bg-[#ADADAD]/10 items-center overflow-x-hidden">
        <Header />
        <div className="flex flex-row items-center bg-white w-[1200px] h-[733px] mt-[150px] mb-[70px] shadow-sm rounded-3xl p-8">
          <div className="flex flex-col bg-[#66B10B]/20 w-[250px] h-[685px] rounded-xl gap-8">
            <div className="flex relative flex-col gap-2.5">
              <div className="flex flex-col items-center p-2 gap-2">
                <p className="text-lg">ایلیا ملک زاده</p>
                <p className="text-xs">۹۸۹۰۳۴۱۵۰۹۱۱+</p>
                <div className="flex flex-row bg-white w-[130px] h-[32px] text-[#66B10B] text-[10px] rounded-md px-1 py-2 gap-3 items-center">
                  تایید هویت:
                  <span className="text-red-500 text-[10px]">تایید نشده</span>
                </div>
              </div>
              <div className="flex flex-col px-12 border-b border-black/20 w-[210px] mr-[25px]"></div>
              <div className="flex flex-col p-4 gap-4">
                {menuItems.map((item) => {
                  const isActive = router.pathname === item.href
                  return (
                    <Link key={item.id} href={item.href} passHref>
                      <div className={`flex flex-row items-center p-4 rounded cursor-pointer gap-2`}>
                        <Image
                          width={24}
                          height={18}
                          alt={item.name}
                          className={`text-[16px] font-bold`}
                        />
                        <h2 className={`text-[16px] font-bold ${isActive ? 'text-[#66B10B]' : 'text-black'}`}>{item.name}</h2>
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="flex flex-col px-12 border-b border-black/20 w-[210px] mr-[25px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SidebarDashboard
