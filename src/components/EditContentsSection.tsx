import { DetailCard } from "@/model/card";
import React from "react";

type Props = {
  card: DetailCard;
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditContentsSection({ card }: Props) {
  return (
    <section>
      <ul className="w-full max-h-screen p-5 overflow-auto pb-[70px]">
        {card.content.map((item) => (
          <li key={item._key} className="bg-slate-200 mb-5 p-5 rounded-lg">
            <input
              type="text"
              className="w-full mb-2 bg-inherit outline-none"
              value={item.problem}
            />
            <textarea className="w-full bg-inherit outline-none resize-none overflow-auto">
              {item.answer}
            </textarea>
          </li>
        ))}
      </ul>
    </section>
  );
}
