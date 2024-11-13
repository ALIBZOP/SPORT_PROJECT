import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import AllComments from "./AllComments/AllComments"
import UnverifiedComments from "./UnverifiedComments/UnverifiedComments"

function Comments() {
  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
          <div className="flex w-[1020px] h-[560px] custom-scrollbar-admin overflow-y overflow-x-hidden  bg-white absolute top-[25px] right-[320px] text-black rounded-3xl p-8">
           <div>
              <Tabs 
                  variant="underlined"
                  classNames={{
                    tabList: "flex gap-6 w-[265px] bg-white",
                    cursor: "w-full bg-[#0072BB]",
                    tab: "flex w-[90px] px-0 ",
                    tabContent:"group-data-[selected=true]:text-[#0072BB]"
                  }}
                >
                  <Tab key="ReservationStatus" className="text-[12px]" title="نظرات">
                    <Card
                    shadow="none"
                    className='overflow-hidden'
                    >
                      <CardBody  className='overflow-x-hidden custom-scrollbar-admin-User z-200'> 
                        <AllComments />
                      </CardBody>
                    </Card>  
                  </Tab>

                  <Tab key="RecentBookings" className="text-[12px]" title="نظرات تایید نشده">
                    <Card
                    shadow="none"
                    >
                      <CardBody>
                        <UnverifiedComments />
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

export default Comments;
