export default function SupportItem(props:any) {
  const {imgUrl, content} = props;
  return (
    <article className="object-contain rounded-[60px] shadow-lg">
      <div className="object-contain overflow-hidden rounded-[60px] shadow-md">
        <img className="w-full h-full" src={imgUrl}/>
      </div>
      <p 
        className="p-6 pt-3 text-center text-base max-xl:text-sm max-md:p-4"
      >
        {content}
      </p>
    </article>
  );
}
  