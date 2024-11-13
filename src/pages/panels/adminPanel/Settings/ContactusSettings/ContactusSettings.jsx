import React from 'react'
import Link from "next/link";
import Image from "next/image";
import mapimage from "../../../../../assets/adminpanel/map-image.png"
import phone from "../../../../../assets/adminpanel/phone.png"
import Message from "../../../../../assets/adminpanel/Message.png"
import Telegram from "../../../../../assets/adminpanel/Telegram.png"

function ContactusSettings() {
  return (
    <>
      <div className="flex w-[1020px] h-[780px] text-black">
        <div className="flex flex-col w-[918px] h-[780px] items-center justify-center border-1 border-black/20 rounded-2xl shadow-md px-8 py-3 gap-6">
        <div className="flex flex-col gap-8">
              <div>
                <Link href="/">
                  <Image
                    src={mapimage}
                    width={572}
                    height={356}
                    alt="Map"
                  />
                </Link>
              </div>
              <div className="flex flex-col w-[573px] h-[326px] bg-white border-[1px] border-[#0072BB]/60 p-6 rounded-3xl gap-10">
                <div className="flex flex-row w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#0072BB]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={phone}
                      width={22}
                      height={22}
                      alt="Phone"
                      className="flex absolute items-center right-[10px]"
                    />
                  </div>
                  <p className="flex items-center Shabnam">۷۷۷۴۴۰۳۶ ۹۸+</p>
                </div>
                <div className="flex flex-row w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#0072BB]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={Message}
                      width={25}
                      height={20}
                      alt="Message"
                      className="flex absolute items-center right-[8px]"
                    />
                  </div>
                  <p className="flex items-center">footinoclube@gmail.com</p>
                </div>
                <div className="flex flex-row items-center w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#0072BB]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={Telegram}
                      width={30}
                      height={20}
                      alt="Telegram"
                      className="flex absolute items-center right-[6px]"
                    />
                  </div>
                  <p className="flex items-center">@footino</p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactusSettings;
