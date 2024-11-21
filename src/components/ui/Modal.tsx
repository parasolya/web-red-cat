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
import LinkButton from "./LinkButton";

const Modal: FC<ModalProps> = ({
  isOpen,
  close,
  title,
  message,
  buttonText,
}) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={close}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 backdrop-blur-sm"
      >
        <DialogPanel className="relative bg-lightGray p-4 shadow-lg max-h-[90%] min-w-[328px] sm:max-w-[480px] md:max-w-[700px] xl:max-w-[900px]">
          <CloseButton
            className="absolute right-4 top-4 h-6 w-6 md:h-10 md:w-10 stroke-grey01 transition md:right-6 md:top-6"
            as={Close}
          />
          <DialogTitle className="text-lg font-bold">{title}</DialogTitle>
          <Description className="mt-2">{message}</Description>
          <LinkButton
            href="/"
            onClick={close}
            className="mx-auto w-full md:flex md:max-w-[218px]"
          >
            {buttonText}
          </LinkButton>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default Modal;
