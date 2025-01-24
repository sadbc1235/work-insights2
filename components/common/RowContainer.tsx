import Container from "@/components/common/Container";

export default function RowContainer(props:any) {
  const {children, style, className} = props;
  const _parentClassName = 'mt-6 max-2xl:mt-5 max-xl:mt-4 max-lg:mt-3 max-md:mt-2 max-sm:mt-1 ' + (className || '');
  const _childClassName = 'grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 max-xl:gap-4';
  const _style = (style || {});
  return (
    <Container 
      parentClassName={_parentClassName} 
      childClassName={_childClassName} 
      style={_style}
    >
      {children}
    </Container>
  );
}
  