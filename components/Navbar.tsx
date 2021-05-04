import { useEthers } from "@usedapp/core";

export default function Navbar(): JSX.Element {
  const { activateBrowserWallet, account } = useEthers();
  return (
    <nav className="py-3">
      <div className="flex flex-row w-2/3 mx-auto justify-between">
        <p className="font-text">The DeFi Track</p>
        {account ? (
          <div>Connected</div>
        ) : (
          <button
            type="button"
            className="border border-gray-500 px-2 py-1 rounded-lg hover:bg-pink-100 hover:border-pink-600 hover:text-pink-600"
            onClick={activateBrowserWallet}
          >
            Connect
          </button>
        )}
      </div>
    </nav>
  );
}
