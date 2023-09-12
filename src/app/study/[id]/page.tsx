import StudyComponent from "@/components/StudyComponent";
import React from "react";

type Props = {
  params: { id: string };
};

export default function page({ params: { id } }: Props) {
  return <StudyComponent params={id} />;
}
