import React from 'react';
import Image from 'next/image';
import ImageAll from "../../../../../../assets/CommentsPage/comment-image.png"
import Close from "../../../../../../assets/adminpanel/Close_round.png"

const usersData = [
  {
    id: 1, name: 'علی بیازار', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 2, name: 'الیا ملک زاده', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 3, name: 'غلامرضا نادری', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 4, name: 'حسین ماهینی', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 5, name: 'علی اکبرزاده', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 6, name: 'غلامرضا نادری', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 7, name: 'محمود نادری', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 8, name: 'سعید باقری', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 9, name: 'امین محمدیان', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
  {
    id: 10, name: 'احمد فرهانی', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  },
];

const tableHeaders = [
  'عکس',
  'نام',
  'جنسیت',
  'شماره تماس',
  'تاریخ تولد',
  'شماره شبا',
  'ویرایش',
];

function NotConfirmed() {
  return (
    <div className="w-[930px] h-[370px] rounded- overflow-x-hidden py-4 top-[100px]">
      <div className="absolute -right-[10px] ">
        <table className="bg-white absolute w-[926px] border-1 border-black/20 mb-4 h-[431px] overflow-hidden mt-[60px] ml-[400px] right-[14px] -top-[85px] rounded-xl shadow-sm">
            <thead className="  border-t-1 gap-[100px]">
            <tr>
                {tableHeaders.map((header, index) => (
                <th key={index} className=" py-8 px-4 text-[10px] text-[#B4B4B4] text-center">
                    {header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {usersData.map((user, index) => (
                <tr
                key={user.id}
                className={`border-b gap-6 ${index % 2 === 0 ? 'bg-white' : 'bg-[#E5E5E5]/30'}`}
                >
                <td className="py-2 px-4 text-center">
                    <Image
                    src={user.avatar}
                    alt={user.name}
                    width={35}
                    height={25}
                    className="rounded-full"
                    />
                </td>
                <td className="py-2 w-[150px] px-4 text-center">{user.name}</td>
                <td className="py-2 px-4 text-center">{user.gender}</td>
                <td className="py-2 px-4 text-center">{user.phone}</td>
                <td className="py-2 px-4 text-center">{user.birthDate}</td>
                <td className="py-2 px-4 text-center">{user.membershipDate}</td>
                <td className="py-2 px-4 text-center">۹۸۹۰۳۴۱۵۰۹۱۱۹۸۹۳۴۱۵</td>
                <td className="py-2 px-4 text-center">
                    <button className="text-gray-600">
                        <p className="text-[12px] border-1 border-[#66B10B] text-[#66B10B] px-2 rounded-full">تایید</p>
                    </button>
                </td>
                <td className="py-2 px-4 text-center">
                    <button className="text-red-600">
                        <Image
                        src={Close}
                        width={20}
                        height={25}
                        className="rounded-full"
                        />
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default NotConfirmed;
