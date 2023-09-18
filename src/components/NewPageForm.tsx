import React from "react";
import NewCardInput from "./NewCardInput";
import { DetailCard } from "@/model/card";
import NewCardResult from "./NewCardResult";

type Props = {
  card: DetailCard;
  setCard: React.Dispatch<React.SetStateAction<DetailCard>>;
};

export default function NewPageForm({ card, setCard }: Props) {
  const inputItem = [
    {
      title: "카드 이름",
      text: card.title,
      modify: (text: string) => setCard((prev) => ({ ...prev, title: text })),
    },
    {
      title: "카드 설명",
      text: card.description,
      modify: (text: string) =>
        setCard((prev) => ({ ...prev, description: text })),
    },
    {
      title: "태그",
      text: card.tags,
      modify: (text: string) =>
        setCard((prev) => ({ ...prev, tags: text.split(",") })),
    },
  ];
  return (
    <section className="h-full overflow-auto pr-4 border-r-2">
      <form className="flex flex-col gap-2 w-full pb-4">
        <NewCardInput
          title={inputItem[0].title}
          text={inputItem[0].text as string}
          setCard={inputItem[0].modify}
        />
        <NewCardInput
          title={inputItem[1].title}
          text={inputItem[1].text as string}
          setCard={inputItem[1].modify}
        />
        <NewCardInput
          title={inputItem[2].title}
          text={inputItem[2].text as string}
          setCard={inputItem[2].modify}
        />
      </form>
      <NewCardResult card={card} />
    </section>
  );
}
