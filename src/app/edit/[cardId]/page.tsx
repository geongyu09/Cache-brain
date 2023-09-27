import EditPageSection from "@/components/EditPageSection";
import React from "react";

type Props = {
  params: {
    cardId: string;
  };
};

export default function page({ params: { cardId } }: Props) {
  return <EditPageSection cardId={cardId} />;
}
