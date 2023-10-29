import { DetailCard } from "@/model/card";
import AddContentButton from "./AddContentButton";

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
  return (
    <section className="h-[100vh] flex flex-col p-5 pb-[80px] ">
      <ul className="w-full max-h-screen grow overflow-y-scroll ">
        {editCard.content.map((item) => (
          <li key={item._key} className="bg-slate-200 mb-5 p-5 rounded-lg">
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
              className="w-full h-min bg-inherit outline-none resize-none overflow-auto"
              value={item.answer}
              onChange={(e) => {
                onChange(item._key, e.target.value, "answer");
              }}
              placeholder="Answer : "
            />
          </li>
        ))}
      </ul>
      <AddContentButton setEditCard={setEditCard} content={editCard.content} />
    </section>
  );
}
