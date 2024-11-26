import Link from "next/link"
import Image from "next/image"
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/footer/Animation - 1731601555340.json";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex relative overflow-visible justify-center h-full w-full">
        <div className="flex flex-col items-center h-auto w-[400px]">
          <div className="flex relative w-[400px]">
            <Lottie
              animationData={animationData}
              loop={true}
              style={{width: 2000, height: "auto", transformOrigin: "center",transform: "scalex(3.5)", objectFit: "contain",maxHeight: "none",}}
            />
          </div>
          <div className="flex items-center justify-center bg-[#52cc99] h-[300px] w-[1400px]">

          </div>
        </div>
      </div>
    </>
  )
}
export default Footer;

         {/* <div className="flex flex-row z-100 justify-center w-[1200px] border-2 py-14 gap-44 ">
            <div className="flex flex-col gap-6 w-[440px]">
              <div>
                <Image 
                  src="/path-to-your-image.jpg" 
                  width={70}
                  height={33}
                  alt="Picture of the author"
                />
              </div>
              <div>
                <p className="text-sm/[16px] leading-6">فوتینو بهترین باشگاه شرق تهران با وارد کردن شماره < br />
                تماس خود عضو خانواده بزرگ ما شوید
                </p>
              </div>
              <div>
                <form action="" className="relative border-solid border-2 p-3 w-[325px]  border-[#66B10B] rounded-full">
                  <div>
                    <input className="focus:outline-none no-spinner" type="number" placeholder="شماره تماس"/>
                    <button type="submit" className="absolute text-white border-solid border-2 p-3
                      border-[#66B10B] rounded-full bg-[#66B10B] w-[100px] inset-y-0 -left-[2px] "> تایید </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col justify-center w-[170px] gap-3.5 text-lg/[24px]">
              <Link href="/home">
                خانه  
              </Link>
              <Link href="/conditionHall">
                وضعیت سالن ها  
              </Link>
              <Link href="/aboutUs">
                درباره ما   
              </Link>
            </div>
            
            <div className="flex flex-col justify-center w-[390px] gap-[53px]">
              <div className="flex flex-row gap-2">
                <Image
                  src="/path-to-your-image.jpg" 
                  width={24}
                  height={24}
                  alt="Picture of the author"
                />
                <p className="text-sm/[16px]"> تهران-۱۵۴ شرقی-پلاک ۹۴</p>
              </div>
              <div className="flex flex-row  gap-2">
                <Image
                    src="/path-to-your-image.jpg" 
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                  <p className="text-sm/[16px]">۷۷۷ ۴۴۰ ۳۶ ۰۲۱ </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/path-to-your-image.jpg" 
                  width={24}
                  height={24}
                  alt="Picture of the author"
                  />
                  <p className="text-sm/[16px]">gmail.com</p>
              </div>
            </div>
        </div>  */}
