import React from "react";

type Props = {
  params: {
    cardId: string;
  };
};

export default function page({ params: { cardId } }: Props) {
  return <div>{cardId}</div>;
}
