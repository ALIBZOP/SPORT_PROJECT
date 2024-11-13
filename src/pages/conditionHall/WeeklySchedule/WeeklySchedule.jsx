import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import moment from 'moment-jalaali';
import IconBaner from "../../../assets/home/Icon-baner.png";
import Vector from "../../../assets/home/Vector 10.png";
import Arrow from "../../../assets/home/Arrow_drop_left.png";

const Calendar = () => {
  moment.loadPersian({ usePersianDigits: true });

  const daysOfWeek = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

  const [currentWeek, setCurrentWeek] = useState(moment());
  const [selectedSlots, setSelectedSlots] = useState({}); // State for selected time slots

  const getWeekDates = (startDate) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = moment(startDate).startOf('week').add(i, 'days');
      dates.push({
        day: date.format('jD'),
        monthYear: date.format('jMMMM jYYYY'),
        isRed: date.day() === 5 || date.day() === 6, // Consider days 5 and 6 as red (weekend)
      });
    }
    return dates;
  };

  const dates = getWeekDates(currentWeek);

  const timeSlots = [
    '۷:۳۰ تا ۹',
    '۱۰:۳۰ تا ۱۲',
    '۱۳:۳۰ تا ۱۵',
    '۱۶:۳۰ تا ۱۸',
    '۱۹:۳۰ تا ۲۱',
    '۲۲:۳۰ تا ۲۴'
  ];

  const handleNextWeek = () => {
    setCurrentWeek(currentWeek.clone().add(1, 'week'));
  };

  const handlePreviousWeek = () => {
    setCurrentWeek(currentWeek.clone().subtract(1, 'week'));
  };

  const handleSlotClick = (slotIndex, dayIndex, isRed) => {
    if (isRed) return; // Prevent clicking on red (disabled) slots

    const key = `${slotIndex}-${dayIndex}`;
    setSelectedSlots((prevSelected) => ({
      ...prevSelected,
      [key]: !prevSelected[key], // Toggle the selection
    }));
  };

  return (
    <div className="flex flex-col relative items-center">
      <div className="flex absolute justify-center items-center w-full p-4  rounded-t-xl">
        <div className="text-[12px] absolute left-[50px] top-[20px] font-bold">
          {dates[0].monthYear}
        </div>
      </div>

     <div className="w-[550px] h-[440px] border-1 border-black/20 rounded-[24px] mt-[50px]">
        <div className="grid grid-cols-7 rounded-t-[24px] gap-4 w-full p-4 bg-[#66B10B]/20">
            {daysOfWeek.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
                <div className="text-lg">
                    {dates[index].day}
                </div>
                <div className="text-xs font-bold">{day}</div>
            </div>
            ))}
        </div>

        <div className="grid text-[10px] grid-cols-7 gap-4 p-4 bg-white rounded-b-xl">
            {timeSlots.map((slot, slotIndex) => (
            dates.map((date, dayIndex) => {
                const key = `${slotIndex}-${dayIndex}`;
                const isSelected = selectedSlots[key];
                return (
                  <div 
                    key={key} 
                    className={`flex flex-col w-[70px] h-[40px] rounded-[24px] justify-center items-center p-2 cursor-pointer
                      ${isSelected ? 'bg-[#66B10B] text-white' : ''} 
                      ${date.isRed ? 'cursor-not-allowed' : ''}`}
                    onClick={() => handleSlotClick(slotIndex, dayIndex, date.isRed)}
                  >
                    <div className={`${date.isRed ? 'text-red-500' : ''} ${isSelected ? 'text-white' : ''}`}>
                      {slot}
                    </div>
                  </div>
                );
            })
            ))}
        </div>
     </div>

      <div className="flex absolute w-[400px] right-[45px] top-[15px] gap-4">
        <button
          onClick={handlePreviousWeek}
          className="flex justify-center gap-2 items-center px-4 py-2 w-[104px] h-[20px] text-[10px] text-[#66B10B] border-1 border-black/5 shadow-md bg-white rounded-full hover:bg-white"
        >
           <Image 
              src={Arrow}
              width={20}
              height={40}
              alt="Previous Week"
            />
          هفته قبل
        </button>
        <button
          onClick={handleNextWeek}
          className="flex justify-center gap-2 items-center px-4 py-2 w-[100px] h-[20px] text-[10px] text-[#66B10B] border-1 border-black/5 shadow-md bg-white rounded-full hover:bg-white"
        >
          هفته بعد
          <Image 
            src={Vector}
            width={10}
            height={40}
            alt="Next Week"
          />
        </button>
      </div>

      <Link href="/basketBuy">
        <button
          className="flex justify-center items-center gap-20 px-4 py-2 w-[200px] h-[25px] text-[10px] text-white border-1 border-black/5 shadow-md bg-[#66B10B] rounded-lg mt-[10px] mr-[360px]"
        >
          ادامه
          <Image 
            src={IconBaner}
            width={25}
            height={40}
            alt="Continue"
          />
        </button>
      </Link>
    </div>
  );
};

export default Calendar;
