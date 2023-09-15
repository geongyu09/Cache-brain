import Footer from "../components/Footer";
import HomeLoginComponent from "@/components/HomeLoginComponent";
import HomeFilterSection from "@/components/HomeFilterSection";

export default async function HomePage() {
  return (
    <section className="border-b-2">
      <section className="w-[100vw] h-[100vh] bg-slate-50 flex justify-between items-center flex-col mx-auto">
        <div className=" mt-60 text-center">
          <h1 className="text-6xl">Cache Brain</h1>
          <p className="mt-7 text-xl">
            암기가 어려웠나요? 문제를 분석하고 최적화된 방법으로 공부해보세요!
          </p>
        </div>
        <HomeLoginComponent />
      </section>
      <section className="w-[100vw] bg-indigo-600">
        How to Use Cache-Brain
      </section>
      <section className="grid grid-cols-[3fr_1fr] w-[100vw] h-[100vh] p-10">
        <div className="w-full h-full border-r-2">
          <HomeFilterSection />
        </div>
        <div className="w-full h-full">
          <h2 className="text-2xl">
            문제들의 암기 정도를 한눈에 볼 수 있습니다
          </h2>
          <span>
            모아보기를 클릭히면 정기 정도에 따라 분류된 문제들을 모아서 볼 수
            있습니다. 이를 통해 나의 암기 정도를 파악해보세요!
          </span>
        </div>
      </section>
      <section className="w-[100vw] h-[100vh] bg-slate-50 flex justify-between items-center flex-col mx-auto">
        제작중입니다...
      </section>
      <Footer />
    </section>
  );
}
