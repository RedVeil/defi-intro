import MetaMaskOnboarding from "@metamask/onboarding";
import { RampInstantSDK } from "@ramp-network/ramp-instant-sdk";
import { formatEther } from "@ethersproject/units";
import { useEtherBalance, useEthers, useTokenBalance } from "@usedapp/core";
import Navbar from "@/components/Navbar";
import Task from "@/components/Task";
import Spoiler from "@/components/Spoiler";
import { ConnectButton } from "@/components/ConnectButton";

export default function AppPage(): JSX.Element {
  const { account, activateBrowserWallet } = useEthers();
  const etherBalance = useEtherBalance(account);
  const dpiBalance = useTokenBalance(
    "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    account
  );

  if (typeof window === "undefined") {
    return <></>;
  }

  function buyCrypto(asset?: string): void {
    new RampInstantSDK({
      hostAppName: "Hiramana",
      hostLogoUrl:
        "https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png", //TODO exchange Logo
      userAddress: account,
      swapAsset: asset,
      hostApiKey: process.env.NEXT_PUBLIC_RAMP_KEY,
      variant: "desktop",
    })
      .on("*", (event) => console.log(event))
      .show();
  }

  return (
    <>
      <Navbar />
      <main className="pt-12 w-11/12 mx-auto min-h-screen lg:w-10/12 xl:w-2/3">
        <h1 className="font-suez font-black text-5xl">The DeFi Track</h1>
        <div className="mt-4 mb-16 p-4 rounded-xl bg-gradient-to-r from-purple-100 via-pink-200 to-red-200 ">
          <p>
            DeFi (Decentralized Finance) is an open and global financial system
            built for the internet age – an alternative to a system that's
            opaque, tightly controlled, and held together by decades-old
            infrastructure and processes. <br />
            It gives you control and visibility over your money. It gives you
            exposure to global markets and alternatives to your local currency
            or banking options. DeFi products open up financial services to
            anyone with an internet connection and they're largely owned and
            maintained by their users. So far tens of billions of dollars worth
            of crypto has flowed through DeFi applications and it's growing
            every day.
            <br />
            <br />
            This app will guide you to explore this new and exciting world of
            internet money and inivite you to try the numerous opportunities
            that await you in the DeFi ecosystem.
          </p>
        </div>
        <div className="w-full flex flex-row mt-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-suez ">Introduction</h2>
            <p className="">Welcome to an exciting new world...</p>
            <img src="/images/eth.png" />
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <Task
              title="Get a Wallet"
              completed={MetaMaskOnboarding.isMetaMaskInstalled()}
            >
              <>
                {MetaMaskOnboarding.isMetaMaskInstalled() ? (
                  <p>Congratulations! 🎉 You already got MetaMask installed!</p>
                ) : (
                  <p className="ml-1">
                    <ConnectButton /> to create an Ethereum account and connect
                    with this app.
                  </p>
                )}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-full"
                >
                  <Spoiler title="What is a Wallet?">
                    <p>
                      Ethereum wallets are applications that let you{" "}
                      <span className="font-bold">interact</span> with your{" "}
                      <span className="font-bold">Ethereum account</span>. Think
                      of it like an internet banking app – without the bank.{" "}
                      <br />
                      Wallets{" "}
                      <span className="font-bold">don't have custody</span> of
                      your funds, you do. They're just a tool for managing
                      what's really yours. Your wallet lets you{" "}
                      <span className="font-bold">read your balance</span>,{" "}
                      <span className="font-bold">send transactions</span> and{" "}
                      <span className="font-bold">connect to applications</span>
                      .
                    </p>
                  </Spoiler>
                  <Spoiler title="Why do I need a Wallet?">
                    <p>
                      Your wallet lets you{" "}
                      <span className="font-bold">read your balance</span>,{" "}
                      <span className="font-bold">send transactions</span> and{" "}
                      <span className="font-bold">connect to applications</span>
                      .
                    </p>
                  </Spoiler>
                  <Spoiler title="Wallet, Account, Address - Whats the difference?">
                    <ul className="list-inside list-disc">
                      <li>
                        An Ethereum account is an entity that can{" "}
                        <span className="font-bold">send transactions</span> and
                        has a <span className="font-bold">balance</span>.
                      </li>
                      <li>
                        An Ethereum account has an Ethereum{" "}
                        <span className="font-bold">address</span>, like an
                        inbox has an{" "}
                        <span className="font-bold">email address</span>. You
                        can use this to send funds to an account.
                      </li>
                      <li>
                        A <span className="font-bold">wallet</span> is a product
                        that lets you <span className="font-bold">manage</span>{" "}
                        your Ethereum account, like view your account balance,
                        send transactions, and more.
                      </li>
                    </ul>
                  </Spoiler>
                </div>
              </>
            </Task>
            <Task
              title="Connect your Wallet"
              completed={typeof account === "string"}
            >
              <>
                <span className="flex flex-row items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      activateBrowserWallet();
                    }}
                    type="button"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    Connect
                  </button>
                  <p className="ml-1">
                    your Wallet with this App to check your progress.
                  </p>
                </span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-full"
                >
                  <Spoiler title="Why?">
                    <div className="flex flex-col space-y-1">
                      <p>
                        This app needs to know your{" "}
                        <span className="font-bold">ethereum account</span> to
                        interact with some of the features on this app.
                      </p>
                      <p>
                        We use this to get{" "}
                        <span className="font-bold">
                          publicly available data
                        </span>{" "}
                        about your account from the blockchain to check which
                        tasks you have already completed.
                      </p>
                      <p className="font-bold">
                        We cannot read or store any private data or interact
                        with your account without your permission.
                      </p>
                    </div>
                  </Spoiler>
                </div>
              </>
            </Task>
            <Task
              title="Buy Ether"
              completed={etherBalance && Number(formatEther(etherBalance)) > 0}
            >
              <>
                <p className="">
                  Its time to{" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      typeof account === "string"
                        ? buyCrypto("ETH")
                        : activateBrowserWallet();
                    }}
                    type="button"
                    className="text-pink-500 hover:text-pink-600"
                  >
                    buy
                  </button>{" "}
                  your first ether (ETH).
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-full"
                >
                  <Spoiler title="What is Ether?">
                    <p>
                      Ether is the token that powers the{" "}
                      <span className="font-bold">Ethereum-network</span>.
                      Everytime someone uses the ethereum they need to a small{" "}
                      <span className="font-bold">transaction fee</span> in
                      ether. <br />
                      Therefore Ether gets more and{" "}
                      <span className="font-bold">more valuable</span> as the{" "}
                      <span className="font-bold">network grows</span> since{" "}
                      <span className="font-bold">everyone needs it</span> to
                      use the network.
                    </p>
                  </Spoiler>
                  <Spoiler title="Are there any fees?">
                    <p>
                      We do <span className="font-bold">not charge</span> you
                      any fees. There is a{" "}
                      <span className="font-bold">small fee</span> for the
                      provider and the ethereum network though.
                    </p>
                  </Spoiler>
                  <Spoiler title="Where else can I buy ether?">
                    <>
                      <p>
                        <span className="font-bold">Metamask</span> allows you
                        to buy crypto with them directly{" "}
                        <span className="font-bold">in the app</span>. Otherwise
                        there are various centralized exchanges which you can
                        use to buy your first ether.
                      </p>
                      <ul className="list-inside list-disc mt-1 mb-2">
                        <li>
                          <a
                            className="text-pink-500 hover:text-pink-600"
                            href="https://www.coinbase.com/"
                            target="_blank"
                          >
                            Coinbase
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-pink-500 hover:text-pink-600"
                            href="https://www.binance.com/"
                            target="_blank"
                          >
                            Binance
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-pink-500 hover:text-pink-600"
                            href="https://global.bittrex.com/"
                            target="_blank"
                          >
                            Bittrex
                          </a>
                        </li>
                      </ul>
                    </>
                  </Spoiler>
                </div>
              </>
            </Task>
            <Task title="More Ressources" completed={false} isRessource>
              <>
                <p>Do you wanna learn more about Ethereum?</p>
                <p>Here is a list of ressources:</p>
                <ul className="list-inside list-disc mt-1 mb-2">
                  <li>
                    <a
                      href="https://ethereum.org/en#explore"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Ethereum
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ethereum.org/en/wallets/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Wallets
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ethereum.org/en/defi/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      DeFi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=AJvzNICwcwc"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Transaction Fees and Gas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://etherscan.io/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Explore the Ethereum Blockchain
                    </a>
                  </li>
                </ul>
              </>
            </Task>
          </div>
        </div>
        <div className="w-full flex flex-row mt-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-suez ">Defi Basics</h2>
            <p>With great power comes great responsibility...</p>
            <img src="/images/doge-computer.png" />
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <div className="p-3 rounded-lg border-2 border-gray-700">
              <h3 className="font-bold">
                <span className="font-black text-red-500">ATTENTION:</span> Make
                sure to always take the transaction cost (Gas) into account when
                trading or interacting with a contract.
              </h3>
            </div>
            <Task
              title="Buy the DeFi-Index"
              completed={dpiBalance && Number(formatEther(dpiBalance)) > 0}
            >
              <>
                <div className="flex flex-col space-y-1">
                  <p>
                    Its difficult (not to say impossible) and expensive to
                    always buy the perfect coin in the perfect moment. But if
                    you believe in the market as a whole you can buy simply an
                    Index which tracks a variety of tokens at the same time.
                  </p>
                  <p className="">
                    <a
                      href="https://cowswap.exchange/#/swap?outputCurrency=0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Swap
                    </a>{" "}
                    Ether for DeFi-index token.
                  </p>
                  <p>
                    This will be your first swap on the ethereum network! 🥳
                  </p>
                </div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-full"
                >
                  <Spoiler title="Whats the advantage of an Index?">
                    <p>
                      Instead of hand-selecting token you profit from a variety
                      of tokens at once. If a{" "}
                      <span className="font-bold">single token</span> in the
                      index is{" "}
                      <span className="font-bold">performing poorly</span>,
                      there's a good chance that{" "}
                      <span className="font-bold">another</span> is{" "}
                      <span className="font-bold">performing well</span>, which
                      helps{" "}
                      <span className="font-bold">minimize your losses</span>{" "}
                      while{" "}
                      <span className="font-bold">profiting from all</span> of
                      them.
                    </p>
                  </Spoiler>
                  <Spoiler title="Why should I buy an Index?">
                    <>
                      <p>You should buy an Index if you...</p>
                      <ul className="list-inside list-disc mt-1 mb-2">
                        <li>
                          ...believe in the{" "}
                          <span className="font-bold">market as a whole</span>{" "}
                          but dont want to handpick token.
                        </li>
                        <li>...dont know which tokens exactly to buy.</li>
                        <li>
                          ...dont want to spend hours obsessing about tokens and
                          prize movements but simply{" "}
                          <span className="font-bold">
                            generate wealth passively
                          </span>
                          .
                        </li>
                      </ul>
                      <p>
                        You shouldnt buy an Index if you believe that you can
                        outperform the broad crypto market by handpicking token
                        or if you simply like the thrill of choosing and trading
                        token.
                      </p>
                    </>
                  </Spoiler>
                  <Spoiler title="What is this Index tracking?">
                    <p>
                      This index is tracking the biggest token in the DeFi
                      space. With this index token you get exposure to{" "}
                      <span className="font-bold">
                        14 different token at once
                      </span>
                      .{" "}
                      <a
                        href="https://www.indexcoop.com/dpi"
                        target="_blank"
                        className="text-pink-500 hover:text-pink-600"
                      >
                        Read more
                      </a>
                    </p>
                  </Spoiler>
                  <Spoiler title="What is a swap?">
                    <p>
                      In a Swap you simply swap your token against the token
                      that you want. Its a bit like trading different cards or
                      sticker in school.
                    </p>
                  </Spoiler>
                  <Spoiler title="Why do I need to wrap my Ether?">
                    <p>
                      Wrapped Ether is an Ether that functions exactly like
                      normal Ether but is{" "}
                      <span className="font-bold">more efficient</span> in terms
                      of <span className="font-bold">transaction fees</span>.
                      <br />
                      <br />
                      <span className="font-bold">
                        Wrapped Ether has the same price as normal Ether and can
                        always be traded back to Ether for the exact same price.
                      </span>
                    </p>
                  </Spoiler>
                </div>
              </>
            </Task>
            <Task title="More Ressources" completed={false} isRessource>
              <>
                <p>Do you wanna learn more about DeFi?</p>
                <p>Here is a list of ressources:</p>
                <ul className="list-inside list-disc mt-1 mb-2">
                  <li>
                    <a
                      href="https://www.coingecko.com/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Find Tokens, their price and Market Capitalization
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cowswap.exchange/#/swap"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      CowSwap - Swap Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://matcha.xyz/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Matcha - Swap Token
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://yearn.finance/vaults/"
                      target="_blank"
                      className="text-pink-500 hover:text-pink-600"
                    >
                      Yearn - Invest your Token
                    </a>
                  </li>
                </ul>
              </>
            </Task>
            <Task title="Use a Yearn Vault" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Supply Token" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Stake Ether" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Provide Liquidity" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
          </div>
        </div>
        <div className="w-full flex flex-row mt-8">
          <div className="w-1/2">
            <h2 className="text-3xl font-suez ">Multichains</h2>
            <p>Its a wonderful World out there...</p>
            <img src="/images/what-is-ethereum.png" />
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <Task title="Visit BSC" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Check out Solana" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Bridge to L2" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task
              title="More Ressources"
              completed={false}
              isRessource
              comingSoon
            >
              <p>Do you wanna learn more?</p>
            </Task>
          </div>
        </div>
        <div className="w-full flex flex-row mt-8">
          <div className="w-1/2 flex flex-row">
            <div>
              <h2 className="text-3xl font-suez ">Advanced Defi</h2>
              <p>Its just the beginning...</p>
            </div>
            <img src="/images/wallet-cropped.png" />
          </div>
          <div className="w-1/2 flex flex-col space-y-4">
            <Task title="Get a Loan" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Build a Combo Strategy" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task title="Flashmint/Flashloan" completed={false} comingSoon>
              <p>Hello</p>
            </Task>
            <Task
              title="More Ressources"
              completed={false}
              isRessource
              comingSoon
            >
              <p>Do you wanna learn more?</p>
            </Task>
          </div>
        </div>
      </main>
    </>
  );
}
