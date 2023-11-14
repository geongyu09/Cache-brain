import { ChangeEvent } from "react";
import ListDeleteBtn from "./ListDeleteBtn";
import { CardContent, DetailCard } from "@/model/card";

type Props = {
  item: CardContent;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};
export default function EditList({ item, setEditCard }: Props) {
  const onChange = (
    key: string,
    value: string,
    target: "problem" | "answer"
  ) => {
    setEditCard((prev) => ({
      ...prev!,
      content: prev!.content.map((item) => {
        if (item._key == key) {
          if (target == "problem") return { ...item, problem: value };
          if (target == "answer") return { ...item, answer: value };
        }
        return item;
      }),
    }));
  };

  const fitSize = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const element = e.target;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };
  return (
    <li
      key={item._key}
      className="bg-slate-200 mb-5 rounded-lg flex justify-between overflow-hidden"
    >
      <div className="p-5 w-full">
        <input
          type="text"
          className="w-full mb-2 bg-inherit outline-none font-semibold"
          value={item.problem}
          onChange={(e) => {
            onChange(item._key, e.target.value, "problem");
          }}
          placeholder="Problem : "
        />
        <textarea
          className={`w-full bg-inherit outline-none resize-none`}
          value={item.answer}
          // style={{ height: `${textareaRef.current.scrollHeight}px` }}
          onChange={(e) => {
            onChange(item._key, e.target.value, "answer");
            fitSize(e);
          }}
          placeholder="Answer : "
        />
      </div>
      <ListDeleteBtn target={item} setEditCard={setEditCard} />
    </li>
  );
}
