export default function MainColContainer(props:any) {
  const {children, style, className} = props;
  const _className = 'flex justify-center ' + (className || '');
  const _style = (style || {});
    return (
      <div className={_className} style={_style}>
        <section className="grid grid-cols-1 gap-5 w-1/2 max-2xl:w-3/5 max-xl:w-3/5 max-lg:w-2/3 max-md:w-3/4 max-sm:w-5/6 max-xl:gap-3">
          {children}
        </section>
      </div>
    );
  }
  