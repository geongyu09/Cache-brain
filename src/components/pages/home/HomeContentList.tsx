import { CardContent } from "@/model/card";
import React from "react";
type Props = {
  title: string;
  learned: CardContent[] | undefined;
  selected: CardContent[];
  selectedModify: (selected: CardContent, remove?: boolean) => void;
};

export default function HomeContentList({
  learned,
  title,
  selected,
  selectedModify,
}: Props) {
  const onClick = (item: CardContent, isSelected: boolean) => {
    selectedModify(item, isSelected);
  };
  return (
    <section>
      <h3 className="font-semibold my-4">{title}</h3>
      {learned &&
        learned.map((item) => {
          const isSelected = Boolean(selected.find((i) => i._key == item._key));
          return (
            <li
              key={item._key}
              className={`bg-slate-200 mb-5 p-5 rounded-lg ${
                isSelected ? "border-2 border-indigo-600" : ""
              }`}
              onClick={() => onClick(item, Boolean(isSelected))}
            >
              <h4 className="mb-2 ">{item.problem}</h4>
              <p>{item.answer}</p>
            </li>
          );
        })}
    </section>
  );
}
