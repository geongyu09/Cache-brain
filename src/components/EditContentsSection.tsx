import { DetailCard } from "@/model/card";
import AddContentButton from "./AddContentButton";
import { ChangeEvent } from "react";
import { Delete } from "./ui/icon";

type Props = {
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditContentsSection({ editCard, setEditCard }: Props) {
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
    <section className="h-[100vh] flex flex-col p-5 pb-[80px] ">
      <ul className="w-full max-h-screen grow overflow-y-scroll ">
        {editCard.content.map((item) => {
          // const height = item.answer.split("\n").length * 25;
          return (
            <li
              key={item._key}
              className="bg-slate-200 mb-5 rounded-lg flex justify-between overflow-hidden"
            >
              <div className="p-5 w-full">
                <input
                  type="text"
                  className="w-full mb-2 bg-inherit outline-none"
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
              <button className=" flex w-1/12 min-h-full bg-slate-600 justify-center items-center">
                <Delete />
              </button>
            </li>
          );
        })}
        <AddContentButton
          setEditCard={setEditCard}
          content={editCard.content}
        />
      </ul>
    </section>
  );
}
