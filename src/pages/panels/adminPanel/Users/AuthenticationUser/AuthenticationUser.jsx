import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Confirmed from "./Confirmed/Confirmed"
import NotConfirmed from "./NotConfirmed/NotConfirmed"


function AuthenticationUser() {
  return (
    <>
       <div className="w-[1040px] h-[560px] relative overflow-hidden">
        <div className="w-[995px] h-[560px]  overflow-y-hidden overflow-x-hidden bg-white ml-[50px] absolute -top-[30px] -right-[30px] text-black rounded-lg px-6 py-8">
          <Tabs aria-label="Options" shadow="none"
            classNames={{
              tabList: "flex w-[200px] relative bg-white border-1 shadow-md overflow-hidden px-2 gap-6",
              cursor: "w-full bg-white bg-[#0072BB]",
              tab: "flex w-[100px] px-0 ",
              tabContent:"group-data-[selected=true]:text-[#0072BB] group-data-[selected=true]:bg-[#b3d5eb] flex w-[80px] h-[34px] rounded-[10px] items-center justify-center"
            }}>
            <Tab shadow="none" key="Confirmed" title="تایید شده">
              <Card 
                shadow="none"
                radius="none"
              >
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                  <Confirmed />
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="NotConfirmed" title="تایید نشده">
              <Card 
                shadow="none"
                radius="none"
              >
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                  <NotConfirmed />
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </div>
       </div>
    </>  
  );
}

export default AuthenticationUser;