const config: Readonly<Record<string, any>> = {
  chains: [11155111],
  projectId: process.env.REACT_APP_WC_PROJECT_ID,
  tokenAddress: "0x3bd417e0674f561022b48e85b624a1154e2a70da",
};

export const ETH_SEND_TX = "eth_sendTransaction";
export const TRANFER_METHOD = "transfer";
export default config;
