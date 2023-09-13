import React from "react";
import Carousel from "./Carousel";
import { Content } from "@/model/learningCard";

type Props = {
  showModal: boolean;
  handleShowModal: () => void;
  selected: Content[];
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
            X
          </div>
          <Carousel selected={selected} params={params} />
        </section>
      )}
    </>
  );
}
