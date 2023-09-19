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
      <div className="bg-white">
        <svg
          className="bg-indigo-600 relative block w-full"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="fill-slate-50"
          ></path>
        </svg>
      </div>
      <section className="w-[100vw] bg-indigo-600 flex justify-center py-40">
        <h2 className="text-6xl font-bold">{`How to Use "Cache-Brain"`}</h2>
      </section>
      <section className="grid grid-cols-[4fr_2fr] w-[100vw] h-[100vh] p-10 bg-indigo-600">
        <div className="w-full h-full">
          <HomeFilterSection />
        </div>
        <div className="w-full h-full px-7">
          <h2 className="text-3xl font-bold mb-7">
            문제들의 암기 정도를 한눈에 볼 수 있습니다.
          </h2>
          <span className="text-xl">
            모아보기를 클릭히면 암기 정도에 따라 분류된 문제들을 모아서 볼 수
            있습니다. 이를 통해 나의 암기 정도를 파악해보세요!
          </span>
        </div>
      </section>
      <div className="bg-indigo-600 w-full pt-20">
        <svg viewBox="0 0 1200 120" className="bg-slate-50">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-indigo-600"
          ></path>
        </svg>
      </div>

      <section className="w-[100vw] h-[100vh] bg-slate-50 flex justify-between items-center flex-col mx-auto">
        제작중입니다...
      </section>
      {/* <div className="mt-20 ml-16">
<h2 className="text-3xl font-semibold text-indigo-600 my-4">
  새로운 카드를 만들어 보세요!
</h2>
<p className="">
  원하는 문자와 답을 입력하여서 문제를 만들 수 있습니다.
</p>
<p className="">
  어떤 주제든지 상관 없습니다. 공부에 어려움을 느꼈던 어느 과목이던
  문제를 만들어 보세요!
</p>
</div>  */}
      <Footer />
    </section>
  );
}
