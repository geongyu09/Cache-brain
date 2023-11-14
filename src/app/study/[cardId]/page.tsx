import StudyComponent from "@/components/pages/study/StudyComponent";
import React from "react";

type Props = {
  params: { cardId: string };
};

export default function page({ params: { cardId } }: Props) {
  return <StudyComponent params={cardId} />;
}
