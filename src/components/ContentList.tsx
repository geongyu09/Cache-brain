import { Content } from "@/model/learningCard";
import React from "react";
type Props = {
  title: string;
  learned: Content[] | undefined;
  selected: Content[];
  showModal: boolean;
  selectedModify: (selected: Content, remove?: boolean) => void;
};

export default function ContentList({
  learned,
  title,
  selected,
  showModal,
  selectedModify,
}: Props) {
  const onClick = (item: Content, isSelected: boolean) => {
    selectedModify(item, isSelected);
  };
  return (
    <>
      <section>
        <h3 className="font-semibold my-4">{title}</h3>
        {learned &&
          learned.map((item) => {
            const isSelected = Boolean(
              selected.find((i) => i._key == item._key)
            );
            return (
              <li
                key={item._key}
                className={`bg-slate-200 mb-5 p-5 rounded-lg ${
                  isSelected ? "border-2 border-indigo-600" : ""
                }`}
                onClick={() => onClick(item, Boolean(isSelected))}
              >
                <h4 className="mb-2 ">{item.problem}</h4>
                {!showModal ? <p>{item.answer}</p> : null}
              </li>
            );
          })}
      </section>
    </>
  );
}
