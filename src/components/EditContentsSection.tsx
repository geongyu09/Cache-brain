import { DetailCard } from "@/model/card";
import AddContentButton from "./AddContentButton";
import EditList from "./EditList";

type Props = {
  editCard: DetailCard;
  setEditCard: React.Dispatch<React.SetStateAction<DetailCard | undefined>>;
};

export default function EditContentsSection({ editCard, setEditCard }: Props) {
  return (
    <section className="h-[100vh] flex flex-col p-5 pb-[80px] ">
      <ul className="w-full max-h-screen grow overflow-y-scroll ">
        {editCard.content.map((item) => (
          <EditList key={item._key} item={item} setEditCard={setEditCard} />
        ))}
        <AddContentButton
          setEditCard={setEditCard}
          content={editCard.content}
        />
      </ul>
    </section>
  );
}
