import React from 'react'
import Image from "next/image" 
import {Tabs, Tab, Styled, Link, Button, Card, CardBody, CardHeader} from "@nextui-org/react";
import LoginImageBaner from "../../assets/login/login-image-baner.png"
import LoginForm from "./LoginForm/LoginForm.jsx"
import RegisterForm from "./RegisterForm/RegisterForm.jsx"
import LoginFormCard from "../../ui/NextUi/LoginFormCard.jsx"

function loginPage() {
      const [selected, setSelected] = React.useState("login");

  return (
    <>
        <div className="flex flex-row overflow-hidden h-full">
            <div className="flex flex-col justify-center h-[607px] w-[688px]">
                <Card
                    shadow="none"
                    className="flex justify-center items-center max-w-full w-[340px] h-[500px] mr-[160px]">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            selectedKey={selected}
                            onSelectionChange={setSelected}
                            classNames={{
                                tabList: "flex w-full relative bg-[#F0F0F0] border-1 shadow-md overflow-hidden px-2 gap-6",
                                cursor: "w-full bg-white bg-[#0072BB]",
                                tab: "flex w-full px-0 ",
                                tabContent:"group-data-[selected=true]:text-black group-data-[selected=true]:bg-white flex w-[138px] h-[34px] rounded-[10px] items-center justify-center"
                              }}
                            className="mt-[120px]"
                        >
                            <Tab key="login" title="ورود">
                                <LoginForm />
                            </Tab>
                            <Tab key="Register" title="ساخت حساب">
                                <RegisterForm />
                            </Tab>
                        </Tabs>
                    </CardBody>
                </Card>
            </div>
            <div className="flex justify-center bg-[#66B10B]/20 items-center h-[606px] w-[688px] overflow-hidden">
                <Image
                    src={LoginImageBaner}
                    alt="Picture of the author"
                    className="w-[530px] mb-[60px]"
                />
            </div>
        </div>
    </>
  )
}

export default loginPage;
