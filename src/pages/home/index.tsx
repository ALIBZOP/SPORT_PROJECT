import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Button } from "@nextui-org/react";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/page/Animation - 1731599360405.json";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center overflow-x-hidden gap-10">
        <Header/>
          <div className="flex flex-row justify-center w-[1400px] h-[560px] text-[#52cc99] px-10 py-8 mt-[55px]">
            <div className="flex flex-row relative z-10 text-[#52cc99] p-8 gap-[300px]">
              <div className="flex flex-col justify-center w-[400px] gap-20">
                <div>
                  <h1 className="text-6xl w-full">همین الان رزرو کن</h1>
                </div>
                <div>
                  <p className="text-lg/[26px]">باشگاه فوتینو با بالا ترین امکنات روز دنیا و با رعایت نکات بهداشتی همواره در تلاش است بهترین خدمات را به شما ارائه دهد</p>
                </div>
                <div>
                  <Link href="/conditionHall" passHref>
                    <Button 
                      className="text-white px-14 py-8 bg-[#52cc99] gap-8 rounded-3xl"
                    >
                      <p>مشاهده همه سانس ها</p>
                      <Image 
                        src="/path-to-your-image.jpg" 
                        width={40}
                        height={40}
                        alt="Picture of the author"
                      />
                    </Button>  
                  </Link>
                </div>
              </div>
              <div className="w-[550] h-[2000]">
                <Lottie
                  animationData={animationData}
                  loop={true}
                  style={{width: 450, height: 450,transformOrigin: "center",transform: "scalex(1.1)", objectFit: "contain"}}
                  className="border-[3px] overflow-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
