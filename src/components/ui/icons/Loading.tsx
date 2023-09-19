import React from "react";
import { FadeLoader } from "react-spinners";

type Props = {
  style?: string;
};

export default function Loading({ style }: Props) {
  return (
    <div
      className={`w-full h-full flex  ${
        style ? style : "justify-center items-center"
      }`}
    >
      <FadeLoader color="#36d7b7" />;
    </div>
  );
}
