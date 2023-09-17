import NewPageSection from "@/components/NewPageSection";
import React from "react";

export default function page() {
  return (
    <section className="p-10">
      <div className="mt-20 ml-16">
        <h2 className="text-3xl font-semibold text-indigo-600 my-4">
          새로운 카드를 만들어 보세요!
        </h2>
        <p className="">
          원하는 문자와 답을 입력하여서 문제를 만들 수 있습니다.
        </p>
        <p className="">
          어떤 주제든지 상관 없습니다. 공부에 여려움을 느꼈던 어느 과목이던
          문제를 만들어 보세요!
        </p>
      </div>
      <NewPageSection />
    </section>
  );
}
