import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import Sans from "./Sans";


function SansTabs() {
  return (
    <>
       <div className="w-[1040px] h-[560px] relative mb-[0px] overflow-hidden z-100">
        <div className="w-[995px] h-[560px]  overflow-y-hidden overflow-x-hidden bg-white ml-[50px] absolute -top-[30px] -right-[30px] text-black rounded-lg px-6 py-8">
          <Tabs aria-label="Options" shadow="none"
          classNames={{
            tabList: "flex gap-6 w-[315px] relative",
            cursor: "w-full bg-white bg-[#0072BB]",
            tab: "flex w-[100px] px-0 ",
            tabContent:"group-data-[selected=true]:text-[#0072BB] group-data-[selected=true]:bg-white w-[59px] flex h-[34px] rounded-[8px] items-center justify-center"
          }}>
            <Tab shadow="none" key="football" title="فوتبال">
              <Card shadow="none">
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                    <Sans />
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="futsal" title="فوتسال">
              <Card shadow="none">
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                    <Sans />
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="martial" title="رزمی">
              <Card shadow="none">
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                    <Sans />
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="pool" title="استخر">
              <Card shadow="none">
                <CardBody className="overflow-x-hidden custom-scrollbar-admin-User">
                    <Sans />
                </CardBody>
              </Card>  
            </Tab>
          </Tabs>
        </div>
       </div>
    </>  
  );
}

export default SansTabs;