import Link from "next/link";
import Image from "next/image";
import { useForm } from 'react-hook-form';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import mapImage from "../../assets/contactUs/map-image.png";
import PhoneImage from "../../assets/contactUs/Vector 189.png";
import MessageImage from "../../assets/contactUs/Message_alt_fill.png";
import TelegramImage from "../../assets/contactUs/Telegram.png";

function ContactUs() {
  const { register, handleSubmit, formState: { isValid } } = useForm({
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col overflow-x-hidden items-center bg-[#ADADAD]/10 md:w-2xl">
        <Header />
          <div className="flex flex-row p-8 mt-[80px] gap-6">
            <div className="flex flex-col w-[603px] h-[714px] border-[1px] border-[#ADADAD]/60 bg-white px-8 py-10 rounded-3xl gap-4">
              <div className="w-[440px] h-[65px] gap-4">
                <h2 className="text-2xl mb-2 text-[#66B10B]">تماس با ما</h2>
                <p className="text-xs/[14px] h-[21px]">ما شبانه روز در تلاش برای پاسخ دادن به سوالات و درخواست های شما هستیم</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[539px] h-[456px] items-center">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-row gap-14">
                      <div className="gap-2">
                        <label className="flex flex-col gap-2">
                          نام
                          <input
                            type="text"
                            {...register('name', { required: true })}
                            className="w-[240px] h-[50px] focus:outline-none shadow-md border-1 border-black/5 rounded-lg bg-[#D9D9D9]/20 p-2"
                          />
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2">
                          نام خانوادگی
                          <input
                            type="text"
                            {...register('lastName', { required: true })}
                            className="w-[240px] h-[50px] focus:outline-none shadow-md border-1 border-black/5 rounded-lg bg-[#D9D9D9]/20 p-2"
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="flex flex-col gap-2">
                        شماره تماس
                        <input
                          type="number"
                          {...register('number', { required: true })}
                          className="w-[538px] h-[50px] focus:outline-none shadow-md border-1 border-black/5 no-spinner rounded-lg bg-[#D9D9D9]/20 p-2"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-2">
                        ایمیل
                        <input
                          type="email"
                          {...register('email', { required: true })}
                          className="w-[538px] h-[50px] focus:outline-none shadow-md border-1 border-black/5 rounded-lg bg-[#D9D9D9]/20 p-2"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="flex flex-col gap-2">
                        متن درخواست
                        <textarea
                          {...register('comment', { required: true })}
                          className="w-[538px] h-[130px] focus:outline-none shadow-md border-1 border-black/5 rounded-lg resize-none bg-[#D9D9D9]/20 p-2"
                        />
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`text-white bg-[#66B10B]/40 border-[1px] border-[#ADADAD] w-[100px] h-[40px] rounded-full ${
                      isValid ? 'bg-[#66B10B] hover:bg-[#66B10B]/80' : 'bg-[#66B10B] cursor-not-allowed'
                    }`}
                  >
                    ارسال
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <Link href="/">
                  <Image
                    src={mapImage}
                    width={572}
                    height={356}
                    alt="Map"
                  />
                </Link>
              </div>
              <div className="flex flex-col w-[573px] h-[326px] bg-white border-[1px] border-[#ADADAD]/60 p-6 rounded-3xl gap-10">
                <div className="flex flex-row w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#66B10B]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={PhoneImage}
                      width={22}
                      height={22}
                      alt="Phone"
                      className="flex absolute items-center right-[10px]"
                    />
                  </div>
                  <p className="flex items-center Shabnam">۷۷۷۴۴۰۳۶ ۹۸+</p>
                </div>
                <div className="flex flex-row w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#66B10B]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={MessageImage}
                      width={25}
                      height={20}
                      alt="Message"
                      className="flex absolute items-center right-[8px]"
                    />
                  </div>
                  <p className="flex items-center">footinoclube@gmail.com</p>
                </div>
                <div className="flex flex-row items-center w-[526px] h-[74px] bg-[#E6E6E6]/30 px-4 py-3 rounded-lg gap-4">
                  <div className="flex relative bg-[#66B10B]/30 p-1 w-[40px] h-[40px] items-center rounded-full">
                    <Image
                      src={TelegramImage}
                      width={30}
                      height={20}
                      alt="Telegram"
                      className="flex absolute items-center right-[6px]"
                    />
                  </div>
                  <p className="flex items-center">@footino</p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default ContactUs;
