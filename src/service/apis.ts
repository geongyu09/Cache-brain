import { IMPORT_URL } from "./urls";

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
