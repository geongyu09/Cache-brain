"use client";
import { Review } from "@/components/\bAssessment";
import { Content, LearningCardContent } from "@/model/learningCard";
import React, { useCallback } from "react";
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

export default function useStudy(params: string) {
  const GET_CONTENT_URL = `/api/study/${params}`;
  const { data, isLoading, error, mutate } =
    useSWR<LearningCardContent>(GET_CONTENT_URL);

  const updateProgress = useCallback(
    (content: Content, progress: Review) => {
      const processMesure = chagneProcessMesure(progress);
      const newContents =
        data?.content?.map((item) => {
          if (item._key == content._key) return { ...item, processMesure };
          return item;
        }) || [];
      mutate(setProgress(content, processMesure, GET_CONTENT_URL), {
        optimisticData: { content: newContents },
      });
    },
    [GET_CONTENT_URL, data?.content, mutate]
  );

  return { data, isLoading, error, updateProgress };
}
