import { HeroPropsType } from "../utils/types";

/**
 * Hero component displays transaction amount and gas fee in a styled grid layout.
 * @param mockData - The data for the Hero component.
 */

const Hero = (mockData: HeroPropsType) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Amount</p>
          <p className="font-semibold text-lg">{mockData.value}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Gas Fee</p>
          <p className="font-semibold text-lg">{mockData.gasFee}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
