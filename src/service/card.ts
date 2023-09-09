import { Card, CheckCardListTypeParam, DetailCard } from "@/model/card";
import { client } from "./sanity";

export async function getCards({
  ownList,
  userId,
}: CheckCardListTypeParam): Promise<Card[]> {
  const query = `*[_type=="card"${
    ownList ? `&&owner._ref=="${userId}"` : ""
  }]{"id" : _id,title,description,tags ,"createdAt":_createdAt,"updatedAt":_updatedAt,owner->{name}}`;
  return await client.fetch(query);
}

export async function getCardDetail(id: string): Promise<DetailCard> {
  return await client.fetch(`
  *[_type=="card" && _id == "${id}"][0]{
    content[]{"id":_key,problem,answer}, "createdAt":_createdAt,description,"id":_id,owner->{name},title,tags[]
  }
    `);
}
