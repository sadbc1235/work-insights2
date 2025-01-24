import Container from "@/components/common/Container";

export default function MainTitle() {
    return (
        <div 
            className="
                h-[550px] max-xl:h-[400px] max-lg:h-[400px] max-lg:h-[300px] max-md:h-[300px] max-sm:h-[250px]
                overflow-hidden bg-[url(/bg1.jpg)] bg-no-repeat bg-center bg-fixed bg-cover saturate-150
            " 
            style={{boxShadow: 'inset 0 -3px 20px rgba(0,0,0,0.25)'}}
        >
            <Container
                parentClassName='items-center h-full'
            >
                <div className="flex items-end flex-wrap">
                    <div 
                        className="
                            w-[5px] 
                            h-[48px] max-xl:h-[40px] max-lg:h-[36px] max-lg:h-[32px] max-md:h-[32px] max-sm:h-[28px] 
                            mr-4 
                            bg-[#7f6000]
                        "
                    ></div>
                    <span 
                        className="
                            font-bold 
                            text-5xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl
                        "
                    >영업 2팀 솔루션 파트</span>&nbsp;
                    <span className="text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg">업무자료</span>
                </div>
            </Container>
        </div>
    );
  }
  