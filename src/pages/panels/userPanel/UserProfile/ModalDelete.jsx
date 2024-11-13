import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import SignOut from "../../../../assets/userPanel/Sign_out_squre.png"
import Info from "../../../../assets/Modul/Info.png"


function ModalDelete() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button className="text-[12px] bg-white border-[#66B10B] border-1 text-black rounded-full px-8" onPress={onOpen}>
        <p className="text-[#66B10B] w-[45px]">بله</p>
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
              </ModalHeader>
              <ModalBody  className="flex">
                <p className="flex items-center justify-center text-[22px]">
                  سانس لغو شد
                </p>
                <p className="flex text-xs">مبلغ سانس تا ۲۴ ساعت به حساب شما برمیگردد</p>
              </ModalBody>
              <ModalFooter className="gap-4">
                  <Button className="text-white w-[120px] bg-[#66B10B] rounded-full text-xs" onPress={onClose}>
                    متوجه شدم
                  </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDelete;
