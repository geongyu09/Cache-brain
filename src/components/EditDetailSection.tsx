import { DetailCard } from "@/model/card";
import React from "react";

type Props = {
  card: DetailCard;
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditDetailSection({ card }: Props) {
  return (
    <section className="w-full h-[100vh] bg-slate-100 px-2">
      <input
        className="w-full p-2 bg-inherit outline-none text-lg my-3"
        value={card.title}
      />
      <hr />
      <textarea
        className="w-full h-full outline-none bg-inherit text-lg mt-6"
        value={card.description}
      />
    </section>
  );
}
