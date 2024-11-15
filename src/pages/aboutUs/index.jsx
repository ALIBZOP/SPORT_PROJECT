import Image from "next/image" 
import Header from "../../components/Header/Header.tsx"
import Footer from "../../components/Footer/Footer.tsx"

function about() {
  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center gap-14">
        <Header claaName="z-20"/>
          <div className=" flex w-full justify-center mt-[80px]">
            <div className="flex p-8 justify-center bg-about-image text-3xl w-full h-[365px]">
                <p claaName=" w-full">درباره ما</p>
            </div>
            <div className="flex flex-row absolute justify-center top-[390px] gap-56 bg-white 
            border-[#ffffff] p-8 border-2 w-[1200px] h-[150px] rounded-3xl shadow-md z-10">
              <div className="flex flex-col gap-8 items-center">
                <Image
                  src="/path-to-your-image.jpg" 
                  width={36}
                  height={26}
                  alt="Picture of the author"
                />
                <p>پشتیبانی ۲۴ ساعته</p>
              </div>
              <div className="flex flex-col gap-8 items-center">
                  <Image
                    src="/path-to-your-image.jpg" 
                    width={36}
                    height={26}
                    alt="Picture of the author"
                  />
                  <p>بهترین لوکیشن</p>
              </div>
              <div className="flex flex-col gap-8 items-center">
                  <Image
                    src="/path-to-your-image.jpg" 
                    width={36}
                    height={26}
                    alt="Picture of the author"
                  />
                  <p>امنیت بالا</p>
              </div>
              <div className="flex flex-col gap-8 items-center">
                  <Image
                    src="/path-to-your-image.jpg" 
                    width={36}
                    height={26}
                    alt="Picture of the author"
                  />
                  <p>بهترین قیمت</p>
              </div>
            </div>
          </div>
        <div className="flex flex-row mt-28 gap-44">
            <div className="flex flex-col w-[556px] h-[568px] gap-14">
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl text-[#66B10B]">ما که هستیم..؟</h2>
                <p className="text-sm leading-7">فوتینو یک باشگاه حرفه ایی است با ۱۰ سال سابقه با افتخار که همیشه درتلاش بوده بهترین خدمات را به شما عزیزان داشت باشد که موفق بوده بهترین باشگاه شرق تهران</p>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl text-[#66B10B]">ما چه میکنیم..؟</h2>
                <p className="text-sm leading-8">در باشگاه فوتینو ۴ زمین وجود دارد که شامل چمن مصنوعی. سالن فوتسال.سالن رزمی و استخر است که با بهترین شرایط نگهداری و بهداشتی است و به شما لذت یک ورزش دلچسب را میدهد</p>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl text-[#66B10B]">چه انتظاری باید از ما داشته باشید.؟</h2>
                <p className="text-sm leading-5">شما باید انتظار داشته باشید که وقتی وارد باشگاه میشویدت با بهترین امکانات و شرایط روبه رو شوید با بالاترین کیفیت زمین ها و پرسنل که همواره در تلاش برای بالاترین خدمت رسانی</p>
              </div>
            </div>
            <div className="flex flex-row w-[455px] h-[650] relative">
              <div className="flex flex-col gap-6"> 
                <div>
                  <Image 
                    src="/path-to-your-image.jpg" 
                    width={220}
                    height={285}
                    alt="Picture of the author"
                  />
                </div>
                <div>
                <Image 
                  src="/path-to-your-image.jpg" 
                  width={220}
                  height={285}
                  alt="Picture of the author"
                  />
                </div>
              </div>
            <div className="flex flex-col absolute right-[228px] top-[50px] gap-6">
                <div>
                  <Image 
                  src="/path-to-your-image.jpg" 
                  width={220}
                  height={285}
                  alt="Picture of the author"
                  />
                </div>
                <div>
                  <Image 
                    src="/path-to-your-image.jpg" 
                    width={220}
                    height={285}
                    alt="Picture of the author"
                  />
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </>
  )
}
export default about;
