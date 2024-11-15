import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const reservations = [
  {
    id: 1,
    user: 'اکبر',
    fieldName: 'زمین فوتبال استاد معین',
    date: '۱۴۰۲/۰۷/۲۳',
    time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰',
    ReservationTime: "۱۲.۳۰",
    status: 'فعال',
    statusColor: 'text-[#66B10B]',
    cancelable: true,
  },
  {
    id: 2,
    user: 'علی',
    fieldName: ' استخر استاد معین',
    date: '۱۴۰۲/۰۹/۰۸',
    time: '۹:۰۰ تا ۱۰:۳۰',
    price: '۴۵۰،۰۰۰',
    ReservationTime: "۱۶.۳۰",
    status: 'لغو',
    statusColor: 'text-[#FF0000]',
    cancelable: false,
  },
];

const columnHeaders = [
  { label: 'نام کاربر'},
  { label: 'نام سالن'},
  { label: 'تاریخ'},
  { label: 'سانس'},
  { label: 'قیمت'},
  { label: 'ساعت رزرو'},
  { label: 'وضعیت'},
  { label: 'لغو سفارش'},
];

const ReservationTable = () => {
  return (
    <div className="text-right border border-black/20 shadow-md rounded-[20px] p-4 mt-[50px]">
      <div className="flex items-center gap-[710px]">
        <h2 className="text-right text-[14px] mb-4">رزرو های اخیر</h2>
        <div className=" text-left mb-4 text-[14px]">
          <Link href="" className="flex flex-row text-blue-600 gap-2">
              مشاهده همه
            <Image
              width={22}
              alt="Picture of the author"
             />
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto rtl">
        <table className="min-w-full bg-white rounded-lg shadow text-right">
          <thead>
            <tr className="text-center text-[#B4B4B4] text-[10px]">
              {columnHeaders.map((header, index) => (
                <th key={index} className="py-2">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation.id} className="text-sm">
              <td className="flex flex-row items-center text-[12px] py-2 text-center gap-4">
                <Image
                    width={28}
                    alt="Picture of the author"
                  />
                {reservation.user}
                </td>
                <td className="py-2 text-center text-[12px]">{reservation.fieldName}</td>
                <td className="py-2 text-center text-[12px]">{reservation.date}</td>
                <td className="py-2 text-center text-[12px]">{reservation.time}</td>
                <td className="py-2 text-center text-[14px]">{reservation.price}<span className='text-[12px]'>تومان</span></td>
                <td className="py-2 text-center text-[12px]">{reservation.ReservationTime}</td>
                <td className={`py-2 ${reservation.statusColor} text-center text-[12px]`}>{reservation.status}</td>
                <td className="py-2 text-center text-[12px]">
                  {reservation.cancelable && (
                    <button className="text-blue-600">
                      <Image
                        width={20}
                        alt="Picture of the author"
                      />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ReservationTable;
