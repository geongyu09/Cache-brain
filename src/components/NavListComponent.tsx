import React from "react";
import { NavList } from "./NavigateSection";
import Link from "next/link";

type Props = {
  content: NavList & {
    style?: string;
  };
};

export default function NavListComponent({ content }: Props) {
  const { style, title, list } = content;
  return (
    <div className={`my-10 mx-5 ${style}`}>
      <h4 className="text-gray-400 mb-2 text-sm">{title}</h4>
      <ul>
        {list.map((item, index) => (
          <Link key={index} href={`${item.url}`}>
            <li className="flex mb-1   ">
              <div className="mr-2">icon</div>
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
