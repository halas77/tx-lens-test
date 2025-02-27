import { DetailsMockDataType } from "../utils/types";
import KeyValue from "./KeyValue";

/**
 * Renders transaction details using provided mock data.
 * @param mockData - The mock data for transaction details.
 */

const Details = (mockData: DetailsMockDataType) => {
  return (
    <div className="space-y-3">
      <KeyValue label="Transaction Hash" value={mockData.transactionHash} />
      <KeyValue
        label="Status"
        value={
          <span className="flex items-center space-x-1">
            <span
              className={`h-2 w-2 rounded-full ${
                mockData.status === "Confirmed"
                  ? "bg-green-500"
                  : "bg-yellow-500"
              }`}
            />
            <span>{mockData.status}</span>
          </span>
        }
      />
      <KeyValue label="From" value={mockData.from} />
      <KeyValue label="To" value={mockData.to} />
      <KeyValue label="Timestamp" value={mockData.timestamp} />
    </div>
  );
};

export default Details;
