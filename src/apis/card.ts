import { CardContent, DetailCard } from "@/model/card";
import { CARD_EDIT_URL, IMPORT_URL } from "../utils/urls";

export const importCardToOwn = async (
  cardId: string,
  modify: React.Dispatch<React.SetStateAction<boolean>>
) => {
  modify(true);
  await fetch(IMPORT_URL, {
    method: "POST",
    body: JSON.stringify({ cardId }),
  });
  modify(false);
};

export const updateProgress = async (
  url: string,
  item: CardContent,
  progress: number
) => {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ content: item, progress: progress }),
  });
};

export const updateCard = async (editCard: DetailCard) =>
  await fetch(CARD_EDIT_URL, { method: "PUT", body: JSON.stringify(editCard) });
