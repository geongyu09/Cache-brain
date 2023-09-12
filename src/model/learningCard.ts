export type Content = {
  problem: string;
  answer: string;
  process: number;
  _key: string;
};
export type LearningCard = LearningCardContent & {
  title: string;
  description: string;
};

export type LearningCardContent = {
  content: Content[];
  updateAt: string;
};
