import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react';

function Modall({ 
  headerImage, 
  bodyText, 
  footerLinks = [], 
  modalTitle = "Default Title", 
  buttonLabel = "بستن قرارداد", 
  buttonStyle = {},
  footerButtonStyles = []
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button 
        className="absolute top-[140px] left-[5px] text-sm bg-white text-[#66B10B]" 
        onPress={onOpen}
        style={buttonStyle}
      >
        {buttonLabel}
      </Button>
      <Modal 
        className="w-[200px] relative h-[500px] z-[100]"
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: "easeOut",
              },
            },
            exit: {
              y: -100,
              x: 2,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className="flex items-center justify-center w-[620px] h-[260px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col justify-center gap-1 mt-[20px]">
                <Image 
                    src={headerImage}
                    width={48}
                    height={48}
                    alt={modalTitle}
                    className=""
                />
              </ModalHeader>
              <ModalBody className="flex">
                <p className="flex text-xs">
                  {bodyText}
                </p>
              </ModalBody>
              <ModalFooter className="gap-4">
                {footerLinks.map((link, index) => (
                  <Link key={index} href={link.href} passHref>
                    <Button 
                      className={`text-${link.textColor} w-[120px] text-[14px] rounded-full ${link.buttonStyle}`} 
                      variant={link.variant} 
                      onPress={onClose}
                      style={footerButtonStyles[index] || {}}
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modall;
