import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { LoadingType } from "../utils/types";

/**
 * Header component with a title and a button to toggle loading state.
 * @param setIsLoading Function to set loading state.
 * @param isLoading Current loading state.
 */

const Header = ({ setIsLoading, isLoading }: LoadingType) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="TxLens" className="h-6 w-6 " />
        <h1 className="text-xl font-bold ">txLens</h1>
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
