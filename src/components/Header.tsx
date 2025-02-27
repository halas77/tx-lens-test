import { ArrowPathIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { LoadingType } from "../utils/types";

const Header = ({ setIsLoading, isLoading }: LoadingType) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <SparklesIcon className="h-6 w-6 text-blue-500" />
        <h1 className="text-xl font-bold">ChainSight</h1>
      </div>
      <button
        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
        onClick={() => setIsLoading(!isLoading)}
      >
        <ArrowPathIcon className="h-5 w-5" />
      </button>
    </header>
  );
};

export default Header;
