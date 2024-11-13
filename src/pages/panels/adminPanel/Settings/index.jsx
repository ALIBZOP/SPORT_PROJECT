import React from 'react'
import SidebarDashboardAdmin from '../SidebarDashboard/SidebarDashboard';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import HomeSettings from "./HomeSettings/HomeSettings"
import AboutusSettings from "./AboutusSettings/AboutusSettings"
import ContactusSettings from "./ContactusSettings/ContactusSettings"

function Settings() {
  return (
    <>
      <div className="bg-white">
        <SidebarDashboardAdmin />
          <div className="flex flex-col w-[1020px] h-[560px] custom-scrollbar-admin overflow-y overflow-x-hidden  bg-white absolute top-[25px] right-[320px] text-black rounded-3xl p-8">
            <Tabs 
                variant="underlined"
                classNames={{
                  tabList: "flex gap-6 w-[180px] bg-white relative ",
                  cursor: "w-full bg-[#0072BB]",
                  tab: "flex w-[100px] px-0 ",
                  tabContent:"group-data-[selected=true]:text-[#0072BB]"
                }}
              >
                <Tab key="HomeSettings" className="text-[12px]" title="خانه">
                  <Card
                  shadow="none"
                  className='overflow-hidden'
                  >
                    <CardBody className='overflow-hidden'>
                      <HomeSettings /> 
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="AboutusSettings" className="text-[12px]" title="درباره ما">
                  <Card
                  shadow="none"
                  >
                    <CardBody className='overflow-hidden'>
                      <AboutusSettings /> 
                    </CardBody>
                  </Card>  
                </Tab>
                <Tab key="ContactusSettings" className="text-[12px]" title="تماس با ما">
                  <Card
                  shadow="none"
                  >
                    <CardBody className='overflow-hidden'>
                     <ContactusSettings /> 
                    </CardBody>
                  </Card>  
                </Tab>
            </Tabs>
          </div>
      </div>
    </>
  )
}

export default Settings;
