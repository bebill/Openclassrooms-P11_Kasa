import { AssetCardList } from "../components/AssetCardList";
import { iAssetCard } from "../interfaces/assets";

export const Home = ({ assets }: { assets: iAssetCard[] }) => {
  const assetList = assets;
  return (
    <main>
      <section className="hero">
        <img
          className="hero_img"
          src={`${process.env.PUBLIC_URL}/hero_home.png`}
          alt="Entête page d'accueil"
        />
        <div className="hero_title">
        <h1 className="title">Chez vous,&nbsp;</h1>
        <h1 className="title">partout et ailleurs</h1>
        </div>
      </section>

      <section className="gallery">
        <AssetCardList assets={assetList} />
      </section>
    </main>
  );
};
