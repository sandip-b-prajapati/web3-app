import { useCallback } from "react";
import Button from "@mui/material/Button";
import { walletConnectV2 } from "../connectors/walletConnectV2";
import { useNavigate } from "react-router-dom";

const ConnectToWallet = () => {
  const navigate = useNavigate();

  const onWalletConnect = useCallback(() => {
    walletConnectV2
      .activate()
      .then(() => navigate("user-details"))
      .catch((err) => console.log("error", err.message));
  }, [walletConnectV2]);

  return (
    <Button variant="contained" onClick={onWalletConnect}>
      <div className="Icons__walletconnect" />
      WalletConnect
    </Button>
  );
};

export default ConnectToWallet;
