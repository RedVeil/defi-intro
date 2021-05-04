import { PortfolioAsset } from "@/components/token/interface";
import UserHolding from "@/components/token/UserHolding";

interface UserAssetsInputs {
  assets: PortfolioAsset[];
}

export default function UserAssets({ assets }: UserAssetsInputs): JSX.Element {
  return (
    <div className="w-full bg-gray-800 rounded-lg px-6 py-4 flex-grow-0">
      <table className="min-w-max w-full flex-grow-0 divide-y divide-white">
        <thead>
          <tr className="uppercase text-sm leading-normal">
            <th
              scope="col"
              className="w-1/4 py-3 text-left font-medium uppercase tracking-wider"
            >
              Token
            </th>
            <th
              scope="col"
              className="w-1/4 py-3 text-center font-medium uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              scope="col"
              className="w-1/4 py-3 text-center font-medium uppercase tracking-wider"
            >
              Value
            </th>
            <th
              scope="col"
              className="w-1/4 py-3 text-center font-medium uppercase tracking-wider"
            >
              Allocation
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {assets
            ?.sort((asset1, asset2) => asset2.allocation - asset1.allocation)
            .map((asset) => (
              <UserHolding key={asset.address} asset={asset} />
            ))}
        </tbody>
      </table>
    </div>
  );
}
