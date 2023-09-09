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
  createdAt: string;
  updatedAt: string;
};

export type DetailCard = Card & {
  content: {
    id: string;
    problem: string;
    answer: string;
  }[];
};
