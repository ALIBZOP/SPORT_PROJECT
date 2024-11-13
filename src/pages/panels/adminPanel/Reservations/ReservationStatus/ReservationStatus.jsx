import React from 'react'
import Image from "next/image"
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import ReservationTableStatus from "./ReservationTableStatus"
import Arrow from "../../../../../assets/adminpanel/Arrow_drop.png"
import Date from "../../../../../assets/adminpanel/Date_range.png"

function ReservationStatus() {
  return (
    <>
        <div className="flex flex-col relative w-[926px] text-black px-3">
            <div className="ml-[600px]">
                <Tabs aria-label="Options" shadow="none" radius="full"
                  classNames={{
                    tabList: "flex w-[340px] relative bg-white border-1 shadow-md overflow-hidden px-2 gap-6",
                    cursor: "w-full bg-white bg-[#0072BB]",
                    tab: "flex w-[100px] px-0 ",
                    tabContent:"group-data-[selected=true]:text-[#0072BB] group-data-[selected=true]:bg-[#b3d5eb] flex w-[63px] h-[34px] rounded-full items-center justify-center"
                }}>
                  <Tab key="football" className="text-[12px]" title="فوتبال"></Tab>
                  <Tab key="futsal" className="text-[12px]" title="فوتسال"></Tab>
                  <Tab key="martial" className="text-[12px]" title="رزمی"></Tab>
                  <Tab key="pool" className="text-[12px]" title="استخر"></Tab>
              </Tabs>
            </div>
            <div className="flex flex-row absolute top-[60px] gap-[450px]"> 
                <div>
                    <button className="flex flex-row items-center justify-center w-[72px] border-1 border-[#0072BB] h-[24px] rounded-full gap-1">
                        <p className="text-[10px] text-[#0072BB]">هفته بعد</p>
                        <Image
                          src={Arrow}
                          width={14}
                          height={15}
                          alt="icon"
                        />
                    </button>
                </div>
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <button className="flex flex-row items-center justify-center w-[110px] border-1 border-[#0072BB] h-[24px] rounded-full gap-2">
                            <p className="text-[10px] text-[#0072BB]">انتخاب تاریخ</p>
                            <Image
                            src={Date}
                            width={14}
                            height={15}
                            alt="icon"
                            />
                        </button>
                        <p>تا</p>
                        <button className="flex flex-row items-center justify-center w-[110px] border-1 border-[#0072BB] h-[24px] rounded-full gap-2">
                            <p className="text-[10px] text-[#0072BB]">انتخاب تاریخ</p>
                            <Image
                            src={Date}
                            width={14}
                            height={15}
                            alt="icon"
                            />
                        </button>
                    </div>
                    <div>
                        <button className="flex flex-row items-center justify-center w-[110px] bg-[#0072BB] border-1 border-[#0072BB] h-[24px] rounded-full gap-2">
                            <p className="text-[10px] text-white ">غیر فعال کردن سانس</p>
                        </button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <ReservationTableStatus />
        </div>
    </>
  )
}

export default ReservationStatus;
