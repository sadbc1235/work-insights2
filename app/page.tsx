import MainColContainer from "@/components/MainColContainer";
import Title from "@/components/Title";

export default function Home() {
  return (
    <>
      <Title text="공식 홈페이지" />
      <MainColContainer
        className={"mt-6"}
      >
        <article className="object-contain">
          <img className="w-full h-full" src="/001.png"/>
        </article>
        <article className="object-contain">
          <img className="w-full h-full" src="/002.png"/>
        </article>
        <article className="object-contain">
          <img className="w-full h-full" src="/003.png"/>
        </article>
      </MainColContainer>
    </>
  );
}
