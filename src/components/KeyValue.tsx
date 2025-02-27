import { ClipboardIcon } from "@heroicons/react/24/outline";
import React from "react";

/**
 * KeyValue component displays a label and value with a copy-to-clipboard button.
 */


const KeyValue = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) => (
  <div className="flex justify-between items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
    <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    <div className="flex items-center space-x-2">
      {typeof value === "string" ? (
        <span className="text-sm font-medium">{value}</span>
      ) : (
        value
      )}
      <button
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        onClick={() => navigator.clipboard.writeText(value?.toString() || "")}
      >
        <ClipboardIcon className="h-4 w-4" />
      </button>
    </div>
  </div>
);

export default KeyValue;
