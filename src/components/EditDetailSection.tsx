import { DetailCard } from "@/model/card";
import React, { useState } from "react";
import EditSaveButton from "./EditSaveButton";
import Tag from "./Tag";

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
  const [tagInput, setTagInput] = useState("");
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
      <div className="grow flex flex-col">
        <h2 className="text-lg font-semibold">Tags</h2>
        <form
          className="w-full flex"
          onSubmit={(e) => {
            e.preventDefault();
            setEditCard((prev) => ({
              ...prev,
              tags: [...prev?.tags, tagInput.trim()],
            }));
            setTagInput("");
          }}
        >
          <input
            type="text"
            value={tagInput}
            className="my-2 bg-inherit border-b-2 outline-none w-full"
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Tag를 입력하세요!"
          />
          <button>insert</button>
        </form>
        <div className="flex flex-wrap gap-3">
          {editCard.tags.map((item, index) => (
            <Tag
              key={index}
              tag={item}
              deleteBtn={true}
              deleteFn={() => {
                setEditCard((prev) => ({
                  ...prev,
                  tags: prev?.tags.filter((_, i) => i !== index),
                }));
              }}
            />
          ))}
        </div>
      </div>
      <EditSaveButton editCard={editCard} isOk={isOk} />
    </section>
  );
}
