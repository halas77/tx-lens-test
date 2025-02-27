import { useState } from "react";

import Summary from "./components/Summary";
import Details from "./components/Details";
import Loading from "./components/Loading";
import Raw from "./components/Raw";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Tab from "./components/Tab";
import Hero from "./components/Hero";

const App = () => {
  const [activeTab, setActiveTab] = useState<"summary" | "details" | "raw">(
    "summary"
  );
  const [isLoading, setIsLoading] = useState(false);

  const mockData = {
    transactionHash: "0x4a7b...c329",
    status: "Confirmed",
    blockNumber: 17543021,
    from: "0x89205...C3B2",
    to: "0x7a3b8...D9F1",
    value: "1.542 ETH",
    gasFee: "0.0031 ETH ($5.42)",
    summary:
      "This transaction represents a standard ETH transfer between two non-contract addresses.This transaction represents a standard ETH transfer between two non-contract addresses.",
    riskLevel: "low",
    timestamp: "2023-08-20 15:42:23 UTC",
  };

  return (
    <div className="w-[400px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      {/* Header component with loading state */}
      <Header isLoading={isLoading} setIsLoading={setIsLoading} />

      {/* Display Banner if risk level is not low */}
      {mockData.riskLevel !== "low" && <Banner />}

      {/* Hero component displaying gas fee and value */}
      <Hero gasFee={mockData.gasFee} value={mockData.value} />

      {/* Tab component to switch between summary, details, and raw data */}
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content based on active tab */}
      <div className="space-y-4">
        {activeTab === "summary" && <Summary summary={mockData.summary} />}
        {activeTab === "details" && (
          <Details
            from={mockData.from}
            status={mockData.status}
            timestamp={mockData.timestamp}
            to={mockData.from}
            transactionHash={mockData.transactionHash}
          />
        )}
        {activeTab === "raw" && <Raw mockData={mockData} />}
      </div>

      {/* Loading component */}
      {isLoading && <Loading />}
    </div>
  );
};

export default App;
