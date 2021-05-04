import { ChainId, Config, DAppProvider } from "@usedapp/core";
import "../styles/globals.css";

const config: Config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
