import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Info from "../../assets/Modul/Info.png"
import Infologo from "../../assets/contract/Info.png"


function ModalRemoveBasket() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="text-[12px] left-[55px] -top-[5px] bg-[#ADADAD]/0  border-black/20 rounded-xl px-8" onPress={onOpen}>
        <p className="text-[#FF0000] text-[10px]">خالی کردن</p>
      </Button>
      <Modal 
        className="realative z-[100]"
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className="flex items-center justify-center w-[320px] h-[260px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center gap-1 mt-[20px]">
                <Image 
                    src={Info}
                    width={48}
                    height={48}
                    alt="Picture of the author"
                    className=""
                />
              </ModalHeader>
              <ModalBody  className="flex">
                <p className="flex text-xs">
                  ایا میخواهید همه موارد را پاک کنید؟
                </p>
              </ModalBody>
              <ModalFooter className="gap-4">
                  <Button className="text-[#66B10B] w-[120px] boreder-1 border-[#66B10B] rounded-full" variant="bordered" onPress={onClose}>
                    بله
                  </Button>
                  <Button className="text-white w-[120px] bg-[#66B10B] rounded-full text-xs" onPress={onClose}>
                    خیر
                  </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalRemoveBasket;
