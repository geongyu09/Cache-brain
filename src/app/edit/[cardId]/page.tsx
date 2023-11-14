import EditPageSection from "@/components/pages/edit/EditPageSection";

type Props = {
  params: {
    cardId: string;
  };
};

export default function page({ params: { cardId } }: Props) {
  return <EditPageSection cardId={cardId} />;
}
