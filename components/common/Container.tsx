export default function Container({children}: {children: React.ReactNode}) {
    return (
      <div className="flex justify-center">
        <div className="w-1/2 max-2xl:w-3/5 max-xl:w-3/5 max-lg:w-2/3 max-md:w-3/4 max-sm:w-5/6">
          {children}
        </div>
      </div>
    );
  }
  