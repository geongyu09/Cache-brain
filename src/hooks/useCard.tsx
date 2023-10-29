"use client";
import { updateProgress } from "@/apis/card";
import { Review } from "@/components/\bAssessment";
import { CardContent, DetailCard } from "@/model/card";
import { GET_CARD_URL } from "@/utils/urls";
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

async function setProgress(
  item: CardContent,
  progress: number,
  url: string,
  optimisticData: DetailCard
) {
  await updateProgress(url, item, progress);
  return optimisticData;
}

export default function useCard(cardId: string) {
  const { data, isLoading, error, mutate } = useSWR<DetailCard>(
    GET_CARD_URL + cardId
  );

  const updateProgress = useCallback(
    (content: CardContent, progress: Review) => {
      const processMesure = chagneProcessMesure(progress);
      const newContents =
        data?.content?.map((item) => {
          if (item._key == content._key)
            return { ...item, progress: processMesure };
          return item;
        }) || [];
      const optimisticData = { ...data!, content: newContents };
      mutate(
        setProgress(content, processMesure, GET_CARD_URL, optimisticData),
        {
          optimisticData,
        }
      );
    },
    [data, mutate]
  );

  return { data, isLoading, error, updateProgress };
}
