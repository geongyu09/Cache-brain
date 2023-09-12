"use client";
import { LearningCardContent } from "@/model/learningCard";
import React from "react";
import useSWR from "swr";

export default function LearningCardContent({ params }: { params: string }) {
  const GET_CONTENT_URL = `/api/study/${params}`;
  const { data, isLoading, error } =
    useSWR<LearningCardContent>(GET_CONTENT_URL);
  return (
    <section className="w-full overflow-y-auto h-screen px-10 pt-4 pb-[70px]">
      {data && (
        <ul className="h-full lg:overflow-auto">
          {data.content.map((item) => (
            <li key={item._key} className="bg-slate-200 mb-5 p-5 rounded-lg">
              <h4 className="mb-2 ">{item.problem}</h4>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
