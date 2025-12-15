"use client";

export const AuthPageLayoutClient = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-slate-200 overflow-auto">
      <div className="flex flex-col w-full max-w-lg p-8">
        {/* <div className="mb-16 self-start">
          <Logo sizeEm={1.8} />
        </div> */}
        <div className="bg-slate-50 p-8 rounded-sm shadow-xs">
          {props.children}
        </div>
      </div>
    </div>
  );
};
