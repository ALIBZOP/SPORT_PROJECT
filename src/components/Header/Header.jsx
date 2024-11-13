import Link from "next/link"
import Image from "next/image" 
import User from "../../assets/Header/User_fill.png"
import basket from "../../assets/Header/icon-basket.png"
import logo from "../../assets/Header/main-logo.png"
import {Tooltip} from "@nextui-org/react";


const Header = () => {
  return (
    <>
        <div className="flex flex-row z-20 px-8 py-2 sm:px-8 sm:py-5 justify-between flex-wrap w-[1400px] h-[50px] sm:h-[80px] fixed bg-white ">
                <Tooltip content="فوتینو" className="py-2 px-4 bg-[#66B10B] text-white ">
                    <div className="mr-5">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Picture of the author"
                                className="w-[30px] sm:w-[48px] h-[30px] sm:h-[48px]"
                            />
                        </Link>
                    </div>
                </Tooltip>
                    <div className="flex justify-center IRANSans-web">
                        <ul className="flex flex-row gap-6 sm:gap-16 p-2">
                            <li>
                                <Link href="/" passHref className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]">خانه</Link>
                            </li>
                                <li>
                                <Link href="/conditionHall" passHref className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]">وضعیت سالن ها</Link>
                            </li>
                            <li>
                                <Link href="/contactUs" passHref className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]">تماس با ما</Link>
                            </li>
                            <li>
                                <Link href="/aboutUs" passHref className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]">درباره ما</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-4 place-items-center">
                    <Tooltip content="سبد خرید" className="p-2 bg-[#66B10B] text-white">
                        <div>
                            <Link href="/basketBuy" className="flex flex-row gap-2 p-2 ">
                                <Image
                                src={basket}
                                alt="Picture of the author"
                                className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]"
                                />
                            </Link>
                        </div>
                    </Tooltip>
                    <Tooltip content="ورود به حساب کاربری" className="p-2 bg-[#66B10B] text-white">
                        <div>
                            <Link href="/loginPage" className="flex flex-row gap-2 p-2">
                                <Image
                                src={User}
                                alt="Picture of the author"
                                className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px] ml-[15px]"
                            />
                            </Link>
                        </div>
                    </Tooltip>
                </div>
        </div>
    </>
  )
}

export default Header;
