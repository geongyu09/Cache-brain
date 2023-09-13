import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { Content } from "@/model/learningCard";
type Props = {
  showModal: boolean;
  handleShowModal: () => void;
  selected: Content[];
};
export default function CreatePortal({
  showModal,
  handleShowModal,
  selected,
}: Props) {
  return (
    <>
      {createPortal(
        <Modal
          showModal={showModal}
          handleShowModal={handleShowModal}
          selected={selected}
        />,
        document.body
      )}
    </>
  );
}
