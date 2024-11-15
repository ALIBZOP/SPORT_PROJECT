import React from 'react'
import Image from "next/image";
import Link from "next/link";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";


function ModalButton() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
     <Button className="text-[10px] bg-white border-[#66B10B] border-1 text-black" onPress={onOpen}>
      <p className="text-[#66B10B]">لغو سانس</p>
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
              <ModalBody className="flex">
                <p className="flex text-xs">
                  ایا میخوهید سانس را لغو کنید؟
                </p>
              </ModalBody>
              <ModalFooter className="gap-4">
                    <ModalDelete />
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

export default ModalButton;
