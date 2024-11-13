import React from 'react'
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import AllUsers from "./AllUsers/AllUsers"
import AuthenticationUser from "./AuthenticationUser/AuthenticationUser"

function Users() {
  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
          <div className="flex flex-col w-[1020px] h-[560px] overflow-hidden bg-white absolute top-[25px] right-[320px] text-black rounded-3xl px-6 py-8">
            <Tabs 
                variant="underlined"
                classNames={{
                  tabList: "flex gap-6 w-[150px] bg-white",
                  cursor: "w-full bg-[#0072BB]",
                  tab: "flex w-[100px] px-0 ",
                  tabContent:"group-data-[selected=true]:text-[#0072BB]"
                }}
              >
                <Tab key="description" className="text-[12px]" title="کاربران">
                  <Card
                  shadow="none"
                  radius="none"
                  className='overflow-hidden -top-[16px] z-10'
                  >
                    <CardBody radius="none" className=''> 
                      <AllUsers />
                    </CardBody>
                  </Card>  
                </Tab>

                <Tab key="comments" className="text-[12px]" title="احراز هویت">
                  <Card
                  shadow="none"
                  radius="none"
                  className='overflow-hidden -top-[16px] z-10'
                  >
                    <CardBody>
                      <AuthenticationUser />
                    </CardBody>
                  </Card>  
                </Tab>
            </Tabs>
        

          </div>
      </div>
    </>
  )
}

export default Users;
