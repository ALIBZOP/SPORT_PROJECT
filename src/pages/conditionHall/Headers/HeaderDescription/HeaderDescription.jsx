import React from "react";
import Image from 'next/image';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import DescriptionPage from "./DescriptionPage/DescriptionPage"
import CommentsPage from "./CommentsPage/CommentsPage"
import startIcon from "../../../.././assets/DescriptionPage/start-icon.png"
import WeeklySchedule from "../../WeeklySchedule/WeeklySchedule"


function HeaderDescription() {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="flex flex-row items-center absolute bg-[#66B10B]/30 w-[70px] rounded-full right-[500px] top-[15px] px-4 py-0.5 gap-1">
            <p className="flex justify-center text-sm text-[#66B10B]">۴.۶</p>
            <Image
               src={startIcon}
               alt="Picture of the author"
               className="flex items-center w-[18px] h-[18px]"
            />
        </div>
        <Tabs 
            aria-label="Options" 
            variant="underlined"
            classNames={{
                tabList: "flex gap-6 w-full bg-white relative ",
                cursor: "w-full bg-[#66B10B]",
                tab: "max-w-fit px-0 h-12",
                tabContent:"group-data-[selected=true]:text-[#66B10B]"
              }}
            >
            <Tab key="description" title="توضیحات و مشخصات">
              <Card
               shadow="none"
              >
                <CardBody>
                 <DescriptionPage />
                </CardBody>
              </Card>  
            </Tab>

            <Tab key="comments" title="نظرات">
              <Card
               shadow="none"
              >
                <CardBody>
                  <CommentsPage />
                </CardBody>
              </Card>  
            </Tab>
        </Tabs>
        <WeeklySchedule />
      </div>
    </>
  )
}

export default HeaderDescription;
