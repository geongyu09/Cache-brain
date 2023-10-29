import EditPageSection from "@/components/EditPageSection";

type Props = {
  params: {
    cardId: string;
  };
};

export default function page({ params: { cardId } }: Props) {
  return <EditPageSection cardId={cardId} />;
}
