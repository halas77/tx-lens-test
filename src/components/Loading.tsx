import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="animate-spin">
        <ArrowPathIcon className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

export default Loading;
