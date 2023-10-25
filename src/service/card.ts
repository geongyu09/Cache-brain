import {
  Card,
  CardContent,
  CardState,
  CheckCardListTypeParam,
  DetailCard,
} from "@/model/card";
import { client } from "./sanity";
import { getUserById } from "./user";

export async function getCards({
  ownList,
  userId,
}: CheckCardListTypeParam): Promise<Card[]> {
  const query = `*[_type=="card" ${
    ownList ? `&&owner._ref=="${userId}"` : ""
  }]{"id":_id,title,description,tags ,"createdAt":_createdAt,"updatedAt":_updatedAt,owner->{name,username}}`;
  return await client.fetch(query);
}

export async function getCardDetail(cardId: string): Promise<DetailCard> {
  const data = await client.fetch(`
  *[_type=="card" && _id == "${cardId}"][0]{
    content[]{_key,problem,answer,progress}, "createdAt":_createdAt,description,"id":_id,owner->{name,username,"id":_id},title,tags[]
  }
    `);
  return data;
}

export async function makeNewCard(
  { content, description, tags, title }: CardState,
  userId: string
) {
  const doc = {
    _type: "card",
    content,
    description,
    owner: {
      _ref: userId,
      _type: "reference",
    },
    tags,
    title,
  };
  return await client.create(doc);
}

export async function putProgress({
  cardId,
  content,
  progress,
}: {
  cardId: string;
  content: CardContent;
  progress: number;
}) {
  const contents = (await getCardDetail(cardId)).content;
  const resultContents = contents.map((item) => {
    if (item._key == content._key) return { ...content, progress: progress };
    return item;
  });
  return client.patch(cardId).set({ content: resultContents }).commit();
}

export async function importCard(userId: string, cardId: string) {
  const { title, tags, description, owner, content } = await getCardDetail(
    cardId
  );
  const isAlreadyOwn = await isAlreadyImport(cardId, userId);
  if (!isAlreadyOwn) return;

  const newCard = {
    _type: "card",
    description:
      description +
      `
      "${owner.name} 의 카드로부터 가져옴"`,
    owner: { _ref: userId, _type: "reference" },
    title,
    content,
    tags,
    origin: { _ref: cardId, _type: "reference" },
  };
  return await client.create(newCard);
}

export async function isAlreadyImport(cardId: string, userId: string) {
  const target = await client.fetch(`
    *[_type == "card" && owner._ref == "${userId}"]{"cardId" : origin._ref}[0]
  `);
  console.log(target);
  return target !== cardId;
}

export async function editCard() {}
