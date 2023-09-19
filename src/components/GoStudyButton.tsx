import React from "react";
import StyledButton from "./ui/StyledButton";

export default function GoStudyButton() {
  //학습 페이지로 가기 : id필요함. 또는 다른 방법으로 가져올 수도 있긴 함.(기존 카드 이름과 사용자 정보로 id 가져와서 그 페이지로 보내버리기)
  return <StyledButton text="Go to study!" />;
}
