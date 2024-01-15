import { useEffect } from "react";
import { iAssetCard } from "../interfaces/assets";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../assets/logements.json";
import { Collapsible } from "../components/Collapsible";
import { Rating } from "../components/Rating";
import { Gallery } from "../components/Gallery";

export const Asset = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const assetData = logements.find((a: iAssetCard) => a.id === id);

  useEffect(() => {
    if (!assetData) {
      navigate("/error404");
    }
  }, [assetData, navigate]);

  if (!assetData) {
    return null;
  }

  return (
    <main>
      <section className="asset">
        <Gallery images={assetData.pictures} />

        <div className="asset-presentation">
          <article className="asset-information-article">
            <div className="asset-title">
              <h2>{assetData.title}</h2>
              <p>{assetData.location}</p>
            </div>
            <div className="asset-tags">
              <ul>
                {assetData?.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="asset-information-aside">
            <div className="asset-host">
              <p>{assetData.host.name}</p>
              <img
                className="host_img"
                src={assetData.host.picture}
                alt={assetData.host.name}
              />
            </div>
            <div className="asset-rating">
              <Rating value={parseInt(assetData.rating)} maxValue={5} />
            </div>
          </aside>
        </div>

        <div className="asset-details">
          <Collapsible label="Description">
            <p>{assetData.description}</p>
          </Collapsible>

          <Collapsible label="Équipements">
            <ul className="asset-equipments">
              {assetData?.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapsible>
        </div>
      </section>
    </main>
  );
};
