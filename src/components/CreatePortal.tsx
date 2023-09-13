import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function CreatePortal() {
  return <div>{createPortal(<Modal />, document.body)}</div>;
}
