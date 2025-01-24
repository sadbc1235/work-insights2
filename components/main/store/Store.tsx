import RowContainer from "@/components/common/RowContainer";
import Title from "@/components/common/Title";

export default function Store() {
  return (
    <>
        <Title text="store" />
        <RowContainer>
            <article className="object-contain overflow-hidden rounded-[60px] shadow-xl">
                <img className="w-full h-full" src="/001-3.png"/>
            </article>
            <article className="object-cover overflow-hidden rounded-[60px] shadow-xl">
                <img className="w-full h-full" src="/002-3.png"/>
            </article>
            <article className="object-cover overflow-hidden rounded-[60px] shadow-xl">
                <img className="w-full h-full" src="/003-3.png"/>
            </article>
        </RowContainer>
    </>
  );
}
  