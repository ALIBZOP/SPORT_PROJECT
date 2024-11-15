import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex flex-row z-20 px-8 py-2 sm:px-8 sm:py-5 justify-between flex-wrap w-[1400px] h-[50px] sm:h-[80px] fixed bg-white">
        <div className="mr-5">
          <Link href="/">
              <Image
                alt="Logo"
                width={48} 
                height={48}
                src="/path-to-your-image.jpg" 
                className="w-[30px] sm:w-[48px] h-[30px] sm:h-[48px]"
              />
          </Link>
        </div>
        <div className="flex justify-center IRANSans-web">
          <ul className="flex flex-row gap-6 sm:gap-16 p-2">
            <li>
              <Link className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]" href="/" passHref>
                خانه
              </Link>
            </li>
            <li>
              <Link className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]" href="/contactUs" passHref>
                تماس با ما
              </Link>
            </li>
            <li>
              <Link className="text-[10px] sm:text-sm/[16px] hover:text-[#66B10B]" href="/aboutUs" passHref>
                درباره ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4 place-items-center">
          <div>
            <Link href="/basketBuy" passHref>
                <Image
                  alt="Basket"
                  width={48} 
                  height={48}
                  src="/path-to-your-basket-image.jpg" 
                  className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px]"
                />
            </Link>
          </div>
          <div>
            <Link href="/loginPage" passHref>
                <Image
                  alt="Login"
                  width={48} 
                  height={48}
                  src="/path-to-your-login-image.jpg" 
                  className="w-[16px] sm:w-[24px] h-[16px] sm:h-[24px] ml-[15px]"
                />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
