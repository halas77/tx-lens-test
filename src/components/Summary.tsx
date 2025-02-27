import { SummaryMockDataType } from "../utils/types";

const Summary = (mockData: SummaryMockDataType) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg prose dark:prose-invert">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
        AI Summary
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{mockData.summary}</p>
    </div>
  );
};

export default Summary;
