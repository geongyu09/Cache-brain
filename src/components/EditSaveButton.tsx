import StyledButton from "./ui/StyledButton";
import { DetailCard } from "@/model/card";
import { updateCard } from "@/apis/card";

type Props = {
  editCard: DetailCard;
};

export default function EditSaveButton({ editCard }: Props) {
  return <StyledButton text="save" handler={() => updateCard(editCard)} />;
}
