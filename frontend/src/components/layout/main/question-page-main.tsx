import React from "react";

interface IMainProps {
  children?: React.ReactNode;
}

type MaioPropsType = Readonly<IMainProps>;

function QuestionPageMain({ children }: MaioPropsType) {
  return (
    <>
      <main className="absolute top-0 bottom-0 right-0 left-0 overflow-hidden">
        <div className="h-full relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 max-w-[1440px] px-[110px] mx-auto">
            <div className="absolute top-[45px] -right-[344px] w-[687px] h-[401px] bg-[#FF0000] opacity-40 blur-[200px]"></div>
            <div className="absolute -top-[120px] -left-[98px] w-[560px] h-[560px] bg-[#58A5FF] opacity-40 blur-[140px]"></div>
          </div>
          <div className="absolute top-[114px] bottom-0 right-0 left-0 overflow-x-hidden overflow-y-auto">
            <div className="max-w-[1440px] px-[110px] mx-auto">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default QuestionPageMain;
