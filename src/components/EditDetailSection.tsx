import { DetailCard } from "@/model/card";
import React from "react";
import EditSaveButton from "./EditSaveButton";

type Props = {
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
  isOk: boolean;
};

export default function EditDetailSection({
  editCard,
  setEditCard,
  isOk,
}: Readonly<Props>) {
  const onChange = (value: string, target: "title" | "description") => {
    setEditCard((prev) => {
      if (target == "title")
        return {
          ...prev!,
          title: value,
        };
      return {
        ...prev!,
        description: value,
      };
    });
  };
  return (
    <section className="flex flex-col w-full h-[100vh] bg-slate-100 px-2 pb-[80px]">
      <input
        placeholder="Title of Card"
        className="w-full p-2 bg-inherit outline-none text-lg my-3"
        value={editCard.title}
        onChange={(e) => {
          onChange(e.target.value, "title");
        }}
      />
      <hr />
      <textarea
        placeholder="Card Description"
        className="w-full outline-none bg-inherit text-lg mt-6 resize-none grow"
        value={editCard.description}
        onChange={(e) => {
          onChange(e.target.value, "description");
        }}
        rows={7}
      />
      <EditSaveButton editCard={editCard} isOk={isOk} />
    </section>
  );
}
