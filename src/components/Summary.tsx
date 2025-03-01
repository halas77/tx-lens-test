/**
 * Renders a summary section with provided mock data in a styled container.
 * @param summary - data containing the summary text.
 */

const Summary = ({ summary }: { summary: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg prose dark:prose-invert">
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
        AI Summary
      </h3>
      <p className="text-gray-700 dark:text-gray-200">{summary}</p>
    </div>
  );
};

export default Summary;
