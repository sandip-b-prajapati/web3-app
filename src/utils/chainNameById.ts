const chainNameById = (chainId: number) => {
  switch (chainId) {
    case 11155111:
      return "Sepolia";
    default:
      return "Unknown";
  }
};

export default chainNameById;
