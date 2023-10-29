import Link from "next/link";
import React from "react";
import { NavBar } from "./NavigateSection";

type Props = {
  style?: string;
  content: NavBar;
  setNavigation: React.Dispatch<React.SetStateAction<NavBar>>;
};

export default function NavListComponent({
  content,
  style,
  setNavigation,
}: Props) {
  const { title, list } = content;
  const handleClick = (index: number) => {
    setNavigation((prev) => ({
      ...prev,
      list: prev.list.map((item, i) => {
        if (i == index) {
          return { ...item, isOnUrl: true };
        }
        return { ...item, isOnUrl: false };
      }),
    }));
  };
  return (
    <div className={`my-10 mx-5 ${style}`}>
      <h4 className="text-gray-400 mb-2 text-sm">{title}</h4>
      <ul>
        {list.map((item, index) => (
          <Link
            key={index}
            href={`/cards${item.url}`}
            onClick={() => handleClick(index)}
          >
            <li
              className={`flex mb-1 gap-3 items-center ${
                item.isOnUrl ? "text-indigo-600" : ""
              } `}
            >
              {item.icon}
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
