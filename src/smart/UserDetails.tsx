import { useEffect } from "react";
import { ethers } from "ethers";
import UserDetails from "../components/UserDetails";
import { useWeb3React } from "@web3-react/core";
import { addChainData } from "../store/actions/chain-actions";
import { addTokenData } from "../store/actions/token-actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../store";
import { txActions } from "../store/slices/txSlice";
import SmartTxModal from "./TxModal";
import { useNavigate } from "react-router-dom";

const SmartUserDetails = () => {
  const { account, provider, chainId } = useWeb3React();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const userState = useSelector((state: IRootState) => state?.user);
  const tokenState = useSelector((state: IRootState) => state?.token);
  const chainState = useSelector((state: IRootState) => state?.chain);

  const openModal = () => dispatch(txActions.openModal());

  const showTxPage = () => navigate("/transfer-details");

  useEffect(() => {
    if (!provider) return;
    if (!account) return;
    if (!chainId) return;
    const ethProvider = new ethers.providers.Web3Provider(provider?.provider);
    dispatch(addChainData(ethProvider, account, chainId));
    dispatch(addTokenData(ethProvider, account));
  }, [provider, account, chainId, dispatch]);
  return (
    <>
      <UserDetails
        address={userState.address}
        chainName={chainState.name}
        nativeBalance={Number(chainState.balance)}
        tokenBalance={Number(tokenState.balance)}
        tokenName={tokenState.name}
        tokenSymbol={tokenState.symbol}
        tokenDecimals={tokenState.decimals}
        openModal={openModal}
        showTxPage={showTxPage}
      />
      <SmartTxModal />
    </>
  );
};

export default SmartUserDetails;
