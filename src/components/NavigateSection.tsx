import React from "react";

export default function NavigateSection() {
  return (
    <section className="w-80 bg-slate-100 flex flex-col justify-between">
      <div className="flex w-full justify-between p-5">
        <div className="bg-purple-600">icon</div>
        <div className="bg-purple-600"> ... </div>
      </div>
      <div className="border-2 my-10">
        <span>Navigation</span>
        <ul>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
        </ul>
      </div>

      <div className="grow">
        <span>즐겨찾기</span>
        <ul>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
          <li>aaaaaaa</li>
        </ul>
      </div>

      <div>user</div>
    </section>
  );
}
