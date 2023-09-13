import { Content } from "@/model/learningCard";
import React from "react";
type Props = {
  params: string;
  item: Content;
};
export default async function Assessment({ item, params }: Props) {
  const data = await fetch(`/api/study/${params}`, {
    method: "PUT",
    body: JSON.stringify({ content: item, process: 2 }),
  });
  return (
    <div className="flex gap-5 items-center ml-5">
      <button className="border-2 px-2 py-1 rounded-xl ">good</button>
      <button className="border-2 px-2 py-1 rounded-xl ">soso</button>
      <button className="border-2 px-2 py-1 rounded-xl ">again</button>
    </div>
  );
}
