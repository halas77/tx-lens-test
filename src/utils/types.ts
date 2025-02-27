export interface MockDataType {
  transactionHash: string;
  status: string;
  blockNumber: number;
  from: string;
  to: string;
  value: string;
  gasFee: string;
  summary: string;
  riskLevel: string;
  timestamp: string;
}

export interface SummaryMockDataType {
  summary: string;
}

export interface DetailsMockDataType {
  transactionHash: string;
  status: string;
  from: string;
  to: string;
  timestamp: string;
}

export interface LoadingType {
  setIsLoading: (value: boolean) => void;
  isLoading: boolean;
}

export interface TabPropTypes {
  activeTab: "summary" | "details" | "raw";
  setActiveTab: (value: "summary" | "details" | "raw") => void;
}

export interface HeroPropsType {
  value: string;
  gasFee: string;
}
