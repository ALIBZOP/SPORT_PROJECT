import Link from "next/link"
import Image from "next/image"

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex bg-white justify-center w-[1439px]">
        <div className="flex flex-row justify-center bg-white w-[1200px] my-[35px] border-2 border-y-[#66B10B] border-x-white py-14 gap-44 ">
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
                      border-[#66B10B] rounded-full bg-[#66B10B]  w-[100px] inset-y-0 -left-[2px] "> تایید </button>
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
        </div>
      </div>

    </>
  )
}

export default Footer;
