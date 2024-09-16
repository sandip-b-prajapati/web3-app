import type { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { Web3ReactHooks, Web3ReactProvider } from "@web3-react/core";
import {
  hooks as walletConnectV2Hooks,
  walletConnectV2,
} from "./connectors/walletConnectV2";
import { Provider } from "react-redux";
import Main from "./Pages/Main";
import store from "./store";

const connectors: [WalletConnectV2, Web3ReactHooks][] = [
  [walletConnectV2, walletConnectV2Hooks],
];

function App() {
  return (
    <Provider store={store}>
      <Web3ReactProvider connectors={connectors}>
        <Main />
      </Web3ReactProvider>
    </Provider>
  );
}

export default App;
