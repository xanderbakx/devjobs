import { useDarkMode } from "../hooks/useDarkMode";

const Toggle = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="mr-3 text-gray-700 font-medium">
          <img src={"../assets/desktop/icon-sun.svg"} alt="Sun" />
        </div>
        <div className="relative">
          <input
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
            type="checkbox"
            id="toggleB"
            className="sr-only"
          />

          <div className="block bg-white w-14 h-8 rounded-full"></div>

          <div className="dot absolute left-1 top-1 bg-violet w-6 h-6 rounded-full transition"></div>
        </div>

        <div className="ml-3 text-gray-700 font-medium">
          <img src={"../assets/desktop/icon-moon.svg"} alt="Moon" />
        </div>
      </label>
    </div>
  );
};

export default Toggle;
