import {
  Card,
  CardContent,
  CardState,
  CheckCardListTypeParam,
  DetailCard,
} from "@/model/card";
import { client } from "./sanity";

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
    content[]{_key,problem,answer,progress}, "createdAt":_createdAt,description,"id":_id,owner->{name,username},title,tags[]
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

export async function editCard() {}
