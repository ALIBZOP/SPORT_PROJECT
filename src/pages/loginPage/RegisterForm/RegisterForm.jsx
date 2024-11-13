import React from 'react'
import Image from "next/image";
import {Button} from "@nextui-org/react";
import User from "../../../assets/RegisterForm/User.png"
import Phone from "../../../assets/RegisterForm/Phone.png"
import Lock_alt from "../../../assets/RegisterForm/Lock_alt.png"
import LoginFormInput from "../../../ui/NextUi/LoginFormInput.jsx"

function RegisterForm() {
  return (
    <>
        <div  className="relative">
            <div className="flex flex-col items-center absolute -top-[140px] right-[30px] gap-4">
                <p className="text-[20px]">خوش برگشتید!</p>
                <p className="text-[12px]">خوش برگشید لطفا جزئیات خودرا وارد کنید</p>
            </div>
            <form className="flex flex-col gap-4 h-[300px]">
                 <div className="flex flex-row justify-center items-center border-1 p-1 h-[47px] border-black rounded-lg gap-2">
                    <div>
                        <LoginFormInput
                            placeholder="نام و نام خانوادگی را وارد کنید"
                            className="w-[230px]"
                            radius ="sm"
                            type="name"
                        />
                    </div>
                <div className="flex h-[28px] border-r-1 border-black my-2"></div>
                <div className="flex justify-center w-[70px] h-[30px] mt-0.5 ml-1.5 p-0.5">
                    <Image 
                        src={User}
                        alt="Picture of the author"
                    />
                </div>
                </div>
                <div className="flex flex-row justify-center items-center border-1 p-1 h-[47px] border-black rounded-lg gap-2">
                    <div>
                        <LoginFormInput
                            placeholder="شماره تماس خود را وارد کنید"
                            className="w-[230px]"
                            radius ="sm"
                            type="number"
                        />
                    </div>
                <div className="flex h-[28px] border-r-1 border-black my-2"></div>
                    <div className="flex justify-center w-[70px] h-[30px] mt-0.5 ml-1.5 p-0.5">
                        <Image 
                            src={Phone}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center border-1 p-1 h-[47px] border-black rounded-lg gap-2">
                    <div>
                        <LoginFormInput
                            isRequired
                            placeholder="رمز عبور خود را وارد کنید"
                            className="w-[230px]"
                            radius ="sm"
                            type="password"
                        />
                    </div>
                <div className="flex h-[28px] border-r-1 border-black my-2"></div>
                    <div className="flex justify-center w-[70px] h-[30px] mt-0.5 ml-1.5 p-0.5">
                        <Image 
                            src={Lock_alt}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center border-1 p-1 h-[47px] border-black rounded-lg gap-2">
                    <div>
                        <LoginFormInput
                            isRequired
                            placeholder="تکرار رمز عبور"
                            className="w-[230px]"
                            radius ="sm"
                            type="password"
                        />
                    </div>
                <div className="flex h-[28px] border-r-1 border-black my-2"></div>
                    <div className="flex justify-center w-[70px] h-[30px] mt-0.5 ml-1.5 p-0.5">
                        <Image 
                            src={Lock_alt}
                            alt="Picture of the author"
                        />
                    </div>
                 </div>
                <div className="flex gap-2 justify-end">
                    <Button fullWidth color="primary" className="bg-[#66B10B] h-[47px]">
                        ادامه
                    </Button>
                </div>
            </form>
        </div>
    </>
  )
}

export default RegisterForm;