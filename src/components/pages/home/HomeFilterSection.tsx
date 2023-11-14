"use client";
import React, { useState } from "react";
import { Filter } from "../study/StudyComponent";
import StyledButton from "../../ui/StyledButton";
import HomeContentList from "./HomeContentList";
import { CardContent } from "@/model/card";

export default function HomeFilterSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<CardContent[]>([]);
  const content: CardContent[] = [
    {
      problem: "WIP",

      answer:
        "working in progress. 아직 개발 진행중이라는 뜻으로 사용자로 하여금 기능을 미리 제공해두고 피드백을 받아 앞으로 개발 방향을 모색하는 단계",

      progress: 2,

      _key: "1468c034b6ed",
    },

    {
      problem: "set에서 반복작업하기",

      answer:
        "set.keys() : 키를 잠은 이터러블을 반환한다. set.values() : keys와 동일한 작업을 한다. set.entries() : [value, value]를 반환한다.",

      progress: 2,

      _key: "9b9cf70710fa",
    },

    {
      progress: 1,

      _key: "e25ac9a5ead3",

      problem: "SSR 장단점",

      answer:
        "SSR 장점 페이지 로딩 시간이 빠르다.(모든 파일 다운받을 이유 없음. html만 받으므로) 자바스크립트 필요 없음. SEO 최적화 좋음 보안이 뛰어남 실시간 데이터를 사용 사용자별 필요한 데이터를 사용함 문제점 SSG, ISR과 비교했을 때 상대적으로 느릴 수 있다.(아무래도 렌더링을 그때 하니까. 미리 해둔거 보내는 것보단 느림) 서버의 과부하가 걸릴 수 있다. 서버의 overhead가 높아진다. (요청때마다 서버가 일하니까) 매번 페이지를 새로 만들게 되니 CDN에 캐시가 안된다.",
    },

    {
      problem: "SSR 동작원리",

      answer:
        "클라이언트가 서버로 요청을 보내면 서버에서 그때 db나 fetch data를 다 포함하여서 html페이지를 렌더링 해서 클라이언트로 보내주게 된다. ",

      progress: 0,

      _key: "0ca71e06d2c5",
    },

    {
      problem: "ISR의 장단점",

      answer:
        "ISR 장점 페이지 로딩 시간 (TTV)이 빠르다. 자바스크립트가 필요 없다. SEO 최적화가 좋다. 보안이 뛰어나다. //SSG의 장점을 모두 가진다. 추가적으로 데이터가 주기적으로 업데이트 됨 ISR 단점 여전히 실시간 데이터가 아니다. 사용자별 정보 제공의 어려움",

      progress: 0,

      _key: "72f41ef55d3f",
    },

    {
      problem: "ISR의 동작원리",

      answer:
        "Incremental Static Regeneration 기본적인 원리는 SSR과 동일 다만 주기적으로 렌더링 됨",

      progress: 0,

      _key: "1971e9139689",
    },

    {
      problem: "SSG 장단점",

      answer:
        "static side generation  SSG장점 페이지 로딩 시간 (TTV)이 빠르다. 자바스크립트가 필요 없다. SEO 최적화가 좋다. html을 주므로 보안이 뛰어나다. js코드를 보내지 않아도 되므로. CDN에 캐시가 된다. 단점 데이터가 정적이다. 빌드할 때 데이터를 받아오니까 데이터가 자주 바뀐다면 이를 바로바로 보여줄 수 없다. 사용자별 정보 제공이 어렵다. 이용하는 사용자가 다양하고 많다면 그 많은 종류의 페이지를 미리 만들어 두는 것은 한계가 있다. 즉 모든 사용자가 같은 페이지를 보고, 데이터가 정적이라면 좋은 방식이다.",

      progress: 0,

      _key: "c44095cad3ba",
    },
  ];
  const learned = content.filter((item) => {
    if (item.progress == 2) return item;
  });
  const learning = content.filter((item) => {
    if (item.progress == 1) return item;
  });
  const unlearned = content.filter((item) => {
    if (item.progress == 0) return item;
  });
  const selectedModify = (selected: CardContent, remove?: boolean) => {
    if (remove) {
      setSelected((prev) => prev.filter((item) => item._key !== selected._key));
      return;
    }
    setSelected((prev) => [...prev, selected]);
  };
  return (
    <section className="grid grid-cols-[4fr_11fr] border-2 bg-white rounded-xl overflow-hidden">
      <section className="flex flex-col bg-slate-100 px-5 h-full pb-[100px]">
        <div>
          <h2 className="my-4 text-lg ">카드 이름</h2>
          <p>카드 설명 부분 입니다.</p>
        </div>
        <section className="pt-20 grow h-full">
          <h3 className="mb-5">모아 보기</h3>
          <ul className="flex flex-col gap-2 ">
            <li
              onClick={() => setFilter("all")}
              className={`cursor-pointer ${
                filter == "all" ? "text-purple-600" : ""
              }`}
            >
              all
            </li>
            <li
              onClick={() => setFilter("learned")}
              className={`cursor-pointer ${
                filter == "learned" ? "text-purple-600" : ""
              }`}
            >
              learned
            </li>
            <li
              onClick={() => setFilter("learning")}
              className={`cursor-pointer ${
                filter == "learning" ? "text-purple-600" : ""
              }`}
            >
              learning
            </li>
            <li
              onClick={() => setFilter("unlearned")}
              className={`cursor-pointer ${
                filter == "unlearned" ? "text-purple-600" : ""
              }`}
            >
              unlearned
            </li>
          </ul>
        </section>
        <StyledButton
          text="학습하기"
          style={`w-full ${
            selected.length == 0
              ? "pointer-events-none bg-gray-300 text-gray-600"
              : "bg-indigo-600"
          }`}
        />
      </section>
      {/*  */}
      <section className="w-full overflow-y-auto h-screen px-10 pt-4 pb-[70px]">
        <ul className="h-full lg:overflow-auto">
          {filter == "all" ? (
            <>
              <HomeContentList
                title="learned"
                learned={learned}
                selected={selected}
                selectedModify={selectedModify}
              />
              <HomeContentList
                title="learning"
                learned={learning}
                selected={selected}
                selectedModify={selectedModify}
              />
              <HomeContentList
                title="unlearned"
                learned={unlearned}
                selected={selected}
                selectedModify={selectedModify}
              />
            </>
          ) : filter == "learned" ? (
            <HomeContentList
              title="learned"
              learned={learned}
              selected={selected}
              selectedModify={selectedModify}
            />
          ) : filter == "learning" ? (
            <HomeContentList
              title="learning"
              learned={learning}
              selected={selected}
              selectedModify={selectedModify}
            />
          ) : filter == "unlearned" ? (
            <HomeContentList
              title="unlearned"
              learned={unlearned}
              selected={selected}
              selectedModify={selectedModify}
            />
          ) : null}
        </ul>
      </section>
    </section>
  );
}
