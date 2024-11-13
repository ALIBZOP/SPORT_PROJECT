import React from 'react'
import Image from "next/image";
import commentImage from "../../../../../assets/CommentsPage/comment-image.png"
import Close from "../../../../../assets/adminpanel/Close.png"
import thumb from "../../../../../assets/adminpanel/thumb_up.png"

const DataComments= [
    {id: 1, image: commentImage, name: "غلامرضا", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 2, image: commentImage, name: "علی", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 3, image: commentImage, name: "محسن", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 4, image: commentImage, name: "سعید", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
    {id: 5, image: commentImage, name: "علی اکبر", hour: "۱۲.۳۶AM", date: "۱۴۰۳/۰۸/۱۳", comments: "واقعا سالن تمیز و بزرگی بود و م چی عالی بود ممنون از خدمات خوبتون" },
]

function AllComments() {
  return (
    <>
      <div>
        {DataComments.map ((item) => (
            <div key={item.id} className="flex flex-row w-[915px] h-[150px] mb-[20px] border-1 border-black-20 shadow-md rounded-3xl px-6 py-8">
                <div className="flex flex-row gap-2">
                    <div>
                        <Image
                            src={item.image}
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
                <div className="mr-[60px]">
                    <div className="flex flex-row gap-8 mr-[270px]">
                        <div className="flex flex-col gap-2">
                           <p className="text-[10px]">پسند</p>
                           <button>
                            <Image
                                src={thumb}
                                width={22}
                                height={26}
                                alt="Picture of the author"
                            />
                           </button>
                        </div>
                        <div className="flex flex-col gap-2">
                           <p className="text-[10px]">حذف</p>
                           <button>
                            <Image
                                src={Close}
                                width={22}
                                height={26}
                                alt="Picture of the author"
                            />
                           </button>
                        </div>
                    </div>
                    <div>
                    <label className="flex flex-col text-right gap-2">
                        <p className="text-[#0072BB]">پی نوشت</p>
                        <input
                        type="email"
                        className="w-[350px] h-[40px] focus:outline-none border-1 border-[#F2F2F2] rounded-lg bg-[#F2F2F2] p-2"
                    />
                    </label>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default AllComments;