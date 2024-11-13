import React from 'react';

const ReservationTable = () => {
  const daysOfWeek = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];
  const dayNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷'];
  const timeSlots = ['۷.۳۰ تا ۹', '۱۰.۳۰ تا ۱۲', '۱۳.۳۰ تا ۱۵', '۱۶.۳۰ تا ۱۸', '۱۹.۳۰تا ۲۱', '۲۲.۳۰ تا ۱۲'];

  const reservationStatus = [
    ['تکمیل شده', 'قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'تکمیل شده', 'قابل رزرو', 'تکمیل شده'],
    ['قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'قابل رزرو', 'تکمیل شده', 'تکمیل شده', 'قابل رزرو'],
    ['تکمیل شده', 'تکمیل شده', 'قابل رزرو', 'قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'تکمیل شده'],
    ['قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'قابل رزرو', 'تکمیل شده', 'قابل رزرو', 'قابل رزرو'],
    ['تکمیل شده', 'تکمیل شده', 'تکمیل شده', 'قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'قابل رزرو'],
    ['قابل رزرو', 'تکمیل شده', 'قابل رزرو', 'قابل رزرو', 'قابل رزرو', 'تکمیل شده', 'قابل رزرو'],
  ];

  return (
    <div className="mt-[60px] h-[442px] shadow-md rounded-[40px] border border-black/20">
      <table className="w-full h-full border-collapse border-black/20 rounded-[40px] overflow-hidden">
        <thead>
          <tr>
            <th className="flex flex-col h-[63px] bg-[#0072BB]/30 items-center justify-center border-0 py-2 text-right gap-1">
              <span className="text-[12px]">تاریخ</span>
              <span className="border-b-1 w-full border-[#0072BB]"></span>
              <span className="text-[12px]">سانس</span>
            </th>
            {daysOfWeek.map((day, index) => (
              <th
                key={index}
                className={`p-1 bg-[#0072BB]/10 border text-[#0072BB] text-[12px] h-[60px] border-black/20 border-t-0 border-dashed text-center ${
                  index === daysOfWeek.length - 1 ? 'rounded-tl-[35px]' : ''
                } ${
                  index === daysOfWeek.length - 1 ? 'border-l-0' : ''
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-[16px] text-black">{dayNumbers[index]}</span>
                  <span className="text-[12px]">{day}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((timeSlot, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={`p-1 border-r-0 border bg-[#0072BB]/10 text-[12px] border-black/20 border-dashed text-center h-[50px] ${
                  rowIndex === timeSlots.length - 1 ? 'border-b-0' : ''
                }`}
              >
                {timeSlot}
              </td>
              {reservationStatus[rowIndex].map((status, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-1 border border-black/20 text-[12px] h-[60px] border-dashed text-center ${
                    status === 'تکمیل شده' ? 'text-[#FF0000]' : 'text-[#66B10B]'
                  } ${rowIndex === timeSlots.length - 1 ? 'border-b-0' : ''} ${
                    colIndex === reservationStatus[rowIndex].length - 1 ? 'border-l-0' : ''
                  }`}
                >
                  {status}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
