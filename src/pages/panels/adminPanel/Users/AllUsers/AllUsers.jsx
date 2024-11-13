import React from 'react';
import Image from 'next/image';
import ImageAll from "../../../../../assets/CommentsPage/comment-image.png"
import Close from "../../../../../assets/adminpanel/Close_round.png"
import Edit from "../../../../../assets/adminpanel/Edit_fill.png"
import AddRound from "../../../../../assets/adminpanel/Add_round.png"
import Filter from "../../../../../assets/adminpanel/Filter.png"


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
  // {
  //   id: 9, name: 'امین محمدیان', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  // },
  // {
  //   id: 10, name: 'احمد فرهانی', gender: 'آقا', phone: '۹۸۹۰۳۴۱۵۰۹۱۱+', birthDate: '۱۳۵۶/۰۹/۲۳', membershipDate: '۱۴۰۳/۰۶/۲۲', avatar: ImageAll,
  // },
];

const tableHeaders = [
  'عکس',
  'نام',
  'جنسیت',
  'شماره تماس',
  'تاریخ تولد',
  'تاریخ عضویت',
  'تاریخچه رزرو',
  'ویرایش',
  'حذف',
];

function AllUsers() {
  return (
    <div className="w-[930px] h-[720px]">
      <div className="flex flex-col gap-6 px-4">
        <div className="flex flex-row mr-[650px] mb-[10px] gap-2">
            <button className='flex flex-row items-center justify-center border-[#0072BB] text-[#0072BB] w-[110px] h-[40px] border-1 gap-2 rounded-full'>
                <p className="">مرتب سازی</p>
                <Image
                    src={Filter}
                    width={15}
                    height={25}
                    className="rounded-full"
                />
            </button>
            <button className='flex flex-row items-center justify-center bg-[#0072BB] border-[#0072BB] text-white w-[110px] h-[40px] border-1 gap-2 rounded-full'>
                <p className="">افزودن کاربر</p>
                <Image
                    src={AddRound}
                    width={15}
                    height={25}
                    className="rounded-full"
                />
            </button>
        </div>
        <div className="flex w-[900px] h-[380px] custom-scrollbar-admin-User overflow-x-hidden overflow-y-auto items-center justify-center px-4">
          <div className="flex w-[880px] h-[412px] items-center justify-center px-4 rounded-3xl">
            <table className="bg-white w-[926px] h-[500px] mt-[190px]">
              <thead className="border-t-1 gap-[100px]">
                <tr>
                    {tableHeaders.map((header, index) => (
                    <th key={index} className=" py-8 px-4 mt-[100px] text-[10px] text-[#B4B4B4] text-center">
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
                    <td className="py-2 px-4 text-center text-blue-600">مشاهده</td>
                    <td className="py-2 px-4 text-center">
                    <button className="text-gray-600">
                      <Image
                        src={Edit}
                        width={20}
                        height={25}
                        className="rounded-full"
                      />
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
      </div>
    </div>
  );
}

export default AllUsers;
