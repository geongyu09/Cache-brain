import { DetailCard } from "@/model/card";
import React from "react";
import useSWR from "swr";
import StyledButton from "./ui/StyledButton";

type Props = {
  id: string;
};

export default function CardDetail({ id }: Props) {
  const GET_CARD_URL = `/api/card/detail/${id}`;
  const { data: card, isLoading, error } = useSWR<DetailCard>(GET_CARD_URL);
  return (
    <section className="bg-slate-100 w-full max-w-sm h-5/6 overflow-auto ">
      {isLoading && id !== "" ? <p>Loading...</p> : null}
      {card && (
        <section className="flex flex-col h-full p-5">
          <div>
            <div className="flex justify-between items-center">
              <h4 className="text-lg">{card?.title}</h4>
              {/* <div className="px-4 py-2 bg-indigo-600 rounded-2xl">
                학습하기
              </div> */}
              <StyledButton text="학습하기" style="mb-2" />
            </div>
            <hr className="my-1" />
            <p>{card?.description}</p>
          </div>
          <ul className="grow">
            {card?.content.map((item) => (
              <li key={item.id} className="bg-slate-200 rounded-xl p-4 my-2">
                <p className="mb-1">{`Q : ${item.problem}`}</p>
                <p>{`A : ${item.answer}`}</p>
              </li>
            ))}
          </ul>
          {/* <span>생성일 : {card.}</span> */}
        </section>
      )}
    </section>
  );
}
