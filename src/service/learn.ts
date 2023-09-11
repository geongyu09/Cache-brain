import { LearningCard } from "@/model/learningCard";
import { getCardDetail } from "./card";
import { client } from "./sanity";

export async function postLearningCard({
  cardId,
  userId,
}: {
  cardId: string;
  userId: string;
}) {
  const { title, content } = await getCardDetail(cardId);
  const doc = {
    _id: cardId.slice(0, 10) + userId.slice(0, 10),
    _type: "learningCard",
    originCard: { _ref: cardId },
    content: content.map(({ problem, answer, id }) => ({
      problem,
      answer,
      _key: id,
      process: 0,
    })),
    learner: { _ref: userId },
    title,
  };

  return await client.createIfNotExists(doc);
}

export async function getLearningCard({
  cardId,
  userId,
}: {
  cardId: string;
  userId: string;
}): Promise<LearningCard> {
  const query = `*[_type=="learningCard"&& originCard._ref=="${cardId}" && learner._ref=="${userId}"][0]{content[],"updatedAt":_updatedAt}`;
  const learnCard: LearningCard = await client.fetch(query);
  const { title, description } = await getCardDetail(cardId);
  return { ...learnCard, title, description };
}
