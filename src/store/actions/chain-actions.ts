import { ethers } from "ethers";
import { chainActions } from "../slices/chainSlice";
import chainNameById from "../../utils/chainNameById";
import { Dispatch } from "@reduxjs/toolkit";

export const addChainData =
  (
    ethProvider: ethers.providers.Web3Provider,
    account: string,
    chainId: number
  ) =>
  async (dispatch: Dispatch<any>) => {
    const balance = await ethProvider
      .getBalance(account)
      .then((bal) => Number(ethers.utils.formatEther(bal)).toFixed(5));
    const chainName = chainNameById(chainId);
    dispatch(
      chainActions.setChainData({
        name: chainName,
        balance,
      })
    );
  };
