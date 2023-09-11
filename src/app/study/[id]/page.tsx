import StudyComponent from "@/components/StudyComponent";
import React from "react";

type Props = {
  params: { id: string };
};

export default function page({ params: { id } }: Props) {
  //서버 : 학습 카드를 만들기(post), 유저에 해당 id 레퍼런스 추가하기, detail내용 받아오기,
  return <StudyComponent params={id} />;
}
