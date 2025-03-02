/**
 * Loading component displays a centered spinner with a semi-transparent background overlay.
 */

const Loading = () => {
  return (
    <div className="flex-grow flex flex-col gap-4">
      <div className="h-7 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="flex flex-col gap-2">
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;
