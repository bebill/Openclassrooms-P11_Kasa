import { AssetCardCover } from "./AssetCardCover";
import { iAssetCard } from "../interfaces/assets";

export const AssetCardList = ({ assets }: { assets: iAssetCard[] }) => {
  const listItems = [];

  for (let i = 0; i < assets.length; i++) {
    const asset = assets[i];
    listItems.push(
      <li key={asset.id}>
        <AssetCardCover assetData={asset} />
      </li>
    );
  }

  return (
    <div className="asset-card-list">
      <ul>{listItems}</ul>
    </div>
  );
};
