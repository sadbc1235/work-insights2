import Title from "@/components/common/Title";
import HomePageContainer from "./HomePageContainer";

export default function HomePage() {
  return (
    <>
      <div className="mt-[100px] max-sm:mt-[50px]"></div>
      <Title text="공식 홈페이지" />
      <HomePageContainer>
        <article className="object-contain shadow-xl cursor-pointer">
          <img className="w-full h-full" src="/001.png"/>
        </article>
        <article className="object-contain shadow-xl">
          <img className="w-full h-full" src="/002.png"/>
        </article>
        <article className="object-contain shadow-xl">
          <img className="w-full h-full" src="/003.png"/>
        </article>
      </HomePageContainer>
    </>
  );
}
  