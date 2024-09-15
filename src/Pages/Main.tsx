import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConnectToWallet from "../components/ConnectToWallet";
import UserDetails from "../smart/UserDetails";
import { walletConnectV2 } from "../connectors/walletConnectV2";
import { useWeb3React } from "@web3-react/core";
import { userActions } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const { account } = useWeb3React();
  const dispatch = useDispatch();
  useEffect(() => {
    walletConnectV2
      .connectEagerly()
      .then(() => console.log("wallet reconnected"))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (account) {
      dispatch(userActions.setAddress(account));
    }
  }, [account]);
  return (
    <Router>
      <Routes>
        <Route index element={<ConnectToWallet />} />
        <Route path="user-details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default Main;
