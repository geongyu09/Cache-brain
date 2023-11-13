import Tag from "./Tag";
import React, { useState } from "react";
import { DetailCard } from "@/model/card";

type Props = {
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditTag({ editCard, setEditCard }: Props) {
  const [tagInput, setTagInput] = useState("");
  return (
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
  );
}
