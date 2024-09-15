import { ethers } from "ethers";
import { tokenActions } from "../slices/tokenSlice";
import ERC20ABI from "../../abi/ERC20.json";
import { Dispatch } from "@reduxjs/toolkit";
import config from "../../config";

export const addTokenData =
  (ethProvider: ethers.providers.Web3Provider, account: string) =>
  async (dispatch: Dispatch<any>) => {
    const contract = new ethers.Contract(
      config.tokenAddress,
      ERC20ABI,
      ethProvider.getSigner()
    );
    const name = await contract.name();
    const decimals = await contract.decimals();
    const balance = await contract
      .balanceOf(account)
      .then((balBigInt: any) => ethers.utils.formatUnits(balBigInt, decimals));
    const symbol = await contract.symbol();

    dispatch(
      tokenActions.setTokenData({
        name,
        decimals,
        balance,
        symbol,
      })
    );
  };
