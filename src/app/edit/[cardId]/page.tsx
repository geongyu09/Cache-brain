import React from "react";

type Props = {
  params: {
    cardId: string;
  };
};

export default function page({ params: { cardId } }: Props) {
  return <section className="grid grid-cols-[4fr_11fr]"></section>;
}
