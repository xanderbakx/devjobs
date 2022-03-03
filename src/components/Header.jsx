import Toggle from "./Toggle";

const Header = () => {
  return (
    <>
      <div className="bg-violet h-[162px] border-2 rounded-b-[100px]">
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-3xl font-black">devjobs</h1>
          </div>
          <div className="grow"></div>
          <div>
            <Toggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
