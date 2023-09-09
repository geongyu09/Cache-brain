import React from "react";
import { NavList } from "./NavigateSection";
import Link from "next/link";

type Props = {
  style?: string;
  content: NavList & {};
};

export default function NavListComponent({ content, style }: Props) {
  const { title, list } = content;
  return (
    <div className={`my-10 mx-5 ${style}`}>
      <h4 className="text-gray-400 mb-2 text-sm">{title}</h4>
      <ul>
        {list.map((item, index) => (
          <Link key={index} href={`${item.url}`}>
            <li className="flex mb-1 gap-3 items-center">
              {item.icon}
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
