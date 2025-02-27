import { TabPropTypes } from "../utils/types";

/**
 * Tab component for rendering navigation tabs with active state and click handling.
 * @param activeTab - The currently active tab.
 * @param setActiveTab - Function to set the active tab.
 */

const Tab = ({ activeTab, setActiveTab }: TabPropTypes) => {
  return (
    <nav className="flex space-x-4 mb-4 border-b border-gray-200 dark:border-gray-700">
      {["summary", "details", "raw"].map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-1 capitalize ${
            activeTab === tab
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          }`}
          onClick={() => setActiveTab(tab as typeof activeTab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Tab;
