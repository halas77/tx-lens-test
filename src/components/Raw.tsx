import { customScroll } from "../utils/constants";
import { MockDataType } from "../utils/types";

/**
 * Component to display mock data in a formatted JSON view with styling.
 * @param mockData - The mock data to display.
 */

const Raw = ({ mockData }: { mockData: MockDataType }) => {
  return (
    <div
      className={`bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto ${customScroll}`}
    >
      <pre>{JSON.stringify(mockData, null, 2)}</pre>
    </div>
  );
};

export default Raw;
