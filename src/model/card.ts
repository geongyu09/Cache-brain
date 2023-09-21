import { Content } from "./learningCard";

type OwnerListParam = {
  ownList: true;
  userId: string;
};
type AllListParam = {
  ownList: false;
  userId?: string;
};
export type CheckCardListTypeParam = OwnerListParam | AllListParam;

export type Card = {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  owner: {
    name: string;
  };
  createdAt?: string;
  updatedAt?: string;
};

export type CardContent = {
  _key: string;
  problem: string;
  answer: string;
};

export type DetailCard = Card & {
  content: CardContent[];
};

export type CardState = {
  title: string;
  description: string;
  tags: Array<string>;
  content: CardStateContent[];
};
export type CardStateContent = {
  _key: string;
  problem: string;
  answer: string;
};
