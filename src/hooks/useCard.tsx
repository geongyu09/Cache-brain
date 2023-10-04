"use client";
import { Review } from "@/components/\bAssessment";
import { DetailCard } from "@/model/card";
import { Content } from "@/model/learningCard";
import { useCallback } from "react";
import useSWR from "swr";

function chagneProcessMesure(progress: Review) {
  return progress == "again"
    ? 0
    : progress == "soso"
    ? 1
    : progress == "good"
    ? 2
    : -1;
}

async function setProgress(item: Content, progress: number, url: string) {
  await fetch(url, {
    method: "PUT",
    body: JSON.stringify({ content: item, progress: progress }),
  });
  return await fetch(url).then((res) => res.json());
}

export default function useCard(cardId: string) {
  const GET_CARD_URL = `/api/card/detail/${cardId}`;
  const { data, isLoading, error, mutate } = useSWR<DetailCard>(GET_CARD_URL);

  const updateProgress = useCallback(
    (content: Content, progress: Review) => {
      const processMesure = chagneProcessMesure(progress);
      const newContents =
        data?.content?.map((item) => {
          if (item._key == content._key) return { ...item, processMesure };
          return item;
        }) || [];
      mutate(setProgress(content, processMesure, GET_CARD_URL), {
        optimisticData: { ...data!, content: newContents },
      });
    },
    [GET_CARD_URL, data, mutate]
  );

  return { data, isLoading, error, updateProgress };
}
