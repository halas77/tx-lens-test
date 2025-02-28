import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { getUrlFromChrome } from "../utils/lib";

const UnsupportedSite = () => {
  const handleClick = async () => {
    const url = await getUrlFromChrome();

    console.log("url", url);
  };
  return (
    <div className="w-[400px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <img src="/logo.png" alt="TxLens" className="h-16 w-16" />

        <h2 className="text-2xl font-bold">Unsupported Site</h2>

        <button onClick={handleClick} className="bg-white px-4 py-1 text-black">
          test
        </button>

        <p className="text-gray-600 dark:text-gray-400">
          This extension only works on supported block explorers. Visit any of
          these sites to get started:
        </p>

        <div className="w-full space-y-2">
          {[
            "Etherscan (Ethereum)",
            "BscScan (BNB Chain)",
            "PolygonScan (Polygon)",
            "Arbiscan (Arbitrum)",
            "SnowTrace (Avalanche)",
          ].map((network) => (
            <div
              key={network}
              className="flex items-center space-x-2 p-2 bg-white dark:bg-gray-800 rounded-lg justify-center"
            >
              <GlobeAltIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm">{network}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Don't see your network?
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dawitm777@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:underline"
          >
            {" "}
            Contact us{" "}
          </a>
          to add support!
        </p>
      </div>
    </div>
  );
};

export default UnsupportedSite;
