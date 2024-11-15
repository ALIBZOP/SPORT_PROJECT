import React from 'react'
import Image from "next/image";
import commentImage from "../../../../../assets/CommentsPage/comment-image.png"

const DataComments= [
    {id: 1, image: commentImage, name: "محمود", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 2, image: commentImage, name: "محسن", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 3, image: commentImage, name: "علی", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 4, image: commentImage, name: "سعید", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 5, image: commentImage, name: "علی اکبر", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
]

function UnverifiedComments() {
  return (
    <>
      <div>
        {DataComments.map ((item) => (
            <div key={item.id} className="flex flex-row w-[915px] h-[150px] mb-[20px] border-1 border-black-20 shadow-md rounded-3xl px-6 py-8">
                <div className="flex flex-row gap-2">
                    <div>
                        <Image
                            width={56}
                            height={26}
                            alt="Picture of the author"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-2">   
                            <p>{item.name}</p>
                            <p className="text-[#0072BB]">{item.hour}</p>
                            <p className="text-[#0072BB]">{item.date}</p>
                        </div>
                        <div>
                            <p>{item.comments}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mr-[230px] mt-[70px] gap-6">
                    <div>
                        <button className="w-[80px] h-[32px] border-1 border-[#FF0000] bg-[#FF0000] text-white rounded-xl">
                            حذف
                        </button>
                    </div>
                    <div>
                        <button className="w-[80px] h-[32px] border-1 border-[#66B10B] bg-[#66B10B] text-white rounded-xl">
                            تایید
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default UnverifiedComments;