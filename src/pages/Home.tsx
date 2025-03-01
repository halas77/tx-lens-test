import Summary from "../components/Summary";
import Details from "../components/Details";
import Loading from "../components/Loading";
import Raw from "../components/Raw";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Tab from "../components/Tab";
// import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { mockData } from "../utils/constants";
import { useEffect, useState } from "react";
import { fetchTxData, getUrlFromChrome } from "../utils/lib";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"summary" | "details" | "raw">(
    "summary"
  );

  const [txData, setTxData] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = await getUrlFromChrome();
      if (url) {
        const data = await fetchTxData(url);
        setTxData(data);
        setIsLoading(false);
      } else {
        setTxData({ data: "No data available." });
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[400px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 min-h-screen flex flex-col">
      {isLoading ? (
        <div className="flex-grow flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <>
          <Header isLoading={isLoading} setIsLoading={setIsLoading} />

          {mockData.riskLevel !== "low" && <Banner />}

          {/* {txData ? (
            <pre className="text-sm p-2 rounded">
              {JSON.stringify(txData?.data?.summary, null, 2)}
            </pre>
          ) : (
            <p>No data available.</p>
          )} */}

          {/* <Hero gasFee={mockData.gasFee} value={mockData.value} /> */}

          <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="space-y-4">
            {activeTab === "summary" && (
              <Summary summary={txData?.data?.summary} />
            )}

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

          {isLoading && <Loading />}

          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
