import Link from "next/link";
import Image from "next/image";

type HeaderProps = React.PropsWithChildren<{}>;

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-row z-20 px-8 py-5 justify-between bg-[#52cc99] flex-wrap w-[1400px] h-[80px] fixed ">
        <div className="mr-5">
          <Link href="/">
              <Image
                alt="Logo"
                width={48} 
                height={48}
                src="/path-to-your-image.jpg" 
                className="w-[48px] h-[48px]"
              />
          </Link>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-row text-white gap-6 sm:gap-16 p-2">
            <li>
              <Link className="text-[16px]" href="/" passHref>
                خانه
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/contactUs" passHref>
                تماس با ما
              </Link>
            </li>
            <li>
              <Link className="text-[16px]" href="/aboutUs" passHref>
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
                  className="w-[24px] h-[24px] ml-[15px]"
                />
            </Link>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Header;
