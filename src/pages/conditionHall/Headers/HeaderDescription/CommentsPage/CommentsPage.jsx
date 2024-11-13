import React from 'react'
import Image from 'next/image';
import {Avatar} from "@nextui-org/react";

function CommentsPage() {

  const CommentData = [
    {id: 1, src: "https://i.pravatar.cc/150?u=a04258114e29026708c", name: "اکبر", Comment: "خیلی عالی بود ممنون از خدماتتون ایشالا خدا بیشترشو بهتون بده"},
    {id: 2, src: "https://i.pravatar.cc/150?u=a04258114e29026708c", name: "علی", Comment: "کیفیت چمن خوب نبود اصلا راضی نبودم"},
    {id: 2, src: "https://i.pravatar.cc/150?u=a04258114e29026708c", name: "رضا", Comment: "بد نبود نسبت به قیمت کیفیت مناسبی داشت"},
  ]
  return (
    <>
      <div className="custom-scrollbar overflow-auto w-[600px] h-[250px]">
        {CommentData.map ((item) => (
          <div key={item.id} className="relative w-[555px] bg-white rounded-2xl shadow-md border border-gray-300 mb-[17px] p-4">
            <div className="flex flex-row items-center gap-2">
              <Avatar src={item.src} className="w-12 h-12 text-large" />
                <div className="text-right">
                  <span className="text-[#66B10B] font-bold">{item.name}</span>
                </div>
              </div>
            <div className="mt-2 text-right text-[12px] text-gray-800 leading-relaxed">
              {item.Comment}
            </div>
         </div>
        ))}
       
      </div>
    </>
  )
}

export default CommentsPage;
