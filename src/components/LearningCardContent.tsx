"use client";
import { LearningCardContent } from "@/model/learningCard";
import React from "react";
import useSWR from "swr";

export default function LearningCardContent({ params }: { params: string }) {
  const GET_CONTENT_URL = `/api/study/${params}`;
  const { data, isLoading, error } =
    useSWR<LearningCardContent>(GET_CONTENT_URL);
  return (
    <section className="w-full h-full overflow-y-auto px-10 py-4">
      {data && (
        <ul>
          {data.content.map((item) => (
            <li key={item._key} className="bg-slate-200 mb-5 p-5">
              <h4>{item.problem}</h4>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
