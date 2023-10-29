import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { CardContent } from "@/model/card";

type Props = {
  showModal: boolean;
  handleShowModal: () => void;
  selected: CardContent[];
  params: string;
};
export default function CreatePortal({
  showModal,
  handleShowModal,
  selected,
  params,
}: Props) {
  return (
    <>
      {createPortal(
        <Modal
          showModal={showModal}
          handleShowModal={handleShowModal}
          selected={selected}
          params={params}
        />,
        document.body
      )}
    </>
  );
}
