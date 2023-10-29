"use client";
import React from "react";
import ContentList from "./ContentList";
import { Filter } from "./StudyComponent";
import { Loading } from "./ui/icon";
import { CardContent } from "@/model/card";

type Props = {
  filter: Filter;
  selected: CardContent[];
  showModal: boolean;
  content: CardContent[];
  isLoading: boolean;
  error: any;
  selectedModify: (selected: CardContent, remove?: boolean) => void;
};

export default function LearningCardContent({
  content,
  isLoading,
  error,
  filter,
  selected,
  showModal,
  selectedModify,
}: Props) {
  const learned = content.filter((item) => {
    if (item.progress == 2) return item;
  });
  const learning = content.filter((item) => {
    if (item.progress == 1) return item;
  });
  const unlearned = content.filter((item) => {
    if (item.progress == 0) return item;
  });

  return (
    <section className="w-full overflow-y-auto h-screen px-10 pt-4 pb-[70px]">
      {isLoading && <Loading />}
      <ul className="h-full lg:overflow-auto">
        {filter == "all" ? (
          <>
            <ContentList
              title="learned"
              content={learned}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
            <ContentList
              title="learning"
              content={learning}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
            <ContentList
              title="unlearned"
              content={unlearned}
              selected={selected}
              selectedModify={selectedModify}
              showModal={showModal}
            />
          </>
        ) : filter == "learned" ? (
          <ContentList
            title="learned"
            content={learned}
            selected={selected}
            selectedModify={selectedModify}
            showModal={showModal}
          />
        ) : filter == "learning" ? (
          <ContentList
            title="learning"
            content={learning}
            selected={selected}
            selectedModify={selectedModify}
            showModal={showModal}
          />
        ) : filter == "unlearned" ? (
          <ContentList
            title="unlearned"
            content={unlearned}
            selected={selected}
            selectedModify={selectedModify}
            showModal={showModal}
          />
        ) : null}
      </ul>
    </section>
  );
}
