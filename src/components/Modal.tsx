import React from "react";
import Carousel from "./Carousel";
import { Close } from "./ui/icon";
import { CardContent } from "@/model/card";

type Props = {
  showModal: boolean;
  handleShowModal: () => void;
  selected: CardContent[];
  params: string;
};
export default function Modal({
  showModal,
  handleShowModal,
  selected,
  params,
}: Props) {
  return (
    <>
      {showModal && (
        <section
          className="fixed top-0 left-0 flex justify-center items-center bg-slate-900 bg-opacity-90 w-full h-full"
          onClick={(e) => {
            if (e.target == e.currentTarget) handleShowModal();
          }}
        >
          <div
            className="absolute top-10 right-16 text-2xl"
            onClick={handleShowModal}
          >
            <Close />
          </div>
          <Carousel selected={selected} params={params} />
        </section>
      )}
    </>
  );
}
