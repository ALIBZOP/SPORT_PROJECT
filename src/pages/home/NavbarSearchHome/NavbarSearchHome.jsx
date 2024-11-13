import React from 'react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { motion, Variants } from "framer-motion";


function NavbarSearchHome() {
  const [hallSelectedKeys, setHallSelectedKeys] = React.useState(new Set(["انتخاب سالن"]));

  const hallselectedValue = React.useMemo(
    () => Array.from(hallSelectedKeys).join(", ").replaceAll("_", " "),
    [hallSelectedKeys]
  );

  const [dateselectedKeys, setDateSelectedKeys] = React.useState(new Set(["انتخاب تاریخ"]));

  const dateselectedValue = React.useMemo(
    () => Array.from(dateselectedKeys).join(", ").replaceAll("_", " "),
    [dateselectedKeys]
  );

  const [timeselectedKeys, setTimeSelectedKeys] = React.useState(new Set(["انتخاب ساعت"]));

  const timeselectedValue = React.useMemo(
    () => Array.from(timeselectedKeys).join(", ").replaceAll("_", " "),
    [timeselectedKeys]
  );
  
  return (
    <>
      <div className="flex relative">
        <div className="flex absolute bg-white items-center border-1 border-black/20 w-[1050px] h-[128px] -left-[580px] top-[470px] shadow-lg rounded-3xl px-8">
          <div>
            <form  className="relativ flex items-center justify-center flex-row mt-[7px] gap-[68px]">
              <div className="relativ flex items-center justify-center">
                <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="bordered" 
                        className="capitalize w-[178px] h-[52px] border-1 border-[#66B10B]"
                      >
                        {hallselectedValue}
                      </Button>
                      </DropdownTrigger>
                        <DropdownMenu 
                          aria-label="Single selection example"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={hallSelectedKeys}
                          onSelectionChange={setHallSelectedKeys}
                          className="bg-white rounded-xl"
                        >
                        <DropdownItem className="text-[#66B10B]" key="چمن مصنوعی">چمن مصنوعی</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="استخر">استخر</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="سالن فوتسال">سالن فوتسال</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="سالن های رزمی">سالن های رزمی</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                </div>
              <div>
              <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="bordered" 
                        className="capitalize w-[178px] h-[52px] border-1 border-[#66B10B]"
                      >
                        {dateselectedValue}
                      </Button>
                      </DropdownTrigger>
                        <DropdownMenu 
                          aria-label="Single selection example"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={dateselectedKeys}
                          onSelectionChange={setDateSelectedKeys}
                          className="bg-white rounded-xl"
                        >
                        <DropdownItem className="text-[#66B10B]" key="۱۳۵۶/۰۹/۲۳">۱۳۵۶/۰۹/۲۳</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
              </div>
              <div>
              <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="bordered" 
                        className=" capitalize w-[178px] h-[52px] border-1 border-[#66B10B]"
                      >
                        {timeselectedValue}
                      </Button>
                      </DropdownTrigger>
                        <DropdownMenu 
                          aria-label="Single selection example"
                          variant="flat"
                          disallowEmptySelection
                          selectionMode="single"
                          selectedKeys={timeselectedKeys}
                          onSelectionChange={setTimeSelectedKeys}
                          className="bg-white rounded-xl"
                        >
                        <DropdownItem className="text-[#66B10B]" key="صبح(۷.۳۰تا ۹)">صبح(۷.۳۰تا ۹)</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="ظهر(۱۰.۳۰تا ۱۲)">ظهر(۱۰.۳۰تا ۱۲)</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="بعداز ظهر(۱۳.۳۰تا۱۵)">بعداز ظهر(۱۳.۳۰تا۱۵)</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="عصر(۱۶.۳۰تا۱۸)"> عصر(۱۶.۳۰تا۱۸)</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="شب(۱۹.۳۰تا۲۱)">شب(۱۹.۳۰تا۲۱)</DropdownItem>
                        <DropdownItem className="text-[#66B10B]" key="اخرشب(۲۲.۳۰تا۱۲)">اخرشب(۲۲.۳۰تا۱۲)</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
              </div>
              <div className="border-r-1 h-16"></div>
              <div className="">
                <Button 
                  type="search"
                  className="rounded-full bg-[#66B10B]  w-[178px] h-[52px] text-white"
                >
                 جستجو 
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarSearchHome;