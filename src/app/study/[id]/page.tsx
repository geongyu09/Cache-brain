import React from "react";

type Props = {
  params: { id: string };
};

export default function page({ params: { id } }: Props) {
  //학습 카드를 만들기. => 서버상에서 동작해서 만들어줌
  //이후에 데이터를 받아옴.
  return <div>study {id}</div>;
}
