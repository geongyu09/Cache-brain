import List from "./List";
import { Card } from "@/model/card";
import Link from "next/link";

type Props = {
  cards: Card[];
  modify: (id: string) => void;
};

export default function CardList({ cards, modify }: Props) {
  return (
    <ul className="grow w-full h-5/6 mx-5 overflow-y-auto cursor-default">
      {cards.length == 0 || cards == undefined ? (
        <div>
          no cards.. How about make your own card!{"  "}
          <Link href={"/new"} className="text-indigo-600">
            click here!
          </Link>
        </div>
      ) : null}
      {cards.map((card) => (
        <List
          key={card.id}
          card={card}
          modify={(id: string) => {
            modify(id);
          }}
        />
      ))}
    </ul>
  );
}
