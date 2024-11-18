import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  CloseButton,
} from "@headlessui/react";
import Button from "./Button";
import { FC } from "react";
import Close from "/public/icons/close.svg";
import { ModalProps } from "@/@types";

const Modal: FC<ModalProps> = ({
  isOpen,
  close,
  title,
  message,
  buttontext,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={close}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60"
      >
       
        <DialogPanel className="bg-white rounded-md p-4 shadow-lg">
        <CloseButton className="mt-4" as={Close}>
          {buttontext}
        </CloseButton>
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <Description className="mt-2">{message}</Description>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Modal;
