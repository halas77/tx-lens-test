import { MockDataType } from "../utils/types";

const Raw = ({ mockData }: { mockData: MockDataType }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
      <pre>{JSON.stringify(mockData, null, 2)}</pre>
    </div>
  );
};

export default Raw;
