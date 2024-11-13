import React from "react";
import Image from "next/image";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import FootballPitchPage from "../.././FootballPitchPage/FootballPitchPage.jsx"
import SwimmingPool from "../.././SwimmingPool/SwimmingPool.jsx"
import MartialArtsHall from "../.././MartialArtsHall/MartialArtsHall.jsx"
import FutsalHall from "../.././FutsalHall/FutsalHall.jsx"
import FootballImage1 from "../../../../assets/FootballPitchPage/image-FootballPitchPage-1.png"
import FootballImage2 from "../../../../assets/FootballPitchPage/image-FootballPitchPage-2.png"
import FootballImage3 from "../../../../assets/FootballPitchPage/image-FootballPitchPage-3.png"
import FutsalImage1 from "../../../../assets/FutsalHall/image-futsalHall-1.png"
import FutsalImage2 from "../../../../assets/FutsalHall/image-futsalHall-2.png"
import MartialArtsHallImage1 from "../../../../assets/MartialArtsHall/image-martialArtsHall-1.png"
import MartialArtsHallImage2 from "../../../../assets/MartialArtsHall/image-martialArtsHall-2.png"
import SwimmingPoolImage1 from "../../../../assets/SwimmingPool/image-swimmingPool-1.png"
import SwimmingPoolImage2 from "../../../../assets/SwimmingPool/image-swimmingPool-2.png"

function HeaderConditionHall() {
  return (
    <>
        <div className="flex flex-col w-[1200px] h-[1005px] bg-white p-8 rounded-[27px]">
          <Tabs 
            aria-label="Options" 
            variant="underlined"
            className="flex flex-row bg-white w-[632px] h-[48px] shadow-md rounded-full"
            classNames={{
              tabList: "flex gap-36 w-full bg-white justify-center relative rounded-none p-0 border-b border-divider rounded-full",
              cursor: "w-full bg-[#66B10B]",
              tab: "max-w-fit px-0 h-12",
              tabContent:"group-data-[selected=true]:text-[#66B10B]"
            }}
          >
            <Tab
              key="football"
              title={
                <div className="flex items-center space-x-2">
                  <p>فوتبال</p>
                </div>
              }
            >
              <div className="flex flex-row relative w-full h-full mr-10 gap-52 ">
                <div className="w-[550px] h-full">
                      <FootballPitchPage />
                </div>
                <div className="flex flex-col absolute w-[484px] h-full mr-[640px] -mt-[92px]">
                  <div> 
                    <Image
                      src={FootballImage1}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FootballImage2}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FootballImage3}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
              
            </Tab>

            <Tab
              key="swimmingpool"
              title={
                <div className="flex items-center space-x-2">
                  <p>استخر</p>
                </div>
              }
            >
             <div className="flex flex-row relative w-full h-full mr-10 gap-52 ">
                <div className="w-[550px] h-full">
                  <SwimmingPool />
                </div>
                <div className="flex flex-col absolute w-[484px] h-full mr-[640px] -mt-[92px]">
                  <div> 
                    <Image
                      src={SwimmingPoolImage1}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={SwimmingPoolImage2}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FootballImage3}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            </Tab>

            <Tab
              key="martialarts"
              title={
                <div className="flex items-center space-x-2">
                  <p>رزمی</p>
                </div>
              }
            >
               <div className="flex flex-row relative w-full h-full mr-10 gap-52 ">
                <div className="w-[550px] h-full">
                  <MartialArtsHall />
                </div>
                <div className="flex flex-col absolute w-[484px] h-full mr-[640px] -mt-[92px]">
                  <div> 
                    <Image
                      src={MartialArtsHallImage1}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={MartialArtsHallImage2}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FootballImage3}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            </Tab>
             
            <Tab
              key="futsal"
              title={
                <div className="flex items-center space-x-2">
                  <p>فوتسال</p>
                </div>
              }
            >
              <div className="flex flex-row relative w-full h-full mr-10 gap-52 ">
                <div className="w-[550px] h-full">
                  <FutsalHall />
                </div>
                <div className="flex flex-col absolute w-[484px] h-full mr-[640px] -mt-[92px]">
                  <div> 
                    <Image
                      src={FutsalImage1}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FutsalImage2}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                  <div>
                    <Image
                      src={FootballImage3}
                      width={484}
                      height={335}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div> 
    </>
  );
}

export default HeaderConditionHall;
