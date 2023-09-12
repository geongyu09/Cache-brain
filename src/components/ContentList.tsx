import { Content } from "@/model/learningCard";
import React from "react";
type Props = {
  title: string;
  learned: Content[] | undefined;
};

export default function ContentList({ learned, title }: Props) {
  return (
    <>
      <section>
        <h3 className="font-semibold my-4">{title}</h3>
        {learned &&
          learned.map((item) => (
            <li key={item._key} className="bg-slate-200 mb-5 p-5 rounded-lg">
              <h4 className="mb-2 ">{item.problem}</h4>
              <p>{item.answer}</p>
            </li>
          ))}
      </section>
    </>
  );
}
