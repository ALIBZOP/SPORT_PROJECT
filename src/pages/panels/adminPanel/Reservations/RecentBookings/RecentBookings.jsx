import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserImage from '../../../../../assets/CommentsPage/comment-image.png';
import Close from '../../../../../assets/adminPanel/Close_round_fill.png';
import Expand from '../../../../../assets/adminPanel/Expand_left.png';

const reservations = [
  {
    id: 1, user: 'اکبر', fieldName: 'زمین فوتبال استاد معین', date: '۱۴۰۲/۰۷/۲۳', time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۲.۳۰", status: 'فعال', statusColor: 'text-[#66B10B]', cancelable: true,
  },
  {
    id: 2, user: 'علی', fieldName: ' استخر استاد معین', date: '۱۴۰۲/۰۹/۰۸', time: '۹:۰۰ تا ۱۰:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۶.۳۰", status: 'لغو', statusColor: 'text-[#FF0000]', cancelable: false,
  },
  {
    id: 3, user: 'اکبر', fieldName: 'زمین فوتبال استاد معین', date: '۱۴۰۲/۰۷/۲۳', time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۲.۳۰", status: 'فعال', statusColor: 'text-[#66B10B]', cancelable: true,
  },
  {
    id: 4, user: 'اکبر', fieldName: 'زمین فوتبال استاد معین', date: '۱۴۰۲/۰۷/۲۳', time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۲.۳۰", status: 'فعال', statusColor: 'text-[#66B10B]', cancelable: true,
  },
  {
    id: 5, user: 'علی', fieldName: ' استخر استاد معین', date: '۱۴۰۲/۰۹/۰۸', time: '۹:۰۰ تا ۱۰:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۶.۳۰", status: 'لغو', statusColor: 'text-[#FF0000]', cancelable: false,
  },
  {
    id: 6, user: 'اکبر', fieldName: 'زمین فوتبال استاد معین', date: '۱۴۰۲/۰۷/۲۳', time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۲.۳۰", status: 'فعال', statusColor: 'text-[#66B10B]', cancelable: true,
  },
  {
    id: 7, user: 'اکبر', fieldName: 'زمین فوتبال استاد معین', date: '۱۴۰۲/۰۷/۲۳', time: '۲:۳۰ تا ۱۲:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۲.۳۰", status: 'فعال', statusColor: 'text-[#66B10B]', cancelable: true,
  },
  {
    id: 8, user: 'علی', fieldName: ' استخر استاد معین', date: '۱۴۰۲/۰۹/۰۸', time: '۹:۰۰ تا ۱۰:۳۰',
    price: '۴۵۰،۰۰۰', ReservationTime: "۱۶.۳۰", status: 'لغو', statusColor: 'text-[#FF0000]', cancelable: false,
  },
];

const columnHeaders = [
  { label: 'نام کاربر' },
  { label: 'نام سالن' },
  { label: 'تاریخ' },
  { label: 'سانس' },
  { label: 'قیمت' },
  { label: 'ساعت رزرو' },
  { label: 'وضعیت' },
  { label: 'لغو سفارش' },
];

const RecentBookings = () => {
  return (
    <div className="text-right w-[925px] h-[435px] border border-black/20 shadow-md custom-scrollbar-admin-User overflow-x-hidden rounded-[20px] p-4">
      <div className="">
        <table className="min-w-full bg-white rounded-lg shadow text-right">
          <thead className="">
            <tr className="text-center text-[#B4B4B4] text-[10px]">
              {columnHeaders.map((header, index) => (
                <th key={index} className="py-2">
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="mb-[50px]">
            {reservations.map((reservation, index) => (
              <tr
                key={reservation.id}
                className={`text-sm ronded-full mb-[10px] ${index % 2 === 0 ? 'bg-[#F2F2F2]' : 'bg-[#FAFAFA]'}`}
              >
                <td className="flex flex-row items-center text-[12px] py-2 text-center gap-4">
                  <Image
                   src={UserImage}
                   width={28}
                   alt="User Image" 
                   />
                  {reservation.user}
                </td>
                <td className="py-2 text-center text-[12px]">{reservation.fieldName}</td>
                <td className="py-2 text-center text-[12px]">{reservation.date}</td>
                <td className="py-2 text-center text-[12px]">{reservation.time}</td>
                <td className="py-2 text-center text-[14px]">
                  {reservation.price}<span className="text-[12px]">تومان</span>
                </td>
                <td className="py-2 text-center text-[12px]">{reservation.ReservationTime}</td>
                <td className={`py-2 ${reservation.statusColor} text-center text-[12px]`}>{reservation.status}</td>
                <td className="py-2 text-center text-[12px]">
                  {reservation.cancelable && (
                    <button className="text-blue-600">
                      <Image
                       src={Close}
                       width={20}
                       alt="Cancel" />
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

export default RecentBookings;
