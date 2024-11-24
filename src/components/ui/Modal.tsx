import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  CloseButton,
  Transition,
  TransitionChild,
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
      <Transition show={isOpen}>
        <Dialog
          onClose={close}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <TransitionChild
            enter="transition ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-40 inset-0 bg-darkBrown bg-opacity-80 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            enter="transition ease-in-out duration-300"
            enterFrom="scale-50 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="transition ease-in-out duration-200"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-50 opacity-0"
          >
            <DialogPanel className="relative z-50 bg-lightGray p-4 shadow-lg max-h-[90%] min-w-[328px] sm:max-w-[480px] md:max-w-[700px] xl:max-w-[900px]">
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
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
