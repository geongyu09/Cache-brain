import { Card, CheckCardListTypeParam, DetailCard } from "@/model/card";
import { client } from "./sanity";

export async function getCards({
  ownList,
  userId,
}: CheckCardListTypeParam): Promise<Card[]> {
  const query = `*[_type=="card"${
    ownList ? `&&owner._ref=="${userId}"` : ""
  }]{"id":_id,title,description,tags ,"createdAt":_createdAt,"updatedAt":_updatedAt,owner->{name}}`;
  return await client.fetch(query);
}

export async function getCardDetail(cardId: string): Promise<DetailCard> {
  return await client.fetch(`
  *[_type=="card" && _id == "${cardId}"][0]{
    content[]{_key,problem,answer}, "createdAt":_createdAt,description,"id":_id,owner->{name},title,tags[]
  }
    `);
}

export async function makeNewCard() {
  const doc = {
    // _id: "34e8ccb9-d991-42bd-92af-76b7fea5e2a9",
    _type: "card",
    content: [],
    description: "",
    owner: {
      _ref: "",
      _type: "reference",
    },
    tags: [],
    title: "",
  };

  client.create(doc).then((res) => {
    console.log(`Bike was created, document ID is ${res._id}`);
  });
}

/*
{
  id: "",
  title: "",
  description: "",
  tags: [],
  owner: {
    name: "",
  },
  content: [],
}
*/
