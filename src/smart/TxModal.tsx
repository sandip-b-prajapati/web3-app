import { useCallback, useState } from "react";
import TxModal from "../components/TxModal";
import { useDispatch, useSelector } from "react-redux";
import { txActions } from "../store/slices/txSlice";
import { IRootState } from "../store";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import ERC20ABI from "../abi/ERC20.json";
import config, { ETH_SEND_TX, TRANFER_METHOD } from "../config";

const SmartTxModal = () => {
  const [receiverAddress, setReceiverAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const { provider, account } = useWeb3React();
  const dispatch = useDispatch();
  const txState = useSelector((state: IRootState) => state.tx);
  const tknState = useSelector((state: IRootState) => state.token);
  const closeModal = () => {
    dispatch(txActions.closeModal());
  };

  const onAddress = (address: string) => {
    setReceiverAddress(address);
  };

  const onAmount = (amount: number) => {
    setAmount(amount);
  };

  const onSubmitTx = useCallback(() => {
    if (!provider) return;
    if (!account) return;
    const executeTx = async () => {
      const IToken = new ethers.utils.Interface(ERC20ABI);
      const encodeFunData = IToken.encodeFunctionData(TRANFER_METHOD, [
        receiverAddress,
        ethers.utils.parseUnits(amount.toString(), tknState.decimals),
      ]);
      await provider
        ?.send(ETH_SEND_TX, [
          {
            from: account,
            to: config.tokenAddress,
            value: 0,
            data: encodeFunData,
          },
        ])
        .catch((err) => console.log("cancel tx"));
    };
    executeTx();
  }, [provider, tknState, receiverAddress, amount, account]);

  return (
    <>
      {txState.modalOpen && (
        <TxModal
          closeModal={closeModal}
          modalOpen={txState.modalOpen}
          onAddress={onAddress}
          onAmount={onAmount}
          onTx={onSubmitTx}
        />
      )}
    </>
  );
};

export default SmartTxModal;
