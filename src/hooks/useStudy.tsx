"use client";
import { Content, LearningCardContent } from "@/model/learningCard";
import React, { useCallback } from "react";
import useSWR from "swr";

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
    (content: Content, progress: number) => {
      const newContents =
        data?.content?.map((item) => {
          if (item._key == content._key) return { ...item, progress };
          return item;
        }) || [];
      mutate(setProgress(content, progress, GET_CONTENT_URL), {
        optimisticData: { content: newContents },
      });
    },
    [GET_CONTENT_URL, data?.content, mutate]
  );

  return { data, isLoading, error, updateProgress };
}
