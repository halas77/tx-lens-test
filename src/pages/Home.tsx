import Summary from "../components/Summary";
import Details from "../components/Details";
import Loading from "../components/Loading";
import Raw from "../components/Raw";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Tab from "../components/Tab";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { mockData } from "../utils/constants";
import { useState } from "react";
import { useEffect } from "react";
import { getUrlFromChrome } from "../utils/lib";
import axios from "axios";

const Home = () => {
  const [activeTab, setActiveTab] = useState<"summary" | "details" | "raw">(
    "summary"
  );

  const [txData, setTxData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUrl = async () => {
    try {
      setIsLoading(true);
      const url = await getUrlFromChrome();

      if (!url) {
        return;
      }
      const response = await axios.get(
        `http://localhost:5000/api/tx-data/${url}`
      );
      setTxData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUrl();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-[400px] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <Header isLoading={isLoading} setIsLoading={setIsLoading} />

      <p>{txData}</p>

      {mockData.riskLevel !== "low" && <Banner />}

      <Hero gasFee={mockData.gasFee} value={mockData.value} />

      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />

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

      {isLoading && <Loading />}

      <Footer />
    </div>
  );
};

export default Home;
