export interface Host {
    name: string;
    picture: string;
}

export interface iAssetCard {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: string;
    location: string;
    equipments: string[];
    tags: string [];
}