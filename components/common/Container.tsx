export default function Container(props:any) {
  const {children, style, parentClassName, childClassName} = props;
  const _parentClassName = 'flex justify-center ' + (parentClassName || '');
  const _childClassName = 'w-1/2 max-2xl:w-3/5 max-xl:w-3/5 max-lg:w-2/3 max-md:w-3/4 max-sm:w-5/6 ' + (childClassName || '');
    return (
      <div className={_parentClassName} style={style}>
        <section className={_childClassName}>
          {children}
        </section>
      </div>
    );
  }
  