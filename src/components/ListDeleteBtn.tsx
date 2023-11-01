import { CardContent, DetailCard } from "@/model/card";
import { Delete } from "./ui/icon";

type Props = {
  target: CardContent;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function ListDeleteBtn({ target, setEditCard }: Props) {
  const onClick = () => {
    setEditCard((prev) => ({
      ...prev,
      content: prev?.content.filter((item) => item._key !== target._key),
    }));
  };
  return (
    <button
      className="flex w-1/12 min-h-full bg-slate-600 justify-center items-center"
      onClick={onClick}
    >
      <Delete />
    </button>
  );
}
