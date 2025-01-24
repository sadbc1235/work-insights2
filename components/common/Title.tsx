import Container from "./Container";

export default function Title({text}: {text: string}) {
    return (
      <Container>
        <div className="flex items-center">
          <div 
            className="mr-4" 
            style={{width: '10px', height: '10px', background: 'rgb(127, 96, 0)'}}
          ></div>
          <h1
            className="text-4xl max-2xl:text-4xl max-xl:text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl"
            style={{color: 'rgb(127, 96, 0)'}}
          >
            {text}
          </h1>
        </div>
      </Container>
    );
  }
  