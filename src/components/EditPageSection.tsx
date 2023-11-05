/**
 * TODO:
 * 1. 함수 정리하기
 * 2. 문제 추가 버튼에 사용되는 함수와 중복부분 개선하기
 */

"use client";
import useSWR from "swr";
import { useEffect, useState } from "react";
import EditDetailSection from "./EditDetailSection";
import EditContentsSection from "./EditContentsSection";
import { DetailCard } from "@/model/card";
import { GET_CARD_URL } from "@/utils/urls";

type Props = {
  cardId: string;
};

const checkReadyToSave = (editCard?: DetailCard) => {
  if (!editCard) return false;
  if (
    !editCard?.content.find(
      (item) => item.problem.trim() == "" || item.answer.trim() == ""
    ) &&
    editCard.content.length < 30 &&
    editCard.title.trim().length !== 0 &&
    editCard.description.trim().length !== 0
  )
    return true;
  return false;
};

export default function EditPageSection({ cardId }: Readonly<Props>) {
  const {
    data: card,
    // isLoading,
    // error,
  } = useSWR<DetailCard>(GET_CARD_URL + cardId);
  const [editCard, setEditCard] = useState<DetailCard>();
  useEffect(() => {
    setEditCard(card);
  }, [card]);

  const [isOkToSave, setIsOkToSave] = useState(false);
  useEffect(() => {
    setIsOkToSave(checkReadyToSave(editCard));
  }, [editCard]);
  return (
    <>
      {card && editCard ? (
        <section className="grid grid-cols-[4fr_11fr]">
          <EditDetailSection
            editCard={editCard}
            setEditCard={setEditCard}
            isOk={isOkToSave}
          />
          <EditContentsSection editCard={editCard} setEditCard={setEditCard} />
        </section>
      ) : null}
    </>
  );
}
