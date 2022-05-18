import { useContext } from "react";
import { Button } from "@mantine/core";
import { logoutWeb3Modal, getWalletProvider } from "../utils/connectWallet";
import { store } from "../store/store";
import { SET_WEB3_PROVIDER } from "../store/types";
import Icon from "react-crypto-icons";
import { Wallet } from "tabler-icons-react";

const ConnectWalletButton = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  const existingProvider = globalState.state.web3Provider;
  const onConnectWallet = async () => {
    const provider = await getWalletProvider();
    if (provider) {
      dispatch({
        type: SET_WEB3_PROVIDER,
        value: provider,
      });
      console.log(provider);
    }
  };

  const onLogoutWallet = async () => {
    await logoutWeb3Modal();
    dispatch({
      type: SET_WEB3_PROVIDER,
      value: null,
    });
  };

  return (
    <>
      {existingProvider ? (
        <Button onClick={onLogoutWallet} leftIcon={<Wallet />}>
          <span className="nav-link-inner--text ml-1">Disconnect Wallet</span>
        </Button>
      ) : (
        <Button onClick={onConnectWallet}>
          <span className="nav-link-inner--text ml-1">Connect Wallet</span>
        </Button>
      )}
    </>
  );
};

export default ConnectWalletButton;
