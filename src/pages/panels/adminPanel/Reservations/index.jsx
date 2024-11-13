import React from 'react'
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import ReservationStatus from "./ReservationStatus/ReservationStatus"
import RecentBookings from "./RecentBookings/RecentBookings"
import Sans from "./Sans/SansTabs"

function Reservations() {

  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
          <div className="flex w-[1020px] h-[560px] custom-scrollbar-admin overflow-y overflow-x-hidden bg-white absolute top-[25px] right-[320px] text-black rounded-3xl p-8 z-200">
            <div className="">
              <Tabs 
                  variant="underlined"
                  classNames={{
                    tabList: "flex gap-6 w-[265px] bg-white",
                    cursor: "w-full bg-[#0072BB]",
                    tab: "flex  w-[100px] px-0 ",
                    tabContent:"group-data-[selected=true]:text-[#0072BB]"
                  }}
                >
                  <Tab key="ReservationStatus" className="text-[12px]" title="وضعیت رزرو ها">
                    <Card
                    shadow="none"
                    className='overflow-hidden'
                    >
                      <CardBody  className='overflow-x-hidden custom-scrollbar-admin-User z-200'> 
                        <ReservationStatus />
                      </CardBody>
                    </Card>  
                  </Tab>

                  <Tab key="RecentBookings" className="text-[12px]" title="رزرو های اخیر">
                    <Card
                    shadow="none"
                    className="custom-scrollbar-admin-User"
                    >
                      <CardBody className="ovreflow-y custom-scrollbar-admin-User">
                        <RecentBookings />
                      </CardBody>
                    </Card>  
                  </Tab>

                  <Tab key="Sans" className="text-[12px]" title="سانس ها">
                    <Card
                    shadow="none"
                    >
                      <CardBody className="z-200">
                        <Sans />
                      </CardBody>
                    </Card>  
                  </Tab>
              </Tabs>
            </div>
          </div>
      </div>
    </>
  )
}

export default Reservations;
