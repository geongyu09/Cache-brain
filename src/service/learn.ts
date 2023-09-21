import { Content, LearningCard } from "@/model/learningCard";
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
    _id: makeLearningCardId(cardId, userId),
    _type: "learningCard",
    originCard: { _ref: cardId },
    content: content.map(({ problem, answer, _key }) => ({
      _key,
      problem,
      answer,
      progress: 0,
    })),
    learner: { _ref: userId },
    title,
  };
  return await client.create(doc);
}

export async function getLearningCard({
  cardId,
  userId,
}: {
  cardId: string;
  userId: string;
}): Promise<LearningCard> {
  const query = `*[_type=="learningCard"&& originCard._ref=="${cardId}" && learner._ref=="${userId}"][0]{content[],"updatedAt":_updatedAt}`;
  return await client.fetch(query);
}

export async function putProgress({
  cardId,
  userId,
  content,
  progress,
}: {
  cardId: string;
  userId: string;
  content: Content;
  progress: number;
}) {
  const learningCardId = makeLearningCardId(cardId, userId);
  const contents = (await getLearningCard({ cardId, userId })).content;
  const resultContents = contents.map((item) => {
    if (item._key == content._key) return { ...content, progress: progress };
    return item;
  });
  return client.patch(learningCardId).set({ content: resultContents }).commit();
}

function makeLearningCardId(cardId: string, userId: string) {
  return cardId.slice(0, 10) + userId.slice(0, 10);
}
