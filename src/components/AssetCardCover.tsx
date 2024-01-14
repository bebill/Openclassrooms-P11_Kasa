import { iAssetCard } from "../interfaces/assets";
import { Link } from "react-router-dom";

export const AssetCardCover = ({ assetData }: { assetData: iAssetCard }) => {
  return (
    <Link to={`/asset/${assetData.id}`}>
      <article className="asset-card-cover">
        <img
          className="asset-card-cover_img"
          src={assetData.cover}
          alt={assetData.title}
        />
        <h3 className="asset-card-cover_title">{assetData.title}</h3>
      </article>
    </Link>
  );
};
