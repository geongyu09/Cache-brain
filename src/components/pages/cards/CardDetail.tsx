import StudyButton from "./StudyButton";
import DetailSection from "./DetailSection";
import { Loading } from "../../ui/icon";
import useCard from "@/hooks/useCard";

type Props = {
  id: string;
  username?: string;
};

export default function CardDetail({ id, username }: Readonly<Props>) {
  const { data: card, isLoading, error } = useCard(id);
  return (
    <section className="bg-slate-100 w-full max-w-sm max-h-screen mb-[80px] pb-[80px] overflow-scroll">
      {isLoading && <Loading />}
      {card && (
        <DetailSection
          card={card}
          isNewPage={false}
          username={username}
          btn={<StudyButton cardId={card.id} />}
        />
      )}
    </section>
  );
}
