import MetaMaskOnboarding from "@metamask/onboarding";
import { useEthers } from "@usedapp/core";
import { useState, useEffect, useRef } from "react";

const ONBOARD_TEXT = "Install MetaMask";
const CONNECT_TEXT = "Connect";
const CONNECTED_TEXT = "Install MetaMask";

export function ConnectButton() {
  const { activateBrowserWallet, account, library, active } = useEthers();
  const [buttonText, setButtonText] = useState(ONBOARD_TEXT);
  const [isDisabled, setDisabled] = useState(false);
  const onboarding = useRef<MetaMaskOnboarding>();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (account) {
        setButtonText(CONNECTED_TEXT);
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setButtonText(CONNECT_TEXT);
        setDisabled(false);
      }
    }
  }, [account]);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      activateBrowserWallet();
    }
  }, []);

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      activateBrowserWallet();
    } else {
      onboarding.current.startOnboarding();
    }
  };
  return (
    <button disabled={isDisabled} onClick={onClick}>
      {buttonText}
    </button>
  );
}
